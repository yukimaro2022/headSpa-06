
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // jQuery(function(){
    //     const swiper__top= new Swiper('.js-top-swiper', {
    //       effect: 'fade',
    //       direction: 'horizontal',
    //       loop: true,
    //       autoplay: {
    //         delay: 3000, // ミリ秒単位で自動再生の間隔を指定
    //       },
    //     });
    //   });

    //header__right追従//
    // document.addEventListener('DOMContentLoaded', function() {
        const headerRight = document.querySelector('.header__right');
        const offsetTop = headerRight.offsetTop;
    
        function onScroll() {
            if (window.pageYOffset >= offsetTop) {
                headerRight.classList.add('header__right--fixed');
            } else {
                headerRight.classList.remove('header__right--fixed');
            }
        }
    
        window.addEventListener('scroll', onScroll);
    // });
    
    // ウィンドウのリサイズイベントを監視
window.addEventListener('resize', function() {
    const headerRight = document.querySelector('.header__right');
    // 画面の幅が特定の値（例: 768px）を下回った場合にクラスを追加
    if (window.innerWidth <= 536) {
        headerRight.classList.add('header__right--narrow');
    } else {
        // 画面が広がった場合はクラスを削除
        headerRight.classList.remove('header__right--narrow');
    }
});

// スクロール追従

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        // ウィンドウの幅が768ピクセル以下の場合は何もしない
        if (window.innerWidth <= 768) {
            return;
        }

        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // 下にスクロールしている場合
            if (currentScroll > 100) {
                // スクロールが100pxを超えたら、ヘッダーを隠す
                header.classList.add('hidden');
            }
        } else {
            // 上にスクロールしている場合
            header.classList.remove('hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});


// ハンバーガーメニュー
jQuery('.drawer__btns').on('click',function(){
    // jQuery('.drawer__btns').toggleClass('is-active');
        jQuery('.drawer__btns span').toggleClass('is-active');
        jQuery('.header-nav').toggleClass('is-active');
        jQuery('.header__drawer-background').toggleClass('is-active');
        jQuery('.header__inner').toggleClass('is-active');
  
        jQuery('body').toggleClass('scroll-lock');
  });

  jQuery('.drawer__item a').on('click',function(){
      
    // jQuery('.drawer__btns , .drawer__btns span').removeClass('is-active');
    jQuery('.header-nav').removeClass('is-active');
    jQuery('.header__drawer-background').removeClass('is-active');
    jQuery('.header__inner').removeClass('is-active');
    jQuery('body').removeClass('scroll-lock');
    });

    // スマホ時headerタイトル消える

    const headerInner = document.querySelector('.header__inner');
    const headerWrapperLeft = document.querySelector('.header__wrapperLeft');
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (headerInner.classList.contains('is-active')) {
            headerWrapperLeft.classList.add('header__wrapperLeft--hidden');
          } else {
            headerWrapperLeft.classList.remove('header__wrapperLeft--hidden');
          }
        }
      });
    });
  
    observer.observe(headerInner, {
      attributes: true // 属性の変更を監視
    });
    
    });
