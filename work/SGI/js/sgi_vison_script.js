(function($){
    //button click
    $('.sgi_vision_content .btn_more').click(function(){
        var text = $(this).find('span').text()
        if( text == 'view more'){
            $(this).find('span').text('close');
            $(this).find('img').attr('src','img/btn_minus.png')
                               .css('height','1');
            $(this).prev('p.more_text').addClass('show')
            $(this).parent().parent().next().fadeIn();
        }
        else{
            $(this).find('span').text('view more');
            $(this).find('img').attr('src','img/btn_plus.png')
                               .css('height','9');
            $(this).prev('p.more_text').removeClass('show')
            $(this).parent().parent().next().hide();
        }
    })
    
    //scroll animation//
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.scrollbox').each(function (i) {
                var top_of_element = $(this).offset().top;
                var top_of_window = $(window).scrollTop() + $(window).height();
                if(top_of_element <  top_of_window){
                    $(this).addClass('scroll');
                }
            });
        });
    });
})(jQuery);