import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { F as Fleche } from './fleche_hZWTDP1B.mjs';
import { f as formatDate } from './helpers_Co2ilYY3.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...film } = Astro2.props;
  console.log(film);
  return renderTemplate`${maybeRenderHead()}<div class="border-2 border-orange1 bg-blanc pt-3 p-5 my-4 mx-4 rounded items-center grid lg:grid-cols-2"> <div class="flex justify-center"> <img class="w-150 h-auto lg:h-100 lg:w-auto"${addAttribute(film.img, "src")} alt="Affiche du film"> </div> <div> <h3 class="py-5">${formatDate(film.date)}</h3> <h2>${film.titre}</h2> <p class="pt-5"> <span class="font-bold underline">Genre :</span> ${film.genre} </p> <p class="pt-2"> <span class="font-bold underline">Lieu :</span> ${film.lieu} </p> <p class="py-5">${film.synopsis}</p> <button class="flex gap-2 border border-orange1 text-gray uppercase py-4 px-4 mb-11 bg-blanc ml-auto mr-20"> <span class="mt-1"> ${renderComponent($$result, "Fleche", Fleche, {})} </span> <a class="text-gris text-xs font-semibold"${addAttribute(`/programme_films/${film.id}`, "href")}>
En savoir plus
</a> </button> </div> </div>`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Card.astro", void 0);

export { $$Card as $ };
