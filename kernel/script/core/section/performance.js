export function runPerformance() {
  const performance = document.getElementById("performance");
  const h2 = performance.querySelector("h2");
  const p = performance.querySelector("p");
  const video = performance.querySelector("video");
 
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: performance,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
    },
});

    scrollTL
    .from(h2,{x : "-100vw", ease: "elastic", duration: 1})
    .from(p,{x : "-100vw", ease: "elastic", duration: 1})
    .from(video,{scale: .4,duration: 2})
    .call(()=>{video.play()})
    .to({}, { duration: 3 });
}
