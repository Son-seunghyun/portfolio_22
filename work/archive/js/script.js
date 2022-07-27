(function($){
    /* 셀 렉 트 박 스 */
    /* 분류 */
    $('.header-select.classification select').change(function(){
            var value = $(this).val();
            var $classification = $('.side-nav.list li');
            var length = $classification.length
            
            for(var i=1; i<=length; i++){
                var num = $('.side-nav.list li:nth-child('+ i + ')');
                if(value == num.attr('value')){
                    num.show();
                }
                else if(value == '분류'){
                    $classification.show();
                }
                else{
                    num.hide();
                }
            }

    });
    /* 진행상황 */
    $('.header-select.progress select').change(function(){
            var value = $(this).val();
            var $progress = $('.side-nav.list li');
            var length = $progress.length
        
            for(var i=1; i<=length; i++){
                var num = $('.side-nav.list li:nth-child('+ i + ')');
                var numPro = num.find('button')
                if(value == numPro.attr('value')){
                   num.show();
                }
                else{
                    num.hide();
                }
            }
            
    });
    /* iframe*/
    $('.header-select.width select').change(function(){
        var value = $(this).val();
        var intVal = parseInt(value);
        
        $('.window-body').css('width',value);  
            if(intVal < 800){
                $('.window-body').css('height',600);  
            }
            else if(intVal >= 800 && intVal < 1600){
                $('.window-body').css('height',750);  
            }
            else if(intVal >= 1600){
                $('.window-body').css('height',950);  
                
            }
    });
    
    /* 메 모 */
    $('.memo-top .material-icons').click(function(){
        $('.memo-inside').toggle();
        $('.memo').toggleClass('hide');
        var text = $(this).text();
        if( text == 'close'){
            $(this).text('more');
            $(this).next().show();
        }
        else{
            $(this).text('close');
            $(this).next().hide();
        }
    });
    
})(jQuery);