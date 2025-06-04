export function runUxUi(){
    const uiUx = document.getElementById("uiUx");
    const h2 = uiUx.querySelector("h2")
    const p = uiUx.querySelector("p")
    const header = uiUx.querySelector("header")
    const aside = uiUx.querySelector("aside")
    const main = uiUx.querySelector("main")
    const footer = uiUx.querySelector("footer")
 
 const splitH2 = SplitText.create(h2,{type: "chars"});
 
 const tl = gsap.timeline({
    defaults:{
        duration: 3,
        autoAlpha: 0,
    },
    scrollTrigger: {
        trigger: uiUx,
        start: "top top",
        end: "+=5000",
        scrub: 1,
        pin: true,
    }
 });
 
 tl
 .from(splitH2.chars,{x: -100,duration: .5,rotate: 360, scale: 0,duration: 1, stagger:.5})
 .from(p,{y:100})
 .from(header,{y: -100})
 .from(aside,{x: -100})
 .from(main,{x: 100})
 .from(footer,{y: 100})
}