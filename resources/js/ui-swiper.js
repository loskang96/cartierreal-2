var swiper = new Swiper('.swiper-partners', {
    slidePreView: 4,
    spaceBetween: 0,
    centerSlides: true,
    loop: true,
    freeMode: true,
    observe: true,
    observeParent: true,
    speed: 8000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

gsap.fromTo(
    '.intro',
    {
        y: 0, // 시작 위치
        opacity: 1, // 시작 투명도
    },
    {
        y: -100, // 스크롤 시 위로 이동할 거리
        opacity: 0, // 투명하게 사라짐
        scrollTrigger: {
            trigger: '.intro', // 애니메이션이 적용될 요소
            start: 'top 40%', // 트리거 시작 지점 (화면의 80% 지점에 도달할 때 시작)
            end: 'top 2%', // 트리거 종료 지점 (화면의 30% 지점에 도달할 때 끝)
            scrub: true, // 스크롤에 따라 애니메이션이 자연스럽게 진행
            markers: false, // 디버깅용 마커 표시
            // duration: 1, // 애니메이션 지속 시간
        },
    }
);
gsap.to('.sec-g__img', {
    yPercent: 25, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-g__img', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
    },
});
gsap.to('.sec-g__tit', {
    yPercent: 100, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-g__tit', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
    },
});
gsap.to('.sec-g__tit', {
    yPercent: 100, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-g__tit', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
    },
});
