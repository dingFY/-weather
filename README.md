## 天气部落
一款简洁的查询天气的微信小程序
 <img src='https://img-blog.csdnimg.cn/20201103135104745.jpg' style='width:300px;'>

## 数据来源
 [和风天气](http://www.heweather.com/)，需要注册账号获取 `key`；免费版只能获取三天的天气数据，若要获取七天的气象数据，可以申请个人开发者认证；

## 主要功能
 - 查询天气情况
 - 更换背景
 - 分享给微信好友
 - 系统设置

## 截图
<div >
    <img src='https://img-blog.csdnimg.cn/20201023131631615.jpg' style='width:300px;'>
    <img src='https://img-blog.csdnimg.cn/20201023131631719.png' style='width:300px;'>
    <img src='https://img-blog.csdnimg.cn/20201023131631454.png' style='width:300px;'>
    <img src='https://img-blog.csdnimg.cn/20201023131631465.png' style='width:300px;'>
</div>

## 开发前准备
* [注册微信小程序](https://mp.weixin.qq.com/wxopen/waregister?action=step1)，获取 `appid`，配置域名白名单(在小程序后台将使用到的 `API` 添加到域名白名单)
* 注册 [和风天气](http://www.heweather.com/) 账号，获取 `key ` 值
* 在 `app.js` 中替换 `globalData` 中的 `key` 为你自己的 `key`；


