var hospitals = [{ name: '北京协和医院' ,pinyin1:'beijingxieheyiyuan',pinyin2:'bjxhyy' },{ name: '中国医学科学院肿瘤医院' ,pinyin1:'yikeyuanzhongliuyiyuan',pinyin2:'ykyzlyy' },{ name: '中国医学科学院阜外医院' ,pinyin1:'fuwaixinxueguanbingyiyuan',pinyin2:'fwxxgbyy' },{ name: '北京市大兴区妇幼保健院' ,pinyin1:'beijingdaxingqufuyoubaojianyuan',pinyin2:'bjdxqfybjy' },{ name: '北京市大兴区人民医院' ,pinyin1:'beijingdaxingqurenminyiyuan',pinyin2:'bjdxqrmyy',pinyin3:'大兴县医院' ,pinyin4:'daxingxianyiyuan'  },{ name: '北京市大兴区中西医结合医院' ,pinyin1:'beijingdaxingquzhongxiyijieheyiyuan',pinyin2:'bjdxqzxyjhyy' },{ name: '北京普祥中医肿瘤医院' ,pinyin1:'daxingpuxiangzhongyizhongliuyiyuan',pinyin2:'dxpxzyzlyy' },{ name: '北京市仁和医院' ,pinyin1:'beijingshirenheyiyuan',pinyin2:'bjsrhyy' },{ name: '中国中医科学院广安门医院南区' ,pinyin1:'zhongguozhongyikexueyuanguanganmenyiyuannanqu',pinyin2:'zgzykxygamyynq' ,pinyin3:'大兴区中医医院' ,pinyin4:'daxingquzhongyiyiyuan' },{ name: '北京市大兴区精神病医院' ,pinyin1:'beijingshidaxingqujingshenbingyiyuan',pinyin2:'bjsdxqjsbyy' },{ name: '北京大学第一医院' ,pinyin1:'beijingdaxuediyiyiyuan',pinyin2:'bjdxdyyy' },{ name: '首都医科大学附属北京潞河医院' ,pinyin1:'beijingshitongzhouquluheyiyuan',pinyin2:'bjstzqlhyy' },{ name: '北京肿瘤医院' ,pinyin1:'beijingzhongliuyiyuan',pinyin2:'bjzlyy' },{ name: '北京华信医院(清华大学第一附属医院)' ,pinyin1:'beijinghuaxinyiyuanqinghuadaxuediyifushuyiyuan',pinyin2:'bjhxyyqhdxdyfsyy' },{ name: '清华大学玉泉医院' ,pinyin1:'qinghuadaxueyuquanyiyuan',pinyin2:'qhdxyqyy',pinyin3:'清华大学第二附属医院',pinyin4:'qinghuadaxuedierfushuyiyuan' },{ name: '北京航天总医院' ,pinyin1:'hangtianzongyiyuan',pinyin2:'htzyy' ,pinyin3:'711医院' },{ name: '首都医科大学附属复兴医院（门诊部）' ,pinyin1:'shoudouyikedaxuefushufuxingyiyuan',pinyin2:'sdykdxfsfxyy' },{ name: '北京电力医院' ,pinyin1:'beijingdianliyiyuan',pinyin2:'bjdlyy' },{ name: '首都医科大学附属北京儿童医院' ,pinyin1:'shoudouyikedaxuefushubeijingertongyiyuan',pinyin2:'sdykdxfsbjetyy' },{ name: '北京朝阳医院本部' ,pinyin1:'beijingchaoyangyiyuanbenbu',pinyin2:'bjcyyybb' },{ name: '首都医科大学附属北京地坛医院' ,pinyin1:'shoudouyikedaxuefushubeijingditanyiyuan',pinyin2:'sdykdxfsbjdtyy',pinyin3:'第一传染病医院' ,pinyin4:'diyichuanranbingyiyuan' },{ name: '首都医科大学附属北京天坛医院' ,pinyin1:'shoudouyikedaxuefushubeijingtiantanyiyuan',pinyin2:'sdykdxfsbjttyy' },{ name: '首都儿科研究所附属儿童医院' ,pinyin1:'shoudouerkeyanjiusuofushuertongyiyuan',pinyin2:'sdekyjsfsetyy' },{ name: '北京大学第四临床医学院北京积水潭医院(新街口院区)' ,pinyin1:'beijingdaxuedisilinchuangyixueyuanbeijingjishuitanyiyuan',pinyin2:'bjdxdslcyxybjjstyy' },{ name: '首都医科大学附属北京妇产医院北京妇幼保健院东院' ,pinyin1:'shoudouyikedaxuefushubeijingfuchanyiyuanbeijingfuyoubaojianyuandongyuan',pinyin2:'sdykdxfsbjfcyybjfybjydy' },{ name: '首都医科大学附属北京同仁医院' ,pinyin1:'shoudouyikedaxuefushubeijingtongrenyiyuan',pinyin2:'sdykdxfsbjtryy' },{ name: '首都医科大学附属北京世纪坛医院' ,pinyin1:'shoudouyikedaxuefushubeijingshijitanyiyuan',pinyin2:'sdykdxfsbjsjtyy' },{ name: '首都医科大学附属北京胸科医院' ,pinyin1:'shoudouyikedaxuefushubeijingxiongkeyiyuan',pinyin2:'sdykdxfsbjxkyy' },{ name: '首都医科大学附属北京安贞医院' ,pinyin1:'shoudouyikedaxuefushubeijinganzhenyiyuan',pinyin2:'sdykdxfsbjazyy' },{ name: '首都医科大学附属北京口腔医院(天坛院区)' ,pinyin1:'shoudouyikedaxuefushubeijingkouqiangyiyuantiantanyuanqu',pinyin2:'sdykdxfsbjkqyyttyq' },{ name: '首都医科大学附属北京佑安医院' ,pinyin1:'shoudouyikedaxuefushubeijingyouanyiyuan',pinyin2:'sdykdxfsbjyayy' ,pinyin3:'第二传染病医院' ,pinyin4:'dierchuanranbingyiyuan'},{ name: '首都医科大学附属北京安定医院' ,pinyin1:'shoudouyikedaxuefushubeijingandingyiyuan',pinyin2:'sdykdxfsbjadyy' },{ name: '北京老年医院' ,pinyin1:'beijinglaonianyiyuan',pinyin2:'bjlnyy' },{ name: '首都医科大学宣武医院' ,pinyin1:'shoudouyikedaxuexuanwuyiyuan',pinyin2:'sdykdxxwyy' },{ name: '首都医科大学附属北京友谊医院' ,pinyin1:'shoudouyikedaxuefushubeijingyouyiyiyuan',pinyin2:'sdykdxfsbjyyyy' },{ name: '首都医科大学附属北京中医医院' ,pinyin1:'shoudouyikedaxuefushubeijingzhongyiyiyuan',pinyin2:'sdykdxfsbjzyyy' },{ name: '北京回龙观医院' ,pinyin1:'beijinghuilongguanyiyuan',pinyin2:'bjhlgyy' },{ name: '北京小汤山医院' ,pinyin1:'beijingxiaotangshanyiyuan',pinyin2:'bjxtsyy' },{ name: '中国中医科学院西苑医院' ,pinyin1:'zhongguozhongyikexueyuanxiyuanyiyuan',pinyin2:'zgzykxyxyyy' },{ name: '首都医科大学附属北京妇产医院北京妇幼保健院西院' ,pinyin1:'shoudouyikedaxuefushubeijingfuchanyiyuanbeijingfuyoubaojianyuanxiyuan',pinyin2:'sdykdxfsbjfcyybjfybjyxy' },{ name: '北京大学人民医院' ,pinyin1:'beijingdaxuerenminyiyuan',pinyin2:'bjdxrmyy' },{ name: '北京朝阳医院西区(石景山)' ,pinyin1:'beijingchaoyangyiyuanxiqushijingshan',pinyin2:'bjcyyyxqsjs' },{ name: '中国中医科学院广安门医院' ,pinyin1:'zhongguozhongyikexueyuanguanganmenyiyuan',pinyin2:'zgzykxygamyy' },{ name: '北京同仁医院南院(亦庄院区)' ,pinyin1:'beijingtongrenyiyuannanyuanyizhuangyuanqu',pinyin2:'bjtryynyyzyq' },{ name: '海军总医院' ,pinyin1:'haijunzongyiyuan',pinyin2:'hjzyy' },{ name: '首都医科大学三博脑科医院' ,pinyin1:'shouduyikedaxuesanbonaokeyiyuan',pinyin2:'sdykdxsbnkyy' },{ name: '北京大学第六医院' ,pinyin1:'beijingdaxuediliuyiyuan',pinyin2:'bjdxdlyy' },{ name: '武警总医院' ,pinyin1:'wujingzongyiyuan',pinyin2:'wjzyy' },{ name: '空军总医院' ,pinyin1:'kongjunzongyiyuan',pinyin2:'kjzyy' },{ name: '解放军二六一医院' ,pinyin1:'jiefangjunerliuyiyiyuan',pinyin2:'jfjelyyy',pinyin3:'261yy' },{ name: '煤炭总医院' ,pinyin1:'meitanzongyiyuan',pinyin2:'mtzyy' },{ name: '航天中心医院(原721医院)' ,pinyin1:'hangtianzhongxinyiyuanyuan721yiyuan',pinyin2:'htzxyyy721yy' },{ name: '北京大学口腔医院（魏公村总院)' ,pinyin1:'beijingdaxuekouqiangyiyuanweigongcunzongyuan',pinyin2:'bjdxkqyywgczy' },{ name: '中国中医科学院望京医院' ,pinyin1:'zhongguozhongyikexueyuanwangjingyiyuan',pinyin2:'zgzykxywjyy' },{ name: '北京中医药大学东直门医院' ,pinyin1:'beijingzhongyiyaodaxuedongzhimenyiyuan',pinyin2:'bjzyydxdzmyy' },{ name: '武警北京总队医院' ,pinyin1:'wujingbeijingzongduiyiyuan',pinyin2:'wjbjzdyy' },{ name: '武警北京总队第二医院' ,pinyin1:'wujingbeijingzongduidieryiyuan',pinyin2:'wjbjzddeyy' },{ name: '武警北京总队第三医院' ,pinyin1:'wujingbeijingzongduidisanyiyuan',pinyin2:'wjbjzddsyy' },{ name: '北京燕化医院' ,pinyin1:'beijingyanhuayiyuan',pinyin2:'bjyhyy' },{ name: '中国医学科学院阜外医院特需' ,pinyin1:'fuwaixinxueguanbingyiyuantexu',pinyin2:'fwxxgbyytx' },{ name: '民航总医院' ,pinyin1:'minhangzongyiyuan',pinyin2:'mhzyy' },{ name: '北京大学第三医院' ,pinyin1:'beijingdaxuedisanyiyuan',pinyin2:'bjdxdsyy',pinyin3:'beiyisanyuan'},{ name: '卫生部北京医院' ,pinyin1:'weishengbubeijingyiyuan',pinyin2:'wsbbjyy' },{ name: '解放军305医院' ,pinyin1:'jiefangjun305yiyuan',pinyin2:'jfj305yy' },{ name: '第二炮兵总医院' ,pinyin1:'dierpaobingzongyiyuan',pinyin2:'depbzyy' },{ name: '中国医学科学院整形外科医院' ,pinyin1:'zhongguoyixuekexueyuanzhengxingwaikeyiyuan',pinyin2:'zgyxkxyzxwkyy' },{ name: '北京中医药大学东方医院' ,pinyin1:'beijingzhongyiyaodaxuedongfangyiyuan',pinyin2:'bjzyydxdfyy' },{ name: '解放军307医院' ,pinyin1:'jiefangjun307yiyuan',pinyin2:'jfj307yy' },{ name: '北京大学首钢医院' ,pinyin1:'beijingdaxueshougangyiyuan',pinyin2:'bjdxsgyy' },{ name: '解放军总医院第一附属医院（304医院）' ,pinyin1:'jiefangjunzongyiyuandiyifushuyiyuan304yiyuan',pinyin2:'jfjzyydyfsyy304yy' },{ name: '北京军区总医院' ,pinyin1:'beijingjunquzongyiyuan',pinyin2:'bjjqzyy' ,pinyin3:'陆军总医院',pinyin4:'lujunzongyiyuan'},{ name: '北京博爱医院' ,pinyin1:'beijingboaiyiyuan',pinyin2:'bjbayy' },{ name: '北京京煤集团总医院' ,pinyin1:'beijingjingmeijituanzongyiyuan',pinyin2:'bjjmjtzyy' ,pinyin3:'矿务局总医院',pinyin4:'kuangwujuzongyiyuan'},{ name: '中国中医科学院眼科医院' ,pinyin1:'zhongguozhongyikexueyuanyankeyiyuan',pinyin2:'zgzykxyykyy' },{ name: '解放军306医院' ,pinyin1:'jiefangjun306yiyuan',pinyin2:'jfj306yy' },{ name: '解放军第302医院' ,pinyin1:'jiefangjundi302yiyuan',pinyin2:'jfjd302yy' },{ name: '解放军第二六三医院' ,pinyin1:'jiefangjundierliusanyiyuan',pinyin2:'jfjdelsyy',pinyin3:'263yy' },{ name: '北京市宣武中医医院' ,pinyin1:'beijingshixuanwuquzhongyiyiyuan',pinyin2:'bjsxwqzyyy' },{ name: '解放军第309医院' ,pinyin1:'jiefangjundi309yiyuan',pinyin2:'jfjd309yy' },{ name: '中国人民解放军总医院(301医院)' ,pinyin1:'zhongguorenminjiefangjunzongyiyuan301yiyuan',pinyin2:'zgrmjfjzyy301yy' },{ name: '北京市昌平区医院' ,pinyin1:'beijingshichangpingquyiyuan',pinyin2:'bjscpqyy' },{ name: '北京市垂杨柳医院' ,pinyin1:'beijingshichuiyangliuyiyuan',pinyin2:'bjscylyy' },{ name: '北京怀柔医院' ,pinyin1:'beijingshihuairouqudiyiyiyuan',pinyin2:'bjshrqdyyy' },{ name: '航空总医院' ,pinyin1:'hangkongzongyiyuan',pinyin2:'hkzyy',pinyin3:'361医院' },{ name: '北京市顺义区医院' ,pinyin1:'beijingshishunyiquyiyuan',pinyin2:'bjssyqyy' },{ name: '北京市东城区第二妇幼保健院（原崇文区妇幼保健院）' ,pinyin1:'beijingshichongwenqufuyoubaojianyuan',pinyin2:'bjscwqfybjy1' },{ name: '北京市鼓楼中医医院' ,pinyin1:'beijingshigulouzhongyiyiyuan',pinyin2:'bjsglzyyy' },{ name: '首都医科大学附属北京口腔医院(王府井院区)' ,pinyin1:'shoudouyikedaxuefushubeijingkouqiangyiyuanwangfujingyuanqu',pinyin2:'sdykdxfsbjkqyywfjyq' },{ name: '北京市顺义区空港医院' ,pinyin1:'beijingshishunyiqukonggangyiyuan',pinyin2:'bjssyqkgyy' },{ name: '北京市平谷区中医医院' ,pinyin1:'beijingshipingguquzhongyiyiyuan',pinyin2:'bjspgqzyyy' },{ name: '北京市平谷区医院' ,pinyin1:'beijingshipingguquyiyuan',pinyin2:'bjspgqyy' },{ name: '北京中医医院顺义医院' ,pinyin1:'beijingzhongyiyiyuanshunyiyiyuan',pinyin2:'bjzyyysyyy'},{ name: '北京中医药大学东直门医院东区（原北京市通州区中医医院）' ,pinyin1:'beijingshidongzhimenyiyuandongquyuantongzhouquzhongyiyiyuan',pinyin2:'bjsdzmyydqytzqzyyy' },{ name: '北京市和平里医院' ,pinyin1:'beijingshihepingliyiyuan',pinyin2:'bjshplyy' },{ name: '北京市普仁医院' ,pinyin1:'beijingshipurenyiyuan',pinyin2:'bjspryy' },{ name: '北京市第六医院' ,pinyin1:'beijingshidiliuyiyuan',pinyin2:'bjsdlyy' },{ name: '北京市东城区第一人民医院' ,pinyin1:'beijingshidongchengqudiyirenminyiyuan',pinyin2:'bjsdcqdyrmyy' },{ name: '北京市隆福医院' ,pinyin1:'beijingshilongfuyiyuan',pinyin2:'bjslfyy' },{ name: '北京市门头沟区中医医院' ,pinyin1:'beijingshimentougouquzhongyiyiyuan',pinyin2:'bjsmtgqzyyy' },{ name: '北京市西城区广外医院' ,pinyin1:'beijingshixichengquguangwaiyiyuan',pinyin2:'bjsxcqgwyy' },{ name: '北京市健宫医院' ,pinyin1:'beijingshijiangongyiyuan',pinyin2:'bjsjgyy' },{ name: '北京市第二医院' ,pinyin1:'beijingshidieryiyuan',pinyin2:'bjsdeyy' },{ name: '北京市回民医院' ,pinyin1:'beijingshihuiminyiyuan',pinyin2:'bjshmyy' },{ name: '北京市西城区展览路医院' ,pinyin1:'beijingshixichengquzhanlanluyiyuan',pinyin2:'bjsxcqzllyy' },{ name: '北京中医药大学附属护国寺中医医院' ,pinyin1:'beijingzhongyiyaodaxuefushuhuguosizhongyiyiyuan',pinyin2:'bjzyydxfshgszyyy' },{ name: '北京市房山区良乡医院' ,pinyin1:'beijingshifangshanquliangxiangyiyuan',pinyin2:'bjsfsqlxyy' },{ name: '北京市房山区第一医院' ,pinyin1:'beijingshifangshanqudiyiyiyuan',pinyin2:'bjsfsqdyyy' },{ name: '北京市门头沟区医院' ,pinyin1:'beijingmentougouquyiyuan',pinyin2:'bjmtgqyy' },{ name: '北京市房山区中医医院' ,pinyin1:'beijingshifangshanquzhongyiyiyuan',pinyin2:'bjsfsqzyyy' },{ name: '中国核工业北京四0一医院' ,pinyin1:'zhongguohegongyebeijingsi0yiyiyuan',pinyin2:'zghgybjs0yyy',pinyin3:'401yy' },{ name: '北京市上地医院' ,pinyin1:'beijingshishangdiyiyuan',pinyin2:'bjssdyy' },{ name: '北京市朝阳区中医医院' ,pinyin1:'beijingshichaoyangquzhongyiyiyuan',pinyin2:'bjscyqzyyy' },{ name: '北京市怀柔区中医医院' ,pinyin1:'beijingshihuairouquzhongyiyiyuan',pinyin2:'bjshrqzyyy' },{ name: '北京市朝阳区双桥医院' ,pinyin1:'beijingshichaoyangqushuangqiaoyiyuan',pinyin2:'bjscyqsqyy' },{ name: '北京市石景山医院' ,pinyin1:'beijingshishijingshanyiyuan',pinyin2:'bjssjsyy' },{ name: '北京市第一中西医结合医院' ,pinyin1:'beijingshidiyizhongxiyijieheyiyuan',pinyin2:'bjscyqdeyy' ,pinyin3:'朝阳第二医院',pinyin4:'小庄医院'},{ name: '北京首都机场医院' ,pinyin1:'beijingshoudouguojijichangyiyuan',pinyin2:'bjsdgjjcyy' },{ name: '北京丰台医院(桥南部)' ,pinyin1:'beijingfengtaiyiyuanqiaonanbu',pinyin2:'bjftyyqnb' },{ name: '北京丰台医院(桥北部)' ,pinyin1:'beijingfengtaiyiyuanqiaobeibu',pinyin2:'bjftyyqbb' },{ name: '北京市第一中西医结合医院东坝院区(原东坝医院)' ,pinyin1:'beijingshidiyizhongxiyijieheyiyuandongbayuanquyuandongbayiyuan',pinyin2:'bjscyqdeyydbyq' },{ name: '北京惠民中医儿童医院' ,pinyin1:'beijinghuiminzhongyiertongyiyuan',pinyin2:'bjhmzyetyy' },{ name: '北京市朝阳区妇儿医院(妇幼保健院)' ,pinyin1:'beijingshichaoyangqufueryiyuanfuyoubaojianyuan',pinyin2:'bjscyqfeyyfybjy' },{ name: '北京市密云县中医医院' ,pinyin1:'beijingshimiyunxianzhongyiyiyuan',pinyin2:'bjsmyxzyyy' },{ name: '北京市丰台区南苑医院' ,pinyin1:'beijingshifengtaiqunanyuanyiyuan',pinyin2:'bjsftqnyyy' },{ name: '北京市丰台区铁营医院' ,pinyin1:'beijingshifengtaiqutieyingyiyuan',pinyin2:'bjsftqtyyy' },{ name: '北京中医药大学第三附属医院' ,pinyin1:'beijingzhongyiyaodaxuedisanfushuyiyuan',pinyin2:'bjzyydxdsfsyy' ,pinyin3:'冶金医院',pinyin4:'yejinyiyuan' },{ name: '北京市中西医结合医院' ,pinyin1:'beijingshizhongxiyijieheyiyuan',pinyin2:'bjszxyjhyy' },{ name: '北京市密云县医院' ,pinyin1:'beijingshimiyunxianyiyuan',pinyin2:'bjsmyxyy' },{ name: '北京市延庆区医院' ,pinyin1:'beijingshiyanqingquyiyuan',pinyin2:'bjsyqqyy' },{ name: '北京市丰台中西医结合医院(原丰台区长辛店医院)' ,pinyin1:'zhangxindianyiyuan',pinyin2:'zxdyy' },{ name: '北京市中关村医院' ,pinyin1:'beijingshizhongguancunyiyuan',pinyin2:'bjszgcyy' },{ name: '清华大学医院' ,pinyin1:'qinghuadaxueyiyuan',pinyin2:'qhdxyy' },{ name: '北京水利医院' ,pinyin1:'beijingshuiliyiyuan',pinyin2:'bjslyy' },{ name: '北京大学医院' ,pinyin1:'beijingdaxueyiyuan',pinyin2:'bjdxyy' },{ name: '首都医科大学附属北京康复医院(北京工人疗养院)' ,pinyin1:'beijinggongrenliaoyangyuan',pinyin2:'bjgrlyy' },{ name: '北京市海淀医院' ,pinyin1:'beijinghaidianyiyuan',pinyin2:'bjhdyy' },{ name: '中国航天科工集团七三一医院' ,pinyin1:'zhongguohangtiankegongjituanqisanyiyiyuan',pinyin2:'zghtkgjtqsyyy',pinyin3:'731yy' },{ name: '北京延庆县中医医院' ,pinyin1:'beijingyanqingxianzhongyiyiyuan',pinyin2:'bjyqxzyyy' },{ name: '北京市昌平区南口医院' ,pinyin1:'beijingshichangpingqunankouyiyuan',pinyin2:'bjscpqnkyy' },{ name: '北京市石景山区中医医院' ,pinyin1:'beijingshishijingshanzhongyiyiyuan',pinyin2:'bjssjszyyy' },{ name: '北京市昌平区中医医院' ,pinyin1:'beijingshichangpingquzhongyiyiyuan',pinyin2:'bjscpqzyyy' },{ name: '北京市昌平区沙河医院' ,pinyin1:'beijingshichangpingqushaheyiyuan',pinyin2:'bjscpqshyy' },{ name: '北京市昌平区南口铁路医院' ,pinyin1:'beijingshichangpingqunankoutieluyiyuan',pinyin2:'bjscpqnktlyy' },{ name: '北京市肛肠医院(二龙路医院)' ,pinyin1:'beijingshigangchangyiyuanerlongluyiyuan',pinyin2:'bjsgcyyellyy' },{ name: '北京市昌平区妇幼保健院' ,pinyin1:'beijingshichangpingqufuyoubaojianyuan',pinyin2:'bjscpqfybjy' },{ name: '北京市昌平区中西医结合医院' ,pinyin1:'beijingshichangpingquzhongxiyijieheyiyuan',pinyin2:'bjscpqzxyjhyy',pinyin3:'华一医院',pinyin4:'huayiyiyuan' },{ name: '北京市昌平区精神卫生保健院' ,pinyin1:'beijingshichangpingqujingshenweishengbaojianyuan',pinyin2:'bjscpqjswsbjy' },{ name: '北京市东城区精神卫生保健院(东外医院)' ,pinyin1:'beijingshichongwenqufuyoubaojianyuan',pinyin2:'bjscwqfybjy2' },{ name: '空军航空医学研究所附属医院' ,pinyin1:'kongjunhangkongyixueyanjiusuo',pinyin2:'kjhkyanjiusuo' ,pinyin3:'466医院' },{ name: '北京市社会福利医院' ,pinyin1:'beijinghaidianqushehuifuliyiyuan',pinyin2:'bjshflyy' },{ name: '北京四季青医院' ,pinyin1:'beijingsijiqingyiyuan',pinyin2:'bjsjq' },{ name: '北京大学第四临床医学院北京积水潭医院(回龙观院区)' ,pinyin1:'beijingjishuitanhuilongguanyuanqu',pinyin2:'bjdxdslcyxybjjstyy2' },{ name: '首都医科大学宣武医院特需门诊' ,pinyin1:'shoudouyikedaxuexuanwuyiyuantexu',pinyin2:'sdykdxxwyytx' },{ name: '中日友好医院' ,pinyin1:'zhongriyouhaoyiyuan',pinyin2:'zryhyy' },{ name: '北京市东城区第一妇幼保健院' ,pinyin1:'dongchengfuyou',pinyin2:'dcdyfybjy' },{ name: '北京清华长庚医院' ,pinyin1:'qinghuachanggeng',pinyin2:'qhcgyy' }] ;