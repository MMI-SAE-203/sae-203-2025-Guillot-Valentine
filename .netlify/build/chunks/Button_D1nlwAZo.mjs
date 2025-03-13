import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, a as renderTemplate } from './astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { F as Fleche } from './fleche_hZWTDP1B.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { texte } = Astro2.props;
  const { ref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="flex gap-2 border border-orange1 text-gray uppercase py-4 px-4 mb-11 bg-blanc ml-auto mr-20"> <span class="mt-1">${renderComponent($$result, "Fleche", Fleche, {})}</span> <a class="text-gris text-xs font-semibold"${addAttribute(ref, "href")}>${texte}</a> </button>`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Button.astro", void 0);

export { $$Button as $ };
