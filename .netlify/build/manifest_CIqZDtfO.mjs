import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BCsyBXHU.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/","cacheDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/node_modules/.astro/","outDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/dist/","srcDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/","publicDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/public/","buildClientDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/dist/","buildServerDir":"file:///C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/infos_pratiques","isIndex":false,"type":"page","pattern":"^\\/infos_pratiques\\/?$","segments":[[{"content":"infos_pratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infos_pratiques.astro","pathname":"/infos_pratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/invite/add","isIndex":false,"type":"page","pattern":"^\\/invite\\/add\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/add.astro","pathname":"/invite/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_activites/add","isIndex":false,"type":"page","pattern":"^\\/programme_activites\\/add\\/?$","segments":[[{"content":"programme_activites","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme_activites/add.astro","pathname":"/programme_activites/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_activites/[id]","isIndex":false,"type":"page","pattern":"^\\/programme_activites\\/([^/]+?)\\/?$","segments":[[{"content":"programme_activites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/programme_activites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_activites","isIndex":true,"type":"page","pattern":"^\\/programme_activites\\/?$","segments":[[{"content":"programme_activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme_activites/index.astro","pathname":"/programme_activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_films/add","isIndex":false,"type":"page","pattern":"^\\/programme_films\\/add\\/?$","segments":[[{"content":"programme_films","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme_films/add.astro","pathname":"/programme_films/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_films/genre/[genre]","isIndex":false,"type":"page","pattern":"^\\/programme_films\\/genre\\/([^/]+?)\\/?$","segments":[[{"content":"programme_films","dynamic":false,"spread":false}],[{"content":"genre","dynamic":false,"spread":false}],[{"content":"genre","dynamic":true,"spread":false}]],"params":["genre"],"component":"src/pages/programme_films/genre/[genre].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_films/[id]","isIndex":false,"type":"page","pattern":"^\\/programme_films\\/([^/]+?)\\/?$","segments":[[{"content":"programme_films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/programme_films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/programme_films","isIndex":true,"type":"page","pattern":"^\\/programme_films\\/?$","segments":[[{"content":"programme_films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme_films/index.astro","pathname":"/programme_films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.CB_dTHfW.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/infos_pratiques.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_activites/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/genre/[genre].astro",{"propagation":"none","containsHead":true}],["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/pages/programme_films/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/infos_pratiques@_@astro":"pages/infos_pratiques.astro.mjs","\u0000@astro-page:src/pages/invite/add@_@astro":"pages/invite/add.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programme_activites/add@_@astro":"pages/programme_activites/add.astro.mjs","\u0000@astro-page:src/pages/programme_activites/[id]@_@astro":"pages/programme_activites/_id_.astro.mjs","\u0000@astro-page:src/pages/programme_activites/index@_@astro":"pages/programme_activites.astro.mjs","\u0000@astro-page:src/pages/programme_films/add@_@astro":"pages/programme_films/add.astro.mjs","\u0000@astro-page:src/pages/programme_films/genre/[genre]@_@astro":"pages/programme_films/genre/_genre_.astro.mjs","\u0000@astro-page:src/pages/programme_films/[id]@_@astro":"pages/programme_films/_id_.astro.mjs","\u0000@astro-page:src/pages/programme_films/index@_@astro":"pages/programme_films.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CIqZDtfO.mjs","C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cf-B8ApY.mjs","C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/titou/Github/sae-203-2025-Guillot-Valentine/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/facebook.BJHYUqxK.svg","/_astro/icone_lettre.ZcLYdPgx.svg","/_astro/instagram.B6P6Mbh9.svg","/_astro/tiktok.BGFbCbP6.svg","/_astro/icone_telephone.BTF7BN0F.svg","/_astro/fleche.BKBsQjki.svg","/_astro/scene_locale.BrcNwwjJ.webp","/_astro/carousel_1.DMgWAQYA.webp","/_astro/atelier_rencontre.Dfh26AXK.webp","/_astro/carousel_3.2YHPD2eB.webp","/_astro/carousel_2.d4QuPuG0.webp","/_astro/engagement_ecologique.Pj8FsaOf.webp","/_astro/festival_accessible.CaWRu7lA.webp","/_astro/icone_maison.B3qY6F4P.svg","/_astro/icone_velo.CrjwmZTJ.svg","/_astro/icone_personne.CgEPK1a_.svg","/_astro/icone_map.BAKtipx9.svg","/_astro/map.DxtGTSLz.webp","/_astro/logofestival_sombre.BUc53Ldt.svg","/_astro/accueil_invités.CXm_lL98.webp","/_astro/accueil_infos.Cin5yHyo.webp","/_astro/accueil_contact.i_u2ez6N.webp","/_astro/territoire_belfort.CqwrV64c.svg","/_astro/accueil_programme.BHGzfA-S.webp","/_astro/region_bfc.BmRvaNPD.svg","/_astro/fne.ZYGsztTz.svg","/_astro/est_republicain.CFs8xtxx.svg","/_astro/universite_fc.Cj9WwSkH.svg","/_astro/header1.RdLpyqTR.webp","/_astro/logofestival.DYjREfKp.svg","/_astro/lato-latin-ext-400-normal.C8eBZ-j2.woff2","/_astro/lato-latin-400-normal.BEhtfm5r.woff2","/_astro/mulish-vietnamese-400-normal.2eFnXJo1.woff2","/_astro/playfair-display-cyrillic-400-normal.Bw4gXCin.woff2","/_astro/mulish-latin-ext-400-normal.DJvxwb0P.woff2","/_astro/playfair-display-vietnamese-400-normal.DP5NnYLI.woff2","/_astro/playfair-display-latin-ext-400-normal.CDP9IHBB.woff2","/_astro/mulish-latin-400-normal.M3OQmH06.woff2","/_astro/mulish-cyrillic-ext-400-normal.DJ1cpvF8.woff2","/_astro/playfair-display-latin-400-normal.B74d1IHM.woff2","/_astro/mulish-cyrillic-400-normal.DoXf7eGK.woff2","/_astro/playfair-display-cyrillic-400-normal.DIDQ5qyx.woff","/_astro/lato-latin-400-normal.B11PyLys.woff","/_astro/mulish-latin-ext-400-normal.BMAEjqWm.woff","/_astro/mulish-vietnamese-400-normal.C8k3Q01s.woff","/_astro/playfair-display-vietnamese-400-normal.0Xrw1F2p.woff","/_astro/playfair-display-latin-ext-400-normal.BpHmUUWd.woff","/_astro/mulish-latin-400-normal.Cc7D2LHJ.woff","/_astro/mulish-cyrillic-ext-400-normal.D-MBlSGi.woff","/_astro/playfair-display-latin-400-normal.DC9_0-8q.woff","/_astro/mulish-cyrillic-400-normal.Y0YbCLzO.woff","/_astro/contact.CB_dTHfW.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ID1UeC4xoK2L+gZ1wXg9/T+FGODa7O+717okp2K/QDg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
