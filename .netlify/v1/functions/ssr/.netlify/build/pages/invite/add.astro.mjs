import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { c as createInvite } from '../../chunks/backend_DWlajXT0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await createInvite(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": "Ajouter une activit\xE9" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <p class="text-vert font-bold my-5">${message}</p> </div> <form class="flex flex-col w-full max-w-2xl mx-auto px-4 my-4" action="/invite/add" method="POST" enctype="multipart/form-data"> <input type="text" name="nom" placeholder="Nom de l'invité" required class="mt-2 p-2 border border-vert rounded-md"> <input type="text" name="prenom" placeholder="Prénom de l'invité" required class="mt-2 p-2 border border-vert rounded-md"> <input type="text" name="biographie" placeholder="Biographie de l'invité" required class="mt-2 p-2 border border-vert rounded-md"> <!-- <select
      id="role"
      name="role"
      required
      class="mt-2 p-2 border border-green-500 rounded-md w-full bg-white"
    >
      <option value="" disabled selected hidden>Choisir une langue</option>
      <option value="realisateur">Réalisateur</option>
      <option value="acteur">Acteur</option>
      <option value="animateur">Animateur</option>
    </select> --> <input type="email" name="email" placeholder="E-mail de l'invité" required class="mt-2 p-2 border border-vert rounded-md"> <input type="file" name="photo_invite"> <button class="bg-orange1 rounded px-1 py-1 text-white my-4" type="submit">Ajouter</button> </form> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/add.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/add.astro";
const $$url = "/invite/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
