/**
 * 全国省市联动数据及最低工资标准
 */

export interface CityData {
  name: string;
  minWage: number; // 2026年最低工资标准（元/月）
}

export interface ProvinceData {
  name: string;
  cities: Record<string, CityData>;
}

export const provinceCityData: Record<string, ProvinceData> = {
  // 直辖市
  beijing: {
    name: '北京',
    cities: {
      beijing: { name: '北京', minWage: 2420 }
    }
  },
  shanghai: {
    name: '上海',
    cities: {
      shanghai: { name: '上海', minWage: 2740 }
    }
  },
  tianjin: {
    name: '天津',
    cities: {
      tianjin: { name: '天津', minWage: 2480 }
    }
  },
  chongqing: {
    name: '重庆',
    cities: {
      chongqing: { name: '重庆', minWage: 2580 }
    }
  },

  // 河北省
  hebei: {
    name: '河北省',
    cities: {
      shijiazhuang: { name: '石家庄', minWage: 2200 },
      tangshan: { name: '唐山', minWage: 2200 },
      qinhuangdao: { name: '秦皇岛', minWage: 2200 },
      handan: { name: '邯郸', minWage: 2200 },
      xingtai: { name: '邢台', minWage: 2200 },
      baoding: { name: '保定', minWage: 2200 },
      zhangjiakou: { name: '张家口', minWage: 2200 },
      chicheng: { name: '承德', minWage: 2200 },
      cangzhou: { name: '沧州', minWage: 2200 },
      langfang: { name: '廊坊', minWage: 2200 },
      hengshui: { name: '衡水', minWage: 2200 }
    }
  },

  // 山西省
  shanxi: {
    name: '山西省',
    cities: {
      taiyuan: { name: '太原', minWage: 2150 },
      datong: { name: '大同', minWage: 2150 },
      yangquan: { name: '阳泉', minWage: 2150 },
      changzhi: { name: '长治', minWage: 2150 },
      jincheng: { name: '晋城', minWage: 2150 },
      shuozhou: { name: '朔州', minWage: 2150 },
      jinzhong: { name: '晋中', minWage: 2150 },
      lvliang: { name: '吕梁', minWage: 2150 },
      yangzhou: { name: '忻州', minWage: 2150 }
    }
  },

  // 内蒙古自治区
  neimenggu: {
    name: '内蒙古自治区',
    cities: {
      huhehaote: { name: '呼和浩特', minWage: 2200 },
      baotou: { name: '包头', minWage: 2200 },
      wuhai: { name: '乌海', minWage: 2200 },
      chifeng: { name: '赤峰', minWage: 2200 },
      tongliao: { name: '通辽', minWage: 2200 },
      ordos: { name: '鄂尔多斯', minWage: 2200 },
      hulunbuir: { name: '呼伦贝尔', minWage: 2200 },
      bayannur: { name: '巴彦淖尔', minWage: 2200 },
      wulanchabu: { name: '乌兰察布', minWage: 2200 },
      xilinguole: { name: '锡林郭勒盟', minWage: 2200 },
      alxa: { name: '阿拉善盟', minWage: 2200 }
    }
  },

  // 辽宁省
  liaoning: {
    name: '辽宁省',
    cities: {
      shenyang: { name: '沈阳', minWage: 2300 },
      dalian: { name: '大连', minWage: 2300 },
      anshan: { name: '鞍山', minWage: 2300 },
      fushun: { name: '抚顺', minWage: 2300 },
      benxi: { name: '本溪', minWage: 2300 },
      dandong: { name: '丹东', minWage: 2300 },
      liaoyang: { name: '辽阳', minWage: 2300 },
      panjin: { name: '盘锦', minWage: 2300 },
      tieling: { name: '铁岭', minWage: 2300 },
      chaoyang: { name: '朝阳', minWage: 2300 }
    }
  },

  // 吉林省
  jilin: {
    name: '吉林省',
    cities: {
      changchun: { name: '长春', minWage: 2280 },
      jilin: { name: '吉林', minWage: 2280 },
      siping: { name: '四平', minWage: 2280 },
      liaoyuan: { name: '辽源', minWage: 2280 },
      tonghua: { name: '通化', minWage: 2280 },
      baicheng: { name: '白城', minWage: 2280 },
      songyuan: { name: '松原', minWage: 2280 },
      yanbian: { name: '延边朝鲜族自治州', minWage: 2280 }
    }
  },

  // 黑龙江省
  heilongjiang: {
    name: '黑龙江省',
    cities: {
      harbin: { name: '哈尔滨', minWage: 2300 },
      qiqihaer: { name: '齐齐哈尔', minWage: 2300 },
      daqing: { name: '大庆', minWage: 2300 },
      yichun: { name: '伊春', minWage: 2300 },
      jiamusi: { name: '佳木斯', minWage: 2300 },
      qitaihe: { name: '七台河', minWage: 2300 },
      mudanjiang: { name: '牡丹江', minWage: 2300 },
      heihe: { name: '黑河', minWage: 2300 },
      suihua: { name: '绥化', minWage: 2300 }
    }
  },

  // 江苏省
  jiangsu: {
    name: '江苏省',
    cities: {
      nanjing: { name: '南京', minWage: 2660 },
      xuzhou: { name: '徐州', minWage: 2660 },
      lianyungang: { name: '连云港', minWage: 2660 },
      淮安: { name: '淮安', minWage: 2660 },
      yancheng: { name: '盐城', minWage: 2660 },
      yangzhou: { name: '扬州', minWage: 2660 },
      taizhou: { name: '泰州', minWage: 2660 },
      nantong: { name: '南通', minWage: 2660 },
      suzhou: { name: '苏州', minWage: 2660 },
      wuxi: { name: '无锡', minWage: 2660 },
      changzhou: { name: '常州', minWage: 2660 },
      zhenjiang: { name: '镇江', minWage: 2660 }
    }
  },

  // 浙江省
  zhejiang: {
    name: '浙江省',
    cities: {
      hangzhou: { name: '杭州', minWage: 2660 },
      ningbo: { name: '宁波', minWage: 2660 },
      wenzhou: { name: '温州', minWage: 2660 },
      jiaxing: { name: '嘉兴', minWage: 2660 },
      huzhou: { name: '湖州', minWage: 2660 },
      shaoxing: { name: '绍兴', minWage: 2660 },
      jinhua: { name: '金华', minWage: 2660 },
      衢州: { name: '衢州', minWage: 2660 },
      lishui: { name: '丽水', minWage: 2660 },
      taizhou: { name: '台州', minWage: 2660 }
    }
  },

  // 安徽省
  anhui: {
    name: '安徽省',
    cities: {
      hefei: { name: '合肥', minWage: 2200 },
      wuhu: { name: '芜湖', minWage: 2200 },
      bengbu: { name: '蚌埠', minWage: 2200 },
      huainan: { name: '淮南', minWage: 2200 },
      maanshan: { name: '马鞍山', minWage: 2200 },
      huaibei: { name: '淮北', minWage: 2200 },
      tongling: { name: '铜陵', minWage: 2200 },
      anqing: { name: '安庆', minWage: 2200 },
      huangshan: { name: '黄山', minWage: 2200 },
      chuzhou: { name: '滁州', minWage: 2200 },
      fuyang: { name: '阜阳', minWage: 2200 },
      suzhou: { name: '宿州', minWage: 2200 },
      liuan: { name: '六安', minWage: 2200 },
      chizhou: { name: '池州', minWage: 2200 }
    }
  },

  // 福建省
  fujian: {
    name: '福建省',
    cities: {
      fuzhou: { name: '福州', minWage: 2320 },
      xiamen: { name: '厦门', minWage: 2320 },
      putian: { name: '莆田', minWage: 2320 },
      sanming: { name: '三明', minWage: 2320 },
      leqing: { name: '泉州', minWage: 2320 },
      zhangzhou: { name: '漳州', minWage: 2320 },
      longyan: { name: '龙岩', minWage: 2320 },
      nanping: { name: '南平', minWage: 2320 },
      ningde: { name: '宁德', minWage: 2320 }
    }
  },

  // 江西省
  jiangxi: {
    name: '江西省',
    cities: {
      nanchang: { name: '南昌', minWage: 2200 },
      jingdezhen: { name: '景德镇', minWage: 2200 },
      pingxiang: { name: '萍乡', minWage: 2200 },
      jiujiang: { name: '九江', minWage: 2200 },
      xinyu: { name: '新余', minWage: 2200 },
      yingtan: { name: '鹰潭', minWage: 2200 },
      ganzhou: { name: '赣州', minWage: 2200 },
      吉安: { name: '吉安', minWage: 2200 },
      yichun: { name: '宜春', minWage: 2200 },
      shangrao: { name: '上饶', minWage: 2200 }
    }
  },

  // 山东省
  shandong: {
    name: '山东省',
    cities: {
      jinan: { name: '济南', minWage: 2400 },
      qingdao: { name: '青岛', minWage: 2400 },
      zibo: { name: '淄博', minWage: 2400 },
      dongying: { name: '东营', minWage: 2400 },
      yantai: { name: '烟台', minWage: 2400 },
      weifang: { name: '潍坊', minWage: 2400 },
      jining: { name: '济宁', minWage: 2400 },
      taian: { name: '泰安', minWage: 2400 },
      weihai: { name: '威海', minWage: 2400 },
      rizhao: { name: '日照', minWage: 2400 },
      linyi: { name: '临沂', minWage: 2400 },
      dezhou: { name: '德州', minWage: 2400 },
      聊城: { name: '聊城', minWage: 2400 },
      binzhou: { name: '滨州', minWage: 2400 },
      heze: { name: '菏泽', minWage: 2400 }
    }
  },

  // 河南省
  henan: {
    name: '河南省',
    cities: {
      zhengzhou: { name: '郑州', minWage: 2300 },
      kaifeng: { name: '开封', minWage: 2300 },
      luoyang: { name: '洛阳', minWage: 2300 },
      pingdingshan: { name: '平顶山', minWage: 2300 },
      anyang: { name: '安阳', minWage: 2300 },
      hebi: { name: '鹤壁', minWage: 2300 },
      xinxiang: { name: '新乡', minWage: 2300 },
      jiaozuo: { name: '焦作', minWage: 2300 },
      puyang: { name: '濮阳', minWage: 2300 },
      xuchang: { name: '许昌', minWage: 2300 },
      luohe: { name: '漯河', minWage: 2300 },
      sanmenxia: { name: '三门峡', minWage: 2300 },
      nanyang: { name: '南阳', minWage: 2300 },
      shangqiu: { name: '商丘', minWage: 2300 },
      zhoukou: { name: '周口', minWage: 2300 },
      zhumadian: { name: '驻马店', minWage: 2300 }
    }
  },

  // 湖北省
  hubei: {
    name: '湖北省',
    cities: {
      wuhan: { name: '武汉', minWage: 2520 },
      huangshi: { name: '黄石', minWage: 2520 },
      shiyan: { name: '十堰', minWage: 2520 },
      yichang: { name: '宜昌', minWage: 2520 },
      ezhou: { name: '鄂州', minWage: 2520 },
      xiaogan: { name: '孝感', minWage: 2520 },
      huanggang: { name: '黄冈', minWage: 2520 },
      xiangyang: { name: '襄阳', minWage: 2520 },
      enshi: { name: '恩施土家族苗族自治州', minWage: 2520 },
      xiantao: { name: '仙桃', minWage: 2520 },
      tianmen: { name: '天门', minWage: 2520 },
      qianjiang: { name: '潜江', minWage: 2520 }
    }
  },

  // 湖南省
  hunan: {
    name: '湖南省',
    cities: {
      changsha: { name: '长沙', minWage: 2300 },
      zhuzhou: { name: '株洲', minWage: 2300 },
      xiangtan: { name: '湘潭', minWage: 2300 },
      hengyang: { name: '衡阳', minWage: 2300 },
      shaoyang: { name: '邵阳', minWage: 2300 },
      yueyang: { name: '岳阳', minWage: 2300 },
      changde: { name: '常德', minWage: 2300 },
      yiyang: { name: '益阳', minWage: 2300 },
      chenzhou: { name: '郴州', minWage: 2300 },
      yongzhou: { name: '永州', minWage: 2300 },
      huaihua: { name: '怀化', minWage: 2300 },
      loudi: { name: '娄底', minWage: 2300 },
      xiangxi: { name: '湘西土家族苗族自治州', minWage: 2300 }
    }
  },

  // 广东省
  guangdong: {
    name: '广东省',
    cities: {
      guangzhou: { name: '广州', minWage: 2500 },
      shenzhen: { name: '深圳', minWage: 2520 },
      zhuhai: { name: '珠海', minWage: 2500 },
      shantou: { name: '汕头', minWage: 2500 },
      foshan: { name: '佛山', minWage: 2500 },
      jiangmen: { name: '江门', minWage: 2500 },
      yangjiang: { name: '阳江', minWage: 2500 },
      zhaoqing: { name: '肇庆', minWage: 2500 },
      huizhou: { name: '惠州', minWage: 2500 },
      meizhou: { name: '梅州', minWage: 2300 },
      shanwei: { name: '汕尾', minWage: 2300 },
      heyuan: { name: '河源', minWage: 2300 },
      jieyang: { name: '揭阳', minWage: 2300 },
      yunfu: { name: '云浮', minWage: 2300 }
    }
  },

  // 广西壮族自治区
  guangxi: {
    name: '广西壮族自治区',
    cities: {
      nanning: { name: '南宁', minWage: 2200 },
      liuzhou: { name: '柳州', minWage: 2200 },
      guilin: { name: '桂林', minWage: 2200 },
      wuzhou: { name: '梧州', minWage: 2200 },
      beihai: { name: '北海', minWage: 2200 },
      fangchenggang: { name: '防城港', minWage: 2200 },
      qinzhou: { name: '钦州', minWage: 2200 },
      guigang: { name: '贵港', minWage: 2200 },
      yulin: { name: '玉林', minWage: 2200 },
      baise: { name: '百色', minWage: 2200 },
      hezhou: { name: '贺州', minWage: 2200 },
      laibin: { name: '来宾', minWage: 2200 },
      chongzuo: { name: '崇左', minWage: 2200 }
    }
  },

  // 海南省
  hainan: {
    name: '海南省',
    cities: {
      haikou: { name: '海口', minWage: 2380 },
      sanya: { name: '三亚', minWage: 2380 },
      sansha: { name: '三沙', minWage: 2380 }
    }
  },

  // 四川省
  sichuan: {
    name: '四川省',
    cities: {
      chengdu: { name: '成都', minWage: 2380 },
      zigong: { name: '自贡', minWage: 2380 },
      panzhihua: { name: '攀枝花', minWage: 2380 },
      luzhou: { name: '泸州', minWage: 2380 },
      deyang: { name: '德阳', minWage: 2380 },
      mianyang: { name: '绵阳', minWage: 2380 },
      广元: { name: '广元', minWage: 2380 },
      suining: { name: '遂宁', minWage: 2380 },
      neijiang: { name: '内江', minWage: 2380 },
      leshan: { name: '乐山', minWage: 2380 },
      nan充: { name: '南充', minWage: 2380 },
      眉山: { name: '眉山', minWage: 2380 },
      宜宾: { name: '宜宾', minWage: 2380 },
      广安: { name: '广安', minWage: 2380 },
      达州: { name: '达州', minWage: 2380 },
      雅安: { name: '雅安', minWage: 2380 },
      巴中: { name: '巴中', minWage: 2380 },
      资阳: { name: '资阳', minWage: 2380 },
      阿坝: { name: '阿坝藏族羌族自治州', minWage: 2380 },
      甘孜: { name: '甘孜藏族自治州', minWage: 2380 },
      凉山: { name: '凉山彝族自治州', minWage: 2380 }
    }
  },

  // 贵州省
  guizhou: {
    name: '贵州省',
    cities: {
      guiyang: { name: '贵阳', minWage: 2200 },
      liupanshui: { name: '六盘水', minWage: 2200 },
      zunyi: { name: '遵义', minWage: 2200 },
      anshun: { name: '安顺', minWage: 2200 },
      tongren: { name: '铜仁', minWage: 2200 },
      bijie: { name: '毕节', minWage: 2200 },
      qiannan: { name: '黔南布依族苗族自治州', minWage: 2200 },
      qiandongnan: { name: '黔东南苗族侗族自治州', minWage: 2200 },
      qianxinan: { name: '黔西南布依族苗族自治州', minWage: 2200 }
    }
  },

  // 云南省
  yunnan: {
    name: '云南省',
    cities: {
      kunming: { name: '昆明', minWage: 2200 },
      qujing: { name: '曲靖', minWage: 2200 },
      yuxi: { name: '玉溪', minWage: 2200 },
      baoshan: { name: '保山', minWage: 2200 },
      zhaotong: { name: '昭通', minWage: 2200 },
      lijiang: { name: '丽江', minWage: 2200 },
      puer: { name: '普洱', minWage: 2200 },
      lincang: { name: '临沧', minWage: 2200 },
      diqing: { name: '迪庆藏族自治州', minWage: 2200 },
      nujiang: { name: '怒江傈僳族自治州', minWage: 2200 },
      wenshan: { name: '文山壮族苗族自治州', minWage: 2200 }
    }
  },

  // 西藏自治区
  xizang: {
    name: '西藏自治区',
    cities: {
      lhasa: { name: '拉萨', minWage: 2300 },
      shigatse: { name: '日喀则', minWage: 2300 },
      shannan: { name: '山南', minWage: 2300 },
      naqu: { name: '那曲', minWage: 2300 },
      ali: { name: '阿里', minWage: 2300 },
      linzhi: { name: '林芝', minWage: 2300 }
    }
  },

  // 陕西省
  shaanxi: {
    name: '陕西省',
    cities: {
      xian: { name: '西安', minWage: 2360 },
      tongchuan: { name: '铜川', minWage: 2360 },
      baoji: { name: '宝鸡', minWage: 2360 },
      xianyang: { name: '咸阳', minWage: 2360 },
      weinan: { name: '渭南', minWage: 2360 },
      hanzhong: { name: '汉中', minWage: 2360 },
      ankang: { name: '安康', minWage: 2360 },
      shangluo: { name: '商洛', minWage: 2360 }
    }
  },

  // 甘肃省
  gansu: {
    name: '甘肃省',
    cities: {
      lanzhou: { name: '兰州', minWage: 2200 },
      jiayuguan: { name: '嘉峪关', minWage: 2200 },
      jinchang: { name: '金昌', minWage: 2200 },
      baiyin: { name: '白银', minWage: 2200 },
      tianshui: { name: '天水', minWage: 2200 },
      wuwei: { name: '武威', minWage: 2200 },
      zhang: { name: '张掖', minWage: 2200 },
      pingliang: { name: '平凉', minWage: 2200 },
      qingyang: { name: '庆阳', minWage: 2200 },
      longnan: { name: '陇南', minWage: 2200 }
    }
  },

  // 青海省
  qinghai: {
    name: '青海省',
    cities: {
      xining: { name: '西宁', minWage: 2300 },
      haidong: { name: '海东', minWage: 2300 },
      hainan: { name: '海南州', minWage: 2300 },
      huangnan: { name: '黄南州', minWage: 2300 },
      guoluo: { name: '果洛州', minWage: 2300 },
      yushu: { name: '玉树州', minWage: 2300 },
      haixi: { name: '海西州', minWage: 2300 }
    }
  },

  // 宁夏回族自治区
  ningxia: {
    name: '宁夏回族自治区',
    cities: {
      yinchuan: { name: '银川', minWage: 2200 },
      shizuishan: { name: '石嘴山', minWage: 2200 },
      wuzhong: { name: '吴忠', minWage: 2200 },
      guyuan: { name: '固原', minWage: 2200 },
      zhongwei: { name: '中卫', minWage: 2200 }
    }
  },

  // 新疆维吾尔自治区
  xinjiang: {
    name: '新疆维吾尔自治区',
    cities: {
      urumqi: { name: '乌鲁木齐', minWage: 2300 },
      karamay: { name: '克拉玛依', minWage: 2300 },
      turpan: { name: '吐鲁番', minWage: 2300 },
      hami: { name: '哈密', minWage: 2300 },
      changji: { name: '昌吉回族自治州', minWage: 2300 },
      bayannur: { name: '巴音郭楞蒙古自治州', minWage: 2300 },
      aksu: { name: '阿克苏地区', minWage: 2300 },
      kizilsu: { name: '克州', minWage: 2300 },
      kashgar: { name: '喀什地区', minWage: 2300 },
      hotan: { name: '和田地区', minWage: 2300 },
      ili: { name: '伊犁哈萨克自治州', minWage: 2300 }
    }
  },

  // 台湾省
  taiwan: {
    name: '台湾省',
    cities: {
      taipei: { name: '台北', minWage: 2400 },
      taichung: { name: '台中', minWage: 2400 },
      kaohsiung: { name: '高雄', minWage: 2400 },
      tainan: { name: '台南', minWage: 2400 },
      taitung: { name: '台东', minWage: 2400 }
    }
  }
};

/**
 * 获取所有省份列表
 */
export function getProvinceList() {
  return Object.entries(provinceCityData).map(([key, data]) => ({
    key,
    name: data.name
  }));
}

/**
 * 获取指定省份的城市列表
 */
export function getCityListByProvince(provinceKey: string) {
  const province = provinceCityData[provinceKey];
  if (!province) return [];
  return Object.entries(province.cities).map(([key, data]) => ({
    key,
    name: data.name
  }));
}

/**
 * 获取指定城市的最低工资标准
 */
export function getMinWageByCity(provinceKey: string, cityKey: string): number {
  const province = provinceCityData[provinceKey];
  if (!province) return 2300; // 默认值
  const city = province.cities[cityKey];
  return city ? city.minWage : 2300;
}
