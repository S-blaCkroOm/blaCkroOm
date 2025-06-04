export function runPortfolio() {
  const portfolio = document.getElementById("portfolio");
  const h2 = portfolio.querySelector("h2");
  const p = portfolio.querySelector("p");
  const carts = portfolio.querySelector(".carts");
  const cart = portfolio.querySelectorAll(".cart");
  const odd = portfolio.querySelectorAll(".odd")
  const even = portfolio.querySelectorAll(".even")
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: portfolio,
      start: "top top",
      end: "+=4000",
      scrub: 1,
      pin: true,
    },
  });
  scrollTL
    .from(h2, { y: -200, duration: 1, autoAlpha: 0 })
    .from(p, { y: 200, duration: 1, autoAlpha: 0 }, "<")
    .from(
      odd,
      {
        x: 300,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
      },
      "<"
    )
    .from(
      even,
      {
        x: -300,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
      },
      "<"
    )

    .to(cart, {
      duration: 9,
      x: () => -(carts.scrollWidth - window.innerWidth),
    });
}
