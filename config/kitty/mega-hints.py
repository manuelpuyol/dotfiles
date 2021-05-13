# -*- coding: UTF-8 -*-

import re
import os
import subprocess
import time
import sys

def shell(command):
    return subprocess.run(command.split(' '), stdout=subprocess.PIPE).stdout.decode('utf-8').rstrip()

def camel_to_snake(string):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', string)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

def mark(text, args, Mark, extra_cli_args, *a):
    # This function is responsible for finding all
    # matching text.
    # We mark all individual word for potential selection

    path_prefix = os.getcwd()

    regexp = re.compile(
            '(?P<rails_log_controller>(?:[A-Z]\\w*::)*[A-Z]\\w*Controller#\\w+)|'
            'Render(?:ed|ing) (?P<rails_log_partial>[-a-zA-Z0-9_+-,./]+)|'
            '(?P<url>(https?|tcp)://[-a-zA-Z0-9@:%._\+~#=]{2,256}\\b([-a-zA-Z0-9@:%_\\+.~#?&/=]*))|'
            '\\+\\+\\+ b/?(?P<diff_path>([~./]?[-a-zA-Z0-9_+-,./]+(?::\\d+)?))|'
            '(?P<path>([~./]?[-a-zA-Z0-9_+-,./]+(?::\\d+)?))'
            )

    mark_idx = 0
    for idx, m in enumerate(re.finditer(regexp, text)):
        start, end = m.span()
        mark_text = text[start:end].replace('\n', '').replace('\0', '')

        path_match = m.groupdict()['path']
        diff_path_match = m.groupdict()['diff_path']

        mark_data = {}

        if path_match or diff_path_match:
            if diff_path_match:
                start, end = m.span('diff_path')
                mark_text = text[start:end].replace('\n', '').replace('\0', '')

            parts = mark_text.rsplit(':', 1)
            file_path = parts[0]

            if file_path != '.' and file_path != '..' and file_path != '/':
                file_path = os.path.join(path_prefix, file_path)
                if os.path.exists(file_path):
                    mark_data = {'file_path': file_path}
                    if len(parts) > 1: mark_data['line_number'] = parts[1]

        # mark_data will be available in data['groupdicts']
        if mark_data:
            yield Mark(mark_idx, start, end, mark_text, mark_data)
            mark_idx += 1

def handle_result(args, data, target_window_id, boss, extra_cli_args, *a):
    # This function is responsible for performing some
    # action on the selected text.
    # matches is a list of the selected entries and groupdicts contains
    # the arbitrary data associated with each entry in mark() above
    matches, groupdicts = [], []
    for m, g in zip(data['match'], data['groupdicts']):
        if m:
            matches.append(m), groupdicts.append(g)

    for word, data in zip(matches, groupdicts):
        sys.stdout.write("Hello")
        file_url = data['file_path']

        if 'line_number' in data:
            file_url += ':%d' %(data['line_number'])

        w = boss.window_id_map.get(target_window_id)
        w.paste_bytes("code -g " + file_url + '\r')
