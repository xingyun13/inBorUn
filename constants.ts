import { Content, Language, CategoryNode } from './types';

// Helper to generate sub-models (Generic)
const generateChildren = (brandId: string, count: number, lang: Language = 'en'): CategoryNode[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${brandId}-model-${i+1}`,
    name: `${brandId.toUpperCase()} Series ${String.fromCharCode(65+i)}`,
    imgUrl: `https://placehold.co/400x300/f1f5f9/334155?text=${brandId.toUpperCase()}+${String.fromCharCode(65+i)}`,
    type: 'model',
    description: lang === 'zh' 
      ? `${brandId.toUpperCase()} 系列标准组件，专为高可靠性应用设计。`
      : `Standard ${brandId.toUpperCase()} series component designed for high reliability applications.`,
    tableData: {
      headers: ["Parameter", "Value"],
      rows: [
        ["Model", `${brandId.toUpperCase()}-${1000 + i * 100}`],
        ["Status", "Active"],
        ["Package", "SOP-8"]
      ]
    },
    children: []
  }));
};

// --- CHINESE DATA LIST ---
const BRANDS_LIST_ZH: CategoryNode[] = [
  { 
    id: 'adi', 
    name: 'ADI 亚德诺', 
    type: 'brand',
    description: "亚德诺半导体全称为亚德诺半导体技术有限公司（analog devices, inc. ）简称adi。是一家专营半导体传感器和信号处理ic的卓越的供应商，adi将创新、业绩和卓越作为企业的文化支柱，并基此成长为该技术领域最持久高速增长的企业之一。",
    products: [
      { name: "精密放大器", image: "https://picsum.photos/seed/adi1/300/200" },
      { name: "数模转换器", image: "https://picsum.photos/seed/adi2/300/200" },
      { name: "电源管理", image: "https://picsum.photos/seed/adi3/300/200" },
      { name: "射频微波", image: "https://picsum.photos/seed/adi4/300/200" }
    ],
    children: [
      {
        id: 'adi-series-a',
        name: 'ADI Series A (Precision)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+Precision",
        type: 'model',
        description: "ADI Series A 精密运算放大器系列，专为高精度信号处理设计，具有极低的失调电压和宽带宽。",
        tableData: {
            headers: [
                "PartNumber", "Channel", "Shut Down", "Power Supply (V)", 
                "Rail-to-Rail I/O", "GBP (MHz)", "Slew Rate (V/us)", 
                "Iq/Amp (uA)", "Vos max@25°C (uV)", "Ib Typ (pA)", "Noise@1KHz (nV)"
            ],
            rows: [
                ["GS8557", "1", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8558", "2", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8559", "4", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8591", "1", "Y", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"]
            ]
        },
        children: []
      },
      {
        id: 'adi-series-b',
        name: 'ADI Series B (Power)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+Power",
        type: 'model',
        description: "ADI Series B 高效电源管理单元，适用于复杂的 FPGA 和处理器供电需求。",
        tableData: {
            headers: ["PartNumber", "Type", "Input (V)", "Outputs", "Freq (MHz)", "Package"],
            rows: [
                ["ADP5054", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"],
                ["ADP5050", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"],
                ["ADP5052", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"]
            ]
        },
        children: []
      },
      {
        id: 'adi-series-c',
        name: 'ADI Series C (RF)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+RF",
        type: 'model',
        description: "ADI Series C 射频收发器，提供宽频带和高集成度解决方案。",
        tableData: {
            headers: ["PartNumber", "Type", "Freq Range", "Bandwidth", "Rx/Tx", "Package"],
            rows: [
                ["AD9361", "RF Transceiver", "70M-6.0G", "200k-56M", "2/2", "BGA-144"],
                ["AD9363", "RF Transceiver", "325M-3.8G", "200k-20M", "2/2", "BGA-144"],
                ["AD9364", "RF Transceiver", "70M-6.0G", "200k-56M", "1/1", "BGA-144"]
            ]
        },
        children: []
      }
    ]
  },
  { 
    id: 'kiwi', 
    name: '必易微', 
    type: 'brand', 
    description: "深圳市必易微电子股份有限公司（股票代码：688045）拥有半导体领域的资深专家和高效的管理团队，主要从事高性能模拟及数模混合集成电路的研发和销售，在杭州、厦门、上海、成都、中山等地设有研发中心及分支机构。必易微高度重视知识产权的开发和保护，已拥有多项集成电路和系统应用的国际、国内专利。主营产品包括 AC-DC、DC-DC、驱动 IC、线性稳压、 保护芯片、 电池管理等， 为消费电子、工业、通讯、计算机等领域客户提供完整电源解决方案和系统集成。科技改善生活。必易微尊重人才、重用人才，以客户为中心，始终坚持“独特创新、易于使用”的公司理念，创新芯领域，引领芯发展，力争成为全球卓越的芯片设计企业",
    products: [
        { name: "LED 驱动", image: "https://picsum.photos/seed/kiwi1/300/200" },
        { name: "AC-DC", image: "https://picsum.photos/seed/kiwi2/300/200" }
    ],
    children: generateChildren('kiwi', 2, 'zh') 
  },
  { id: 'gainsil', name: '聚洵', type: 'brand',     description: "聚洵半导体科技（上海）有限公司（Gainsil Semiconductor Technology)于2016年成立于上海张江科学城，是一家全球化的芯片设计高科技企业，专注高性能、高品质模拟和混合信号产品的研发设计和销售管理。公司目前拥有低噪声运放、零漂移运放、高速运放、低电压运放、纳安级运放、比较器、模拟开关、电压基准等产品线，产品广泛应用于通讯网络、消费电子、多媒体、工业控制、仪器仪表、液晶显示、汽车电子、可穿戴设备、物联网等众多领域。 公司核心团队均来自国内外顶尖半导体设计公司，拥有先进的技术及自主知识产权，具有独特的创新思维及运营模式，在半导体芯片研发工程、制造管理、市场销售管理渠道方面拥有非常丰富的经验；聚洵合作伙伴是世界知名的芯片制造公司（台积电晶圆代工＋长电科技封装测试），具有一流的工艺技术和封装技术；公司以市场为导向、以创新为驱动、以产品质量及服务客户为目标，为国内外客户提供具有成本竟争力的半导体精品芯片解决方案。",
    products: [{name: "运算放大器", image: "https://picsum.photos/seed/gain1/300/200"}], children: generateChildren('gainsil', 4, 'zh') },
  { id: 'kwansemi', name: '冠禹半导体', type: 'brand', description: "冠禹半导体致力于功率器件的研发。", products: [{name: "MOSFET", image: "https://picsum.photos/seed/kwan1/300/200"}], children: generateChildren('kwansemi', 2, 'zh') },
  { id: 'novosense', name: '纳芯微电子', type: 'brand', description: "纳芯微电子提供高性能隔离与传感器解决方案。", products: [{name: "隔离芯片", image: "https://picsum.photos/seed/novo1/300/200"}], children: generateChildren('novosense', 3, 'zh') },
  { id: 'topaz', name: '黄宝石电容', type: 'brand',   description: "广东黄宝石电子科技有限公司创立于2001年，国家高新企业。目前在国内有两大基地，总部制造基地及研发中心坐落于制造之都东莞高埗，另一制造基地坐落于湖南省郴州市。黄宝石专注于耐高温抗低温长寿命电解电容的生产，以高端品质，中等价格的市场策略开拓市场。在秉承专注、感恩、利他、意义的价值观的引领下，创造并引领高端制造品牌，在国际上为“中国制造”这块金字招牌贡献力量。我们的产品广泛应用的领域：照明（如LED驱动、镇流器），电源（如充电器、适配器、电源供应），消费类产品（如TV、空调、音响设备），网络（如路由器、机顶盒、网络基站），计算机设备（如直流风扇、键盘、鼠标），工业应用（如电动车充电器、逆变点焊机、储能电源、电动工具）等。公司目前主要客户有：松下、技研新阳、实益达、兆驰、费特、三雄极光、凯耀、雷士、佛山照明、TCL、明丰、光宝、龙升、欧普、和而泰、欧陆通、京泉华、伊戈尔、驴充充等。黄宝石拥有国内先进的现代化生产检测设备，所有产品均通过SGS环保认证，质量达到EC、JIS、GB标准，按照ISO9001标准建立和完善质量保证体系，不断提高产品质量，在合作共赢的基础上，公司愿与世界各地的客户携手合作，增进友谊，共创美好未来。", products: [{name: "电解电容", image: "https://picsum.photos/seed/topaz1/300/200"}], children: generateChildren('topaz', 2, 'zh') },
  { id: 'ti', name: 'TI 德州仪器', type: 'brand', description: "德州仪器 (TI) 是一家全球性的半导体设计和制造公司。", products: [{name: "MSP430", image: "https://picsum.photos/seed/ti1/300/200"}, {name: "C2000", image: "https://picsum.photos/seed/ti2/300/200"}], children: generateChildren('ti', 5, 'zh') },
  { id: 'yonger', name: '永源微', type: 'brand', description: "永源微电子专注于功率器件与电源管理。", products: [{name: "PMOS", image: "https://picsum.photos/seed/yong1/300/200"}], children: generateChildren('yonger', 2, 'zh') },
  { id: 'nxp', name: '恩智浦', type: 'brand', description: "恩智浦半导体致力于汽车电子与安全连接解决方案。", products: [{name: "Automotive MCU", image: "https://picsum.photos/seed/nxp1/300/200"}], children: generateChildren('nxp', 3, 'zh') },
  { id: 'altera', name: '阿尔特拉', type: 'brand', description: "阿尔特拉提供领先的 FPGA 解决方案。", products: [{name: "FPGA", image: "https://picsum.photos/seed/alt1/300/200"}], children: generateChildren('altera', 2, 'zh') },
  { id: 'xilinx', name: '赛灵思', type: 'brand', description: "赛灵思是全可编程逻辑器件的全球领导者。", products: [{name: "Spartan", image: "https://picsum.photos/seed/xil1/300/200"}], children: generateChildren('xilinx', 2, 'zh') },
  { id: 'microchip', name: '微芯', type: 'brand', description: "Microchip 提供智能、互联和安全的嵌入式控制解决方案。", products: [{name: "PIC MCU", image: "https://picsum.photos/seed/micro1/300/200"}], children: generateChildren('microchip', 3, 'zh') },
  { id: 'infineon', name: '英飞凌', type: 'brand', description: "英飞凌科技在功率系统和物联网领域拥有核心竞争力。", products: [{name: "IGBT", image: "https://picsum.photos/seed/inf1/300/200"}], children: generateChildren('infineon', 2, 'zh') },
  { id: 'onsemi', name: '安森美', type: 'brand', description: "安森美推动高能效电子的创新。", products: [{name: "Image Sensors", image: "https://picsum.photos/seed/on1/300/200"}], children: generateChildren('onsemi', 2, 'zh') },
  { id: 'sgmicro', name: '圣邦微电子', type: 'brand', description: "圣邦微电子专注于高性能模拟芯片。", products: [{name: "Analog IC", image: "https://picsum.photos/seed/sg1/300/200"}], children: generateChildren('sgmicro', 3, 'zh') },
  { id: 'st', name: 'ST 意法半导体', type: 'brand', description: "意法半导体是全球领先的半导体公司之一。", products: [{name: "STM32", image: "https://picsum.photos/seed/st1/300/200"}], children: generateChildren('st', 5, 'zh') },
  { id: 'shanxin', name: '闪芯微', type: 'brand', description: "闪芯微致力于存储芯片研发。", products: [{name: "Memory", image: "https://picsum.photos/seed/shan1/300/200"}], children: generateChildren('shanxin', 2, 'zh') },
];

// --- ENGLISH DATA LIST ---
const BRANDS_LIST_EN: CategoryNode[] = [
  { 
    id: 'adi', 
    name: 'ADI', 
    type: 'brand',
    description: "Analog Devices, Inc. (ADI) is dedicated to defining innovation and excellence in the fields of converting, conditioning, and processing real-world physical phenomena (such as temperature, pressure, sound, light, speed, and motion).",
    products: [
      { name: "Precision Amplifiers", image: "https://picsum.photos/seed/adi1/300/200" },
      { name: "DACs", image: "https://picsum.photos/seed/adi2/300/200" },
      { name: "Power Management", image: "https://picsum.photos/seed/adi3/300/200" },
      { name: "RF & Microwave", image: "https://picsum.photos/seed/adi4/300/200" }
    ],
    children: [
      {
        id: 'adi-series-a',
        name: 'ADI Series A (Precision)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+Precision",
        type: 'model',
        description: "ADI Series A Precision Op-Amp series, designed for high-accuracy signal processing with ultra-low offset voltage and wide bandwidth.",
        tableData: {
            headers: [
                "PartNumber", "Channel", "Shut Down", "Power Supply (V)", 
                "Rail-to-Rail I/O", "GBP (MHz)", "Slew Rate (V/us)", 
                "Iq/Amp (uA)", "Vos max@25°C (uV)", "Ib Typ (pA)", "Noise@1KHz (nV)"
            ],
            rows: [
                ["GS8557", "1", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8558", "2", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8559", "4", "N", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"],
                ["GS8591", "1", "Y", "2.5~5.5", "Y/Y", "13", "8", "1300", "5", "100", "27"]
            ]
        },
        children: []
      },
      {
        id: 'adi-series-b',
        name: 'ADI Series B (Power)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+Power",
        type: 'model',
        description: "ADI Series B High-efficiency Power Management Unit (PMU), suitable for complex FPGA and processor power requirements.",
        tableData: {
            headers: ["PartNumber", "Type", "Input (V)", "Outputs", "Freq (MHz)", "Package"],
            rows: [
                ["ADP5054", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"],
                ["ADP5050", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"],
                ["ADP5052", "PMU", "4.5-15", "4 Buck + LDO", "0.25-2", "LFCSP-48"]
            ]
        },
        children: []
      },
      {
        id: 'adi-series-c',
        name: 'ADI Series C (RF)',
        imgUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=ADI+RF",
        type: 'model',
        description: "ADI Series C RF Transceivers, offering wide bandwidth and high integration solutions.",
        tableData: {
            headers: ["PartNumber", "Type", "Freq Range", "Bandwidth", "Rx/Tx", "Package"],
            rows: [
                ["AD9361", "RF Transceiver", "70M-6.0G", "200k-56M", "2/2", "BGA-144"],
                ["AD9363", "RF Transceiver", "325M-3.8G", "200k-20M", "2/2", "BGA-144"],
                ["AD9364", "RF Transceiver", "70M-6.0G", "200k-56M", "1/1", "BGA-144"]
            ]
        },
        children: []
      }
    ]
  },
  { 
    id: 'kiwi', 
    name: 'Kiwi Instruments', 
    type: 'brand', 
    description: "Kiwi Instruments possesses senior experts and an efficient management team in the semiconductor field, mainly engaged in the design and sales of power management chips.",
    products: [
        { name: "LED Driver", image: "https://picsum.photos/seed/kiwi1/300/200" },
        { name: "AC-DC", image: "https://picsum.photos/seed/kiwi2/300/200" }
    ],
    children: generateChildren('kiwi', 2, 'en') 
  },
  { id: 'gainsil', name: 'Gainsil', type: 'brand', description: "Gainsil Semiconductor focuses on high-performance analog signal chain chips.", products: [{name: "Op-Amp", image: "https://picsum.photos/seed/gain1/300/200"}], children: generateChildren('gainsil', 4, 'en') },
  { id: 'kwansemi', name: 'Kwansemi', type: 'brand', description: "Kwansemi is dedicated to the R&D of power devices.", products: [{name: "MOSFET", image: "https://picsum.photos/seed/kwan1/300/200"}], children: generateChildren('kwansemi', 2, 'en') },
  { id: 'novosense', name: 'Novosense', type: 'brand', description: "Novosense provides high-performance isolation and sensor solutions.", products: [{name: "Isolation Chips", image: "https://picsum.photos/seed/novo1/300/200"}], children: generateChildren('novosense', 3, 'en') },
  { id: 'topaz', name: 'Topaz Caps', type: 'brand', description: "Topaz provides high-quality electrolytic capacitor products.", products: [{name: "Electrolytic Caps", image: "https://picsum.photos/seed/topaz1/300/200"}], children: generateChildren('topaz', 2, 'en') },
  { id: 'ti', name: 'TI', type: 'brand', description: "Texas Instruments (TI) is a global semiconductor design and manufacturing company.", products: [{name: "MSP430", image: "https://picsum.photos/seed/ti1/300/200"}, {name: "C2000", image: "https://picsum.photos/seed/ti2/300/200"}], children: generateChildren('ti', 5, 'en') },
  { id: 'yonger', name: 'Yonger', type: 'brand', description: "Yonger Microelectronics focuses on power devices and power management.", products: [{name: "PMOS", image: "https://picsum.photos/seed/yong1/300/200"}], children: generateChildren('yonger', 2, 'en') },
  { id: 'nxp', name: 'NXP', type: 'brand', description: "NXP Semiconductors is dedicated to automotive electronics and secure connectivity solutions.", products: [{name: "Automotive MCU", image: "https://picsum.photos/seed/nxp1/300/200"}], children: generateChildren('nxp', 3, 'en') },
  { id: 'altera', name: 'Altera', type: 'brand', description: "Altera provides leading FPGA solutions.", products: [{name: "FPGA", image: "https://picsum.photos/seed/alt1/300/200"}], children: generateChildren('altera', 2, 'en') },
  { id: 'xilinx', name: 'Xilinx', type: 'brand', description: "Xilinx is the global leader in all-programmable logic devices.", products: [{name: "Spartan", image: "https://picsum.photos/seed/xil1/300/200"}], children: generateChildren('xilinx', 2, 'en') },
  { id: 'microchip', name: 'Microchip', type: 'brand', description: "Microchip provides smart, connected, and secure embedded control solutions.", products: [{name: "PIC MCU", image: "https://picsum.photos/seed/micro1/300/200"}], children: generateChildren('microchip', 3, 'en') },
  { id: 'infineon', name: 'Infineon', type: 'brand', description: "Infineon Technologies holds core competencies in power systems and IoT.", products: [{name: "IGBT", image: "https://picsum.photos/seed/inf1/300/200"}], children: generateChildren('infineon', 2, 'en') },
  { id: 'onsemi', name: 'ON Semi', type: 'brand', description: "ON Semiconductor drives innovation in energy-efficient electronics.", products: [{name: "Image Sensors", image: "https://picsum.photos/seed/on1/300/200"}], children: generateChildren('onsemi', 2, 'en') },
  { id: 'sgmicro', name: 'SGMICRO', type: 'brand', description: "SGMICRO focuses on high-performance analog chips.", products: [{name: "Analog IC", image: "https://picsum.photos/seed/sg1/300/200"}], children: generateChildren('sgmicro', 3, 'en') },
  { id: 'st', name: 'STMicroelectronics', type: 'brand', description: "STMicroelectronics is one of the world's leading semiconductor companies.", products: [{name: "STM32", image: "https://picsum.photos/seed/st1/300/200"}], children: generateChildren('st', 5, 'en') },
  { id: 'shanxin', name: 'Shanxin', type: 'brand', description: "Shanxin is dedicated to memory chip R&D.", products: [{name: "Memory", image: "https://picsum.photos/seed/shan1/300/200"}], children: generateChildren('shanxin', 2, 'en') },
];

export const CONTENT: Record<Language, Content> = {
  zh: {
    nav: {
      logoMain: "英倍朗",
      logoHighlight: "科技",
      logo: "../images/logo.png",
      home: "首页",
      about: "关于我们",
      solutions: "解决方案",
      products: "产品中心",
      contact: "联系方式"
    },
    hero: {
      title: "引领智能电子方案创新",
      subtitle: "专注于 BLDC 无刷电机、MCU 控制与 BMS 储能管理系统",
      cta: "探索方案"
    },
    about: {
      title: "关于英倍朗",
      description: [
        "深圳英倍朗科技有限公司核心团队深耕电子元器件行业 10 余年，总部位于深圳。依托经验丰富的工程研发力量和成熟的市场服务体系，公司已构建覆盖方案设计、技术支持、市场销售的完整业务链条。",
        "我们专注于 BLDC 无刷直流电机驱动方案与 BMS 电池充放电管理系统的研发与应用，产品广泛应用于光伏能源、储能逆变、消费电子、工业控制、机器人等多个领域。",
        "我们致力于成为行业领先的智能电子方案提供商，以可靠的产品、完善的服务，持续为客户创造价值。"
      ],
      valuesTitle: "核心理念",
      values: [
        { title: "专业", desc: "深耕行业，技术精湛" },
        { title: "专注", desc: "聚焦核心，精益求精" },
        { title: "专一", desc: "用心服务，始终如一" }
      ],
      servicesTitle: "我们的服务",
      services: [
        "芯片选型与技术咨询",
        "电机驱动与 BMS 充放电管理方案设计",
        "应用开发与调试支持",
        "售前售后软硬技术支持"
      ]
    },
    solutions: {
      title: "核心解决方案",
      subtitle: "为您的产品提供强劲的“芯”动力",
      categories: [
        {
          id: 'bldc',
          title: "BLDC 直流无刷电机方案",
          items: ["暴力风扇", "水泵", "风机", "电推剪", "高速风筒", "吹雪机"],
          iconName: 'bldc'
        },
        {
          id: 'mcu',
          title: "MCU 智能控制方案",
          items: ["高温预警系统", "新能源汽车智能排水系统", "涉水预警系统", "红外高温预警"],
          iconName: 'mcu'
        },
        {
          id: 'bms',
          title: "储能充放电管理",
          items: ["400W 充放电管理系统", "40W 充放电管理系统", "BMS 电池管理"],
          iconName: 'bms'
        }
      ]
    },
    products: {
      title: "产品中心",
      subtitle: "专注于中高端无刷直流电机驱动控制与智能控制核心方案",
      viewDetailText: "查看方案详情",
      keyFeaturesText: "核心特性",
      techSpecsText: "技术规格",
      typicalAppsText: "典型应用",
      backButton: "返回产品列表",
      list: [
        {
          id: "high-speed-hair-dryer",
          name: "高速吹风筒驱动方案",
          desc: "针对高转速吹风机、智能风叶量身定制，支持10万至12万转超高转速电机闭环控制，发热低、超静音、恒温出风精确控制。",
          imgUrl: "https://oss.huangye88.net/live/ueditor/php/upload/3244789/image/20200623/1592873849864838.jpg?auto=format&fit=crop&w=600&q=80",
          features: [
            "闭环转速控制最高支持 120,000 RPM 稳定运行",
            "正弦波矢量控制算法 (FOC)，电机本底运转音噪低于 55dB",
            "加热丝闭合温控联动，智能出风恒温精度达 ±1°C",
            "零延时超极速启动、停止刹车，防吸发防反转安全控制"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "AC 220V 50Hz (或直流 DC 310V)" },
            { label: "额定功率 (Power)", value: "电机最大 150W (热电功率 1400W-1600W)" },
            { label: "最高运行转速 (Max RPM)", value: "120,000 RPM (闭环矢量控制)" },
            { label: "调速方式 (Speed)", value: "三档物理轻触调速 / 滑动无级调速" },
            { label: "核心算法 (Algorithm)", value: "无传感器磁场定向控制 (Sensorless FOC)" },
            { label: "安全防护 (Security)", value: "发热丝温控保护、缺相断开、过流过压保护" }
          ],
          applications: [
            "家用高速吹风机",
            "沙龙级高端电吹风",
            "微型高速风轮净化器",
            "手持大吸力高转速气泵"
          ]
        },
        {
          id: "vf-water-pump",
          name: "变频水泵驱动方案",
          desc: "广泛适配智能热水器、壁挂炉循环泵、无刷潜水泵及鱼缸循环泵。提供 IP68 级超高防护等级，轻静运行，带高灵敏防干烧智能化检测。",
          imgUrl: "https://oss.huangye88.net/live/ueditor/php/upload/3244789/image/20200706/1594031773854228.jpg?auto=format&fit=crop&w=600&q=80",
          features: [
            "无传感器正弦波静音驱动，全频运行噪声低于 30dB",
            "高灵敏干烧检测专利算法，无水自动停机，隔段自启唤醒",
            "全方位防反接、欠压过电、电机堵转双向自恢复设计",
            "支持 PWM / 0-10V / 智能串行总线等多种调速信令"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "DC 12V / 24V / 48V 或交流 AC 220V" },
            { label: "额定功率 (Power)", value: "3W - 120W (定宽无极调压自适应)" },
            { label: "防护等级 (IP Code)", value: "IP68 (一体成型灌封极防水设计)" },
            { label: "静承扬程 (Lift Head)", value: "1.5米 - 9.0米 / 恒压流量反馈" },
            { label: "运行能级 (Efficiency)", value: "电机系统最高效能超 85%" }
          ],
          applications: [
            "家用壁挂炉变频水泵",
            "智能恒温热水器增压循环泵",
            "大型水族箱防堵微型静音泵",
            "新能源电池循环液冷泵"
          ]
        },
        {
          id: "industrial-fan",
          name: "工业风机驱动方案",
          desc: "专为大功率工业排风扇、厂房新风换气系统打造，支持高压无感、高额抗逆风起动能力，RS485集中调控，安全防护极其过硬。",
          imgUrl: "https://cos3.solepic.com/20200710/b_5483152202007101419181350.jpg",
          features: [
            "超强瞬时逆风定位启动，防逆转强力吹阻安全起转",
            "有源功率因数校正级 (APFC)，功率因数 PF > 0.98，谐波极低",
            "标配工业级双路隔离 RS485 (Modbus-RTU) 现场集控总线",
            "超长长寿命双向重载防烧板、智能自适应过流闭环截断"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "AC 85V - 265V 50/60Hz (宽网压设计)" },
            { label: "额定输出功率 (Rated Power)", value: "500W - 1500W (强力宽域平滑响应)" },
            { label: "磁场定向频率 (Frequency)", value: "20KHz 载波，极耳超静音高压逆变" },
            { label: "驱动效率 (Eff.)", value: "满载驱动效率大于 92%" },
            { label: "通信控制 (Control)", value: "RS485、0-10V模拟、PWM占空比、CAN 2.0 (可选)" }
          ],
          applications: [
            "仓储、厂房超大型通风机/风机",
            "现代化牧场/大棚新风循环系统",
            "大型冷却塔热交换机排风驱动",
            "工业管道及重型抽风设备"
          ]
        },
        {
          id: "duct-fan",
          name: "管道风机驱动方案",
          desc: "适用于商用与家用高效率新风管道机、斜流风箱。能效比突出，契合低振动，支持风道静压回风与气流量闭环恒定。",
          imgUrl: "https://t11.baidu.com/it/u=1467752200,4029324511&fm=199&app=68&f=JPEG?w=750&h=644&s=013879924A957BED3890D856030040E1?auto=format&fit=crop&w=600&q=80",
          features: [
            "闭环恒风量(Constant CFM)控制系统，管阻增加自加电压补偿",
            "超微振动正弦波控制，电机运转噪音降低 65%",
            "支持对接 PM2.5 / 湿度 / CO2 传感器进行多重自动关联调速",
            "超小超薄单层 PCB 架构，便捷装配于风盘或管道壳体"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "AC 110V / 220V 50Hz" },
            { label: "额定功率 (Power)", value: "30W - 250W" },
            { label: "风量控制精度 (Accuracy)", value: "目标流速控制差额 < 3%" },
            { label: "运行环温 (Tamb)", value: "-25°C 至 +60°C (耐低温防潮运行)" },
            { label: "安全证书 (Safety)", value: "契合 CCC 强制认证与 Class B 家电电磁兼容" }
          ],
          applications: [
            "新风机组分户式管道净化风机",
            "酒店/写字楼盘管末端斜流风机",
            "智能超静音厨房换气机",
            "高层住宅防回流管道排风扇"
          ]
        },
        {
          id: "handheld-vacuum",
          name: "手持吸尘器驱动方案",
          desc: "专为手持高端锂电池无负载超高速吸尘风机研发，毫秒级骤速响应启动，极致效率设计，大幅拓宽整机无线续航里程。",
          imgUrl: "https://aisearch.cdn.bcebos.com/fileManager/ORzw3plTFO3Ebl9Z-jcgag/1780559100827ZuuLSm.png?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2026-06-04T07%3A45%3A04Z%2F86400%2Fhost%2Faae4e99602e03d8dbb25c882bcccd7fbfd8f09f5fe6f7c00aef085a650144081?auto=format&fit=crop&w=600&q=80",
          features: [
            "0.2秒极瞬时平稳启动运转（100,000 RPM满速响应）",
            "极宽广功率自适应切档，轻量化智能过载恒扭矩拉阻",
            "超宽直流直流段调压供能技术，单板全合一极精简元器件占位",
            "极小单板空间高功率密度，完美融入电池枪握把内部"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "DC 12V - 30V (3S - 8S锂电池组直供)" },
            { label: "额定功率 (Power)", value: "100W - 350W (大吸力无感高效矢量)" },
            { label: "最大调控转速 (Speed)", value: "最高 110,000 RPM (宽输出阻抗控制)" },
            { label: "电机系统效率 (Eff.)", value: "满排最大系统能效比达 90%" },
            { label: "温控防护 (Safety)", value: "单节电芯温控侦测、电流死锁硬关断" }
          ],
          applications: [
            "便携式手持床单除螨仪",
            "大吸力多功能无线手持吸尘器",
            "车载紧凑级别微型强力吸尘器",
            "高端手持吹折气动除尘吹风机"
          ]
        },
        {
          id: "robot-vacuum",
          name: "扫地宝驱动方案",
          desc: "集吸尘风扇、清扫滚刷、以及双向行走边轮驱动于一体。低速大扭力脱困脱卡算法让行进路线智控如常，拥有数十类家电可靠性测试标准。",
          imgUrl: "https://img0.baidu.com/it/u=2139681693,4060028397&fm=253&app=138&f=JPEG?w=800&h=1066?auto=format&fit=crop&w=600&q=80",
          features: [
            "风机+双轮行走+主刷+边刷全直流无刷全系统整合配套方案",
            "边行走轮系防卡退困，遇高毛毯、厚障碍电驱动大电流强转起步",
            "微安级（< 15μA）极智待机低功耗，让电池存放损耗逼近于零",
            "主板隔离带保护，大面积防水、抗污、防腐尘埃涂层特殊处理"
          ],
          specs: [
            { label: "主供电电压 (Voltage)", value: "DC 14.4V - 16.8V (适配多阶电池包)" },
            { label: "主机集成功耗 (Load)", value: "主吸风30W + 滚刷45W + 行走20W×2" },
            { label: "控制总线与通信 (Comm.)", value: "全硬件 I2C / SPI 高速数字传感器联动" },
            { label: "静态深待机 (Standby)", value: "≤ 12uA 极限长备用节电" },
            { label: "运行温区 (Temp)", value: "-10°C 至 +55°C (适应家庭温差)" }
          ],
          applications: [
            "全智能全自动家用扫地机器人",
            "商用智能工厂搬运及高负荷扫拖机",
            "手持多功能全自吸尘滚刷洗地机",
            "安防特种全天候微履带巡逻小车"
          ]
        },
        {
          id: "air-purifier",
          name: "空气净化器驱动方案",
          desc: "打造极致静密居住体验。支持智能灰尘探头及气体颗粒浓度反馈环算法。配合低转差正弦波，完美融汇现代人居生活要求。",
          imgUrl: "https://editerupload.eepw.com.cn/202211/1669778864367303.jpg?auto=format&fit=crop&w=600&q=80",
          features: [
            "25dB(A)极致睡眠微风控制，彻底隔离一切高频电流沙沙声",
            "集滤网脏堵感知与电机负载电流反向预测自调补偿风压技术",
            "零过渡超平缓转速调整，避免陡增转速带来的声场异噪感",
            "支持一键整合智能红外及激光PM2.5数值监测模块"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "AC 100V - 240V 全球网压自适应" },
            { label: "额定驱动功率 (Power)", value: "15W - 75W (极客超低能耗比)" },
            { label: "风流效率 (Efficiency)", value: "风机效率最大提高 12%，耗电降低 20%" },
            { label: "无级调速范围 (Speed Range)", value: "50 RPM - 2200 RPM 无阶梯调节" },
            { label: "待机静态功耗 (Standby)", value: "< 0.3W 符合全球六级能效考核要求" }
          ],
          applications: [
            "家用智能空气净化器",
            "中大型新风净化机组及加湿一体机",
            "卧室床头静密除甲醛智能小风扇",
            "医疗隔离床舱空气内循环消毒箱"
          ]
        },
        {
          id: "server-fan",
          name: "服务器风机驱动方案",
          desc: "针对云端高精密度机房、高性能算力中心量身打造的冗余风扇驱动。超强散热、数字化敏捷遥测，多重热备份容灾控制保护。",
          imgUrl: "https://gips0.baidu.com/it/u=3668750742,682842938&fm=3066&app=3066&f=JPEG?w=1478&h=1478?auto=format&fit=crop&w=600&q=80",
          features: [
            "支持系统在线带电热插拔 (Hot-Swap)，内置大感性冲击软限制",
            "PMBus / I2C 数字通信接口，风机运行温度/时速故障实时上报",
            "极冷启动保护与超平稳转速跟随阻尼，整批风机谐振微幅削弱",
            "特选特硬军工级耐热板材，胜任 85°C 环温服务器满载持续运行"
          ],
          specs: [
            { label: "输入电压 (Voltage)", value: "DC 12V 标配 (支持直流 DC 48V 超高压版)" },
            { label: "最大功率 (Max Power)", value: "板载大电流承受可达 120W (如80*80型双扇)" },
            { label: "通信标准 (Bus Standard)", value: "标准 I2C/SMBus/PMBus 智能物联调测" },
            { label: "不间断测试 (MTTF)", value: "不低于 150,000 小时 (全天候连续不宕机)" },
            { label: "测试规范 (Standard)", value: "轻松过美规 FCC、欧规 CE 重型工业干扰认证" }
          ],
          applications: [
            "大型云算力数据中心 4U/2U 机架服务器散热",
            "超级计算机高负荷整机热交换强排风扇",
            "5G 宏基站室外防水耐热机壳热交换机",
            "高端变频电源 and 专业电焊机高压冷风扇"
          ]
        }
      ]
    },
    contact: {
      title: "联系我们",
      hqTitle: "英倍朗 | 总部",
      branchesTitle: "办事处",
      qrTitle: "扫码联系助理",
      hq: {
        label: "深圳总部",
        phone: "0755-83946086 / 18682484008",
        address: "深圳市宝安区新安新安街道72区杨田路德至高科技园8A2栋412"
      },
      branches: [
        {
          label: "英倍朗 | 江苏",
          contactPerson: "曹总",
          phone: "18666465258",
          address: "江苏省苏州市高新区珠江路511号"
        },
        {
          label: "英倍朗 | 湖南",
          contactPerson: "张军",
          phone: "15388914749",
          address: "湖南省长沙市岳麓区潇湘中路靳江社区二期26栋101单元701"
        }
      ],
      website: "www.inborun.com"
    },
    footer: {
      copyright: "© 2024 深圳英倍朗科技有限公司 版权所有"
    },
    solutionDetails: {
      bldc: {
        sidebarTitle: "产品分类",
        rootCategories: BRANDS_LIST_ZH,
        moreText: "更多",
        backButton: "返回首页"
      },
      mcu: {
        sidebarTitle: "产品分类",
        rootCategories: BRANDS_LIST_ZH,
        moreText: "更多",
        backButton: "返回首页"
      },
      bms: {
        sidebarTitle: "产品分类",
        rootCategories: BRANDS_LIST_ZH,
        moreText: "更多",
        backButton: "返回首页"
      }
    }
  },
  en: {
    nav: {
      logoMain: "INBORUN",
      logoHighlight: "TECH",
      home: "Home",
      logo: "",
      about: "About Us",
      solutions: "Solutions",
      products: "Products",
      contact: "Contact"
    },
    hero: {
      title: "Leading Intelligent Electronics Solutions",
      subtitle: "Specializing in BLDC Motors, MCU Control, and BMS Energy Storage Management.",
      cta: "Explore Solutions"
    },
    about: {
      title: "About Inborun",
      description: [
        "Shenzhen Inborun Technology Co., Ltd.'s core team has been deeply involved in the electronic components industry for over 10 years, headquartered in Shenzhen. Relying on experienced engineering R&D strength and a mature market service system, the company has built a complete business chain covering solution design, technical support, and market sales.",
        "We focus on the R&D and application of BLDC brushless DC motor drive solutions and BMS battery charge/discharge management systems. Our products are widely used in photovoltaic energy, energy storage inverters, consumer electronics, industrial control, robotics, and other fields.",
        "We are committed to becoming a leading intelligent electronic solution provider in the industry, creating value for customers with reliable products and perfect services."
      ],
      valuesTitle: "Core Values",
      values: [
        { title: "Professional", desc: "Industry expertise" },
        { title: "Focused", desc: "Core concentration" },
        { title: "Dedicated", desc: "Consistent service" }
      ],
      servicesTitle: "Our Services",
      services: [
        "Chip Selection & Tech Consulting",
        "Motor Drive & BMS Design",
        "App Development & Debugging",
        "Pre/Post-sales Technical Support"
      ]
    },
    solutions: {
      title: "Our Solutions",
      subtitle: "Powering your products with core technology",
      categories: [
        {
          id: 'bldc',
          title: "BLDC Solutions",
          items: ["High-power Fans", "Water Pumps", "Blowers", "Electric Trimmers", "High-speed Hair Dryers", "Snow Blowers"],
          iconName: 'bldc'
        },
        {
          id: 'mcu',
          title: "MCU Solutions",
          items: ["High-temp Warning Systems", "EV Smart Drainage", "Wading Warning Systems", "Infrared Monitoring"],
          iconName: 'mcu'
        },
        {
          id: 'bms',
          title: "Energy Storage Management",
          items: ["400W Charge/Discharge System", "40W Charge/Discharge System", "BMS Management"],
          iconName: 'bms'
        }
      ]
    },
    products: {
      title: "Products",
      subtitle: "Focusing on core solutions for BLDC brushless motor drive control and smart electronics systems.",
      viewDetailText: "View Detail",
      keyFeaturesText: "Key Features",
      techSpecsText: "Technical Specs",
      typicalAppsText: "Typical Applications",
      backButton: "Back to Products",
      list: [
        {
          id: "high-speed-hair-dryer",
          name: "High-speed Hair Dryer Solution",
          desc: "Tailored for high-speed hair dryers and smart hair blowers. Supports 100,000 to 120,000 RPM high-speed motor closed-loop vector control. Highly efficient, ultra-quiet, and smart temperature regulation.",
          imgUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
          features: [
            "Closed-loop speed control supporting stable operation up to 120,000 RPM",
            "Sensorless Field-Oriented Control (FOC) algorithm, motor operating noise below 55dB",
            "Smart temperature coupling constant control within ±1°C accuracy",
            "Zero-latency ultra-fast start and stop brake mechanism with anti-hair-suction fail-safe"
          ],
          specs: [
            { label: "Input Voltage", value: "AC 220V 50Hz (or DC 310V)" },
            { label: "Rated Power", value: "Motor max 150W (Heating coil power 1400W-1600W)" },
            { label: "Max Speed", value: "120,000 RPM (Closed-loop vector FOC)" },
            { label: "Speed Control", value: "3-gear physical touch / continuous slider speed adjustment" },
            { label: "Core Algorithm", value: "Sensorless FOC" },
            { label: "Protective Measures", value: "Overheating detection, phase disconnection, overcurrent protection" }
          ],
          applications: [
            "Household high-speed hair dryers",
            "Salon-grade premium hair blowers",
            "Miniature air purifiers with high-speed turbine",
            "High-suction hand-pumps"
          ]
        },
        {
          id: "vf-water-pump",
          name: "Variable Frequency Water Pump Solution",
          desc: "Widely used in water heaters, wall-hung boilers, brushless diving pumps, and fish tank circulation systems. IP68 waterproof design, ultra-quiet, and high-sensitivity dry-run protection.",
          imgUrl: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&q=80",
          features: [
            "Sensorless sinewave quiet drive with operating noise below 30dB",
            "Self-developed dry-run protection, auto-shutdown when empty, periodic wake-up trial",
            "Comprehensive protection: anti-reverse, undervoltage, and automatic lock-rotor recovery",
            "Supports PWM, 0-10V, and smart serial communication speed reference inputs"
          ],
          specs: [
            { label: "Input Voltage", value: "DC 12V / 24V / 48V or AC 220V" },
            { label: "Rated Power", value: "3W - 120W (Continuous adaptive regulation)" },
            { label: "IP Rating", value: "IP68 (Waterproof encapsulation)" },
            { label: "Static Lift Head", value: "1.5m - 9.0m with constant pressure feedback" },
            { label: "Max Efficiency", value: "Total motor system efficiency > 85%" }
          ],
          applications: [
            "Wall-hung boiler frequency-controlled circulation pumps",
            "Smart water heater booster pumps",
            "Ultra-quiet fish tank circulation units",
            "New Energy electric vehicle liquid cooling pumps"
          ]
        },
        {
          id: "industrial-fan",
          name: "Industrial Fan Drive Solution",
          desc: "Optimized for heavy-duty industrial exhaust systems, warehouse ventilation, and smart greenhouse blowers. Strong anti-wind reversing start, RS485 network control, and robust hardware design.",
          imgUrl: "https://images.unsplash.com/photo-1599740831618-2430030058b7?auto=format&fit=crop&w=600&q=80",
          features: [
            "Excellent wind resistance start, robust anti-reverse start, and instant rotor capture",
            "Active Power Factor Correction (APFC), power factor PF > 0.98, extremely low grid harmonics",
            "Equipped with standard isolated industrial-grade RS485 (Modbus-RTU) fieldbus",
            "High reliability heavy-current board design, smart cycle-by-cycle overcurrent protection"
          ],
          specs: [
            { label: "Input Voltage", value: "AC 85V - 265V 50/60Hz (Wide grid range)" },
            { label: "Rated Output", value: "500W - 1500W (Continuous heavy duty load)" },
            { label: "Carrier Frequency", value: "20KHz silent FOC high-voltage drive representation" },
            { label: "Driver Efficiency", value: "Full-load driver efficiency exceeding 92%" },
            { label: "Control Interfaces", value: "RS485, 0-10V analog, PWM, CAN 2.0 (Optional)" }
          ],
          applications: [
            "Warehouse and workshop large ventilation blowers",
            "Farmland and smart greenhouse fresh-air systems",
            "Heavy exhaust systems in cooling towers",
            "Industrial industrial duct air-extractors"
          ]
        },
        {
          id: "duct-fan",
          name: "In-line Duct Fan Drive Solution",
          desc: "Designed for commercial and residential high-efficiency HVAC duct fans. Outstanding energy ratio, smooth low-vibration sinewave vector algorithm, and constant airflow pressure tracking.",
          imgUrl: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=600&q=80",
          features: [
            "Constant Flow (CFM) control system, voltage auto-compensates for duct static resistance",
            "Sinewave low-vibration vector drive reduces operating acoustic noise by 65%",
            "Direct digital linkages to PM2.5, Humidity, and CO2 sensors for automatic speed-by-demand",
            "Thin low-profile single-layer PCB outline, simple integration into tight blower shell spaces"
          ],
          specs: [
            { label: "Input Voltage", value: "AC 110V / 220V 50Hz" },
            { label: "Rated Power", value: "30W - 250W" },
            { label: "Airflow Control Accuracy", value: "Target airflow offset < 3%" },
            { label: "Ambient Temp Range", value: "-25°C to +60°C (Anti-humidity protective coating)" },
            { label: "Certifications", value: "Designed to meet CCC standard and Class B appliance EMC" }
          ],
          applications: [
            "Fresh-air ventilation systems & indoor air ducts",
            "Hotel / Office building fan-coil auxiliary blowers",
            "Smart ultra-silent kitchen exhaust fans",
            "High-rise residential anti-backdraft air duct systems"
          ]
        },
        {
          id: "handheld-vacuum",
          name: "Handheld Vacuum Cleaner Solution",
          desc: "Highly integrated brushless motor controller for cordless high-vacuum hand held dust catchers. Millisecond fast ramp-up startup, maximum energy-saving vector control to extend batterylife.",
          imgUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
          features: [
            "Instant ramp-up to 100,000 RPM top speed in just 0.2 seconds",
            "Dynamic load adaptation with constant torque limit prevents unexpected stalls",
            "Support wide range of battery stack voltage inputs, minimalistic high-efficiency SMD bill of materials",
            "High power density in an extremely compact layout fitting perfectly inside gun handles"
          ],
          specs: [
            { label: "Input Voltage", value: "DC 12V - 30V (Directly fed from 3S-8S lithium battery packs)" },
            { label: "Rated Power", value: "100W - 350W (Max suction FOC)" },
            { label: "Maximum Drive RPM", value: "Up to 110,000 RPM closed loop" },
            { label: "Total Efficiency", value: "Motor system maximum efficiency gets to 90%" },
            { label: "Safety System", value: "Single-cell overtemperature monitoring, hardware overcurrent trip" }
          ],
          applications: [
            "Portable cordless dust and bed mites remover",
            "Powerful wireless handheld vacuum cleaners",
            "Automotive compact powerful handheld vacuums",
            "High-end micro electronic dust blowout blowers"
          ]
        },
        {
          id: "robot-vacuum",
          name: "Robot Sweep and Vacuum Solution",
          desc: "All-in-one companion driving suction turbine, main sweep brush, and dual wheels. High low-speed torque and intelligent stall/stuck extraction logic makes it navigate gracefully.",
          imgUrl: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80",
          features: [
            "Provides unified drive system handling suction, roll brushes, side sweeps and dual wheels",
            "Smart anti-entanglement, wheel stall extraction boosts torque when crossing thick carpets",
            "Deep sleep low standby current consumption (< 15μA) maximizes battery storage shelf-life",
            "Protective isolation borders, dust-resistant, waterproof and anti-oxidation coating on PCB"
          ],
          specs: [
            { label: "Operating Voltage", value: "DC 14.4V - 16.8V (Suits multiple battery pack types)" },
            { label: "Power Ratings", value: "Suction Fan 30W + Main Brush 45W + Wheels 20W×2" },
            { label: "Bus Communication", value: "Hardware I2C / SPI linkages for immediate sensors coordinate" },
            { label: "Standby Current", value: "≤ 12uA ultra standby saving" },
            { label: "Operating Temp Range", value: "-10°C to +55°C" }
          ],
          applications: [
            "Fully automated smart household robotic vac-and-mops",
            "Commercial floor sweepers & industrial warehouse cleaners",
            "Handheld active wash sweep wet-and-dry systems",
            "Autonomous patrol track chassis platforms"
          ]
        },
        {
          id: "air-purifier",
          name: "Air Purifier Drive Solution",
          desc: "Engineered for an absolutely silent environment. Supports smart dust sensor and indoor air particulates load feedback loop. Keeps sound footprint incredibly low.",
          imgUrl: "https://images.unsplash.com/photo-1626270119854-c9da2c59a72d?auto=format&fit=crop&w=600&q=80",
          features: [
            "Inaudible 25dB(A) minimum nocturnal operation, suppressing all high-frequency motor noise",
            "Smart system identifies pressure delta when filter is clogged and automatically increments RPM",
            "Seamless transition speed acceleration avoids acoustic jumps inside silent bedrooms",
            "Direct interface to smart infrared and laser PM2.5 tracking modules"
          ],
          specs: [
            { label: "Input Voltage", value: "AC 100V - 240V Universal input" },
            { label: "Rated Power", value: "15W - 75W (Ultra high energy score ratio)" },
            { label: "Airflow Advantage", value: "Fan efficiency increased by 12%, power consumed decreased by 20%" },
            { label: "Speed Control Range", value: "50 RPM - 2200 RPM continuous non-stepped control" },
            { label: "Standby Power Draw", value: "< 0.3W complying with Energy Star Tier 6 constraints" }
          ],
          applications: [
            "Smart domestic air purifiers",
            "Medium to large ventilational humidifiers and filter units",
            "Bedroom bedside anti-formaldehyde smart fans",
            "Clinical isolation cabin air disinfection containers"
          ]
        },
        {
          id: "server-fan",
          name: "Server Cooling Fan Solution",
          desc: "High-rpm redundant design for server and data rooms. High air pressure, real-time digital telemetries diagnostic, and robust environmental resilience.",
          imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
          features: [
            "Supports on-the-fly Hot-Swap protection, limits initial current surges",
            "SMBus / PMBus interface reporting speed, current and alarm flags in realtime",
            "Cold-start thermal management and smooth rotational speed transition to prevent vibration resonance",
            "Industrial military-grade components tolerating 85°C high-temperature under constant load"
          ],
          specs: [
            { label: "Input Voltage", value: "DC 12V / 48V (Dual options)" },
            { label: "Maximum Power", value: "Capable of routing up to 120W (High-power server modules)" },
            { label: "Interface Standard", value: "Digital I2C / SMBus / PMBus smart monitoring" },
            { label: "Expected Lifespan", value: "MTTF  150,000 Hours continuous 24/7 load" },
            { label: "Compliance Standard", value: "Certified with heavy industrial industrial level CE/FCC EMC" }
          ],
          applications: [
            "Data centers and cloud compute nodes rack chassis 4U / 2U cooling",
            "Supercomputer units heavy-discharge airflow extraction",
            "5G Macro base station waterproof high temperature housing ventilation",
            "Premium frequency inverters & professional welders forced cold wind supply"
          ]
        }
      ]
    },
    contact: {
      title: "Contact Us",
      hqTitle: "Inborun | HQ",
      branchesTitle: "Branch Offices",
      qrTitle: "Scan for Support",
      hq: {
        label: "Shenzhen HQ",
        phone: "+86 0755-83946086 / +86 18682484008",
        address: "Room 412, Bldg 8A2, Dezhigao Tech Park, Yangtian Rd, District 72, Xin'an St, Bao'an, Shenzhen"
      },
      branches: [
        {
          label: "Inborun | Jiangsu",
          contactPerson: "Mr. Cao",
          phone: "18666465258",
          address: "No. 511 Zhujiang Road, High-tech Zone, Suzhou, Jiangsu"
        },
        {
          label: "Inborun | Hunan",
          contactPerson: "Zhang Jun",
          phone: "15388914749",
          address: "Room 701, Unit 101, Bldg 26, Phase 2, Jinjiang Community, Xiaoxiang Middle Rd, Yuelu Dist, Changsha, Hunan"
        }
      ],
      website: "www.inborun.com"
    },
    footer: {
      copyright: "© 2024 Shenzhen Inborun Technology Co., Ltd. All Rights Reserved."
    },
    solutionDetails: {
      bldc: {
        sidebarTitle: "Product Categories",
        rootCategories: BRANDS_LIST_EN,
        moreText: "More",
        backButton: "Back to Home"
      },
      mcu: {
        sidebarTitle: "Product Categories",
        rootCategories: BRANDS_LIST_EN,
        moreText: "More",
        backButton: "Back to Home"
      },
      bms: {
        sidebarTitle: "Product Categories",
        rootCategories: BRANDS_LIST_EN,
        moreText: "More",
        backButton: "Back to Home"
      }
    }
  }
};