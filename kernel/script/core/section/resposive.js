export function runResponsive() {
  const responsive = document.getElementById("responsive");
  if (!responsive) return;

  const h2 = responsive.querySelector("h2");
  const p = responsive.querySelector("p");
  const img = responsive.querySelectorAll(".d");

  const splitH2 = SplitText.create(h2, { type: "chars" });
  const splitP = SplitText.create(p, { type: "words" });

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    scrollTrigger: {
      trigger: responsive,
      start: "top top",
      end: "+=5000",
      scrub: 1,
      pin: true,
    },
  });

  tl.from(splitH2.chars, {
    scale: 0.5,
    filter: "blur(10px)",
    autoAlpha: 0,
    stagger: 0.1,
  })
    .from(splitP.words, {
      duration: 0.3,
      autoAlpha: 0,
      x: "-100vw",
      filter: "blur(10px)",
      stagger: 0.1,
    })
    .from(img, {
      autoAlpha: 0,
      y: 200,
      scale: 0.5,
      stagger: 1,
    })
    .to(img, { filter: "blur(10px)", stagger: 1 }, "-=3.5")
    .to(img, { filter: "blur(0px)" });
}
