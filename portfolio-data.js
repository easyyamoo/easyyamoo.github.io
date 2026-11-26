// ============================================================================
// YANG YUHENG · PORTFOLIO DATA (2026)
// 严格仅保留作品集（Yuheng-Yang-Portfolio.pdf & 鳌鱼作品集专章）收录内容
// ============================================================================

const PORTFOLIO_DATA = {
  meta: {
    nameZh: "杨于衡",
    nameEn: "Yang Yuheng",
    disciplines: "STAGE DESIGN · RESEARCH · SCULPTURE",
    disciplinesZh: "舞台设计 · 学术研究 · 雕塑与装置",
    city: "Guangzhou",
    year: "2026",
    portfolioPdf: "assets/Yuheng-Yang-Portfolio.pdf",
    aoyuPdf: "assets/Aoyu-Design-Iterations-2026.pdf"
  },

  // Page 02: 个人信息 Personal information
  personalInfo: [
    {
      labelZh: "工作室",
      labelEn: "PRACTICE",
      contentZh: "秦立运工作室舞美设计助理，参与十余部剧目设计及制作。",
      contentEn: "Qinliyun's Studio stage design assistant"
    },
    {
      labelZh: "硕士",
      labelEn: "MA",
      contentZh: "星海音乐学院艺术管理专业，师从谢大京教授、曹仕锋教授。",
      contentEn: "Xinghai Conservatory of Music · Art Management"
    },
    {
      labelZh: "本科",
      labelEn: "BA",
      contentZh: "西安美术学院雕塑系，获优秀毕业生。",
      contentEn: "Xi'an Academy of Fine Arts · Sculpture"
    },
    {
      labelZh: "奖学金",
      labelEn: "SCHOLARSHIP",
      contentZh: "硕士研究生“综合奖学金”一等奖、“学业奖学金”二等奖。",
      contentEn: "First Prize for Comprehensive Scholarship · Second Prize for Academic Scholarship"
    }
  ],

  // ==========================================================================
  // CHAPTER 01 · 近期参与设计制作剧目 Recent Stage Design Works
  // ==========================================================================
  projectMatrix: [
    { genreZh: "史诗剧", genreEn: "EPIC", works: "藏粤史诗剧《驻藏·张大人》 (Lord Zhang in Tibet)" },
    { genreZh: "国乐剧场", genreEn: "IMMERSIVE", works: "沉浸式国乐剧场《水墨与丝竹的对话3：鳌鱼》 (AOYU)" },
    { genreZh: "舞剧", genreEn: "DANCE", works: "《龟兹》 (Qiuci) / 《乐和长歌》 (Joyful Songs and Long Melodies) / 芭蕾舞剧《白蛇传》 (The Legend of the White Snake)" },
    { genreZh: "音乐剧", genreEn: "MUSICAL", works: "《黑凤梨（喜欢你）》 (I like you) / 《少年觉醒》 (Youth Awakening)" },
    { genreZh: "话剧", genreEn: "DRAMA", works: "《钨金》 (Tungsten gold) / 《背影》 (Back Shadow) / 《延水谣》 (The Ballad of Yanhe River) / 《新·世界》 (New · world) / 音乐话剧《中山先生》 (Dr. Sun Yat-sen)" },
    { genreZh: "杂技剧", genreEn: "PHYSICAL", works: "《天鹅》 (Swan)" },
    { genreZh: "戏曲", genreEn: "OPERA", works: "京剧《齐白石》 (Peking Opera Qi Baishi) / 西秦戏《麒麟夺锦》 (Xiqin Opera Qi Lin Duo Jin)" },
    { genreZh: "展览", genreEn: "EXHIBITION", works: "空间无界——秦立运舞台设计作品展 (Boundless Space – Qin Liyun's Stage Design Exhibition)" }
  ],

  // 重点完整流程展示 01-A：《驻藏·张大人》(Portfolio Pages 04–11)
  lordZhangFeature: {
    id: "YY-019",
    titleZh: "《驻藏·张大人》",
    titleEn: "Lord Zhang in Tibet",
    genreEn: "TIBETAN-CANTONESE EPIC DRAMA",
    yearVenue: "2025 · 西藏拉萨 · 藏戏艺术中心 (Lhasa, Tibet)",
    credit: "舞美设计助理 (Stage Design Assistant)",
    heroImage: "assets/stage-lord-zhang.webp",
    steps: [
      {
        num: "01",
        titleZh: "剧本 / 戏剧结构分析",
        titleEn: "Script / Dramaturgy Analysis",
        descZh: "使用 ChatGPT 将剧本转化为分场戏剧结构表（涵盖 1904–1908 历史线与 2025 当代拉萨叙事框），拆解戏剧冲突、舞台推进与主副道具线索。",
        image: "assets/gallery/yy-019-01.webp"
      },
      {
        num: "02",
        titleZh: "提示词矩阵与生成式浮雕转译",
        titleEn: "Prompting & Grayscale-to-ZBrush Relief",
        descZh: "构建分场 Prompt Matrix，以 Midjourney 生成戏剧氛围参考，利用 ChatGPT 修复清代驻藏大臣衙门残缺细节，并通过 Stable Diffusion 转灰度图进入 ZBrush 生成三维浮雕。",
        image: "assets/gallery/yy-019-03.webp"
      },
      {
        num: "03",
        titleZh: "石狮子推景（道具）数字复原",
        titleEn: "Stone Lion Statue: 3D Restoration & Finishing",
        descZh: "原石狮子 → 数字建模 → 纹理上色与完成。检索历史文献并结合 AI 与 ZBrush 补全时代石狮特征，衔接实体雕刻与做旧上色。",
        image: "assets/stone-lion-process.webp"
      },
      {
        num: "04",
        titleZh: "土墙推景制作与装台彩排反馈",
        titleEn: "Earth Wall Set & Load-in / Tech Rehearsal",
        descZh: "由 Midjourney + PS 概念图转化为三维模型与实体肌理涂装，跟进拉萨现场装台、门楼彩画组装与技术彩排光影校准。",
        image: "assets/gallery/yy-019-12.webp"
      }
    ],
    galleryIds: "YY-019"
  },

  // 重点完整流程展示 01-B：《水墨与丝竹的对话3：鳌鱼》(Portfolio Chapter AOYU 01/07–07/07)
  aoyuFeature: {
    id: "YY-018",
    titleZh: "《水墨与丝竹的对话3：鳌鱼》",
    titleEn: "AOYU — Immersive Chinese Music Theatre",
    genreEn: "IMMERSIVE CHINESE MUSIC THEATRE",
    yearVenue: "2026.09.25–26 · 广州大剧院 · 实验剧场",
    credit: "舞美设计 杨于衡 (Set Designer · 概念方案、空间布局与设计深化)",
    producers: "出品：星海音乐学院、广州大剧院",
    pdfHref: "assets/Aoyu-Design-Iterations-2026.pdf",
    heroImage: "assets/aoyu.webp",
    steps: [
      {
        num: "I",
        titleZh: "观演空间与中轴水路（18m × 26m）",
        titleEn: "Audience Arrangement & Central Passage",
        descZh: "由早期“龙门”视觉中心与环绕观看，推进至中轴通道组织舞者行动、两侧布置观众、后区集中乐队与主视觉、前区预留茶席水墨花艺。",
        image: "assets/aoyu-space.webp"
      },
      {
        num: "II",
        titleZh: "圆形转台空间整合",
        titleEn: "Turntable & Installation Integration",
        descZh: "后续方案将乐队、花艺与鱼缸集中至圆形转台，保留独立舞蹈区，并重新组织水墨、古琴与茶艺点位的表演视线。",
        image: "assets/aoyu.webp"
      },
      {
        num: "III",
        titleZh: "转台与乐队尺寸深化（Ø 7m / 2×4m / ≤0.8m）",
        titleEn: "Dimensioned Plan & Orchestra Layout",
        descZh: "按 8-9 方案图纸深化 7m 转台直径、2×4m 中央舞蹈区与 ≤0.8m 鱼缸尺度，依据各民族乐器占地规划后区打击乐与前区生态点位。",
        image: "assets/aoyu-plan.webp"
      }
    ],
    note: "本章呈现概念方案、空间布局与设计深化；随制作预算与实施条件调整，导演重新组织了现场布局，最终演出采用不同于前期方案的空间安排。"
  },

  // 参创剧目与展览画廊 (Portfolio Pages 12–25)
  stageWorks: [
    {
      id: "YY-020",
      titleZh: "舞剧《龟兹》",
      titleEn: "Dance Drama: Qiuci",
      genre: "DANCE",
      genreZh: "舞剧",
      cover: "assets/gallery/yy-020-01.webp"
    },
    {
      id: "YY-021",
      titleZh: "舞剧《乐和长歌》",
      titleEn: "Dance Drama: Joyful Songs and Long Melodies",
      genre: "DANCE",
      genreZh: "舞剧",
      cover: "assets/gallery/yy-021-01.webp"
    },
    {
      id: "YY-023",
      titleZh: "芭蕾舞剧《白蛇传》",
      titleEn: "Ballet: The Legend of the White Snake",
      genre: "DANCE",
      genreZh: "芭蕾舞剧",
      cover: "assets/gallery/yy-023-01.webp"
    },
    {
      id: "YY-022",
      titleZh: "音乐剧《黑凤梨（喜欢你）》",
      titleEn: "Musical: I like you",
      genre: "MUSICAL",
      genreZh: "音乐剧",
      cover: "assets/gallery/yy-022-01.webp"
    },
    {
      id: "YY-031",
      titleZh: "音乐剧《少年觉醒》",
      titleEn: "Musical: Youth Awakening",
      genre: "MUSICAL",
      genreZh: "音乐剧",
      cover: "assets/gallery/yy-031-01.webp"
    },
    {
      id: "YY-024",
      titleZh: "话剧《钨金》",
      titleEn: "Drama: Tungsten gold",
      genre: "DRAMA",
      genreZh: "话剧",
      cover: "assets/gallery/yy-024-01.webp"
    },
    {
      id: "YY-028",
      titleZh: "话剧《背影》",
      titleEn: "Drama: Back Shadow",
      genre: "DRAMA",
      genreZh: "话剧",
      cover: "assets/gallery/yy-028-01.webp"
    },
    {
      id: "YY-029",
      titleZh: "话剧《延水谣》",
      titleEn: "Drama: The Ballad of Yanhe River",
      genre: "DRAMA",
      genreZh: "话剧",
      cover: "assets/gallery/yy-029-02.webp"
    },
    {
      id: "YY-030",
      titleZh: "话剧《新·世界》",
      titleEn: "Drama: New · World",
      genre: "DRAMA",
      genreZh: "话剧",
      cover: "assets/gallery/yy-030-01.webp"
    },
    {
      id: "YY-026",
      titleZh: "音乐话剧《中山先生》",
      titleEn: "Musical Drama: Dr. Sun Yat-sen",
      genre: "DRAMA",
      genreZh: "音乐话剧",
      cover: "assets/gallery/yy-026-01.webp"
    },
    {
      id: "YY-025",
      titleZh: "杂技剧《天鹅》",
      titleEn: "Acrobatic Drama: Swan",
      genre: "PHYSICAL",
      genreZh: "杂技剧",
      cover: "assets/gallery/yy-025-01.webp"
    },
    {
      id: "YY-027",
      titleZh: "京剧《齐白石》",
      titleEn: "Peking Opera: Qi Baishi",
      genre: "OPERA",
      genreZh: "京剧",
      cover: "assets/gallery/yy-027-01.webp"
    },
    {
      id: "YY-032",
      titleZh: "西秦戏《麒麟夺锦》",
      titleEn: "Xiqin Opera: Qi Lin Duo Jin",
      genre: "OPERA",
      genreZh: "西秦戏",
      cover: "assets/gallery/yy-032-01.webp"
    },
    {
      id: "YY-034",
      titleZh: "空间无界——秦立运舞台设计作品展",
      titleEn: "Boundless Space – Qin Liyun's Stage Design Exhibition",
      genre: "EXHIBITION",
      genreZh: "展览 · 2023 广东美术馆",
      cover: "assets/stage-space-unbounded.webp"
    }
  ],

  // ==========================================================================
  // CHAPTER 02 · 奖项与研究 Awards & Research (Portfolio Pages 26–29)
  // ==========================================================================
  awardsSelected: [
    { category: "创意策划", title: "艺术管理教育学会全国创意策划大赛三等奖", tag: "3RD" },
    { category: "工作坊", title: "创意产业与交叉学科工作坊论文优秀奖", tag: "PAPER" },
    { category: "展览", title: "作品参选破冰艺术计划“溢界”当代艺术展", tag: "EXHIBITION" },
    { category: "设计", title: "“塔牌绍兴酒”吉祥物全球创意设计大赛入围奖", tag: "DESIGN" }
  ],

  writingsPublished: [
    {
      title: "《符号化和蒙太奇——舞剧〈龙舟〉观剧感想》",
      role: "第一作者",
      previewSrc: "assets/gallery/yy-060-01.webp"
    },
    {
      title: "《守正创新：关于中国艺术管理教育发展方向及学生培养的几点思考》",
      role: "第二作者",
      previewSrc: "assets/gallery/yy-061-01.webp"
    },
    {
      title: "《舞台空间构建研究——以芭蕾舞剧〈白蛇传〉为个案》",
      role: "硕士毕业论文 (2025)",
      previewSrc: null
    }
  ],

  thesis: {
    year: "2025",
    titleZh: "舞台空间构建研究——以芭蕾舞剧《白蛇传》为个案",
    titleEn: "Research on the Construction of Stage Space: A Case Study on the Ballet The Legend of the White Snake",
    abstractZh:
      "舞台空间构建在戏剧中扮演着重要的角色，蕴含着丰富的文化符号和审美信息。本文以广州芭蕾舞剧院原创大型芭蕾舞剧《白蛇传》为案例，运用框架三层次理论深入分析该剧的舞台空间构建。首先，笔者梳理了舞台空间的传统式和数字化的演变和发展；其次，本文以芭蕾舞剧《白蛇传》为案例，探讨了框架三层次理论与舞台空间构建的适用性及类目建构，并在观众问卷调查分析的基础上，重点研究了该剧的舞台空间构建的特点；笔者认为舞台空间构建应关注舞台空间多元化表达、舞台叙事的数字化表达和观演关系的创新化表达等方面，试图为舞台剧目的主创团队，如制作人、导演和舞美设计师等提供借鉴。",
    abstractEn:
      "Stage space construction plays a crucial role in drama, embodying rich cultural symbols and aesthetic information. Taking the original large-scale ballet The Legend of the White Snake by Guangzhou Ballet Theatre as a case, this thesis deeply analyzes stage space construction by applying the three-level framework theory—sorting out traditional and digital spatial evolution, constructing evaluation categories with audience questionnaire analysis, and proposing references on diversified spatial expression, digital stage narration, and innovative audience-performance relationships.",
    keywordsZh: "舞台空间构建；框架三层次理论；芭蕾舞剧《白蛇传》",
    keywordsEn: "Stage Space Construction; Three-Level Framework Theory; The Ballet The Legend of the White Snake",
    chapters: [
      {
        code: "CHAPTER 01",
        title: "舞台空间的构建与演变 (Construction & Evolution)",
        points: ["古希腊至中世纪、镜框式向可变功能空间及黑匣子沉浸式演进", "舞台呈现的电影化转向与技术赋能下的数字化舞台空间"]
      },
      {
        code: "CHAPTER 02",
        title: "基于个案的舞台空间构建研究设计 (Research Design)",
        points: ["框架三层次理论的跨学科性与舞台空间适切性分析", "高/中/低三层次要素建构及《白蛇传》观众问卷描述统计与信效度检验"]
      },
      {
        code: "CHAPTER 03",
        title: "框架三层次视角下《白蛇传》空间构建 (Case Analysis)",
        points: ["高层框架：社会生活主题与精神生活主题", "中层框架：叙事视角与叙事结构", "低层框架：总体色彩与视觉语言"]
      },
      {
        code: "CHAPTER 04",
        title: "舞台空间设计研究启示 (Enlightenment)",
        points: ["戏剧内容：文化创新、审美价值与空间意向性的多元表达", "空间构建：舞台叙事的数字化表达", "剧场传播：社交媒体交互与观演关系的创新延展"]
      }
    ],
    methods: ["文献研究法", "田野调查法", "个案研究法", "问卷调查法", "案例分析法"]
  },

  translation: {
    period: "2021–2024 · UNPUBLISHED（未发表）",
    titleZh: "《场景设计与舞台灯光》第十版",
    titleEn: "“Scene Design and Stage Lighting” Tenth Edition — R. Craig Wolf · Dick Block",
    stats: [
      { value: "672", label: "PAGES · 原书页数" },
      { value: "46万", label: "CHINESE TEXT · 译文字数" },
      { value: "4年", label: "DURATION · 2021–2024" }
    ],
    descZh:
      "独立完成专业书翻译：原书 672 页，中文译文约 46 万字。这项翻译训练让我持续接触景观、灯光、声音与剧场技术的系统性知识，并将专业术语转化为可沟通的中文语境。",
    descEn:
      "Independently translated professional book: 672 pages in the original text, with a Chinese translation of approximately 460,000 words—accessing systematic knowledge across scenery, lighting, sound, and theatrical techniques."
  },

  // ==========================================================================
  // CHAPTER 03 · 雕塑与装置 Sculpture & Installation (Portfolio Pages 30–37)
  // 严格仅保留原作品集收录的作品照片（剔除未入册原始手机工作照）
  // ==========================================================================
  sculptures: [
    {
      id: "YY-001",
      titleZh: "“休息比赛” 系列",
      titleEn: "“Rest Competition” Series",
      material: "树脂着色 (Resin coloring)",
      size: "50×60×100 (cm), 160×60×120 (cm), 45×60×73 (cm)",
      cover: "assets/sculpture-rest-competition.webp",
      statementZh:
        "作品想要表现的是那些每天都在辛苦工作的上班族们，他们背井离乡来到外地打工，他们在辛苦之余也希望找到一个归宿、一个乐园，乐园既是童年的逝去之地，也是对向往未来的寄托之地；在疫情时代中那些被困住的打工人反而不得不面对一个悖论，一边是他们想要的休息，一边是无法获得赖以生存的薪水，“休息比赛”的作品名便来自于这种矛盾之中；而在这个像乐园的归宿中他们能得到歇息，继续在睡梦中向往着更美好的未来，醒来后继续奋斗……",
      statementEn:
        "The work portrays migrant workers who leave their hometowns and hope to find a refuge—an Eden where childhood passed away and where they yearn for the future. Trapped in a paradox between the need to rest and the loss of livelihood, they catch a moment of sleep on playground rides before waking to struggle again.",
      images: [
        "assets/gallery/yy-001-01.webp",
        "assets/gallery/yy-001-02.webp",
        "assets/gallery/yy-001-03.webp",
        "assets/gallery/yy-001-04.webp",
        "assets/gallery/yy-001-05.webp",
        "assets/gallery/yy-001-06.webp",
        "assets/gallery/yy-001-07.webp",
        "assets/gallery/yy-001-08.webp"
      ]
    },
    {
      id: "YY-005",
      titleZh: "《桥》",
      titleEn: "Bridge",
      material: "综合材料 (Comprehensive materials)",
      size: "180 × 60 × 250 (cm)",
      cover: "assets/sculpture-bridge.webp",
      statementZh:
        "我的奶奶当了大半辈子的老师，虽然已经年过九十了，但常备一块黑板用粉笔练习书法的习惯至今仍未改变。从小奶奶就用心教我书法，可我一直都没认真听话好好练字。现在奶奶已经越来越健忘了，在她的记忆中我仍是那个小时候贪玩偷懒的小孩，这也是无法改变了。作品以自我懂事之后再也没有见我奶奶再用过的缝纫机和粉笔这两种意象结合构成了这件作品。这也是为什么我的作品叫《桥》，我希望这件作品能够成为一座桥让我能够回到过去弥补遗憾。",
      statementEn:
        "My grandmother was a teacher for most of her life. Over ninety, she still practices calligraphy with chalk on a blackboard, yet in her fading memory I remain that playful, lazy child. Built from two things she no longer uses—her sewing machine and chalk—this work serves as a bridge back to the past to make up for my regrets.",
      images: ["assets/sculpture-bridge.webp", "assets/gallery/yy-005-01.webp"]
    },
    {
      id: "YY-006",
      titleZh: "《木浮沙海》（合作）",
      titleEn: "“Woody Floating Sands Sea”",
      material: "综合材料 (Comprehensive materials)",
      size: "600 × 300 × 150 (cm)",
      cover: "assets/installation-wood.webp",
      statementZh:
        "胡杨千年不腐千年不朽，胡杨代表着时间、光阴，胡杨树干上的纹理是岁月风沙所致。本件作品主要使用了铜丝/铁丝缠绕，或穿插或衍生，缠绕与石头或木桩，象征新事物新精神。打破常规实际上一成不变的事物无可动摇的现实，跳脱出框架格物以致新，再思考，再想象。",
      statementEn:
        "Populus euphratica stands intact for a millennium, its grain carved by wind and sand. Using copper and iron wire intertwined with stones and wooden stakes, the installation suspends ancient trunks to transcend convention toward fresh perspectives.",
      images: ["assets/installation-wood.webp", "assets/gallery/yy-006-01.webp"]
    },
    {
      id: "YY-002",
      titleZh: "《那年十八》",
      titleEn: "That Year, At Eighteen",
      material: "树脂着色 (Resin coloring)",
      size: "60 × 60 × 110 (cm)",
      cover: "assets/sculpture-that-year-18.webp",
      statementZh: "",
      statementEn: "",
      images: [
        "assets/gallery/yy-002-01.webp",
        "assets/gallery/yy-002-02.webp",
        "assets/gallery/yy-002-03.webp"
      ]
    },
    {
      id: "YY-003",
      titleZh: "《等大女人像》",
      titleEn: "Woman Statue",
      material: "灰泥 (plaster)",
      size: "80 × 60 × 180 (cm)",
      cover: "assets/sculpture-woman-study.webp",
      statementZh: "",
      statementEn: "",
      images: [
        "assets/gallery/yy-003-01.webp",
        "assets/gallery/yy-003-02.webp",
        "assets/gallery/yy-003-03.webp"
      ]
    },
    {
      id: "YY-004",
      titleZh: "《北齐佛立像》",
      titleEn: "Northern Qi Buddha Statues",
      material: "树脂上色 (Resin coloring)",
      size: "40 × 40 × 110 (cm)",
      cover: "assets/sculpture-northern-qi.webp",
      statementZh: "",
      statementEn: "",
      images: [
        "assets/gallery/yy-004-01.webp",
        "assets/gallery/yy-004-02.webp",
        "assets/gallery/yy-004-03.webp"
      ]
    }
  ],

  // ==========================================================================
  // CHAPTER 04 · 绘画与速写 Painting & Sketch (Portfolio Pages 38–39)
  // ==========================================================================
  drawings: [
    {
      id: "YY-007",
      titleZh: "《缝纫机与石膏》",
      titleEn: "Sewing machine and plaster",
      material: "油画 (Oil painting)",
      size: "60 × 80 (cm)",
      aspect: "portrait",
      images: ["assets/drawing-sewing-machine.webp"]
    },
    {
      id: "YY-008",
      titleZh: "《老人肖像》",
      titleEn: "Portrait of an Old Woman",
      material: "素描 (Sketch)",
      size: "100 × 78 (cm)",
      aspect: "landscape",
      images: ["assets/drawing-old-portrait.webp"]
    },
    {
      id: "YY-009",
      titleZh: "《拉奥孔石膏像》",
      titleEn: "Laocoön Plaster Statue",
      material: "素描 (Sketch)",
      size: "53 × 76 (cm)",
      aspect: "tall",
      images: ["assets/drawing-laocoon.webp"]
    },
    {
      id: "YY-010",
      titleZh: "《猫的肖像》",
      titleEn: "Portrait of a Cat",
      material: "速写 (Sketch)",
      size: "76 × 53 (cm)",
      aspect: "landscape",
      images: ["assets/gallery/yy-010-01.webp", "assets/gallery/yy-010-02.webp"]
    },
    {
      id: "YY-011",
      titleZh: "《与猫相关的回忆》1-2",
      titleEn: "Memories related to cats",
      material: "数字插画 (Digital illustrations)",
      size: "尺寸可变 (Variable size)",
      aspect: "square",
      images: ["assets/gallery/yy-011-01.webp", "assets/gallery/yy-011-02.webp"]
    }
  ]
};
