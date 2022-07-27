(function($){
    /* 문 서 정 보 변 경*/
    var info = [
        {'name' : '메인페이지', 'file': 'index.html', 'url' : 'http://mecayours.co.kr/wp/demo/SGI/sgi_way_main.html', 'address' : 'gsk/index'},
        {'name' : '서브페이지 1', 'file': 'whoweare.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/gsk/whoweare.html', 'address' : 'gsk/whoweare'},
        {'name' : '서브페이지 2', 'file': 'portfolio.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/gsk/portfolio.html', 'address' : 'gsk/portfolio'},
        {'name' : '서브페이지 3', 'file': 'detail_ct.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/gsk/detail_ct.html', 'address' : 'gsk/detail_ct'},
        {'name' : '서브페이지 4', 'file': 'csr.html', 'url' : 'http://www.mecayours.co.kr/wp/demo/gsk/csr.html', 'address' : 'gsk/csr'}
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