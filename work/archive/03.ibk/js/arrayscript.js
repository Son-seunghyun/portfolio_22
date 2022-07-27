(function($){
    /* 문 서 정 보 변 경*/
    var info = [
        {'name' : '메인페이지', 'file': 'index.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/index.html', 'address' : 'epostbank/index'},
        {'name' : '서브페이지 1', 'file': 'special.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/special.html', 'address' : 'ibk/special'},
        {'name' : '서브페이지 2', 'file': 'introduction.htm', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/introduction.html', 'address' : 'ibk/introduction'},
        {'name' : '서브페이지 3', 'file': 'business.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/business.html', 'address' : 'ibk/business'},
        {'name' : '서브페이지 4', 'file': 'management.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/management.html', 'address' : 'ibk/management'},
        {'name' : '서브페이지 5', 'file': 'financial.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/financial.html', 'address' : 'ibk/financial'},
        {'name' : '서브페이지 6', 'file': 'anniversary.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/ibk/anniversary.html', 'address' : 'ibk/anniversary'},
        {'name' : '메인메뉴노출', 'file': 'index.html', 'url': '../../wp/demo/ibk/index.html', 'address' : 'ibk/index'}
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
                  let header =  $('#iframe').contents().find('.header-nav ul');
                  let css = '<style>.header-nav ul{display:block;}</style>';
                  $(header).append(css);
                })

            }
        }
    })
})(jQuery);