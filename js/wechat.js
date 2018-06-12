(function () {
  // 注入微信权限
  let linkUrl = window.location.href
  console.log(linkUrl)
  console.log(location.href.split('#')[0])
  $.ajax({
    url: 'http://lzlj.bossyi.cn/api/js_getsignpackage',
    type: 'POST',
    data: { 'url': linkUrl },
    dataType: 'JSON',
    success: function (res) {
      let weAppid = res.data.appid
      let weTimestamp = res.data.timestamp
      let weSignature = res.data.signature
      let weNonceStr = res.data.nonceStr
      let opt = {
        title: '看穿你的酒后第二人格', 
        desc: '文质彬彬or粗放狂野？敢不敢测试一把你的酒后style！', 
        link: linkUrl,
        imgUrl: 'http://test.bossyi.cn/img/share.png',
        success: function () {
          console.log('分享成功！')
        },
        cancel: function () {
          console.log('取消分享！')
        }
      }
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: weAppid, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: weTimestamp, // 必填，生成签名的时间戳
        nonceStr: weNonceStr, // 必填，生成签名的随机串
        signature: weSignature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      wx.ready(function () {
        wx.onMenuShareTimeline(opt)
        wx.onMenuShareAppMessage(opt)
        wx.onMenuShareQQ(opt)
        wx.onMenuShareWeibo(opt)
        wx.onMenuShareQZone(opt)
      });
    }
  })
})()