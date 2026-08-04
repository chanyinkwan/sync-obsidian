(function () {
  "use strict";

  window.STAKEHOLDERS = [
    {
      id: "fok", name: "Canning Fok", title: "CK Hutchison 集團副主席", tier: "集團錨點", initials: "CF", anchorOnly: true,
      responsibility: "客戶組織圖最頂層，作為決策鏈匯報終點。", reportsTo: "—", meetingStyle: "暫未建立直接接觸", attitude: "未知",
      recentMeetings: [], tenure: "未知", birthday: "未知", maritalStatus: "未知", family: "未知", foodPreferences: [], interests: [],
      huaweiContact: "未知", keyConcerns: "未知", career: [], lastVerified: "2026-08-03"
    },
    {
      id: "dennis", name: "Dennis Lui", title: "Executive Deputy Chairman and Executive Director", tier: "決策層", initials: "DL",
      photo: "Data/Dennis Lui.jpg", responsibility: "和電香港執行副主席，掌管亞洲及集團電訊業務。", reportsTo: "Frank Sixt、Canning Fok",
      meetingStyle: "定期會面", attitude: "支持",
      recentMeetings: ["2025 年 9 月｜香港與胡總會談", "2025 年 6 月｜公司考察，與胡總及汪總會談", "2025 年 3 月｜MWC 與陳浩及何剛會談"],
      tenure: "1986 年加入，約 40 年", birthday: "1951 年 3 月；75 歲", maritalStatus: "已婚", family: "一子（詳情待確認）",
      foodPreferences: ["偏好中菜"], interests: [], huaweiContact: "何剛主維繫；曾黎／榮濤負責內部審核上報",
      keyConcerns: "香港手機表現、Aurora Store、手機回歸歐洲及 AI", career: ["未提供履歷"], lastVerified: "2026-08-03"
    },
    {
      id: "joe", name: "Joe Parker", title: "Chief Executive Officer, CKH IOD", tier: "決策層", initials: "JP", photo: "Data/Joe Parker.jpg",
      responsibility: "CKH IOD 行政總裁，主管企業服務、IoT、MVNO 及數據創新。", reportsTo: "未提供", meetingStyle: "未提供", attitude: "未知",
      recentMeetings: [], tenure: "長期任職和記體系；至少 2020 年起任 IOD 行政總裁", birthday: "未知", maritalStatus: "已婚", family: "一女",
      foodPreferences: [], interests: [], huaweiContact: "未知", keyConcerns: "公有雲核心網、MVNO／IoT、AI 及營運效率",
      career: ["2019–今 CKH IOD｜領導創新發展", "2019–今 CKH IOD｜批發商務管理", "2017–今 WindTre｜推進合併整合", "2015–2016 Three｜併購整合規劃", "2012–2014 Three｜領導線上業務", "2010–2011 H3G｜商務財務管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "francesco", name: "Francesco Zampini", title: "Director of Devices and Digital Products & Services, CKH IOD", tier: "決策層", initials: "FZ",
      photo: "Data/Fancesco Zampini.jpg", responsibility: "全球數碼消費產品及服務總監，主導供應商選型。",
      reportsTo: "終端業務向 Dennis 匯報；部分 IOD 工作向 Joe 匯報", meetingStyle: "透過 Valentina 預約正式會議", attitude: "中立",
      recentMeetings: ["2025 年 11 月｜攜歐洲子網行政總裁訪問深圳總部", "2025 年 10 月｜攜集團高層訪問深圳總部", "2025 年 9 月｜巴黎發布會與榮濤總交流"],
      tenure: "2017 年 7 月加入，約 9 年", birthday: "10 月 15 日", maritalStatus: "已婚", family: "沒有子女", foodPreferences: ["偏好日本菜"],
      interests: ["足球", "網球", "紅酒"], huaweiContact: "程哥（Ding Cheng）", keyConcerns: "定價、ranging、DDR4 供應及合規",
      career: ["2020–今 CKH IOD｜統籌終端數碼服務", "2019–2020 CKH IOD｜開發消費數碼服務", "2017–2020 HW Europe｜領導集團數碼服務", "2008–2017 Accenture｜高階顧問管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "agostino", name: "Agostino Ruberto", title: "Global Technical Director, CKH IOD", tier: "影響層", initials: "AR",
      photo: "Data/Agostino Ruberto.jpg", responsibility: "全球技術總監，負責測試、晶片協作及新技術落地。", reportsTo: "Francesco Zampini",
      meetingStyle: "未提供", attitude: "支持", recentMeetings: [], tenure: "2001 年加入 H3G，約 25 年", birthday: "未知", maritalStatus: "已婚",
      family: "一子一女", foodPreferences: [], interests: [], huaweiContact: "未知", keyConcerns: "測試結果、產品規格及新技術落地",
      career: ["2017–今 CKH IOD｜集團科技轉型治理", "2008–2017 HWL｜數碼創新平台交付", "2001–2008 H3G｜工程缺陷管理", "1996–2001 Ericsson｜無線接入工程"],
      lastVerified: "2026-08-03"
    },
    {
      id: "marlene", name: "Marlene Fantini", title: "Head of Devices and Hardware Portfolio, CKH IOD", tier: "影響層", initials: "MF",
      photo: "Data/Marlene Fantini.png", responsibility: "終端及硬件組合主管，負責終端選型執行。", reportsTo: "Francesco Zampini",
      meetingStyle: "未提供", attitude: "支持",
      recentMeetings: ["2025 年 10 月｜訪問深圳總部", "2025 年 9 月｜巴黎發布會與榮濤總交流", "2025 年 6 月｜與曾黎總交流，確認恢復 XG 項目合作"],
      tenure: "2001 年加入意大利和記；2018 年轉入 IOD", birthday: "1 月 19 日", maritalStatus: "單身", family: "沒有子女",
      foodPreferences: ["偏好日本菜"], interests: ["滑雪", "水肺潛水", "喜愛貓", "紅酒"], huaweiContact: "程哥（Ding Cheng）",
      keyConcerns: "定價、量能承諾及終端 portfolio",
      career: ["2018–今 CKH IOD｜統籌終端硬件組合", "2017–2018 Wind Tre｜領導終端業務", "2010–2017 H3G｜領導終端團隊", "2006–2011 H3G｜供應商商務管理", "2005–2007 H3G｜商務配件管理", "2001–2004 H3G｜流程服務專案管理", "2001 Infostrada｜行業策略分析", "1999–2000 Techcom｜電訊技術培訓"],
      lastVerified: "2026-08-03"
    },
    {
      id: "manjit", name: "Manjit Dhanjal", title: "Senior Vendor Manager – Handsets and Accessories, CKH IOD", tier: "影響層", initials: "MD",
      photo: "Data/Manjit Dhanjal.jpg", responsibility: "資深供應商經理，負責手機及配件。", reportsTo: "Marlene Fantini",
      meetingStyle: "非正式會面", attitude: "支持", recentMeetings: ["MWC｜會面（日期待確認）", "非正式會面（日期待確認）"],
      tenure: "未提供", birthday: "1972 年 7 月 23 日", maritalStatus: "已婚；夫婦均為英國出生印度裔",
      family: "兩子（2013／2017）；長子有多種食物過敏", foodPreferences: ["不吃牛肉"], interests: ["足球", "板球"],
      huaweiContact: "Selina", keyConcerns: "手機、配件及 B2C 非 FWA 品類",
      career: ["2018–今 CKH IOD｜供應商管理", "2008–今 HWL｜全球手機供應商管理", "2007–2008 H3G｜遊戲內容交付", "2004–2007 H3G｜遊戲產品開發", "2003–2004 H3G｜電郵產品管理", "2001–2003 H3G｜同步產品管理", "2000–2001 Euro RSCG｜技術專案管理", "1999–2000 Psion｜產品軟件管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "valentina", name: "Valentina", title: "Executive Senior Project Assistant to CEO and Digital Products & Services Director, CKH IOD", tier: "協作層", initials: "VA",
      responsibility: "Francesco 的秘書。", reportsTo: "Francesco Zampini", meetingStyle: "會議預約與日程協調窗口", attitude: "支持",
      recentMeetings: ["MWC｜會面（日期待確認）", "非正式會面（日期待確認）"], tenure: "未提供", birthday: "1985 年 10 月 12 日",
      maritalStatus: "單身；與男友同住", family: "沒有子女；男友有一女", foodPreferences: ["偏好日本菜"], interests: [],
      huaweiContact: "未知", keyConcerns: "未提供", career: ["未提供履歷"], lastVerified: "2026-08-03"
    },
    {
      id: "mark", name: "Mark Williams", title: "Senior Vendor Manager – Mobile Broadband and Home Broadband, CKH IOD", tier: "影響層", initials: "MW",
      photo: "Data/Mark Williams.jpg", responsibility: "資深供應商經理，負責 MBB／Home Broadband。", reportsTo: "Marlene Fantini",
      meetingStyle: "偏好高效溝通", attitude: "中立", recentMeetings: [], tenure: "未提供", birthday: "11 月 30 日；約 50 歲",
      maritalStatus: "已婚", family: "妻子為教師；兩子（1999／2002）", foodPreferences: ["不吃菠蘿"], interests: ["足球", "Liverpool 支持者"],
      huaweiContact: "Selina", keyConcerns: "MBB、Home Broadband 及 FWA",
      career: ["2022–今 CKH IOD｜全球供應商合作", "2021 Virgin Media O2｜領導終端供應", "2020–2021 Virgin Media｜統籌終端供應", "2019–2020 Three｜硬件及供應商管理", "2017–2019 Three｜供應商策略合作", "2014–2017 Three｜產品組合及商務", "2011–2014 Three｜流動寬頻產品管理", "2008–2011 Three｜供應鏈品類管理", "2005–2007 Three｜SIM 供應鏈管理", "2002–2004 Three｜帳務管理", "1999–2002 NTL｜帳務系統管理"],
      lastVerified: "2026-08-03"
    }
  ];
})();
