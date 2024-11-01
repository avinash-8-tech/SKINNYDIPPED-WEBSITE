const cursor = document.querySelector("#cursor")
const container = document.querySelector(".container")

container.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
    })
})

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const promotionItems = document.querySelectorAll(".promotion h2");

    gsap.from(promotionItems, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".promotion",
            scroller: "body",
            start: "top 80%",
            end: "top 40%",
            scrub: 3,
            toggleActions: "play reverse play reverse"
        }
    });
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const linePath = document.querySelector("#linePath");
    const svgWidth = window.innerWidth;
    const svgHeight = 200;

    const initialPath = `M 0 ${svgHeight / 2} Q ${svgWidth / 2} ${svgHeight / 2} ${svgWidth} ${svgHeight / 2}`;
    linePath.setAttribute("d", initialPath);

    document.querySelector(".curved-line").addEventListener("mousemove", (event) => {
        const rect = linePath.getBoundingClientRect();
        const relativeX = event.clientX - rect.left;
        const relativeY = event.clientY - rect.top;

        const controlX = relativeX;
        const controlY = relativeY;

        const newPathData = `M 0 ${svgHeight / 2} Q ${controlX} ${controlY} ${svgWidth} ${svgHeight / 2}`;
        gsap.to(linePath, {
            attr: { d: newPathData },
            duration: 0.3,
            ease: "power2.out",
        });
    });

    document.querySelector(".curved-line").addEventListener("mouseleave", () => {
        const resetPath = `M 0 ${svgHeight / 2} Q ${svgWidth / 2} ${svgHeight / 2} ${svgWidth} ${svgHeight / 2}`;
        gsap.to(linePath, {
            attr: { d: resetPath },
            duration: 0.5,
            ease: "power2.out",
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".for-community",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

timeline.from(".for-community h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

timeline.from(".for-community h2:nth-of-type(1) img", {
    opacity: 0,
    x: -30,
    duration: 0.3,
    ease: "power2.out"
}).from(".for-community h2:nth-of-type(1)", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.out"
}, "-=0.6");

timeline.from(".for-community h2:nth-of-type(2) img", {
    opacity: 0,
    x: -30,
    duration: 0.3,
    ease: "power2.out"
}).from(".for-community h2:nth-of-type(2)", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.out"
}, "-=0.6");

timeline.from(".for-community h2:nth-of-type(3) img", {
    opacity: 0,
    x: -30,
    duration: 0.3,
    ease: "power2.out"
}).from(".for-community h2:nth-of-type(3)", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.out"
}, "-=0.6");

timeline.from(".for-community .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
    ease: "elastic.out(1, 0.5)"
});
