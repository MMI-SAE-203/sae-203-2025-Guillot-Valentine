import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { e as createActivites } from '../../chunks/backend_BJEn8W9H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await createActivites(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": "Ajouter une activit\xE9" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <p class="text-vert font-bold my-5">${message}</p> </div> <form class="flex flex-col w-full max-w-2xl mx-auto px-4 my-4" action="/programme_activites/add" method="POST" enctype="multipart/form-data"> <input type="text" name="titre" placeholder="Titre de l'activité" required class="mt-2 p-2 border border-vert rounded-md"> <input type="date" name="date" placeholder="Date de l'évènement" required class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="lieu"
      name="lieu"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir un lieu</option>
      <option value="Amphitéâtre Nature">Amphitéâtre Nature</option>
      <option value="Grand Chapiteau">Grand Chapiteau</option>
    </select> --> <input type="text" name="description" placeholder="Description du l'activité" required class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="type"
      name="type"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir une langue</option>
      <option value="Atelier">Atelier</option>
      <option value="Conférence">Conférence</option>
      <option value="Débat">Débat</option>
    </select> --> <button class="bg-orange1 rounded px-1 py-1 text-white my-4" type="submit">Ajouter</button> </form> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/add.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/add.astro";
const $$url = "/programme_activites/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
