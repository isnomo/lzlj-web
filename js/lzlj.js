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
      'title': '话痨，夸夸其谈，江湖传说骂得过流氓',
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
  if(winHeight / winWidth > 1.8){
    $('.lzlj-main .bg-wrapper .page-select').css({ 'padding': '0 5% 10%' })
    // alert('长手机')
  }

  // init
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.select-main .sw-next',
      // prevEl: '.swiper-button-prev',
    },
    speed: 500,
    initialSlide: 9,
    on: {
      slideChange: function () {
        if (this.activeIndex == 5) {
          setTimeout(() => {
            $('.hand-animate').addClass('active')
          }, 300)
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
    // location.href = 'result.html'
    for(let i = 0; i < titleJson.length; i++){
      let itemTitle = titleJson[i]
      if(itemTitle.page4 == page4Val && itemTitle.page8 == page8Val){
        console.log(itemTitle)
      }
    }
  })




  $(window).load(() => {
    $('.loading').fadeOut(300)
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()

  })
})()