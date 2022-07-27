(function($){
    $(function(){
        /* 메 인 커 버  */
        $('.intro-logo h1 span:nth-child(1)').addClass('show',1500);
        $('.intro-logo h1 span:nth-child(2)').delay(600).addClass('show',1500);
        $('.intro-logo h1 span:nth-child(3)').delay(900).addClass('show',1500,function(){
            $('.intro').fadeOut(1200);
        });
        
        /* 헤 더 */
        $(window).scroll(function(){ 
            var scrollValue = $(document).scrollTop(); 
            if( scrollValue >= 300 ){
                $('.header.index').addClass('show');
            }else{
                $('.header.index').removeClass('show');
            }
        });
        $('.header-menu').click(function(){
            $('.header.index').removeClass('show');
            $('.header-side').addClass('move',400);
            $('.header-side-overlay').fadeIn();
            $('.header').hide();
            $('.tothetop-btn').hide();
        });
        $('.header-side-top-btn').click(function(){
            $('.header-side').removeClass('move',400);
            $('.header-side-overlay').fadeOut();
            $('.header.index').addClass('show');
            $('.header').show();
            $('.tothetop-btn').show();
        });
        $('.header-side-overlay').click(function(){
            $('.header-side').removeClass('move',400);
            $('.header-side-overlay').fadeOut();
            $('.header.index').addClass('show');
            $('.header').show();
        });
        
        /* 아 코 디 언 */
        $('.portfolio-list li').click(function(){
            var index = $(this).index();
            $(this).find('.portfolio-list-title').toggleClass('show').parent().siblings().find('.portfolio-list-title').removeClass('show')
            $(this).find('.portfolio-list-inside').slideToggle().parent('li').siblings().find('.portfolio-list-inside').slideUp();
            $(this).find('.portfolio-list-title span').toggleClass('move');
        });
        
        $('.portfolio-list li').click(function(){
            var index = $(this).index();
            $('html,body').animate({
                scrollTop : 0
            },400)
        })
        
        /* c s r 메 인 커 버 */
        $('.csr-banner-inside p:nth-child(1)').addClass('showing',1200);
        $('.csr-banner-inside p:nth-child(2)').delay(500).addClass('showing',1200);
        $('.csr-banner-inside p:nth-child(3)').delay(1000).addClass('showing',1200);
        
        /* 숫 자 카 운 팅 */
        $('.counter').counterUp({
            delay: 30,
            time: 1200
        });
        
        /* tothetop */
         $(window).scroll(function() {
            if ($(this).scrollTop() > 900) {
                $('.tothetop-btn').fadeIn();
            } else {
                $('.tothetop-btn').fadeOut();
            }
        });
        
        $(".tothetop-btn").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });

    })
})(jQuery);