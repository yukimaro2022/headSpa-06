
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    jQuery(function(){
        const swiper__top= new Swiper('.js-top-swiper', {
          effect: 'fade',
          direction: 'horizontal',
          loop: true,
          autoplay: {
            delay: 3000, // ミリ秒単位で自動再生の間隔を指定
          },
        });
      });

    //header__right追従//
    document.addEventListener('DOMContentLoaded', function() {
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
    });
    
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


    // flow
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.space__card').forEach(card => {
      gsap.from(card, {
        duration: 1, // アニメーションの持続時間
        autoAlpha: 0, // autoAlphaを使うと、透明度の変更とvisibilityプロパティの制御を同時に行えます
        y: 50, // 50ピクセル上から開始
        ease: 'ease-out', // アニメーションのイージング
        scrollTrigger: {
          trigger: card, // この要素がビューポートに入ったらアニメーション開始
          start: 'top 75%', // 要素の上部がビューポートの下部からどの位置でアニメーションを開始するか
          toggleActions: 'play none none none' // スクロールの動作に応じたアニメーションの制御
        }
      });
    });
    

    $(document).ready(function() {
      $('.faq__question').click(function() {
          // この質問の回答部分の表示状態をトグル
          $(this).next('.faq__answer').slideToggle('fast');
          
          // faq__iconにis-activeクラスをトグル
          $(this).find('.faq__icon').toggleClass('is-active');
      });
  });
  
  
  // topへ戻る
  const pageTop = document.querySelector(".js__button");

 pageTop.addEventListener("click", scroll_top);

function scroll_top(){
    
    window.scroll({top:0,behavior:"smooth"});
}

window.addEventListener("scroll",
function scroll_event(){
    if(window.pageYOffset > 100){
        pageTop.style.opacity = "1";
    }else if(window.pageYOffset < 100 ){
        pageTop.style.opacity = "0";
    }
})

// price背景
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
});
