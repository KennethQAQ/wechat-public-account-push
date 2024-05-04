/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '☀小懒鹅起床啦',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      今天是我们恋爱的第{{love_day.DATA}}天啦！每天都要多和宝宝说话哦~
      早安宝宝啵啵啵啵
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

      日出时间：{{sunrise.DATA}} 
      
      日落时间：{{sunset.DATA}}

      预防感冒提醒：{{ganmao.DATA}} 

      天气温馨语：{{notice.DATA}} 
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      💗：{{earthy_love_words.DATA}}
      {{birthday_message.DATA}}
      
      ---
      每日一言：{{note_en.DATA}} {{note_ch.DATA}}
      
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
