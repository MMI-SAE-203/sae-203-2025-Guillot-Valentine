import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { img1 } = Astro2.props;
  const { img2 } = Astro2.props;
  const { img3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto bg-gris1 p-6 mt-6 mb-19 text-white text-center"> <div class="lg:w-150 w-full overflow-hidden relative mx-auto"> <div class="flex gap-4 overflow-x-scroll scroll-smooth snap-x justify-center" id="carrousel"> <div class="flex-none w-full snap-center"> <img${addAttribute(img1, "src")} alt="" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img${addAttribute(img1, "src")} alt="" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img${addAttribute(img1, "src")} alt="" class="w-full rounded-lg"> </div> <div class="flex-none w-150 snap-center"> <img${addAttribute(img2, "src")} alt="" class="w-full rounded-lg"> </div> <div class="flex-none w-150 snap-center"> <img${addAttribute(img3, "src")} alt="" class="w-full rounded-lg"> </div> </div> <button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2" onclick="document.getElementById('carrousel').scrollBy({left: -600, behavior: 'smooth'})">
&lt;
</button> <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2" onclick="document.getElementById('carrousel').scrollBy({left: 600, behavior: 'smooth'})">
&gt;
</button> </div> <div class="mt-4 text-right"></div> </section>`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Carousel.astro", void 0);

export { $$Carousel as $ };
