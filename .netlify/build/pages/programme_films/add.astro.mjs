import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { h as createFilm } from '../../chunks/backend_BJEn8W9H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await createFilm(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": "Ajouter un film" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <p class="text-vert font-bold my-5">${message}</p> </div> <form class="flex flex-col w-full max-w-2xl mx-auto px-4 my-4" action="/programme_films/add" method="POST" enctype="multipart/form-data"> <input type="text" name="titre" placeholder="Titre du Film" required class="mt-2 p-2 border border-vert rounded-md"> <input type="date" name="date" placeholder="Date de diffusion" required class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="lieu"
      name="lieu"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir un lieu</option>
      <option value="Amphitéâtre Nature">Amphitéâtre Nature</option>
      <option value="Grand Chapiteau">Grand Chapiteau</option>
    </select> --> <input type="text" name="synopsis" required placeholder="Synopsis du Film" class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="genre"
      name="genre"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir un lieu</option>
      <option value="Documentaire">Documentaire</option>
      <option value="Animation">Animation</option>
      <option value="Aventure">Aventure</option>
      <option value="Fantastique">Fantastique</option>
      <option value="Drame">Drame</option>
      <option value="Science-fiction">Science-fiction</option>
      <option value="Romance">Romance</option>
      <option value="Biopic">Biopic</option>
    </select> --> <input type="number" name="duree" placeholder="Durée" class="mt-2 p-2 border border-vert rounded-md"> <input type="text" name="production" placeholder="Production" class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="langue"
      name="langue"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir une langue</option>
      <option value="français">Français</option>
      <option value="anglais">Anglais</option>
      <option value="espagnol">Espagnol</option>
    </select> --> <input type="number" name="annee_sortie" placeholder="Année de sortie" class="mt-2 p-2 border border-vert rounded-md"> <input type="text" name="list_acteur" placeholder="Liste des acteurs" class="mt-2 p-2 mb-3 border border-vert rounded-md"> <input type="url" name="bandeannonce" placeholder="URL Bande-annonce du film" class="mt-2 p-2 border border-vert rounded-md"> <input type="file" name="photo_affiche"> <button class="bg-orange1 rounded px-1 py-1 text-white my-4" type="submit">Ajouter</button> </form> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/add.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/add.astro";
const $$url = "/programme_films/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
