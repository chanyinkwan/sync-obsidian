(function () {
  "use strict";

  window.STAKEHOLDERS = [
    {
      id: "fok", name: "Canning Fok", title: "CK Hutchison 集团副主席", tier: "集团锚点", initials: "CF", anchorOnly: true,
      responsibility: "客户组织图最顶层，作为决策链汇报终点。", reportsTo: "—", meetingStyle: "暂未建立直接接触", attitude: "未知",
      recentMeetings: [], tenure: "未知", birthday: "未知", maritalStatus: "未知", family: "未知", foodPreferences: [], interests: [],
      huaweiContact: "未知", keyConcerns: "未知", career: [], lastVerified: "2026-08-03"
    },
    {
      id: "dennis", name: "Dennis Lui", title: "Executive Deputy Chairman and Executive Director", tier: "决策层", initials: "DL",
      photo: "Data/Dennis Lui.jpg", responsibility: "和电香港执行副主席，掌管亚洲及集团电讯业务。", reportsTo: "Frank Sixt、Canning Fok",
      meetingStyle: "定期会面", attitude: "支持",
      recentMeetings: ["2025 年 9 月｜香港与胡总会谈", "2025 年 6 月｜公司考察，与胡总及汪总会谈", "2025 年 3 月｜MWC 与陈浩及何刚会谈"],
      tenure: "1986 年加入，约 40 年", birthday: "1951 年 3 月；75 岁", maritalStatus: "已婚", family: "一子（详情待确认）",
      foodPreferences: ["偏好中菜"], interests: [], huaweiContact: "何刚主维系；曾黎／荣涛负责内部审核上报",
      keyConcerns: "香港手机表现、Aurora Store、手机回归欧洲及 AI", career: ["未提供履历"], lastVerified: "2026-08-03"
    },
    {
      id: "joe", name: "Joe Parker", title: "Chief Executive Officer, CKH IOD", tier: "决策层", initials: "JP", photo: "Data/Joe Parker.jpg",
      responsibility: "CKH IOD 行政总裁，主管企业服务、IoT、MVNO 及数据创新。", reportsTo: "未提供", meetingStyle: "未提供", attitude: "未知",
      recentMeetings: [], tenure: "长期任职和记体系；至少 2020 年起任 IOD 行政总裁", birthday: "未知", maritalStatus: "已婚", family: "一女",
      foodPreferences: [], interests: [], huaweiContact: "未知", keyConcerns: "公有云核心网、MVNO／IoT、AI 及营运效率",
      career: ["2019–今 CKH IOD｜领导创新发展", "2019–今 CKH IOD｜批发商务管理", "2017–今 WindTre｜推进合并整合", "2015–2016 Three｜并购整合规划", "2012–2014 Three｜领导线上业务", "2010–2011 H3G｜商务财务管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "francesco", name: "Francesco Zampini", title: "Director of Devices and Digital Products & Services, CKH IOD", tier: "决策层", initials: "FZ",
      photo: "Data/Fancesco Zampini.jpg", responsibility: "全球数码消费产品及服务总监，主导供应商选型。",
      reportsTo: "终端业务向 Dennis 汇报；部分 IOD 工作向 Joe 汇报", meetingStyle: "透过 Valentina 预约正式会议", attitude: "中立",
      recentMeetings: ["2025 年 11 月｜携欧洲子网行政总裁访问深圳总部", "2025 年 10 月｜携集团高层访问深圳总部", "2025 年 9 月｜巴黎发布会与荣涛总交流"],
      tenure: "2017 年 7 月加入，约 9 年", birthday: "10 月 15 日", maritalStatus: "已婚", family: "没有子女", foodPreferences: ["偏好日本菜"],
      interests: ["足球", "网球", "红酒"], huaweiContact: "程哥（Ding Cheng）", keyConcerns: "定价、ranging、DDR4 供应及合规",
      career: ["2020–今 CKH IOD｜统筹终端数码服务", "2019–2020 CKH IOD｜开发消费数码服务", "2017–2020 HW Europe｜领导集团数码服务", "2008–2017 Accenture｜高阶顾问管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "agostino", name: "Agostino Ruberto", title: "Global Technical Director, CKH IOD", tier: "影响层", initials: "AR",
      photo: "Data/Agostino Ruberto.jpg", responsibility: "全球技术总监，负责测试、晶片协作及新技术落地。", reportsTo: "Francesco Zampini",
      meetingStyle: "未提供", attitude: "支持", recentMeetings: [], tenure: "2001 年加入 H3G，约 25 年", birthday: "未知", maritalStatus: "已婚",
      family: "一子一女", foodPreferences: [], interests: [], huaweiContact: "未知", keyConcerns: "测试结果、产品规格及新技术落地",
      career: ["2017–今 CKH IOD｜集团科技转型治理", "2008–2017 HWL｜数码创新平台交付", "2001–2008 H3G｜工程缺陷管理", "1996–2001 Ericsson｜无线接入工程"],
      lastVerified: "2026-08-03"
    },
    {
      id: "marlene", name: "Marlene Fantini", title: "Head of Devices and Hardware Portfolio, CKH IOD", tier: "影响层", initials: "MF",
      photo: "Data/Marlene Fantini.png", responsibility: "终端及硬件组合主管，负责终端选型执行。", reportsTo: "Francesco Zampini",
      meetingStyle: "未提供", attitude: "支持",
      recentMeetings: ["2025 年 10 月｜访问深圳总部", "2025 年 9 月｜巴黎发布会与荣涛总交流", "2025 年 6 月｜与曾黎总交流，确认恢复 XG 项目合作"],
      tenure: "2001 年加入意大利和记；2018 年转入 IOD", birthday: "1 月 19 日", maritalStatus: "单身", family: "没有子女",
      foodPreferences: ["偏好日本菜"], interests: ["滑雪", "水肺潜水", "喜爱猫", "红酒"], huaweiContact: "程哥（Ding Cheng）",
      keyConcerns: "定价、量能承诺及终端 portfolio",
      career: ["2018–今 CKH IOD｜统筹终端硬件组合", "2017–2018 Wind Tre｜领导终端业务", "2010–2017 H3G｜领导终端团队", "2006–2011 H3G｜供应商商务管理", "2005–2007 H3G｜商务配件管理", "2001–2004 H3G｜流程服务专案管理", "2001 Infostrada｜行业策略分析", "1999–2000 Techcom｜电讯技术培训"],
      lastVerified: "2026-08-03"
    },
    {
      id: "manjit", name: "Manjit Dhanjal", title: "Senior Vendor Manager – Handsets and Accessories, CKH IOD", tier: "影响层", initials: "MD",
      photo: "Data/Manjit Dhanjal.jpg", responsibility: "资深供应商经理，负责手机及配件。", reportsTo: "Marlene Fantini",
      meetingStyle: "非正式会面", attitude: "支持", recentMeetings: ["MWC｜会面（日期待确认）", "非正式会面（日期待确认）"],
      tenure: "未提供", birthday: "1972 年 7 月 23 日", maritalStatus: "已婚；夫妇均为英国出生印度裔",
      family: "两子（2013／2017）；长子有多种食物过敏", foodPreferences: ["不吃牛肉"], interests: ["足球", "板球"],
      huaweiContact: "Selina", keyConcerns: "手机、配件及 B2C 非 FWA 品类",
      career: ["2018–今 CKH IOD｜供应商管理", "2008–今 HWL｜全球手机供应商管理", "2007–2008 H3G｜游戏内容交付", "2004–2007 H3G｜游戏产品开发", "2003–2004 H3G｜电邮产品管理", "2001–2003 H3G｜同步产品管理", "2000–2001 Euro RSCG｜技术专案管理", "1999–2000 Psion｜产品软件管理"],
      lastVerified: "2026-08-03"
    },
    {
      id: "valentina", name: "Valentina", title: "Executive Senior Project Assistant to CEO and Digital Products & Services Director, CKH IOD", tier: "协作层", initials: "VA",
      responsibility: "Francesco 的秘书。", reportsTo: "Francesco Zampini", meetingStyle: "会议预约与日程协调窗口", attitude: "支持",
      recentMeetings: ["MWC｜会面（日期待确认）", "非正式会面（日期待确认）"], tenure: "未提供", birthday: "1985 年 10 月 12 日",
      maritalStatus: "单身；与男友同住", family: "没有子女；男友有一女", foodPreferences: ["偏好日本菜"], interests: [],
      huaweiContact: "未知", keyConcerns: "未提供", career: ["未提供履历"], lastVerified: "2026-08-03"
    },
    {
      id: "mark", name: "Mark Williams", title: "Senior Vendor Manager – Mobile Broadband and Home Broadband, CKH IOD", tier: "影响层", initials: "MW",
      photo: "Data/Mark Williams.jpg", responsibility: "资深供应商经理，负责 MBB／Home Broadband。", reportsTo: "Marlene Fantini",
      meetingStyle: "偏好高效沟通", attitude: "中立", recentMeetings: [], tenure: "未提供", birthday: "11 月 30 日；约 50 岁",
      maritalStatus: "已婚", family: "妻子为教师；两子（1999／2002）", foodPreferences: ["不吃菠萝"], interests: ["足球", "Liverpool 支持者"],
      huaweiContact: "Selina", keyConcerns: "MBB、Home Broadband 及 FWA",
      career: ["2022–今 CKH IOD｜全球供应商合作", "2021 Virgin Media O2｜领导终端供应", "2020–2021 Virgin Media｜统筹终端供应", "2019–2020 Three｜硬件及供应商管理", "2017–2019 Three｜供应商策略合作", "2014–2017 Three｜产品组合及商务", "2011–2014 Three｜流动宽频产品管理", "2008–2011 Three｜供应链品类管理", "2005–2007 Three｜SIM 供应链管理", "2002–2004 Three｜帐务管理", "1999–2002 NTL｜帐务系统管理"],
      lastVerified: "2026-08-03"
    }
  ];
})();
