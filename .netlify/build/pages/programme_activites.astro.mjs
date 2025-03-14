import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { g as allActivite } from '../chunks/backend_BJEn8W9H.mjs';
import { $ as $$Layout } from '../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_CIp0loCu.mjs';
import { f as formatDate } from '../chunks/helpers_Co2ilYY3.mjs';
import { F as Fleche } from '../chunks/fleche_hZWTDP1B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await allActivite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "programme_activites", "nom": "Programme des Activit\xE9s" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "D\xE9couvrez les activit\xE9s de l'\xC9dition 2025", "texte": "Cette ann\xE9e encore, le festival propose une riche programmation d\u2019activit\xE9s pour \xE9veiller les consciences et encourager les \xE9changes autour des enjeux environnementaux et soci\xE9taux. Ateliers participatifs, rencontres inspirantes et exp\xE9riences immersives seront au rendez-vous pour sensibiliser petits et grands de mani\xE8re ludique et interactive. D\xE9couvrez le programme d\xE9taill\xE9 de ces activit\xE9s, ainsi que les horaires." })} ${maybeRenderHead()}<div class="grid lg:grid-cols-2 mb-19"> ${activites.map((activite) => renderTemplate`<div class="border-2 border-orange1 bg-blanc pt-3 p-5 my-4 mx-4 rounded items-center grid"> <h3 class="mb-3">${formatDate(activite.date)}</h3> <h2>${activite.titre}</h2> <p>${activite.description}</p> <a class="underline py-5 text-vert font-bold"${addAttribute(`/programme_activites/${activite.id}`, "href")}>
Voir plus
</a> </div>`)} </div> <button class="flex gap-2 underline decoration-orange1 py-4 px-4 mb-19 ml-auto mr-20 rounded-2xl"> <span class="mt-1">${renderComponent($$result2, "Fleche", Fleche, {})}</span> <a class="text-orange1 text-xs font-bold"${addAttribute(`/programme_activites/add`, "href")}>Ajouter une activité</a> </button> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/index.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/index.astro";
const $$url = "/programme_activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
