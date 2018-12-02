var swiper = new Swiper('.swiper-container.main-container', {
  slidesPerView: 1, 
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination.main-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.main-container',
    prevEl: '.swiper-button-prev.main-container',
  },
  breakpoints: {
    767: {
        spaceBetween: 5,
    },
  },
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});

$( ".swiper-pagination" ).append( $( "<span class='icon-pause'></span>" ) );  
$( ".swiper-pagination" ).append( $( "<span class='icon-arrow-right'></span>" ) ); 

$(".swiper-pagination .icon-pause").on('click', function(){
   swiper.autoplay.stop();
   $(this).css('display', 'none');
   $(".swiper-pagination .icon-arrow-right").css('display', 'flex');       
});
$(".swiper-pagination .icon-arrow-right").on('click', function(){
   swiper.autoplay.start();
   $(this).css('display', 'none');
   $(".swiper-pagination .icon-pause").css('display', 'flex');
});  

var catalogSwiper = new Swiper('.swiper-container.catalog-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination.catalog-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.catalog-container',
    prevEl: '.swiper-button-prev.catalog-container',
  },
  breakpoints: {
    767: {
        slidesPerView: 1,
    },
  },
});

$(document).ready(function() {
  $('select').niceSelect();
});  

$(document).ready(function() {
    $( "li.option" ).on('click', function(){
       classChange = $(this).hasClass('low');
       if(classChange) {
           $('span.current').addClass('low');
       } else {
           $('span.current').removeClass('low');
       }

    });
});

$('.btn-tile').on('click', function(){
   $('.main__goods--items').removeClass('main__goods--list');
    $('.main__goods--item').addClass('main__goods--tile');
    $('.main__goods--item').removeClass('main__goods--list'); 
   $(this).addClass('active');
   $('.btn-list').removeClass('active');    
}); 

$('.btn-list').on('click', function(){
   $('.main__goods--items').addClass('main__goods--list'); 
   $('.main__goods--item').removeClass('main__goods--tile'); 
    $('.main__goods--item').addClass('main__goods--list'); 
   $(this).addClass('active');
   $('.btn-tile').removeClass('active');  
}); 

if ($(window).width() >= 768) {
$('.main__goods--tile').mouseover(function(){
    if($(this).hasClass('main__goods--list') || $(this).hasClass('gPage-recent-item')) {
        return false;
    }
    var offsetItem = $(this).offset();
    var itemWidth = $(this).innerWidth();
    var itemHeight = $(this).innerHeight();
    console.log(itemWidth, itemHeight);
    $(this).clone().addClass('hoverItem').css('width', itemWidth).css('height', itemHeight).appendTo('body').css('top', offsetItem.top + 'px').css('left', offsetItem.left + 'px').fadeIn(300, function(){
        $(this).addClass('hover');
    }).mouseleave(function(){
        $(this).fadeOut(100, function(){
            $(this).remove();
        });
    });
});
};

if ($(window).width() >= 768) {
$('.nRec-item').mouseover(function(){
    var offsetItem = $(this).offset();
    var itemWidth = $(this).innerWidth();
    var itemHeight = $(this).innerHeight();
    console.log(itemWidth, itemHeight);
    $(this).clone().addClass('hoverSubItem').css('width', itemWidth).css('height', itemHeight).appendTo('body').css('top', offsetItem.top + 'px').css('left', offsetItem.left + 'px').fadeIn(300, function(){
        $(this).addClass('Subhover');
    }).mouseleave(function(){
        $(this).fadeOut(100, function(){
            $(this).remove();
        });
    });
});
};

if ($(window).width() >= 768) {
$('.catalog-item').mouseover(function(){
    var offsetItem = $(this).offset();
    var itemWidth = $(this).innerWidth();
    var itemHeight = $(this).innerHeight();
    console.log(itemWidth, itemHeight);
    $(this).clone().addClass('hoverSubItem').css('width', itemWidth).css('height', itemHeight).appendTo('body').css('top', offsetItem.top + 'px').css('left', offsetItem.left + 'px').fadeIn(300, function(){
        $(this).addClass('Subhover');
    }).mouseleave(function(){
        $(this).fadeOut(100, function(){
            $(this).remove();
        });
    });
});
};

for (i = 1; i < 1000; i+=4) {   
    $('.gipfel__main .main__goods--item:nth-child(' + i + ')').css('border-left', 'none');
};

for (i = 4; i < 1000; i+=4) {   
    $('.gipfel__main .main__goods--item:nth-child(' + i + ')').css('border-right', 'none');
};

for (i = 1; i < 1000; i+=4) {   
    $('.gipfel__catalog2 .main__goods--item:nth-child(' + i + ')').css('border-left', 'none');
};

for (i = 4; i < 1000; i+=4) {   
    $('.gipfel__catalog2 .main__goods--item:nth-child(' + i + ')').css('border-right', 'none');
};

for (i = 1; i < 1000; i+=3) {   
    $('.gipfel__catalog3 .main__goods--item:nth-child(' + i + ')').css('border-left', 'none');
};

for (i = 3; i < 1000; i+=3) {   
    $('.gipfel__catalog3 .main__goods--item:nth-child(' + i + ')').css('border-right', 'none');
};

for (i = 1; i < 1000; i+=3) {   
    $('.news__content .news-item:nth-child(' + i + ')').css('border-left', 'none');
};

