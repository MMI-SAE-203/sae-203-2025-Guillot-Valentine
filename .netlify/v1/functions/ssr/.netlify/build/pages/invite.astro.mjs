import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { d as allInvite } from '../chunks/backend_BJEn8W9H.mjs';
import { $ as $$Layout } from '../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_CIp0loCu.mjs';
import { F as Fleche } from '../chunks/fleche_hZWTDP1B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await allInvite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "invite", "nom": "Invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Nos invit\xE9s pour Cin\xE9nature 2025", "text": "Au festival Cin\xE9nature, nous sommes ravis d'accueillir des invit\xE9s prestigieux qui partageront leur passion du cin\xE9ma et de l'\xE9cologie. R\xE9alisateurs, acteurs, jurys et autres professionnels du cin\xE9ma, chacun d'eux contribue \xE0 la richesse et \xE0 l'impact de cet \xE9v\xE9nement." })} ${invites.map((invite) => renderTemplate`${maybeRenderHead()}<div class="flex justify-center lg:justify-start lg:flex-row flex-col items-center"> <img class="flex w-80 h-auto lg:h-100 lg:w-auto full-width border-2 border-orange1 bg-blanc my-4 lg:mx-15 rounded items-center"${addAttribute(invite.img, "src")} alt="photo invite"> <div class=" lg:my-10 mx-5 space-y-5"> <h2> ${invite.prenom} ${invite.nom} </h2> <p class="uppercase font-bold">${invite.role}</p> <p>${invite.biographie}</p> <button class="flex gap-2 border border-orange1 text-gray uppercase py-4 px-4 mb-11 bg-blanc ml-auto mr-20"> <span class="mt-1"> ${renderComponent($$result2, "Fleche", Fleche, {})} </span> <a class="text-gris text-xs font-semibold"${addAttribute(`/invite/${invite.id}`, "href")}>
En savoir plus
</a> </button> </div> </div>`)}<button class="flex gap-2 underline decoration-orange1 py-4 px-4 mb-19 ml-auto mr-20 rounded-2xl"> <span class="mt-1">${renderComponent($$result2, "Fleche", Fleche, {})}</span> <a class="text-orange1 text-xs font-bold"${addAttribute(`/invite/add`, "href")}>Ajouter un invité</a> </button> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
