(function($){
    /* 문 서 정 보 변 경*/
    var info = [
        {'name' : '메인페이지', 'file': 'index.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/index.html', 'address' : 'epostbank/index'},
        {'name' : '메인페이지 - 메뉴노출', 'file': 'index.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/index.html', 'address' : 'epostbank/index'},
        {'name' : '서브페이지 1', 'file': 'L/l_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/L/l_01.html', 'address' : 'autron/L/l_01'},
        {'name' : '서브페이지 2', 'file': 'H/h_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/H/h_01.html', 'address' : 'autron/H/h_01'},
        {'name' : '서브페이지 3', 'file': 'I/I_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/I/I_01.html', 'address' : 'autron/I/I_01'},
        {'name' : '서브페이지 4', 'file': 'M/M_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/M/M_01.html', 'address' : 'autron/M/M_01'},
        {'name' : '서브페이지 5', 'file': 'A/A_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/A/A_01.html', 'address' : 'autron/A/A_01'},
        {'name' : '서브페이지 6', 'file': 'P/P_01.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/epostbank/P/P_01.html', 'address' : 'autron/P/P_01'}
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
})(jQuery);