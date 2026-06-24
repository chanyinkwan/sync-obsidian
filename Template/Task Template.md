---
title:
status: todo            # configure in TaskNotes: todo / doing / blocked / done (done = completed)
priority: med           # high / med / low
due:                    # YYYY-MM-DD  (deadline)
scheduled:              # YYYY-MM-DD  (day you intend to work it)
projects:               # ["[[Project name]]"]  list; leave blank if standalone
timeEstimate:           # minutes (optional, feeds Pomodoro)
assigned_by:            # "[[Contact]]"  (custom field)
source:                 # "[[Meeting note]]"  (custom field)
tags: []                # leave empty here; TaskNotes adds the "task" tag when you create a real task
---
# {Task title}

## Deliverable (what "done" looks like)
- 

## Materials
- 

## Sub-steps
- [ ] 

## Working notes / draft


---
<!-- USAGE
- Managed by the TaskNotes plugin. Create / edit via the TaskNotes UI (command palette), not by hand-editing YAML.
- projects is a list: set ["[[Project]]"] to link it; leave blank for a standalone task.
- due = hard deadline; scheduled = the day you plan to actually do it.
- View tasks in TaskNotes: Task List / Kanban / Calendar / Agenda.
- This template carries no "task" tag so it is NOT indexed as a task. For extra safety, exclude the Template/ folder in TaskNotes settings.
-->
