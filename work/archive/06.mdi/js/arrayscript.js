(function ($) {

    /* 문 서 정 보 변 경*/
    var info = [
        {
            'name': '메인페이지',
            'file': 'index.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/mdi/index.html',
            'address': 'mdi/index'
        },
        {
            'name': 'Company',
            'file': 'company.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/mdi/company.html',
            'address': 'mdi/company'
        },
        {
            'name': 'Product - Thumbnail',
            'file': 'product/01.xenosys.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/mdi/product/01.xenosys.html',
            'address': 'mdi/product/01.xenosys'
        },
        {
            'name': 'Product - Detail',
            'file': '01.xenosys/01.headlight-L2S15.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/mdi/product/01.xenosys/01.headlight-L2S15.html',
            'address': 'mdi/01.xenosys/01.headlight-L2S15'
        },
        {
            'name': 'Contact',
            'file': 'contact.html',
            'url': 'http://www.mecayours.co.kr/wp/demo/mdi/contact.html',
            'address': 'mdi/contact'
        },
        {
            'name': '메인메뉴노출',
            'file': 'index.html',
            'url': '../../wp/demo/mdi/index.html',
            'address': 'mdi/index'
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
    /* iframe*/





    /* 네 비 게 이 션 활 성 화 */
    $('.side-nav.list li').click(function () {

        var iframeWidth = $('#iframe').width();

        if (iframeWidth < 800) {
            for (var i = 1; i <= $('.side-nav.list li').length; i++) {
                var num = $('.side-nav.list li:nth-child(' + i + ')');
                if (num.attr('value') === '네비게이션') {
                    $('#iframe').one("load", function () {
                        $('#iframe').contents().find('.header-sidebar').addClass('show');
                        let header_side_overlay = $('#iframe').contents().find('.header-side-overlay');
                        let css = '<style>.header-side-overlay{display : block}</style>';
                        $(header_side_overlay).append(css);
                    })

                }
            }
        } else {
            for (var i = 1; i <= $('.side-nav.list li').length; i++) {
                var num = $('.side-nav.list li:nth-child(' + i + ')');
                if (num.attr('value') === '네비게이션') {
                    $('#iframe').one("load", function () {
                        $('#iframe').contents().find('.header-product-nav').addClass('show');
                        let header_side_overlay = $('#iframe').contents().find('.header-side-overlay');
                        let css = '<style>.header-side-overlay{display : none}</style>';
                        $(header_side_overlay).append(css);
                    })

                }
            }
        }


        //select의 value 값이 800이하면 모바일 메뉴 활성화 이상이면 웹 메뉴 활성화
        $('.header-select.width select').change(function () {
            var value = $(this).val();
            var intVal = parseInt(value);
            if (intVal < 800) {
                for (var i = 1; i <= $('.side-nav.list li').length; i++) {
                    var num = $('.side-nav.list li:nth-child(' + i + ')');
                    if (num.attr('value') === '네비게이션') {
                        $('#iframe').contents().find('.header-sidebar').addClass('show');
                        $('#iframe').contents().find('.header-product-nav').removeClass('show');
                        let header_side_overlay = $('#iframe').contents().find('.header-side-overlay');
                        let css = '<style>.header-side-overlay{display : block}</style>';
                        $(header_side_overlay).append(css);

                    }
                }
            } else {
                for (var i = 1; i <= $('.side-nav.list li').length; i++) {
                    var num = $('.side-nav.list li:nth-child(' + i + ')');
                    if (num.attr('value') === '네비게이션') {
                        $('#iframe').contents().find('.header-sidebar').removeClass('show');
                        $('#iframe').contents().find('.header-product-nav').addClass('show');
                        let header_side_overlay = $('#iframe').contents().find('.header-side-overlay');
                        let css = '<style>.header-side-overlay{display : none}</style>';
                        $(header_side_overlay).append(css);

                    }
                }
            }


        });
    })



})(jQuery);
