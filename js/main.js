document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================
       PRELOADER
    ========================== */

    const preloader = document.querySelector("#preloader");

    const loader = gsap.timeline();

    loader
        .from(".loader-text span", {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out"
        })
        .to(preloader, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                preloader.style.display = "none";
            }
        });


    /* =========================
       LENIS
    ========================== */

    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    /* =========================
       HERO
    ========================== */

    gsap.from(".hero h1", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        delay: 1,
        ease: "power4.out"
    });

    gsap.from(".hero .eyebrow", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.5
    });

    gsap.from(".enter-button", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.8
    });


    /* =========================
       ENTER BUTTON
    ========================== */

    document
        .querySelector("#enterButton")
        .addEventListener("click", () => {

            lenis.scrollTo("#scene-hero + section", {
                duration: 2
            });

        });


    /* =========================
       GENERIC REVEALS
    ========================== */

    gsap.utils.toArray(".reveal").forEach((element) => {

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    });


    /* =========================
       WORD CLOUD
    ========================== */

    gsap.utils.toArray(".word-cloud span").forEach((word, index) => {

        gsap.from(word, {
            opacity: 0,
            scale: 0.7,
            rotation: index % 2 === 0 ? -5 : 5,

            duration: 0.8,

            scrollTrigger: {
                trigger: ".word-cloud",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },

            delay: index * 0.08
        });

    });


    /* =========================
       PROUD TEXT
    ========================== */

    gsap.from(".proud-text", {

        scale: 0.7,
        opacity: 0,

        scrollTrigger: {
            trigger: ".proud-section",
            start: "top 60%",
            end: "center center",
            scrub: 1
        }

    });


    /* =========================
       HANDS
    ========================== */

    const handsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".hands-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    handsTimeline
        .to(".hand-left", {
            x: 120,
            duration: 1
        })
        .to(".hand-right", {
            x: -120,
            duration: 1
        }, "<")
        .to(".hands", {
            scale: 1.15,
            duration: 0.5
        });


    /* =========================
       US
    ========================== */

    gsap.from(".us", {

        scale: 0.4,
        opacity: 0,

        scrollTrigger: {
            trigger: ".us-section",
            start: "top 70%",
            end: "center center",
            scrub: 1
        }

    });


    /* =========================
       CAT PHOTOS
    ========================== */

    gsap.utils.toArray(".cat-photo").forEach((photo, index) => {

        gsap.from(photo, {

            opacity: 0,
            y: 100,
            rotation: index % 2 === 0 ? -3 : 3,

            duration: 1,

            scrollTrigger: {
                trigger: photo,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }

        });

    });


    /* =========================
       FUTURE STARS
    ========================== */

    const stars = document.querySelector(".stars");

    for (let i = 0; i < 60; i++) {

        const star = document.createElement("span");

        star.style.position = "absolute";
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.borderRadius = "50%";
        star.style.background = "white";

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.opacity = Math.random();

        stars.appendChild(star);

    }


    /* =========================
       SUN PARALLAX
    ========================== */

    gsap.to(".sun", {

        scale: 1.25,

        scrollTrigger: {
            trigger: ".sun-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }

    });


    /* =========================
       VIDEO MODAL
    ========================== */

    const videoButton = document.querySelector("#videoButton");
    const videoModal = document.querySelector("#videoModal");
    const closeVideo = document.querySelector("#closeVideo");
    const video = document.querySelector("#birthdayVideo");

    videoButton.addEventListener("click", () => {

        videoModal.classList.add("active");

        video.currentTime = 0;

        video.play();

    });

    closeVideo.addEventListener("click", () => {

        video.pause();

        videoModal.classList.remove("active");

    });


    /* =========================
       ESC TO CLOSE VIDEO
    ========================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            video.pause();

            videoModal.classList.remove("active");

        }

    });


    /* =========================
       REFRESH SCROLLTRIGGER
    ========================== */

    window.addEventListener("load", () => {

        ScrollTrigger.refresh();

    });

});