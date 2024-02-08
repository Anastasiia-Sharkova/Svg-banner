const banner = document.getElementById('wrapper');

const timeline = gsap.timeline({ default: { duration: 1 } });
timeline.
  from(banner, {
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    ease: 'power1.out',
  })

  .to(
    ".logo-link",
    {
      scale: 4,
      transformOrigin: "155% -240%",
    },
    "<"
  )
  .to(
    ".logo-path",
    {
      strokeDashoffset: -66,
    },
    ">1"
  )
  .to(
    ".logo-link",
    {
      delay: 1,
      scale: 1,
      ease: 'power1.out',
    },
    ">1"
  )
  .fromTo(
    ".image-2",
    {
      opacity: 0,
      scale: 0.7,
      rotate: -9,
    },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    ">"
  )
  .fromTo(
    ".text-content",
    {
      opacity: 0,
      ease: 'power1.out',
    },
    {
      opacity: 1,
      ease: 'power1.out',
    },
    ">1"
  )
  .fromTo(
    ".footer-content",
    {
      opacity: 0,
      ease: 'power1.out',
    },
    {
      opacity: 1,
      ease: 'power1.out',
    },
    ">1"
  )
  .fromTo(
    'circle',
    {
      scale: 0,
    },
    {
      scale: 1,
      stagger: {
        // wrap advanced options in an object
        each: 0.1,
        from: "random",
        grid: "auto",
        ease: "power2.inOut",
        repat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
      },
    },
    ">1"
  )

let logo = document.querySelector(".logo");

let logoAnimation = gsap.to(".logo-path", {
  paused: true,
  strokeDashoffset: 0,
});

logo.addEventListener("mouseenter", () => logoAnimation.play());
logo.addEventListener("mouseleave", () => logoAnimation.reverse());


