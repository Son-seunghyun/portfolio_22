(function($){
    $(function(){
        /* 100vh 관련 스크립트 */
        /*let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });*/
        
        /* 메 인 슬 라 이 드 */
        $('.main-slide-container').slick({
            arrows: false
        });
        $('.main-slide-container button').click(function(){
            $('.main-slide-container').slick('slickGoTo', 1);
        });
        
        /* 배 너 */
        $('.cover button').click(function(){
            var moveScroll = $('.contents').offset().top;
            $('html,body').animate({
                    scrollTop : moveScroll
                });
        });
        
        /* 헤 더 */
        $('.header-slide li').click(function(){
            var index = $(this).index();
            $('.header-side ul').eq(index-1).toggle();
        });

        /* 아 코 디 언 */
        $('.menu-out-list li').click(function(){
            $(this).children('ul').slideToggle(300);
            $(this).siblings().children('ul').hide();
        });
        
        /* 슬 라 이 더 */
        $('.slide-container').slick({
            slick: '.slide-container li',
            adaptiveHeight: true,
            swipe:false,
            prevArrow: '<span class="material-icons">keyboard_arrow_left</span>',
            nextArrow: '<span class="material-icons">keyboard_arrow_right</span>'
        });
        
        /* 배 너 슬 라 이 더 */
        $('.banner-slide-container').slick({
            slick: '.banner-slide-container li',
            arrows: false,
            infinite: false
        });
        
        /* 슬 라 이 드 효 과 */
        $(".slide-container").on("afterChange",function(event, slick, currentSlide){
            $('.header-side ul').hide();
        });
        $(".banner-slide-container").on("afterChange",function(event, slick, currentSlide){
            if (slick.$slides.length-1 == currentSlide) {
                $('.header-touch-btn').css('display','block');
                $('.link-btn').css('display','block');
            } 
            if (slick.$slides.length-1 !== currentSlide) {
                $('.header-touch-btn').css('display','none');
                $('.link-btn').css('display','none');
            } 
        });
    })
})(jQuery);