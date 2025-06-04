export function runLanguage() {
  const language = document.getElementById("language");
  const h2 = language.querySelector("h2");
  const p = language.querySelector(".p");
  const story = language.querySelector(".story");
  const btn = language.querySelector("button");

  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: language,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
    },
  });

  scrollTL
    .from(h2, { x: -500, autoAlpha: 0 })
    .from(p, { x: 500, autoAlpha: 0 }, "<")
    .from(story, { x: -500, autoAlpha: 0 }, "<")
    .from(btn, { y: 200, autoAlpha: 0 })
    .to({}, { duration: 1 });

  const original = {
    direction: getComputedStyle(language).direction,
    font: getComputedStyle(language).fontFamily,
    h2: h2.innerHTML,
    p: p.innerHTML,
    story: story.textContent,
    lineHeight: getComputedStyle(story).lineHeight,
    btn: btn.textContent,
  };

  const h2Ar = `نفس <span class="blood">الروح</span>. لكن بألسنة مختلفة.`;
  const pAr = `لقد قرأت حتى الآن بلغة واحدة.  
لكن ماذا لو رُويت نفس القصة بشكل مختلف؟  
بدّل اللغة، وشاهد كيف يمكن للكلمات أن تغيّر الإيقاع — <span class="blood">لا المعنى</span>.`;
  const storyAr =
    "لا أذكر اللحظة تحديدًا، لكن هناك شيء ما في تسلسل الزمن اختلّ. الأيام لم تعد تمضي كما ينبغي، والساعات تتراكم بلا فواصل واضحة. أكتب شذرات متفرقة، لا أرى لها سياقًا، وأحيانًا أستيقظ على أفكار بديلة… لا أعلم إن كنت فكرت بها يومًا. الضوء يبدو مشوّهًا. الأصوات تبدأ من داخلي، ثم تُصِر أنها من العالم حولي. لم أعد أثق في ترتيب الأحداث، ولا في الناس، ولا حتى في انعكاسي… بل ولا حتى في المعنى نفسه — ذاك المعنى الذي يبدو ثابتًا، ثم ينزلق من بين يديّ كلما حاولت الإمساك به. أُردّد على نفسي: هذا واقع... لكن حتى هذه الجملة... تبدو مستعارة. هناك شيء غير مكتمل. شيء لا ينتهي. شيء يُعيد نفسه — لكن في كل مرة، بطريقة مختلفة. وتمامًا حين أظن أنني فهمته...";

  btn.addEventListener("click", () => {
    btn.classList.toggle("ar");
    if (btn.classList.contains("ar")) {
      gsap.from(language, { autoAlpha: 0, duration: 1 });
      language.style.direction = "rtl";
      language.style.fontFamily = "Cairo";
      btn.style.fontFamily = "Outfit";
      h2.innerHTML = h2Ar;
      p.innerHTML = pAr;
      story.textContent = storyAr;
      story.style.lineHeight = "2";
      btn.textContent = "EN";
    } else {
      gsap.from(language, { autoAlpha: 0, duration: 1 });
      language.style.direction = original.direction;
      language.style.fontFamily = original.font;
      h2.innerHTML = original.h2;
      p.innerHTML = original.p;
      story.textContent = original.story;
      story.style = original.lineHeight;
      btn.textContent = original.btn;
    }
  });
}
