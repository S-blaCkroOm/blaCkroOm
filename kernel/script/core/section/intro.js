export function runIntro() {
  return new Promise((resolve) => {
    const smoothWrapper = document.getElementById("smoothWrapper");
    const header = document.querySelector("header");
    const intro = document.getElementById("intro");
    const sound = intro.querySelector(".sound");
    const title = intro.querySelector(".title");
    const timer = intro.querySelector(".timer");
    const btn = intro.querySelector(".ready");

    const silent = gsap.timeline({ defaults: { duration: 1 } });
    const counter = { val: 99 };

    silent
      .from(title, { autoAlpha: 0, y: "50vh" })
      .to(title, { backgroundColor: "#a9a9a9", color: "#0c0c0c" })
      .to(title, { autoAlpha: 0, duration: 2 })
      .fromTo(timer, { autoAlpha: 0, y: -200 }, { autoAlpha: 1, y: 0 }, "<")
      .to(counter, {
        val: 0,
        duration: 3,
        onUpdate: () => (timer.textContent = Math.ceil(counter.val)),
      })
      .fromTo(
        btn,
        { autoAlpha: 0, y: 200, duration: 0.5 },
        { autoAlpha: 1, y: 0, duration: 0.5 }
      )
      .to(btn, { scale: 1.1, repeat: -1, yoyo: true });

    btn.addEventListener("click", () => {
      sound.play();
      btn.classList.add("none");

      const shake = gsap.timeline();
      shake
        .fromTo(
          timer,
          { x: -50 },
          { x: 50, repeat: 200, duration: 0.01, yoyo: true }
        )
        .to(timer, { x: 0 })
        .to(timer, { scale: 20, duration: 0.1 })
        .to(timer, { backgroundColor: "#fff", color: "#000", duration: 0.1 })
        .to(intro, { autoAlpha: 0, duration: 0.01 })
        .call(() => intro.classList.add("none"))
        .call(() => header.classList.remove("hidden"))
        .call(() => smoothWrapper.classList.remove("none"))
        .call(resolve);
    });
  });
}
