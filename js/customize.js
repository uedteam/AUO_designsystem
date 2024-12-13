$(function () {
    // a[#]
    $('a').click(function (e) {
        if ($(this).attr('href') === '#') {
            $(this).addClass('nolink');
            e.preventDefault();
        }
    });

    // submenu
    var submenuLength = $('.sidebar').find('.submenu').length;
    if (submenuLength > 0) {
        $('.submenu').each(function () {
            $(this).siblings('a').addClass('has_child');
        });
    }
    $('.header')
        .find('nav>ul>li')
        .hover(
            function () {
                $(this).children('.submenu').stop(true, true).delay(200).slideDown();
            },
            function () {
                $(this).children('.submenu').stop(true, true).slideUp();
            }
        );

    $('.sidebar')
        .find('nav ul li')
        .off()
        .click(function () {
            $(this).children('.submenu').stop().slideToggle('easeOutQuint');
            $(this).children('a').stop().toggleClass('already_open');
        });

    //
    $('.tab ul li').each(function () {
        $(this)
            .find('a')
            .click(function (e) {
                $(this).addClass('active');
                $(this).parent().siblings().children('a').removeClass('active');
            });
    });
    // 選擇所有包含 .counter 的元素
    var counters = document.querySelectorAll('.mp_widget .counter');
    // 遍歷每個元素
    counters.forEach(function (counter) {
        var countTo = parseInt(counter.getAttribute('data-count'), 10); // 取得 data-count 的值並轉換為整數
        var countNum = 0; // 初始值

        var startCount = function () {
            var duration = 5000; // 動畫持續時間
            var startTime = null; // 初始化開始時間

            // 動畫函數
            function animateCount(timestamp) {
                if (!startTime) startTime = timestamp; // 設定動畫的開始時間
                var progress = timestamp - startTime;
                var step = Math.min(progress / duration, 1); // 計算進度百分比（0到1之間）

                counter.textContent = Math.floor(step * countTo); // 更新顯示的數字

                if (progress < duration) {
                    requestAnimationFrame(animateCount); // 繼續動畫
                } else {
                    counter.textContent = countTo; // 最終設定為目標數字
                }
            }

            requestAnimationFrame(animateCount); // 開始動畫
        };

        startCount();
    });
    var submenuLength = $('.sidebar').find('.submenu').length;
    if (submenuLength > 0) {
        $('.submenu').each(function () {
            $(this).siblings('a').addClass('has_child');
        });
    }
    $('.header')
        .find('nav>ul>li')
        .hover(
            function () {
                $(this).children('.submenu').stop(true, true).delay(200).slideDown();
            },
            function () {
                $(this).children('.submenu').stop(true, true).slideUp();
            }
        );
    $('.header')
        .find('.language_button')
        .hover(
            function () {
                $(this).children('.submenu').stop(true, true).delay(200).slideDown();
            },
            function () {
                $(this).children('.submenu').stop(true, true).slideUp();
            }
        );

    $('.sidebar')
        .find('nav>ul>li')
        .off()
        .click(function () {
            $(this).children('.submenu').stop().slideToggle('easeOutQuint');
            $(this).children('a').stop().toggleClass('already_open');
        });

    //
    var burger = $('.mobile_button').find('.btn');
    sidebar = $('.sidebar');
    burger.off().click(function (e) {
        sidebar.stop().toggleClass('menu-opened');
        $(this).blur();
        e.preventDefault();
    });
    // kv
    var $carousel = $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        pauseOnHover: false,
    });

    $carousel.find('.slick-current').addClass('start');
    setTimeout(function () {
        $carousel.find('.start').removeClass('start');
    }, 0);
    // reveal
    var currentIndex = 0;
    var rowsArray = [['Software Web UI Framework' + ' & ' + 'Components']];
    $('.strip').each(function () {
        var $t = $(this),
            rows = rowsArray[currentIndex];

        $t.html('');
        $.each(rows, function (i, val) {
            $('<span class="row"></span>').appendTo($t);
            var letters = $.trim(val).split('');
            $.each(letters, function (j, v) {
                v = v == ' ' ? '&nbsp;' : v;
                $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
            });
        });
    });

    function h3Reveal() {
        for (i = 0; i < $('.strip span').length; i++) {
            (function (ind) {
                setTimeout(function () {
                    $('.strip span:not(".row")').eq(ind).toggleClass('animate');
                }, ind * 40);
            })(i);
        }
    }

    function switchRows() {
        currentIndex = (currentIndex + 1) % rowsArray.length;
        $('.strip').each(function () {
            var $t = $(this),
                rows = rowsArray[currentIndex];

            $t.html('');
            $.each(rows, function (i, val) {
                $('<span class="row"></span>').appendTo($t);
                var letters = $.trim(val).split('');
                $.each(letters, function (j, v) {
                    v = v == ' ' ? '&nbsp;' : v;
                    $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
                });
            });
        });
        h3Reveal();
    }

    h3Reveal(); // Initial animation
    setInterval(switchRows, 15000); // Switch rows every 3 seconds
    //faq
    $('.faq_block ul li h3 a').each(function () {
        $(this).click(function (e) {
            $(this).parents('li').siblings().find('h3 a').stop().removeClass('open');
            $(this).stop().toggleClass('open');
            $(this).parents('.faq').find('.faq_content').slideUp();
            $(this).parent().siblings('.faq_content').stop().slideToggle();
            $(this).blur();
            e.preventDefault();
        });
    });
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    // header scroll fixed
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop')
        .off()
        .click(function (e) {
            $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutExpo');
            e.preventDefault();
        });

    // var burger = $('.mobile_button').find('.btn');
    // sidebar = $('.sidebar');

    // burger.off().click(function (e) {
    //     sidebar.stop().toggleClass('menu-opened');
    //     $(this).blur();
    // });

    //lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: 'img.lazy',
        //placeholder: '/images/basic/placeholder.gif',
        effect: 'fadeIn',
        fadeTime: 600,
        threshold: 0,
    });
    // 人才發展slider
    $('.talent').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('.aplus_photo_slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.job_description').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // $('.know_auo').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: false,
    //     lazyLoad: 'ondemand',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // });
    $('.auo_environment').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        dot: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.auo_culture').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.auo_value').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                },
            },
        ],
    });
    //tabs culture
    function initializeTabs(tabSelector, contentSelector, refreshFunctions) {
        var clickedTab = $(tabSelector + ' > .active');
        var tabWrapper = $(contentSelector);
        var activeTab = tabWrapper.find('.active');
        var activeTabHeight = activeTab.outerHeight();
        activeTab.show();

        $(tabSelector + ' > li').on('click', function () {
            $(tabSelector + ' > li').removeClass('active');
            $(this).addClass('active');
            clickedTab = $(tabSelector + ' .active');
            activeTab.fadeOut(250, function () {
                $(contentSelector + ' > div').removeClass('active');
                var clickedTabIndex = clickedTab.index();
                $(contentSelector + ' > div')
                    .eq(clickedTabIndex)
                    .addClass('active');
                activeTab = $(contentSelector + ' > .active');
                activeTabHeight = activeTab.outerHeight();
                tabWrapper
                    .stop()
                    .delay(0)
                    .animate(500, function () {
                        activeTab.delay(0).show();
                        // Call the specified refresh functions
                        refreshFunctions();
                    });
            });
        });
    }

    // Example usage for two sets of tabs with different refresh functions
    initializeTabs('.tab_items1', '.tab__content1', function () {
        $('.talent').slick('refresh');
        $('.job_description').slick('refresh');
        // $('.know_auo').slick('refresh');
    });

    initializeTabs('.tab_items2', '.tab__content2', function () {
        $('.auo_environment').slick('refresh');
        $('.auo_culture').slick('refresh').resize();
        $('.auo_value').slick('refresh').resize();
        $(window).resize();
    });
    // fixed q_btn
    $('.q_btn_01')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.intro').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_02')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.job_categories').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_03')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.compensation').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_04')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.development').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_05')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.culture').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_06')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.process').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_07')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.auo_employee').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_08')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.social_media').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_search')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.job_search').offset().top - 150 }, 800, 'easeOutExpo');
            sidebar.stop().removeClass('menu-opened');
            e.preventDefault();
        });
});
$(document).ready(function () {
    // 在網頁載入時或進入 viewport 時觸發程式碼
    $(window)
        .on('load resize scroll', function (e) {
            var window_H = $(window).innerHeight();
            var windowTop = $(window).scrollTop();
            $('.mask').each(function (index, el) {
                // 可以+130 讓圖進入多點再跑動畫
                var itemTop = Math.floor($(this).offset().top - windowTop + 130);
                // itemTop < window_H 是指進入到最底部
                // itemTop > 0 是指還沒滾到最上方
                // 同時條件成立 代表物件在看得到的地方才會 trigger 動畫
                if (itemTop < window_H && itemTop > 0) {
                    $(this).addClass('effect');
                }
            });
        })
        .trigger('scroll'); // 這裡觸發一次 scroll 事件，確保一開始就檢查元素是否在視窗內
    //
    $('.q_link01')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_01').offset().top - 150 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    $('.q_link02')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_02').offset().top - 50 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    $('.q_link03')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_03').offset().top - 50 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    $('.q_link04')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_04').offset().top - 50 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    $('.q_link05')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_05').offset().top - 50 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });
    $('.q_link06')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('#anchor_06').offset().top - 50 }, 800, 'easeOutExpo');
            $(this).blur();
            e.preventDefault();
        });

    /*------------------------------------*/
    ///////table 加上響應式table wrapper/////
    //*------------------------------------*/
    $('table').each(function (index, el) {
        //判斷沒有table_list
        if ($(this).parents('.table_list').length == 0 && $(this).parents('.fix_th_table').length == 0) {
            $(this).scroltable();
        }
    });
    // tablearrow arrow，為了設定箭頭
    $('.scroltable-nav-left').append('<div class="tablearrow_left" style="display:none;"></div>');
    $('.scroltable-nav-right').append('<div class="tablearrow_right"  style="display:none;"></div>');
    // 固定版頭
    function table_Arrow() {
        if ($('table').parents('.table_list').length == 0 && $('table').parents('.fix_th_table').length == 0) {
            if ($('.scroltable-wrapper').length > 0) {
                var stickyArrowTop = Math.floor($('.scroltable-wrapper').offset().top),
                    thisScroll = Math.floor($(this).scrollTop());
                if (thisScroll > stickyArrowTop - 230) {
                    $('.scroltable-wrapper .tablearrow_left').css('display', 'block');
                    $('.scroltable-wrapper .tablearrow_left').css(
                        { top: thisScroll - stickyArrowTop + 220 },
                        100,
                        'easeOutQuint'
                    );
                    $('.scroltable-wrapper .tablearrow_right').css('display', 'block');
                    $('.scroltable-wrapper .tablearrow_right').css(
                        { top: thisScroll - stickyArrowTop + 220 },
                        100,
                        'easeOutQuint'
                    );
                } else {
                    $('.scroltable-wrapper .tablearrow_left').css({
                        top: '10px',
                        display: 'none',
                    });
                    $('.scroltable-wrapper .tablearrow_right').css({
                        top: '10px',
                        display: 'none',
                    });
                }
            }
        }
    }
    $(window).scroll(function (event) {
        table_Arrow();
    });
    // $('.mp_widget .counter').each(function () {
    //     var $this = $(this),
    //         countTo = $this.attr('data-count');
    //     $({ countNum: $this.text() }).animate(
    //         {
    //             countNum: countTo,
    //         },
    //         {
    //             duration: 5000,
    //             easing: 'linear',
    //             step: function () {
    //                 $this.text(Math.floor(this.countNum));
    //             },
    //             complete: function () {
    //                 $this.text(this.countNum);
    //             },
    //         }
    //     );
    // });
    /*-----------------------------------*/
    //faq
    $('.faq_content>ul>li>a').each(function () {
        $(this).click(function (e) {
            // $(this).parents('li').siblings().children('a').stop().removeClass('active');
            $(this).stop().toggleClass('active');
            $(this).next('.faq_answer').stop().slideToggle();
            $(this).parent().siblings('.faq_answer').stop().slideToggle();
            $(this).blur();
            e.preventDefault();
        });
    });
});
