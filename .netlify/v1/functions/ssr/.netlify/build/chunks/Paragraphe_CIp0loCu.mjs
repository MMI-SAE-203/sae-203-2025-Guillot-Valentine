import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Paragraphe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paragraphe;
  const { titre } = Astro2.props;
  const { texte } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-6 mx-6 lg:mx-10"> <h2>${titre}</h2> <span class="block w-5 h-1 ml-4 my-4 bg-vert rounded"></span> <p>${texte}</p> </div>`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Paragraphe.astro", void 0);

export { $$Paragraphe as $ };
