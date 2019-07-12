// 引包
var zlib = require('zlib');
const homeRouter = require('koa-router')()
let apiService = require('../service/risk_api')
//创建路由规则
homeRouter.get(['/risk'], async (ctx, next) => {
  let data = {
    "model_name": "xingyun_v1",    
    "first_loan": 1,         
    "product":"xxxx",      
    "channel": "xxxx",     
    "apply_time": "2018-06-10 14:00:00",       
    "mobile": "13531241342", 
    "name": "李宁",
    "idcard": "310103198511154364", 
    "phone_os": "ios",   
    "device_id": "9C287922-EE26-4501-94B5-DDE6F83E1475", 
    "gps_coordinate": "BD09",  
    "gps_lat": 30.5,         
    "gps_lon": 134.5,      
    "user_address": "广西壮族自治区-玉林市-北流市-甘新路文德花园13栋2单元601",   
    "company_name": "广西天奥物业服务有限责任公司",  
    "company_phone": "07753294448",  
    "company_address": "广西壮族自治区-玉林市-北流市-二环北路幸福里小区1栋101", 
    "e_contacts": [
         {
            "contact_name": "郑瑞清",
            "contact_phone": "15277750248"
         },
         {
            "contact_name": "匡丽",
            "contact_phone": "18276511809"
         }
    ],
    "carrier_data":{   
        "tongdun_raw": "...",        
        "tongdun_report": "...",      
        "jxl_raw": "...",            
        "jxl_report": "...",          
        "dhb_raw": "...",           
        "dhb_report": "...",         
        "mx_raw": "...",             
        "mx_report": "...",         
        "rong360_raw": "...",         
        "rong360_report": "...",     
        "bqs_raw": "...",             
        "bqs_report": "...",         
        "xinyan_raw": "...",         
        "xinyan_report": "...",       
        "gxb_raw": "...",             
        "gxb_report": "..."          
    },
    "contact": [     
      { 
        "contact_name": "大黄", 
        "contact_phone": "18514030324",
        "update_time": "2018-06-10 09:00:00" 
      }, 
      { 
        "contact_name": "大哥", 
        "contact_phone": "13520166165",
        "update_time": "2018-06-10 09:00:00" 
      }  
    ], 
    "app": [   
      { 
        "app_name": "搜狗输入法", 
        "app_packagename": "com.sohu.inputmethod.sogou",
        "update_time": "2018-06-10 09:00:00"
      },
      { 
        "app_name": "财神爷金服", 
        "app_packagename": "com.csyjf.app",
        "update_time": "2018-06-10 09:00:00"
      }  
    ],
    "sms": [ 
      {
          "user_mobile": "13543946554",     
          "peer_number": "106908407250316",   
          "content": "【拍拍贷】早春特权大放送，3步完成申请，5分钟快速到账，现金额度随借随提！十年老平台保障您的信息安全，戳→http://t.cn/RJoVQzL 退订回N",
          "sms_time": "2018-03-29 11:38:05", 
          "sms_type": 1,                      
          "update_time": "2018-06-10 09:00:00" 
      },
      {
          "user_mobile": "13543946554",       
          "peer_number": "106900195885",  
          "content": "【国美金融】您有5万元额度待领取，点击http://t.cn/RQ6JiYO 即可快速提现！现在注册并领取额度，有机会赢取0息特权！回TD退",
          "sms_time": "2018-03-29 11:21:14",  
          "sms_type": 1,                     
          "update_time": "2018-06-10 09:00:00" 
      } 
    ], 
    "call_record": [  
      { 
        "user_mobile": "13543946554",       
        "peer_number": "15039056615",        
        "call_type": 2,                      
        "duration_time": 13,                 
        "call_time": "2018-03-29 11:21:14",  
        "update_time": "2018-06-10 09:00:00"  
      }, 
      { 
        "user_mobile": "13543946554",        
        "peer_number": "15509681279",        
        "call_type": 1,                      
        "duration_time": 71,                  
        "call_time": "2018-03-29 11:21:14",  
        "update_time": "2018-06-10 09:00:00"
      }
    ], 
    "udcredit_portrait": "...",  
    "zhicheng": "..."            
  };

  let dataG

  zlib.gzip(JSON.stringify(data), (err, buffer) => {
    if (!err) {
      console.log(buffer.toString('base64'));
      dataG = buffer
      apiService.getRisk(dataG).then((zzzz)=> {
        console.log(zzzz)
      })
    } else {
      // 错误处理
      console.log(err)
    }
  });
  // let res2 = await apiService.getRisk(dataG)

  // 请求数据
  // let todoList = await apiService.getRisk(data)
  // 替换原来的静态数据

  // 这里的ctx.render方法就是我们通过nunjucksMiddleware中间件添加的
  ctx.render('home/home', {
    title: '风控接口'
  })
})
// 导出路由备用
module.exports = homeRouter
