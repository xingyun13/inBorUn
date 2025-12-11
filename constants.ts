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
      home: "首页",
      about: "关于我们",
      solutions: "解决方案",
      partners: "芯片代理",
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
    partners: {
      title: "芯片代理品牌",
      subtitle: "携手顶级半导体厂商，提供优质元器件供应",
      list: [
        { name: "国民技术 (Nationstech)", imgUrl: "	https://www.nationstech.com/dist/images/logo2.png" },
        { name: "永源微 (YONGERVIA)", imgUrl: "https://e-eway.oss-cn-shenzhen.aliyuncs.com/image/brand/587929381951902249.png" },
        { name: "顾邦半导体 (Good-Ark)", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5YfapjNQJAccQMSYR_wfvG-Lls4LT7vjcA&s" },
        { name: "三易精工 (SANYI)", imgUrl: "	https://img.36krcdn.com/20220810/v2_88300cc1966249df990b405f8371899c_img_000" },
        { name: "黄宝石电容", imgUrl: "https://www.gdtopaz.com/img/b1.png" },
        { name: "南芯半导体 (Southchip)", imgUrl: "https://www.zenitron.com.tw/dist/assets/media/img/logo.svg" },
        { name: "森国科", imgUrl: "https://www.semiw.com/images/companyimg/72.png" },
        { name: "明达微", imgUrl: "https://32343334.s21i.faiusr.com/4/ABUIABAEGAAg146YsQYoz5nIazC7AjiZAg.png" },
        { name: "芯圣电子", imgUrl: "https://www.holychip.cn/Uploads/Temp/image/20230815/64dae81d53f26.png" },
        { name: "美浦森半导体", imgUrl: "https://img.36krcdn.com/20221026/v2_b326f9dbd2cb4259916f6794ef63fd4b_img_000" },
        { name: "奥伦德", imgUrl: "https://www.orient-opto.com/upload/sysconfigs/2022-09/6335335718c80.png" },
        { name: "丽隽 PLP", imgUrl: "http://www.pipsemi.com/images/up_images/logo.png" },
        // { name: "蓝宝 FUSE", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Lanbao" }
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
      about: "About Us",
      solutions: "Solutions",
      partners: "Partners",
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
    partners: {
      title: "Authorized Distributor",
      subtitle: "Partnering with top semiconductor manufacturers",
      list: [
        { name: "Nationstech", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Nationstech" },
        { name: "YONGERVIA", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=YONGERVIA" },
        { name: "Good-Ark", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Good-Ark" },
        { name: "SANYI", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=SANYI" },
        { name: "Huangbaoshi Caps", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=TOPAZ" },
        { name: "Southchip", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Southchip" },
        { name: "SenGuoKe", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=SGK" },
        { name: "Mingda Micro", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=MD" },
        { name: "Xinsheng Electronics", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Holychip" },
        { name: "Maplesemi", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Maplesemi" },
        { name: "Aolunde", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Orient" },
        { name: "Lijuan PLP", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Lijuan" },
        { name: "Lanbao FUSE", imgUrl: "https://placehold.co/200x80/f1f5f9/94a3b8?text=Lanbao" }
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