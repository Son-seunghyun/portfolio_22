(function($){
    /* 문 서 정 보 변 경*/
    var info = [
        {'name' : '메인페이지', 'file': 'index.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/index.html', 'address' : 'autron/index'},
        {'name' : '서브페이지 1', 'file': '1-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/1-1.html', 'address' : 'autron/1-1.html'},
        {'name' : '서브페이지 2', 'file': '2-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/2-1.html', 'address' : 'autron/2-1.html'},
        {'name' : '서브페이지 3', 'file': '3-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/3-1.html', 'address' : 'autron/3-1.html'},
        {'name' : '서브페이지 4', 'file': '4-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/4-1.html', 'address' : 'autron/4-1.html'},
        {'name' : '서브페이지 5', 'file': '5-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/5-1.html', 'address' : 'autron/5-1.html'},
        {'name' : '서브페이지 6', 'file': '6-1.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/autron/6-1.html', 'address' : 'autron/6-1.html'},
        {'name' : '네비게이션', 'file': 'index.html', 'url': '../../wp/demo/autron/index.html', 'address' : 'autron/index.html'}
    ]
    $('.side-nav.list li').click(function(){
        var index = $(this).index();
        var infomation = info[index];
        $('.side-nav.info li:nth-child(1)').find('span').text(infomation.name);
        $('.side-nav.info li:nth-child(2)').find('span').text(infomation.file);
        $('.side-nav.info li:nth-child(3)').find('.newOpen').prop('href',infomation.url);
        $('.side-nav.info li:nth-child(4)').find('span').text(infomation.address);
        $('.window-body iframe').attr('src',infomation.url);
    });
    
    /* 네 비 게 이 션 활 성 화 */
    $('.side-nav.list li').click(function () {
        for (var i = 1; i <= $('.side-nav.list li').length; i++) {
            var num = $('.side-nav.list li:nth-child(' + i + ')');
            if (num.attr('value') === '네비게이션') {
                $('#iframe').one("load", function () {
                    $('#iframe').contents().find('body').addClass('is-navPanel-visible');
                })

            }
        }
    });
})(jQuery);