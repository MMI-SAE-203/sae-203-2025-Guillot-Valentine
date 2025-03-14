import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { a as allFilmByInviteId, b as allActiviteByInviteId, o as oneInvite } from '../../chunks/backend_BJEn8W9H.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_DjZMch4N.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Button } from '../../chunks/Button_D1nlwAZo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await allFilmByInviteId(id);
  const activite = await allActiviteByInviteId(id);
  const invite = await oneInvite(id);
  if (!invite) {
    return Astro2.redirect("/invite");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "nom": "Invit\xE9" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:justify-start lg:flex-row flex-col lg:grid-cols-2 grid items-center mt-10 my-10"> <div class="flex justify-center"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": invite, "field": "photo", "alt": invite.Alt, "classPicture": "w-80 lg:w-100 h-auto ", "classImg": "flex h-auto w-80 lg:w-100 lg:h-auto full-width border-2 border-orange1 bg-blanc mb-5 lg:mx-15 rounded items-center" })} </div> <div class="lg:my-10 mx-5 space-y-3"> <h2> ${invite.prenom} ${invite.nom} </h2> <p>${invite.biographie}</p> <p><span class="font-bold">Rôle :</span> ${invite.role}</p> <p><span class="font-bold">E-mail :</span> ${invite.email}</p> <h2 class="mt-10">Films / Activités associées</h2> <span class="block w-5 h-1 ml-4 my-4 bg-vert rounded"></span> ${activite.map((act) => renderTemplate`<p class="font-bold text-xl">${act.titre}</p>
          <p>${act.description}</p>
          ${renderComponent($$result2, "Button", $$Button, { "ref": `/programme_activites/${act.id}`, "texte": "En savoir plus" })}`)} ${film.map((act) => renderTemplate`<p class="font-bold text-xl">${act.titre}</p>
          <p>${act.synopsis}</p>
          ${renderComponent($$result2, "Button", $$Button, { "ref": `/programme_films/${act.id}`, "texte": "En savoir plus" })}`)}</div> </div> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