for (i = 3; i < 1000; i+=3) {   
    $('.news__content .news-item:nth-child(' + i + ')').css('border-right', 'none');
};

$('.apply-filter').on('click', function(){
   $(this).css('opacity', 0);
   $(this).css('z-index', -1);
}); 


$('label').on('click', function(){
    var offset = $( this ).offset();
    var lblWidth = $(this).width();
    var offsetLeft = offset.left;
    var offsetTop = offset.top;
    $('.apply-filter').css('top', offsetTop + 'px');
    $('.apply-filter').css('left', offsetLeft + 210 + 'px');
    $('.apply-filter').css('opacity', 1);
    $('.apply-filter').css('z-index', 1);
});


$(function() {
   $('#select-cities').selectize();
});


setInterval(function(){
 var focusbox;
 focusbox = $(".more-cities");
 focusbox.focus();
});  

setInterval(function(){
    if($('li[data-value="more-cities"]').hasClass('selected')) {
        $('.goods-ordering-item .nice-select').css('display', 'none');
        $('.more-cities').css('display', 'block');
    } else {
        $('.goods-ordering-item .nice-select').css('display', 'block');
        $('.more-cities').css('display', 'none');
    }
});

$('.delivery-type-item').on('click', function(){
    $('.delivery-type-item').removeClass('active');
    $(this).addClass('active');
});

$('.payment-type-item').on('click', function(){
    $('.payment-type-item').removeClass('active');
    $(this).addClass('active');
});

var gLikeSwiper = new Swiper('.swiper-container.gLike-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination.gLike-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.gLike-container',
    prevEl: '.swiper-button-prev.gLike-container',
  },
  breakpoints: {
    767: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
  },
}); 

var nRecSwiper = new Swiper('.swiper-container.nRec-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  allowTouchMove: false, 
  pagination: {
    el: '.swiper-pagination.nRec-container',
    clickable: true,
  },
  breakpoints: {
    767: {
        slidesPerView: 1,
        spaceBetween: 5,
        allowTouchMove: true,
    },
  },
}); 

var gPageSwiper = new Swiper('.swiper-container.gPage-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination.gPage-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.gPage-container',
    prevEl: '.swiper-button-prev.gPage-container',
  },
  breakpoints: {
    767: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
  },
});  


$('.good-close').on('click', function(){
   $(this).closest('.swiper-slide').fadeOut().remove();
    gPagerecentSwiper.update();   
});

if ($(window).width() < 768) {
    $('.remove-text').remove();
    $('.menu-toggler span').on('click', function(){
       $('.menu-toggler span').toggleClass('active');
    });
    $('.menu-toggler').on('click', function(){
       $('.gipfel-nav .container > ul').toggleClass('active');
         $('.header__countem').toggleClass('active');
       $('header').toggleClass('active');    
    });
    $('.gnav-item').on('click', function(){
        console.log('hi!');
       $('.gnav-item').removeClass('active');
       $(this).addClass('active');    
    });
    $('.gipfel-submenu-nav a').on('click', function(){
        console.log('hey!');
        $(this).closest('.gnav-item').removeClass('active');
    });

        var catSlide = [];

        $('.main-goods ul li').on('click', function(){
            var elIndex = $(this).index();

            catSlide[0] = 0;

            if( $(this).hasClass('current') ) return;

            $(this).closest('ul').find('li').removeClass('current');
            $(this).addClass('current');

            if( typeof catSlide[elIndex] == "undefined" )
            {
                var elOffset  = $(this).offset(); //Отспут li от начала ul
                console.log(elOffset);
                    ulOffset  = $(this).closest('ul').offset(); //Отступ от левого края - ul
                console.log(ulOffset);
                    count     = Math.abs(ulOffset.left) + Math.abs(elOffset.left); //Новый - Отступ от левого края
                console.log(count);
                    windWidth = $(window).width(); //Ширина окна браузера
                console.log(windWidth);
                    elWidth = $(this).width();
                console.log(elWidth);
                    calcSum = (windWidth - elWidth) / 2;
                console.log(calcSum);
                    newCoun = count - calcSum;
                console.log(newCoun);

                $(this).closest('ul').css('transform','translateX(-'+ newCoun +'px)');

                catSlide[elIndex] = newCoun;

            } else {
                $(this).closest('ul').css('transform','translateX(-'+ catSlide[elIndex] +'px)');
            }
        });
    
    $('.back-text').remove();
};

var mainGoodSwiper = new Swiper('.swiper-container.mainGood-container', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 0,
  slidesPerColumnFill: 'row',
  pagination: {
    el: '.swiper-pagination.mainGood-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.mainGood-container',
    prevEl: '.swiper-button-prev.mainGood-container',
  },
  breakpoints: {
    767: {
        spaceBetween: 5,
        slidesPerView: 1,
        slidesPerColumn: 1,
    },
  },
}); 

var gPagerecentSwiper = new Swiper('.swiper-container.gPage-recent-container', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 0,
    allowTouchMove: false,  
    slidesPerColumnFill: 'row',
  pagination: {
    el: '.swiper-pagination.gPage-recent-container',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.gPage-recent-container',
    prevEl: '.swiper-button-prev.gPage-recent-container',
  },
  breakpoints: {
    767: {
        allowTouchMove: true,  
        spaceBetween: 5,
        slidesPerView: 1,
        slidesPerColumn: 1,
    },
  },
}); 




