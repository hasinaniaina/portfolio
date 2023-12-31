jQuery(document).ready(function(){


        function deleteLoading() {
            jQuery('#loading').css('display','none');
        }
        function makeMenuActive() {
            jQuery(".hamburger").click(function(){
                jQuery(this).toggleClass("is-active");
                jQuery('.left').toggleClass("is-active");
                jQuery('.portfolio-navbar-header').toggleClass("is-active");
                jQuery('.portfolio-navbar-header-container').toggleClass("is-active");
                jQuery('.portfolio-navbar-header .right').toggleClass("is-active");
            });
        }

        function typing_text() {
            jQuery(".text-typing").each(function(){
                var text = jQuery(this).html();
                jQuery(this).html('');
                var typing=new Typed((this), {
                    strings: ["", text],
                    typeSpeed: 100,
                    backSpeed: 100,
                    loop: true,
                });
            });

            jQuery(".home-typing-text").each(function(){
                var text = jQuery(this).html();
                jQuery(this).html('');
                var typing=new Typed((this), {
                    strings: [text, '' ,'Développeur fullStack...'],
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: true,
                });
            })
        }

        function changeServiceListBackground() {
            var list_color = ['#fff', '#b23fc5', '#3cab6d', 
                                '#db1f1f', '#d7a42d', 
                                '#2d77d7', '#dc3545','#6c757d', 
                                '#000000', '#d18e38', '#b05e3e', '#296362',
                                '#42111a', ' #111942', '#11421e'];
            var service_container = jQuery('.portfolio-service-list');
            if (service_container) {
                service_container.each(function(){
                    var color_number = Math.floor(Math.random() * 10) + 1;
                    jQuery(this).css('transition', '1s');
                    jQuery(this).css('backgroundColor', list_color[color_number]);
                });

                setInterval(function(){
                    service_container.each(function(){
                        var color_number = Math.floor(Math.random() * 15) + 1;
                        jQuery(this).css('transition', '1s');
                        jQuery(this).css('backgroundColor', list_color[color_number]);
                    });
                }, 7000);
            }
        }


        function animateTag() {
            var home_polygon = jQuery('.polygon');
            var home_avatar   = jQuery('#my-avatar');
            var service_list = jQuery('.portfolio-service-list');
            var contact_phone = jQuery('.phone-container')
            var contact_address = jQuery('.address-container')
            var contact_email = jQuery('.email-container')

            home_polygon.addClass('showByRight');
            home_avatar.addClass('showByLeft');
            service_list.addClass('showByTop');

            contact_address.addClass('showByRight');
            contact_email.addClass('showByLeft');
            contact_phone.addClass('showByRight');

            setTimeout(function(){
                home_polygon.removeClass('showByRight');
                home_avatar.removeClass('showByLeft');
                service_list.removeClass('showByTop');

                contact_address.removeClass('showByRight');
                contact_email.removeClass('showByLeft');
                contact_phone.removeClass('showByRight');
            }, 3000)
        }

        changeServiceListBackground()
        makeMenuActive()
        deleteLoading()
        typing_text()
        animateTag()
  });