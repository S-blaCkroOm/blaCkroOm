export function runHero() {
  const hero = document.getElementById("hero");
  const videoBox = hero.querySelector(".video");
  const h2 = hero.querySelector("h2");
  const p = hero.querySelector("p");
  const img = hero.querySelector(".me");
  const button = hero.querySelector("button");

  const colors = {
  blood: "#7e0d13",
  default: "#a9a9a9",
};

  const splitH2 = SplitText.create(h2, { type: "words", wordsClass: "word++" });
  const splitP = SplitText.create(p, {
    type: "words",
  });
  const splitButton = SplitText.create(button, {
    type: "words",
    wordsClass: "word++",
  });

  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: button,
      start: "top 90%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  const runAnimations = () => {
    const tl = gsap.timeline();
    tl.from(videoBox, {
      background: colors.blood,
      repeat: 10,
      duration: 0.1,
    })
      .from(videoBox, { filter: "blur(10px)", duration: 2 }, "<")
      .from(
        splitH2.words,
        {
          filter: "blur(10px)",
          duration: 1,
          stagger: 0.3,
        },
        "<"
      )
      .to(splitH2.words[2], { color: colors.blood, fontFamily: "Poiret One" }, "<")
      .from(
        splitP.words,
        {
          autoAlpha:0,
          x: 100,
          duration: .3,
          stagger: .1,
        },
        "<"
      )

      .from(
        img,
        {
          y: 200,
          autoAlpha: 0,
          duration: 1,
        },
        "<"
      )
    scrollTL
      .from(button, {
        rotate: 30,
        scale: 0.8,
        autoAlpha: 0,
        duration: 1,
      })
      .to(splitButton.words[1], {
        color: colors.blood,
        fontFamily: "Poiret One",
      });
  };
  const setupDesktopEvents = () => {
    button.addEventListener("mouseenter", () => {
      gsap.to(splitButton.words[0], {
        color: colors.blood,
        fontFamily: "Poiret One",
      });
      gsap.to(splitButton.words[1], { color: colors.default, fontFamily: "Outfit" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(splitButton.words[0], { color: colors.default, fontFamily: "Outfit" });
      gsap.to(splitButton.words[1], {
        color: colors.blood,
        fontFamily: "Poiret One",
      });
    });
  };
  gsap.matchMedia().add("(min-width: 1280px)", () => {
    setupDesktopEvents();
  });
  runAnimations();
}
