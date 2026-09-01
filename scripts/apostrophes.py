"""One-off: normalise straight apostrophes to typographic ones in site copy.

Only touches app/, components/ and data/. A JS single-quote delimiter never
sits between two letters, and the single-quoted literal in app/layout.js is
guarded explicitly.
"""
import io
import os
import re

ROOTS = ("app", "components", "data")
pat_mid = re.compile(r"([A-Za-z])'([A-Za-z])")
pat_end = re.compile(r"([A-Za-z])'(\s)")
GUARD_FROM = "classList.add('js')"
GUARD_TO = "@@GUARD@@"

targets = []
for root in ROOTS:
    for dirpath, _dirnames, filenames in os.walk(root):
        for name in filenames:
            if name.endswith(".js"):
                targets.append(os.path.join(dirpath, name))

changed = []
for path in targets:
    original = io.open(path, encoding="utf-8").read()
    work = original.replace(GUARD_FROM, GUARD_TO)
    work = pat_mid.sub(lambda m: m.group(1) + "’" + m.group(2), work)
    work = pat_end.sub(lambda m: m.group(1) + "’" + m.group(2), work)
    work = work.replace(GUARD_TO, GUARD_FROM)
    if work != original:
        io.open(path, "w", encoding="utf-8").write(work)
        changed.append(path)

print(len(changed), "files updated")
for c in changed:
    print("  ", c)
