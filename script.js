document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Scene 1 - ヒーローと敵が登場
    const hero = document.querySelector('#scene-1 .hero');
    const enemy = document.querySelector('#scene-1 .enemy');
    hero.style.transform = `translateX(${scrollY * 0.2}px)`;
    enemy.style.transform = `translateX(-${scrollY * 0.2}px)`;

    // Scene 2 - エフェクトの浮遊感
    const effect = document.querySelector('#scene-2 .effect');
    effect.style.transform = `scale(${1 + scrollY * 0.0005})`;

    // Scene 3 - ヒーローのエンディング
    const heroEnd = document.querySelector('#scene-3 .hero-end');
    heroEnd.style.transform = `translateY(${scrollY * 0.3}px)`;
});
