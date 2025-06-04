export function runHeader() {
  const smoothWrapper = document.getElementById("smoothWrapper");
  const header = document.getElementById("mainHeader");
  const logo = document.querySelector(".logo");
  const logoSpan = logo.querySelector("span");
  const nav = document.querySelector(".mainNav");
  const navItems = header.querySelectorAll("li");
  const screen = document.querySelector(".screen");
  const menuToggle = document.querySelector(".menuToggle");
  const sections = document.querySelectorAll("section");
  const hero = document.getElementById("hero");

  const colors = {
  default: "#777",
  blood: "#7e0d13"
};

  const updateScreenWidth = () => {
    screen.textContent = window.innerWidth;
  };

  const setupScrollHideHeader = () => {
    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        const direction = currentScroll > lastScroll && currentScroll > 100 ? "-100%" : "0%";
        gsap.to(header, { y: direction, duration: 0.5 });
        lastScroll = currentScroll;
      },
    });
  };

  const animateHeader = (extra) => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "back", autoAlpha: 0, delay: 0.1 },
    });

    tl.from(header, { y: -50 })
      .from(logo, { x: -50 })
      .from(screen, { x: 50 }, "<");

    extra?.forEach((el) => tl.from(el, { x: 50 }, "<"));
    return tl;
  };

  const animateMenuOpen = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.to(nav, { x: "-100vw", autoAlpha: 1 })
      .to(smoothWrapper, { filter: "blur(5px)" }, "<")
      .to(header, { backdropFilter: "blur(0px)" }, "<")
      .from(navItems, { autoAlpha: 0, y: -10, stagger: 0.06 });
  };

  const animateMenuClose = () => {
    gsap.to(nav, { x: 0, autoAlpha: 0, duration: 0.3 });
    gsap.to(smoothWrapper, { filter: "blur(0px)", duration: 0.3 });
    gsap.to(header, { backdropFilter: "blur(5px)" }, "<");
  };

  const setupMenuToggle = () => {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("navShow");
      nav.classList.contains("navShow") ? animateMenuOpen() : animateMenuClose();
    });
  };

  const scrollToSection = (i) => {
    gsap.to(window, { duration: 1, scrollTo: { y: sections[i + 1] } });
  };

  const setupDesktopEvents = () => {
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, { color: colors.blood, scale: 1.1, duration: 0.5 });
      gsap.to(logoSpan, { color: colors.default, duration: 0.5 });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, { color: colors.default, scale: 1, duration: 0.5 });
      gsap.to(logoSpan, { color: colors.blood, duration: 0.5 });
    });

    navItems.forEach((el, i) => {
      el.addEventListener("click", () => scrollToSection(i));
      el.addEventListener("mouseenter", () => gsap.to(el, { color: colors.blood, scale: 1.1, duration: 0.5 }));
      el.addEventListener("mouseleave", () => gsap.to(el, { color: colors.default, scale: 1, duration: 0.5 }));
    });
  };

  const setupPhoneEvents = () => {
    navItems.forEach((el, i) => {
      el.addEventListener("click", () => {
        scrollToSection(i);
        animateMenuClose();
        nav.classList.remove("navShow");
      });
    });
  };

  const setupLogoScroll = () => {
    logo.addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: { y: hero } });
    });
  };

  const setupMatchMedia = () => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1279px)", () => {
      animateHeader([menuToggle]);
      setupMenuToggle();
      setupPhoneEvents();
    });

    mm.add("(min-width: 1280px)", () => {
      animateHeader(navItems);
      setupDesktopEvents();
    });
  };

  setupMatchMedia();
  setupScrollHideHeader();
  updateScreenWidth();
  setupLogoScroll();

  window.addEventListener("resize", updateScreenWidth);
}
