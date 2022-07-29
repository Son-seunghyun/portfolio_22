(function($){
    $(function(){
		//header nav
    	$('#header-menu').click(function(){
			var txt = $(this).find('span').text();
			if(txt == 'menu'){
				$(this).find('span').text('close');
			}
			else{
				$(this).find('span').text('menu');
			}
			$('.header__overlay').toggleClass('visible');
		});
		
		//main scroll
		$('.hire_btn').click(function(){
			var aboutScroll =$('.about').offset().top;
			var realScroll = aboutScroll+60
			$('html,body').animate({
				scrollTop : realScroll
			},900)
		})
		
		//header scroll
		$(window).scroll(function(){
			var nowScroll = $(document).scrollTop();
			
			var aboutScroll = $('.about').offset().top;
			var workScroll = $('.work').offset().top;
			var contactScroll =$('.contact').offset().top;

			if( nowScroll >= 0 &&  nowScroll < aboutScroll){
				$('.header__nav li:nth-child(1) a').addClass('active')
				.parent().siblings().find('a').removeClass('active');	
				
				$('.header__nav li a').css('color','#fff');
				$('.header').removeClass('shadow');	
				$('#header-menu span').css('color','#fff');
			}
			else if( nowScroll >= aboutScroll &&  nowScroll < workScroll){
				$('.header__nav li:nth-child(2) a').addClass('active')
				.parent().siblings().find('a').removeClass('active');
				
				$('.header__nav li a').css('color','#000');
				$('.header').addClass('shadow');
				$('#header-menu span').css('color','#000');	
			}
			else if( nowScroll >= workScroll &&  nowScroll < contactScroll){
				$('.header__nav li:nth-child(3) a').addClass('active')
					.parent().siblings().find('a').removeClass('active');	
				
				$('.header__nav li a').css('color','#fff');
				$('.header').removeClass('shadow');	
				$('#header-menu span').css('color','#fff');
			}
			else if( nowScroll >= contactScroll){
				$('.header__nav li:nth-child(4) a').addClass('active')
				.parent().siblings().find('a').removeClass('active');	
				
				$('.header__nav li a').css('color','#fff');
				$('.header').removeClass('shadow');	
				$('#header-menu span').css('color','#fff');
			}
		});
		
		//mail service
		window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) { 
                event.preventDefault();
                this.contact_number.value = Math.random() * 100000 | 0;

                emailjs.sendForm('service_ro7vbui', 'template_839bnad', this);  
            });
        };
		$('#send-button').click(function(){
            if($('#user_name').val()=='') { 
                alert('이름을 입력해 주세요'); 
                $('#user_name').focus(); 
            } 
            else if($('#user_mail').val()=='') { 
                alert('메일을 입력해 주세요'); 
                $('#user_mail').focus(); 
            } 
            else if($('#user_text').val()=='') { 
                alert('내용을 입력해 주세요'); 
                $('#user_text').focus(); 
            } 
            else { 
                alert('메일이 전송되었습니다');
                
            }
        })
		
		//scroll animation//
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