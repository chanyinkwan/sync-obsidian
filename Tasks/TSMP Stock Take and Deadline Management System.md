---
status: done
priority: high
scheduled: 2026-07-06
dateCreated: 2026-07-06T11:04:13.540+01:00
dateModified: 2026-07-09T16:53:48.621+01:00
tags:
  - task
projects:
  - "[[Sample Management Ops]]"
timeEntries:
  - startTime: 2026-07-09T08:43:44.746Z
    description: Work session
    endTime: 2026-07-09T09:08:45.000Z
completedDate: 2026-07-09
---

Source links:
- [[TSMP Stock Take and Deadline Management System]]

- Pain points to solve:
1. How to ensure the deadline are accurately managed without actively reviewing the excel


how they deliver request right now

when I am here verbal, when i am not here sent a welink message

what is the problem of this  current flow of putting request
-> rely on me manually record the current stage


9/7/2026 Set Up VBA Script to automate Deadline Checking

VBA Script
'''
' 建立 Excel 物件
Dim xlApp, xlBook
Set xlApp = CreateObject("Excel.Application")

' 關鍵設定：讓 Excel 在背景隱形運作（不顯示視窗）
xlApp.Visible = False
xlApp.DisplayAlerts = False

' 【請修改此處】：請把下方路徑換成你該 .xlsm 檔案在共享碟或電腦中的真實完整路徑
Set xlBook = xlApp.Workbooks.Open("C:\Your\Folder\Path\Your_Excel_File.xlsm")

' 執行我們在 Excel 裡寫好的發信巨集名字
xlApp.Run "SendSmartReminders"

' 執行完畢，儲存並關閉 Excel 檔案
xlBook.Close True
xlApp.Quit

' 釋放記憶體空間
Set xlBook = Nothing
Set xlApp = Nothing
'''

-> lack of record in In and Out
this pain point is still under investigation
