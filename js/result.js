(function () {
  $.ajax({
    url: 'http://lzlj.bossyi.cn/api/answer_count',
    type: 'GET',
    dataType: 'JSON',
    success: function (res) {
      let resultData = res.data
      let resArr = []
      for(let z in resultData){
        resArr.push(resultData[z])
      }
      let arrMax = Math.max.apply(null, resArr);
      $('.item-label').each(function(i){
        let itemWidth = Math.floor(resArr[i] / arrMax * 100)
        $(this).find('span').html(resArr[i])
        $(this).find('div').css({'width' : itemWidth + '%'})
      })
      let allNum = resArr[0] + resArr[1] + resArr[2]
      $('#num').html(allNum)
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      alert('网络连接失败！请稍后重试。')
    }
  })


  
  $('#complete-button').on('click', function (event) {
    // let form = document.getElementById("userForm");
    // let selectData = new FormData(form)
    event.preventDefault()
    let resultsData = []
    $('input[type=radio]').each(function () {
      if ($(this).prop('checked')) {
        resultsData.push($(this).val())
        if ($(this).attr('name') == 'page4') {
          page4Val = $(this).val()
        }
        if ($(this).attr('name') == 'page8') {
          page8Val = $(this).val()
        }
      }
    })
    for (let i = 0; i < titleJson.length; i++) {
      let itemTitle = titleJson[i]
      if (itemTitle.page4 == page4Val && itemTitle.page8 == page8Val) {
        $('.results .results-top .tags-left').children('div:first-child').html(itemTitle.tags[0])
        $('.results .results-top .tags-left').children('div:last-child').html(itemTitle.tags[2])
        $('.results .results-top .tags-right').children('div:first-child').html(itemTitle.tags[1])
        $('.results .results-top .tags-right').children('div:nth-child(2)').html(itemTitle.tags[3])
        $('.results .results-bottom .results-bottom__title h3').html(itemTitle.title)
      }
    }
    console.log(resultsData)
    // JSON.stringify(resultsData)
    let resData =  resultsData.toString()
    $.ajax({
      url: 'http://lzlj.bossyi.cn/api/answer',
      type: 'POST',
      data: { 'answer': resData },
      dataType: 'JSON',
      success: function (res) {
        console.log(res)
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
      }
    })
  })


  $(window).load(() => {

  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
  })

  function convert2canvas() {

    var cntElem = $('#download-img')[0];

    var shareContent = cntElem;//需要截图的包裹的（原生的）DOM 对象
    var width = shareContent.offsetWidth; //获取dom 宽度
    var height = shareContent.offsetHeight; //获取dom 高度
    var canvas = document.createElement("canvas"); //创建一个canvas节点
    var scale = 2; //定义任意放大倍数 支持小数
    canvas.width = width * scale; //定义canvas 宽度 * 缩放
    canvas.height = height * scale; //定义canvas高度 *缩放
    canvas.getContext("2d").scale(scale, scale); //获取context,设置scale 
    var opts = {
      scale: scale, // 添加的scale 参数
      canvas: canvas, //自定义 canvas
      // logging: true, //日志开关，便于查看html2canvas的内部执行流程
      width: width, //dom 原始宽度
      height: height,
      useCORS: true // 【重要】开启跨域配置
    };

    html2canvas(shareContent, opts).then(function (canvas) {

      var context = canvas.getContext('2d');
      // 【重要】关闭抗锯齿
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      // 【重要】默认转化的格式为png,也可设置为其他格式
      var img = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);

      document.querySelector("#show-img").appendChild(img);
      $(img).css({
        "width": canvas.width / 2 + "px",
        "height": canvas.height / 2 + "px",
      }).addClass('f-full');

    });
  }

})()