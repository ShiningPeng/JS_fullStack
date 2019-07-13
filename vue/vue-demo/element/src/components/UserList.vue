<template>
  <div class="user-list">
    <div class="user-title">
      <div class="block">
        <span class="demonstration">城市</span>
        <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      options: [
        {
          value: "jiangxisheng",
          label: "江西省",
          children: [
            {
              value: "nanchangshi",
              label: "南昌市",
              children: [
                {
                  value: "qingshanhuqu",
                  label: "青山湖区"
                },
                {
                  value: "qingyunpuqu",
                  label: "青云谱区"
                },
                {
                  value: "xihuqu",
                  label: "西湖区"
                },
                {
                  value: "xinjianqu",
                  label: "新建区"
                },
                {
                  value: "wanliqu",
                  label: "湾里区"
                },
                {
                  value:"donghuqu",
                  label:"东湖区"
                },
                {
                  value:"nanchangxian",
                  label:"南昌县"
                },
                {
                  value:"jinxianxian",
                  label:"进贤县"
                },
                {
                  value:"anyixian",
                  label:"安义县"
                }
              ]
            },
            {
              value: "jingdezhenshi",
              label: "景德镇市",
              children: [
                {
                  value: "zhushanqu",
                  label: "珠山区"
                },
                {
                  value: "changjiangqu",
                  label: "昌江区"
                },
                {
                  value:"quliangxian",
                  label:"浮梁县"
                },
                {
                  value:"lepingshi",
                  label:"乐平市"
                }
              ]
            },
            {
              value:"pingxiangshi",
              label:"萍乡市",
              children:[
                {
                  value:"anyuanqu",
                  label:"安源区"
                },
                {
                  value:"xiangdongqu",
                  label:"湘东区"
                },
                {
                  value:"lianhuaxian",
                  label:"莲花县"
                },
                {
                  value:"shanglixian",
                  label:"上栗县"
                },
                {
                  value:"luxixian",
                  label:"芦溪县"
                },
              ]
            },
            {
              value:"xinyushi",
              label:"新余市",
              children:[
                {
                  value:"yushuixian",
                  label:"渝水县"
                },
                {
                  value:"fenyixian",
                  label:"分宜县"
                },
              ]
              
            },
            {
              value:"jiujiangshi",
              label:"九江市",
              children:[
                {
                  value:"xunyangqu",
                  label:"浔阳区"
                },
                {
                  value:"lianxiqu",
                  label:"濂溪区"
                },
                {
                  value:"chaisangxian",
                  label:"柴桑区"
                },
                {
                  value:"wuningxian",
                  label:"武宁县"
                },
                {
                  value:"pengzexian",
                  label:"彭泽县"
                },
                {
                  value:"yongxiuxian",
                  label:"永修县"
                },
                {
                  value:"xiushuixian",
                  label:"修水县"
                },
                {
                  value:"hukouxian",
                  label:"湖口县"
                },
                {
                  value:"deanxain",
                  label:"德安县"
                },
                {
                  value:"duchangshi",
                  label:"都昌县"
                },
                {
                  value:"ruichangshi",
                  label:"瑞昌市"
                },
                {
                  value:"gongqingchengshi",
                  label:"共青城市"
                },
                {
                  value:"lushangshi",
                  label:"庐山市"
                }
              ]
            },
            {
              value:"yingtanshi",
              label:"鹰潭市",
              children:[
                {
                  value:"yuehuqu",
                  label:"月湖区"
                },
                {
                  value:"yujiangshi",
                  label:"余江区"
                },
                {
                  value:"guixishi",
                  label:"贵溪市"
                } 
              ]
            },
            {
              value:"ganzhoushi",
              label:"赣州市",
              children:[
                {
                  value:"zhanggongqu",
                  label:"章贡区"
                },
                {
                  value:"nankangqu",
                  label:"南康区"
                },
                {
                  value:"ganxianqu",
                  label:"赣县区"
                },
                {
                  value:"shichengxian",
                  label:"石城县"
                },
                {
                  value:"anyuanxian",
                  label:"安远县"
                },
                {
                  value:"ningduxian",
                  label:"宁都县"
                },
                {
                  value:"xunwuxian",
                  label:"寻乌县"
                },
                {
                  value:"xingguoxian",
                  label:"兴国县"
                },
                {
                  value:"dingnanxian",
                  label:"定南县"
                },
                {
                  value:"shangyouxian",
                  label:"上犹县"
                },
                {
                  value:"yuduxian",
                  label:"于都县"
                },
                {
                  value:"longnanxian",
                  label:"龙南县"
                },
                {
                  value:"chongyixian",
                  label:"崇义县"
                },
                {
                  value:"xinfengxian",
                  label:"信丰县"
                },
                {
                  value:"quannanxian",
                  label:"全南县"
                },
                {
                  value:"dayuxian",
                  label:"大余县"
                },
                {
                  value:"huichangxian",
                  label:"会昌县"
                },
                {
                  value:"ruijinshi",
                  label:"瑞金市"
                }
              ]
            },
            {
              value:"jianshi",
              label:"吉安市",
              children:[
                {
                  value:"jizhouqu",
                  label:"吉州区"
                },
                {
                  value:"qingzangqu",
                  label:"青藏区"
                },
                {
                  value:"jianxian",
                  label:"吉安县"
                },
                {
                  value:"yongfengxian",
                  label:"永丰县"
                },
                {
                  value:"yongxinxian",
                  label:"永新县"
                },
                {
                  value:"xianganxian",
                  label:"新干县"
                },
                {
                  value:"taihexian",
                  label:"泰和县"
                },
                {
                  value:"xiajiangxian",
                  label:"峡江县"
                },
                {
                  value:"shuichuanxian",
                  label:"遂川县"
                },
                {
                  value:"anfuxian",
                  label:"安福县"
                },
                {
                  value:"jishuixian",
                  label:"吉水县"
                },
                {
                  value:"wananxian",
                  label:"万安县"
                },
                {
                  value:"jinggangshanshi",
                  label:"井冈山市"
                }
              ]
            },
            {
              value:"yichunshi",
              label:"宜春市",
              children:[
                {
                  value:"yuanzhouqu",
                  label:"袁州区"
                },
                {
                  value:"tongguxian",
                  label:"铜鼓县"
                },
                {
                  value:"jinanxian",
                  label:"靖安县"
                },
                {
                  value:"yifengxian",
                  label:"宜丰县"
                },
                {
                  value:"fengxinxian",
                  label:"奉新县"
                },
                {
                  value:"wanzaixian",
                  label:"万载县"
                },
                {
                  value:"shanggaoxian",
                  label:"上高县"
                },
                {
                  value:"fengchengshi",
                  label:"丰城市"
                },
                {
                  value:"zhangshushi",
                  label:"樟树市"
                },
                {
                  value:"gaoanshi",
                  label:"高安市"
                }
              ]
            },
            {
              value:"fuzhoushi",
              label:"抚州市",
              children:[
                {
                  value:"linchuanqu",
                  label:"临川区"
                },
                {
                  value:"dongxiangqu",
                  label:"东乡区"
                },
                {
                  value:"nanfengxian",
                  label:"南丰县"
                },
                {
                  value:"leanxian",
                  label:"乐安县"
                },
                {
                  value:"jinxixian",
                  label:"金溪县"
                },
                {
                  value:"nanchengxian",
                  label:"南城县"
                },
                {
                  value:"zixixian",
                  label:"资溪县"
                },
                {
                  value:"yihuangxian",
                  label:"宜黄县"
                },
                {
                  value:"guangchangxian",
                  label:"广昌县"
                },
                {
                  value:"lichuanxian",
                  label:"黎川县"
                },
                {
                  value:"chongrenqu",
                  label:"崇仁县"
                }
              ]
            },
            {
              value:"shangraoshi",
              label:"上饶市",
              children:[
                {
                  value:"xinzhouqu",
                  label:"信州区"
                },
                {
                  value:"guangfengqu",
                  label:"广丰区"
                },
                {
                  value:"shangraoshi",
                  label:"上饶县"
                },
                {
                  value:"poyangxian",
                  label:"鄱阳县"
                },
                {
                  value:"wuyuanxian",
                  label:"婺源县"
                },
                {
                  value:"yanshanxian",
                  label:"铅山县"
                },
                {
                  value:"yuganxian",
                  label:"余干县"
                },
                {
                  value:"hengfengxian",
                  label:"横峰县"
                },
                {
                  value:"yiyangxian",
                  label:"弋阳县"
                },
                {
                  value:"yushanxian",
                  label:"玉山县"
                },
                {
                  value:"wannianxian",
                  label:"万年县"
                },
                {
                  value:"dexingshi",
                  label:"德兴市"
                }
              ]
            }
          ]
        },
        {
          value: "guangdongsheng",
          label: "广东省",
          children: [
            {

              value: "guangzhoushi",
              label: "广州市",
              children: [
                {
                  value: "yuexiuqu",
                  label: "越秀区"
                },
                {
                  value: "liwanqu",
                  label: "荔湾区"
                },
                {
                  value: "haizhuqu",
                  label: "海珠区"
                },
                {
                  value: "tianhequ",
                  label: "天河区"
                },
                {
                  value: "baiyunqu",
                  label: "白云区"
                },
                {
                  value:"huangpuqu",
                  label:"黄浦区"
                },
                {
                  value:"fanyuqu",
                  label:"番禺区"
                },
                {
                  value:"huaduqu",
                  label:"花都区"
                },
                {
                  value:"nanshaqu",
                  label:"南沙区"
                },
                {
                  value:"zengchengqu",
                  label:"增城区"
                },
                {
                  value:"conghuaqu",
                  label:"从化区"
                }
              ]
            },
             {

              value: "guangzhoushi",
              label: "广州市",
              children: [
                {
                  value: "yuexiuqu",
                  label: "越秀区"
                },
                {
                  value: "liwanqu",
                  label: "荔湾区"
                },
                {
                  value: "haizhuqu",
                  label: "海珠区"
                },
                {
                  value: "tianhequ",
                  label: "天河区"
                },
                {
                  value: "baiyunqu",
                  label: "白云区"
                },
                {
                  value:"huangpuqu",
                  label:"黄浦区"
                },
                {
                  value:"fanyuqu",
                  label:"番禺区"
                },
                {
                  value:"huaduqu",
                  label:"花都区"
                },
                {
                  value:"nanshaqu",
                  label:"南沙区"
                },
                {
                  value:"zengchengqu",
                  label:"增城区"
                },
                {
                  value:"conghuaqu",
                  label:"从化区"
                }
              ]
            },
             {

              value: "guangzhoushi",
              label: "广州市",
              children: [
                {
                  value: "yuexiuqu",
                  label: "越秀区"
                },
                {
                  value: "liwanqu",
                  label: "荔湾区"
                },
                {
                  value: "haizhuqu",
                  label: "海珠区"
                },
                {
                  value: "tianhequ",
                  label: "天河区"
                },
                {
                  value: "baiyunqu",
                  label: "白云区"
                },
                {
                  value:"huangpuqu",
                  label:"黄浦区"
                },
                {
                  value:"fanyuqu",
                  label:"番禺区"
                },
                {
                  value:"huaduqu",
                  label:"花都区"
                },
                {
                  value:"nanshaqu",
                  label:"南沙区"
                },
                {
                  value:"zengchengqu",
                  label:"增城区"
                },
                {
                  value:"conghuaqu",
                  label:"从化区"
                }
              ]
            },
             {

              value: "guangzhoushi",
              label: "广州市",
              children: [
                {
                  value: "yuexiuqu",
                  label: "越秀区"
                },
                {
                  value: "liwanqu",
                  label: "荔湾区"
                },
                {
                  value: "haizhuqu",
                  label: "海珠区"
                },
                {
                  value: "tianhequ",
                  label: "天河区"
                },
                {
                  value: "baiyunqu",
                  label: "白云区"
                },
                {
                  value:"huangpuqu",
                  label:"黄浦区"
                },
                {
                  value:"fanyuqu",
                  label:"番禺区"
                },
                {
                  value:"huaduqu",
                  label:"花都区"
                },
                {
                  value:"nanshaqu",
                  label:"南沙区"
                },
                {
                  value:"zengchengqu",
                  label:"增城区"
                },
                {
                  value:"conghuaqu",
                  label:"从化区"
                }
              ]
            },
          ]
        }
      ]
    };
  }
};
</script>