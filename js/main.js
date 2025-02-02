$(window).on('scroll', function () {
    let off = $(window).scrollTop();
        
    $("section").each(function () {
        let b = $('.s3');
        let c=$('.s4'); 
        let d=$('.s5');
        let e=$('.s6');
        if (b.offset().top  >= off) {
            b.addClass("active");
        }else if(c.offset().top- 90 >= off){
            c.addClass("active")
        }else if(d.offset().top-90 >= off){
            d.addClass("active")
        }else if(e.offset().top - 90 >= off){
            e.addClass("active")
        }
    })

    if($(window).scrollTop() > 10) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on')
    }
})


let cir = document.querySelector('.circle')
let dar= document.querySelector('.fa-arrow-down')
cir.addEventListener('mouseenter', function(){
    cir.classList.add('change')
    if(cir.classList.contains('change')==true){
        dar.classList.add('on')
      }
    
})
cir.addEventListener('mouseleave',function(){
    cir.classList.remove('change')
    if(cir.classList.contains('change')!==true){
        dar.classList.remove('on')
      }
})

let got=document.querySelector('.topbtn')
let tar=document.querySelector('.s7 .fa-arrow-down')
got.addEventListener('mouseenter', function(){
   got.classList.add('color')
   if(got.classList.contains('color')==true){
    tar.classList.add('on')
  }
})
got.addEventListener('mouseleave', function(){
    got.classList.remove('color')
    if(got.classList.contains('color')!==true){
        tar.classList.remove('on')
      }
})
let alm=document.querySelector('.all_menu')
let mme= document.querySelector('.mo_menu')
let  spi=document.querySelector('.span_in')
alm.addEventListener('click', function(){
    spi.classList.toggle('ch')
    mme.classList.toggle('open')
})





$(function(){
    $(window).scroll(function(){
       $('main  > section').each(function(){
          if($(this).offset().top <= $(window).scrollTop()+100){
              $('.dep1 li').removeClass('on')
              let idx = $(this).index() //this= section
            //   console.log(idx)
              $('.dep1  li').eq(idx).addClass('on')
          }else if($('.s1').offset().top >= $(window).scrollTop()){
            $('.dep1  li').removeClass('on')
          }
       })
    })
    $('.dep1  li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        let idx = $(this).index()
        let section = $('main > section').eq(idx)
        let sd = section.offset().top-(100)
        $('html, body').animate({
            scrollTop : sd
        })         
    })
    
    $('.clsw .swiper-slide').click(function(e){
        e.preventDefault()
        $(this).addClass('on').siblings().removeClass('on')
        $('.ditem').hide()
        let idx = $(this).index()
    //    console.log(idx)
       $('.ditem').eq(idx).fadeIn()
     })
    $('.clsw2 .swiper-slide').click(function(e){
        e.preventDefault()
        $(this).addClass('on').siblings().removeClass('on')
        $('.d2item').hide()
        let idx = $(this).index()
    //    console.log(idx)
       $('.d2item').eq(idx).fadeIn()
     })
    
    $('.ditem .close_btn').click(function(e){
        e.preventDefault()
        $('.ditem').fadeOut()
    })
    $('.d2item .close_btn').click(function(e){
        e.preventDefault(e)
        $('.d2item').fadeOut()
    })

    $('.topbtn').click(function(e){
     e.preventDefault(e)
     $('html, body').animate({
        scrollTop: 0
     },1400)
    })
      $('.s7_text').mouseenter(function(){
        $('.firework1').addClass('on')
        $('.firework2').addClass('on')
        $('.firework3').addClass('on')
        $('.firework4').addClass('on')
        $('.firework5').addClass('on')
        $('.firework6').addClass('on')
      })
      $('.s7_text').mouseleave(function(){
        $('.firework1').removeClass('on')
        $('.firework2').removeClass('on')
        $('.firework3').removeClass('on')
        $('.firework4').removeClass('on')
        $('.firework5').removeClass('on')
        $('.firework6').removeClass('on')
      })
    $(window).scroll(function(){
        $('main  > section').each(function(){
           if($(this).offset().top <= $(window).scrollTop()+100){
               $('.mo_idx li').removeClass('on')
               let idx = $(this).index() //this= section
            //    console.log(idx)
               $('.mo_idx  li').eq(idx).addClass('on')
           }else if($('.s1').offset().top >= $(window).scrollTop()){
             $('.mo_idx  li').removeClass('on')
           }
        })
     })
     $('.mo_idx  li').click(function(){
         $(this).addClass('on').siblings().removeClass('on')
         let idx = $(this).index()
         let section = $('main > section').eq(idx)
         let sd = section.offset().top-(100)
         $('html, body').animate({
             scrollTop : sd
         })         
     })

     $('.cube_con_btn li').click(function(e){
        e.preventDefault()
        $(this).addClass('act').siblings().removeClass('act')
        let idx = $(this).index()
        $('.des_detail').eq(idx).addClass('on').siblings().removeClass('on')
     });
     $('.fbtn').click(function(){
        $('#outb').removeClass().addClass('front')
     })
     $('.bbtn').click(function(){
        $('#outb').removeClass().addClass('back')
     })
     $('.rbtn').click(function(){
        $('#outb').removeClass().addClass('right')
     })
     $('.lbtn').click(function(){
        $('#outb').removeClass().addClass('left')
     })
     $('.tbtn').click(function(){
        $('#outb').removeClass().addClass('top')
     })
     $('.botbtn').click(function(){
        $('#outb').removeClass().addClass('bot')
     })
     

     $('.pbtn').click(function(){
        $('.rebtn').removeClass('on')
        $('.pbtn').addClass('on')
        $('.puzzle').removeClass('back')
        $('.puzzle').addClass('on')
     })
     $('.rebtn').click(function(){
        $('.pbtn').removeClass('on')
        $('.rebtn').addClass('on')
        $('.puzzle').removeClass('on')
        $('.puzzle').addClass('back')
     })
})
 




