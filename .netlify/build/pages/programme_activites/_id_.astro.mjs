import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { f as oneActivite } from '../../chunks/backend_BJEn8W9H.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Paragraphe } from '../../chunks/Paragraphe_CIp0loCu.mjs';
import { f as formatDate } from '../../chunks/helpers_Co2ilYY3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activite = await oneActivite(id);
  console.log(activite);
  if (!activite) {
    return Astro2.redirect("/programme_activites");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": activite.titre }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:my-10 mx-5 space-y-3 lg:justify-start lg:flex-row flex-col lg:grid-cols-2 grid items-center mt-10"> <div> <h3>${formatDate(activite.date)}</h3> <h2>${activite.titre}</h2> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Description", "texte": activite.description })} </div> <div class="mx-6 lg:mx-10 mb-19 space-y-3"> <h2 class="mt-10">Information</h2> <span class="block w-5 h-1 ml-4 my-4 bg-vert rounded"></span> <p><span class="font-bold">Genre :</span> ${activite.type}</p> <p><span class="font-bold">Lieu :</span> ${activite.lieu}</p> <p><span class="font-bold">Animateur :</span> ${activite.expand?.invite.prenom} ${activite.expand?.invite.nom}</p> </div> </div> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/[id].astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/[id].astro";
const $$url = "/programme_activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
