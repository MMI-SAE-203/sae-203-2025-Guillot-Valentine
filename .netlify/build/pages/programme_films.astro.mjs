import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { k as allFilm } from '../chunks/backend_DWlajXT0.mjs';
import { $ as $$Layout } from '../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Card } from '../chunks/Card_CQnP-vMu.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_CIp0loCu.mjs';
import { F as Fleche } from '../chunks/fleche_hZWTDP1B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await allFilm();
  const genres = ["Documentaire", "Drame", "Biopic", "Fantastique", "Romance", "Science-fiction"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "programme_films", "nom": "Programme des films" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "D\xE9couvrez la S\xE9lection de l'\xC9dition 2025", "texte": "Cette ann\xE9e encore, le festival met \xE0 l\u2019honneur des films engag\xE9s, explorant des th\xE8mes environnementaux et soci\xE9taux avec cr\xE9ativit\xE9 et sensibilit\xE9. Voici un aper\xE7u des films s\xE9lectionn\xE9s pour cette \xE9dition, accompagn\xE9s des informations sur leurs auteurs, ainsi que les dates et horaires de projection." })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-6 mt-8"> ${genres.map((g) => renderTemplate`<a${addAttribute(`/programme_films/genre/${g}`, "href")} class="relative px-6 py-3 text-lg font-semibold text-orange1 bg-blanc backdrop-blur-md rounded-full shadow-md 
               transition-all duration-300 ease-in-out hover:bg-rose hover:shadow-xl hover:-translate-y-1 
               before:absolute before:inset-0 before:bg-white/10 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300
               active:scale-95 active:before:opacity-50"> ${g} </a>`)} </div> <div class="mb-19 grid grid-cols-1 lg:grid-cols-2 gap-2"> ${films.map((film) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...film })}`)} </div> <button class="flex gap-2 underline decoration-orange1 py-4 px-4 mb-19 ml-auto mr-20 rounded-2xl"> <span class="mt-1">${renderComponent($$result2, "Fleche", Fleche, {})}</span> <a class="text-orange1 text-xs font-bold"${addAttribute(`/programme_films/add`, "href")}>Ajouter un film</a> </button> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/index.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/index.astro";
const $$url = "/programme_films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
