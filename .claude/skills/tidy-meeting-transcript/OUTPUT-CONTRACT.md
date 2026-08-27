# Output contract

## Frontmatter

Use the meeting date from the filename. Required: `type: meeting-transcript`, ISO `date`, `account_or_project`, `host`, `attendees`, `absent`, and tags containing `meeting` plus `meeting-transcript`.

Preserve any existing `projects:` wikilinks exactly as written; they are user-assigned routing, never inferred or edited. If the source carries `status: untidied`, write `status: tidied` and drop the `untidied` tag so the note leaves the Home inbox; leave all other user-supplied fields untouched.

Only High-confidence identities use resolving `[[wikilinks]]`. For unresolved metadata use quoted raw values such as `host: "_TBD (Speaker 2)"` or `- "Speaker 2 (unidentified)"`; never mint a link or leak a candidate name to satisfy metadata.

## Body order

1. `# <Meeting name>` and plain bold metadata lines.
2. `> Context:` — one sourced line.
3. `## This week — action items by person` — traceable actions grouped by owner.
4. `## Cleaned transcript` — `**[[Speaker]]** · timestamp`, then speech; risky identities use raw labels.
5. Conditional `## Download Meeting Summary`.
6. `## Open questions` — only consequential unresolved items with raw evidence and confidence; write `None` when empty.

Wikilink mentioned people in the frame only when the referent is High confidence; do not alter reconstructed speech to add links.

## Download summary gate

Only recurring Download/Team Sync meetings receive the English Section-3 format from the 5T glossary. Treat every existing summary as user-authored and preserve it byte-for-byte unless replacement was explicit. If comparison is requested, keep it and add a separately labelled AI reconciliation.

## Validation before replacement

- SHA-256 of persistent raw backup equals the source's pre-edit SHA-256.
- Every source timestamp/turn is represented and traceable.
- No invented claim, cause, owner, attendee, or action.
- Every committed person link resolves; unresolved metadata uses raw/TBD values.
- No medium/low-confidence candidate name appears in paste-ready sections.
- Summary type/preservation and glossary-delta gates pass.
