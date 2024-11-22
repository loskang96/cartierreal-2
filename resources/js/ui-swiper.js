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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    invalidateOnRefresh: true,
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
            start: 'top 15%', // 트리거 시작 지점
            end: 'top 1%', // 트리거 종료 지점
            scrub: true, // 스크롤에 따라 자연스럽게 진행
            markers: false, // 디버깅용 마커 표시
        },
    }
);

gsap.matchMedia().add(
    '(min-width: 1024px)',
    () => {
        gsap.to('.sec-cartier .sec-g__img', {
            y: -10000,
            ease: 'none',
            scrollTrigger: {
                trigger: '.sec-cartier .sec-g__img', // 트리거 요소 설정
                start: 'top bottom', // 시작 위치
                end: 'bottom top', // 끝 위치
                scrub: 1, // 스크롤에 따라 자연스럽게 이동
                // markers: true,
            },
        });
    },
    gsap.to('.sec-cartier .sec-g__tit', {
        y: -390, // y축으로 50% 이동
        ease: 'none',
        scrollTrigger: {
            trigger: '.sec-cartier .sec-g__tit', // 트리거 요소 설정
            start: 'top bottom', // 시작 위치
            end: 'bottom top', // 끝 위치
            scrub: 1, // 스크롤에 따라 자연스럽게 이동
            // markers: true,
        },
    })
);

gsap.to('.sec-cartier .sec-g__in', {
    y: -30, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier .sec-g__in', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier2 .sec-g__tit', {
    y: -150, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier2 .sec-g__tit', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier2 .sec-g__desc', {
    y: -150, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier2 .sec-g__desc', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier2 .lst-cartier2', {
    y: -600, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier2 .lst-cartier2', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier3 .sec-g__tit', {
    y: -500, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier3 .sec-g__tit', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier3 .lst-cartier3', {
    y: -700, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier3 .lst-cartier3', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
gsap.to('.sec-cartier4 .sec-g__tit', {
    y: -100, // y축으로 50% 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.sec-cartier4 .sec-g__tit', // 트리거 요소 설정
        start: 'top bottom', // 시작 위치
        end: 'bottom top', // 끝 위치
        scrub: 1, // 스크롤에 따라 자연스럽게 이동
        // markers: true,
    },
});
