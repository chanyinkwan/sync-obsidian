---
status: todo
priority: mid
tags:
  - task
projects:
  - "[[Amazon take over]]"
contexts:
  - competitor
scheduled: 2026-09-01
recurrence: FREQ=MONTHLY;BYMONTHDAY=1
dateCreated: 2026-08-06T12:00:00.000+01:00
---
# 上月競品數據整理 + competitor list 交 traffic manager

Source: [[Amazon Operations Glossary]] §8 固定節奏(每月月初),§5 市場與競品分析

## Rule
沒有變化就不用交。有變化只告訴 traffic manager 新增或減少了哪個產品。

## Method (Ziyi's flow)
1. SellerSprite 匯出上月各國 BSR 前 100
2. VLOOKUP 對回既有檔位對應表,補新型號
3. 篩出目標檔位在售清單,排除二手
4. 交 traffic manager
