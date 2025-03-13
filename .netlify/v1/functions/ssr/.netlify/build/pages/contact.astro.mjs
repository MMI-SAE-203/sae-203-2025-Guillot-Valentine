import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import { c as createSvgComponent, $ as $$Layout, L as LogoFacebook, a as LogoInstagram, b as LogoTiktok } from '../chunks/Layout_BHEj3APp.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_CIp0loCu.mjs';
export { renderers } from '../renderers.mjs';

const IconLettre = createSvgComponent({"meta":{"src":"/_astro/icone_lettre.ZcLYdPgx.svg","width":22,"height":18,"format":"svg"},"attributes":{"mode":"inline","width":"22","height":"18","fill":"none"},"children":"<path d=\"M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z\" stroke=\"#E48227\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /><path d=\"M21 3l-10 7L1 3\" stroke=\"#E48227\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const IconTelephone = createSvgComponent({"meta":{"src":"/_astro/icone_telephone.BTF7BN0F.svg","width":21,"height":21,"format":"svg"},"attributes":{"mode":"inline","width":"21","height":"21","fill":"none"},"children":"<path d=\"M20 15.225v2.86a1.903 1.903 0 01-1.3 1.814c-.251.086-.518.117-.783.093a18.93 18.93 0 01-8.245-2.927 18.61 18.61 0 01-5.731-5.72 18.844 18.844 0 01-2.933-8.266 1.903 1.903 0 011.13-1.916c.243-.107.506-.163.77-.163h2.867a1.913 1.913 0 011.91 1.64c.121.915.346 1.814.67 2.68a1.903 1.903 0 01-.43 2.01L6.71 8.543a15.27 15.27 0 005.732 5.72l1.213-1.21a1.913 1.913 0 012.016-.43c.867.323 1.767.547 2.684.668A1.911 1.911 0 0120 15.225z\" stroke=\"#E48227\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "contact", "nom": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Nous Sommes L\xE0 pour Vous", "texte": "Vous avez une question sur le festival, envie de rejoindre l\u2019\xE9quipe, ou simplement besoin de plus d\u2019informations ? Notre \xE9quipe est \xE0 votre disposition pour r\xE9pondre \xE0 toutes vos interrogations. Que vous soyez un spectateur curieux, un professionnel du cin\xE9ma, ou un partenaire potentiel, n\u2019h\xE9sitez pas \xE0 nous contacter." })} ${maybeRenderHead()}<form class="flex flex-col w-full max-w-2xl mx-auto px-4 my-4" action="/offres/add" method="POST" enctype="multipart/form-data"> <span class="font-mulish mt-3 text-orange1 after:ml-0.5 after:text-vert after:content-['*']">Nom</span> <input type="text" name="nom" placeholder="ex: Dupont" required class="p-2 border border-noir rounded-md text-orange1 font-mulish"> <span class="font-mulish mt-3 text-orange1 after:ml-0.5 after:text-vert after:content-['*']">Prénom</span> <input type="text" name="prenom" placeholder="ex: Marc" required class="p-2 border border-noir rounded-md text-orange1 font-mulish"> <span class="font-mulish mt-3 text-orange1 after:ml-0.5 after:text-vert after:content-['*']">Email</span> <input type="email" name="email" placeholder="ex: you@example.com" required class="p-2 border border-noir rounded-md text-orange1 font-mulish"> <span class="font-mulish mt-3 text-orange1 after:ml-0.5 after:text-vert after:content-['*']">Message</span> <input type="text" name="message" placeholder="ex: Bonjour, je voulais savoir si..." required class="p-2 border border-noir rounded-md text-orange1 font-mulish"> <button class="bg-vert rounded mt-10 px-7 py-2 font-mulish uppercase text-blanc my-4" type="submit">Envoyer</button> </form> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "Coordonn\xE9es", "texte": "" })} <div class="mx-6"> <a class="flex text-noir gap-2" href="tel:03870078839">${renderComponent($$result2, "IconTelephone", IconTelephone, {})}03 70 07 88 39</a> <a class="flex my-5 mb-19 text-noir lowercase gap-2" href="mailto:festival.cinenature@agglo-belfort.fr">${renderComponent($$result2, "IconLettre", IconLettre, {})}festival.cinenature@agglo-belfort.fr</a> </div> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "titre": "R\xE9seaux Sociaux", "texte": "" })} <div class="mx-6 lg:mx-10 mb-19 flex gap-5"> <a href="https://facebook.com" aria-label="Visitez notre page facebook"> ${renderComponent($$result2, "LogoFacebook", LogoFacebook, {})} </a> <a href="https://instagram.com" aria-label="Visitez notre page instagram"> ${renderComponent($$result2, "LogoInstagram", LogoInstagram, {})} </a> <a href="https://tiktok.com" aria-label="Visitez notre page tiktok"> ${renderComponent($$result2, "LogoTiktok", LogoTiktok, {})} </a> </div> ` })}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/contact.astro", void 0);

const $$file = "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
