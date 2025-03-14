import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { j as oneFilm } from '../../chunks/backend_BJEn8W9H.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_DjZMch4N.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Paragraphe } from '../../chunks/Paragraphe_CIp0loCu.mjs';
import { f as formatDate } from '../../chunks/helpers_Co2ilYY3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await oneFilm(id);
  console.log(film);
  if (!film) {
    return Astro2.redirect("/programme_films");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": film.titre }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:justify-start lg:flex-row flex-col lg:grid-cols-2 grid items-center mt-10"> <div class="flex justify-center"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": film, "field": "affiche", "alt": film.Alt, "classPicture": "w-80 lg:w-160 h-auto ", "classImg": "flex h-auto w-80 lg:w-150 lg:h-auto full-width border-2 border-orange1 bg-blanc mb-5 lg:mb-100 lg:mx-15 rounded items-center" })} </div> <div class="lg:my-10 mx-5 space-y-3"> <h3>${formatDate(film.date)}</h3> <h2>${film.titre}</h2> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Synopsis", "texte": film.synopsis })} ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Fiche Technique" })} <div class="mb-19 space-y-3"> <div class="mx-6 lg:mx-10"> <p><span class="font-bold">Genre :</span> ${film.genre}</p> <p><span class="font-bold">Durée :</span> ${film.duree} minutes</p> <p> <span class="font-bold">Année de Sortie :</span> ${film.annee_sortie} </p> <p><span class="font-bold">Langue :</span> ${film.langue}</p> <p><span class="font-bold">Production :</span> ${film.production}</p> <p> <span class="font-bold">Liste des acteurs :</span> ${film.liste_acteur} </p> <p> <span class="font-bold">Invité :</span> ${film.expand?.invite.prenom} ${film.expand?.invite.nom} </p> </div> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Bande Annonce" })} ${film.bandeannonce && renderTemplate`<div class="mt-6 bg-orange1 p-4 rounded-lg"> <iframe class="w-full h-100 mt-4 rounded-lg shadow-md"${addAttribute(film.bandeannonce.replace("watch?v=", "embed/"), "src")} frameborder="0" allowfullscreen></iframe> </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/[id].astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/[id].astro";
const $$url = "/programme_films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
