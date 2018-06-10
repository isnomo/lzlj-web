(function () {
  let winWidth = document.body.clientWidth
  let winHeight = window.innerHeight
  let page4Val = ''
  let page8Val = ''
  let titleJson = [
    {
      'page4': '4B',
      'page8': '8C',
      'title': '犟，从来不认输不低头',
      'tags': ['拥有无限的创造力量', '天生的领导者', '自信', '你的爱情很深很真']
    },
    {
      'page4': '4C',
      'page8': '8A',
      'title': '话痨，滔滔不绝，夸夸其谈，江湖传说骂得过流氓',
      'tags': ['拥有完美的理性思维', '天生的演说家', '文艺', '你的爱情热切而强烈']
    },
    {
      'page4': '4B',
      'page8': '8A',
      'title': '怂，拿不起放不下忘不掉，人前嘴硬，人后流泪',
      'tags': ['拥有极强的行动力', '天生的远见者', '义气', '你的爱情细水长流']
    },
    {
      'page4': '4C',
      'page8': '8C',
      'title': '霸气，人群中耀眼的小太阳',
      'tags': ['拥有放荡不羁的性格', '天生的冒险家', '随和', '你的爱情收放自由']
    },
    {
      'page4': '4A',
      'page8': '8C',
      'title': '毒舌，集世间挑刺于一身',
      'tags': ['拥有超强的第六感', '天生的理想者', '友爱', '你的爱情让人窒息']
    },
    {
      'page4': '4A',
      'page8': '8A',
      'title': '高冷，自带灵魂出窍神技',
      'tags': ['拥有超强的好人缘', '天生的分析师', '焦点', '你的爱情从不拖泥带水']
    },
    {
      'page4': '4A',
      'page8': '8B',
      'title': '戏精，无时无刻不作妖',
      'tags': ['拥有天马行空的思维', '天生的策划师', '聪明', '你的爱情稳定而长久']
    },
    {
      'page4': '4C',
      'page8': '8B',
      'title': '傲娇，永远的叛逆期',
      'tags': ['拥有彻头彻尾的诚实力', '天生的野心家', '责任心', '你的爱情罗曼蒂克']
    },
    {
      'page4': '4B',
      'page8': '8B',
      'title': '撩，在深情与绝情中游荡',
      'tags': ['拥有极强的应变能力', '天生的时尚达人', '魅力', '你的爱情能抚平伤痛']
    }
  ]
  // 判断是否旋转
  if (winWidth > winHeight) {
    $('.rotate-hint').css({ 'display': 'block' })
  } else {
    $('.rotate-hint').css({ 'display': 'none' })
  }

  // alert(winWidth + 'x' + winHeight)
  // 兼容iphoneX
  if (winHeight / winWidth > 1.8) {
    $('.lzlj-main .bg-wrapper .page-select').css({ 'padding': '0 5% 20%' })
    // alert('长手机')
  }

  // init
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.select-main .sw-next',
      // prevEl: '.swiper-button-prev',
    },
    speed: 500,
    on: {
      slideChange: function () {
        if (this.activeIndex == 5) {
          setTimeout(() => {
            $('.hand-animate').addClass('active')
          }, 300)
        }
        if (this.activeIndex == 8) {
          setTimeout(() => {
            $('.results .results-top .tags-left').children('div:first-child').addClass('show')
            $('.results .results-top .tags-left').children('div:last-child').addClass('show')
            $('.results .results-top .tags-right').children('div:first-child').addClass('show')
            $('.results .results-top .tags-right').children('div:last-child').addClass('show')
          }, 300)
          setTimeout(() => {
            $('.results .results-bottom .results-bottom__btn').addClass('show')
          }, 800)
          $('#click-img').click(function () {
            // html2canvas(document.querySelector("#download-img")).then(canvas => {
            //   document.querySelector("#show-canvas").appendChild(canvas)
            // })
            convert2canvas()
          })
        }
      },
    },
    allowTouchMove: false,
    // hashNavigation: {
    //   watchState: true,
    // }
  });

  // 选择后显示下一页按钮
  $('input[type=radio]').on('click', function (event) {
    let pageNum = $(this).attr('name')
    let thisBtn = $(this).parents('.select-main__option').next()
    thisBtn.find('button').attr('disabled', false).addClass('isTrue')
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
    console.log(resultsData)
    for (let i = 0; i < titleJson.length; i++) {
      let itemTitle = titleJson[i]
      if (itemTitle.page4 == page4Val && itemTitle.page8 == page8Val) {
        console.log(itemTitle)
        $('.results .results-top .tags-left').children('div:first-child').html(itemTitle.tags[0])
        $('.results .results-top .tags-left').children('div:last-child').html(itemTitle.tags[2])
        $('.results .results-top .tags-right').children('div:first-child').html(itemTitle.tags[1])
        $('.results .results-top .tags-right').children('div:last-child').html(itemTitle.tags[3])
        $('.results .results-bottom .results-bottom__title h3').html(itemTitle.title)
      }
    }
  })




  $(window).load(() => {
    $('.loading').fadeOut(300)
    let imgHeight = $('.results .results-bottom .results-bottom__img').width() / 1.65
    $('.results .results-bottom .results-bottom__img').height(imgHeight)
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