import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Card } from '../../../chunks/Card_CQnP-vMu.mjs';
import { i as getFilmsByGenre } from '../../../chunks/backend_DWlajXT0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$genre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$genre;
  const { genre } = Astro2.params;
  const films = await getFilmsByGenre(genre);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom_page": `Films - ${genre}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-12"> ${films.length > 0 ? films.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...item })}`) : renderTemplate`<p class="text-white text-center col-span-2">
Aucun film trouvé pour ce genre.
</p>`} </div> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/genre/[genre].astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/genre/[genre].astro";
const $$url = "/programme_films/genre/[genre]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$genre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
