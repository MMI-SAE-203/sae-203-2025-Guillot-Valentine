import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_BCsyBXHU.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Picture } from './_astro_assets_Dgau7A_H.mjs';
import { p as pb } from './backend_DWlajXT0.mjs';

const $$Astro = createAstro();
const $$ImagePB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagePB;
  const {
    record,
    field = "imgUrl",
    alt,
    classPicture,
    classImg,
    thumb = "1024x1024"
  } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}`}`;
}, "C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/ImagePB.astro", void 0);

export { $$ImagePB as $ };
