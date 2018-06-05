(function () {
  let winWidth = document.body.clientWidth
  let winHeight = window.innerHeight
  if (winWidth > winHeight) {
    $('.rotate-hint').css({'display' : 'block'})
  }else{
    $('.rotate-hint').css({'display' : 'none'})
  }

  // init
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.next-page',
      // prevEl: '.swiper-button-prev',
    },
    speed: 500,
    // effect : 'cube',
    allowTouchMove: false,
    // hashNavigation: {
    //   watchState: true,
    // }
  });

  // 选择后显示下一页按钮
  $('input[type=radio]').on('click',function(event){
    let pageNum = $(this).attr('name')
    let thisBtn = $(this).parents('.select-main__option').next()
    thisBtn.find('button').attr('disabled',false)
  })

  $('#complete-button').on('click',function(event){
    let form = document.getElementById("userForm");
    let selectData = new FormData(form)
    console.log(selectData)
    console.log(selectData.get('page1'))
  })

  
  $(window).load(() => {
  
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()

  })
})()