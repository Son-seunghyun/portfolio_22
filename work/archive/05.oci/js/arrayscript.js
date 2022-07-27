(function ($) {

    /* 문 서 정 보 변 경*/
    var info = [
        {
            'name': '메인페이지',
            'file': 'index.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/index.html',
            'address': 'oci/index'
        },
        {
            'name': '서브페이지 1-1',
            'file': 'esg_environment.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/esg_environment.html',
            'address': 'oci/esg_environment'
        },
        {
            'name': '서브페이지 1-2',
            'file': 'esg_social.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/esg_social.html',
            'address': 'oci/esg_social'
        },
        {
            'name': '서브페이지 1-3',
            'file': 'esg_governance.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/esg_governance.html',
            'address': 'oci/esg_governance'
        },
        {
            'name': '서브페이지 2',
            'file': 'material_highlight.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/material_highlight.html',
            'address': 'oci/material_highlight'
        },
        {
            'name': '서브페이지 3',
            'file': 'focus.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/oci/focus.html',
            'address': 'oci/focus'
        },
        {
            'name': '메인메뉴노출',
            'file': 'index.html',
            'url': '../../wp/demo/oci/index.html',
            'address': 'oci/index'
        }
    ]
    $('.side-nav.list li').click(function () {
        var index = $(this).index();
        var infomation = info[index];
        $('.side-nav.info li:nth-child(1)').find('span').text(infomation.name);
        $('.side-nav.info li:nth-child(2)').find('span').text(infomation.file);
        $('.side-nav.info li:nth-child(3)').find('.newOpen').prop('href', infomation.url);
        $('.side-nav.info li:nth-child(4)').find('span').text(infomation.address);
        $('.window-body iframe').attr('src', infomation.url);
    });


    /* 네 비 게 이 션 활 성 화 */
    $('.side-nav.list li').click(function () {
        for (var i = 1; i <= $('.side-nav.list li').length; i++) {
            var num = $('.side-nav.list li:nth-child(' + i + ')');
            if (num.attr('value') === '네비게이션') {
                $('#iframe').one("load", function () {
                    let header_box = $('#iframe').contents().find('.header_box');
                    let inner_box = $('#iframe').contents().find('.inner_box');
                    let close = $('#iframe').contents().find('.close');
                    let css = '<style>.header_box{display:block;} .inner_box{right : 0%;} .close{display : block}</style>';
                    $(header_box).append(css);
                    $(inner_box).append(css);
                    $(close).append(css);
                })

            }
        }
    })


})(jQuery);
