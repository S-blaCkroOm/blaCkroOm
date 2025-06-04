import { runIntro } from "./core/section/intro.js";
import { runHeader } from "./core/section/header.js";
import { runHero } from "./core/section/hero.js";
import { runResponsive } from "./core/section/resposive.js";
import { runPerformance } from "./core/section/performance.js";
import { runUxUi } from "./core/section/uiUx.js";
import { runLanguage } from "./core/section/language.js";
import { runPortfolio } from "./core/section/portfolio.js";
window.addEventListener("DOMContentLoaded", () => {
  document.fonts.ready.then(() => {
    ScrollSmoother.create({
      wrapper: "#smoothWrapper",
      content: "#smoothContent",
      smooth: 1,
      smoothTouch: 0.1,
    });
    runIntro().then(() => {
      runHeader();
      runHero();
      runResponsive();
      runPerformance();
      runUxUi();
      runLanguage();
      runPortfolio();
    });
  });
});
