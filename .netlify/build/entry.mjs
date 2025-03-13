import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CnnBj5KZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/festival.astro.mjs');
const _page3 = () => import('./pages/infos_pratiques.astro.mjs');
const _page4 = () => import('./pages/invite/add.astro.mjs');
const _page5 = () => import('./pages/invite/_id_.astro.mjs');
const _page6 = () => import('./pages/invite.astro.mjs');
const _page7 = () => import('./pages/programme_activites/add.astro.mjs');
const _page8 = () => import('./pages/programme_activites/_id_.astro.mjs');
const _page9 = () => import('./pages/programme_activites.astro.mjs');
const _page10 = () => import('./pages/programme_films/add.astro.mjs');
const _page11 = () => import('./pages/programme_films/genre/_genre_.astro.mjs');
const _page12 = () => import('./pages/programme_films/_id_.astro.mjs');
const _page13 = () => import('./pages/programme_films.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/festival.astro", _page2],
    ["src/pages/infos_pratiques.astro", _page3],
    ["src/pages/invite/add.astro", _page4],
    ["src/pages/invite/[id].astro", _page5],
    ["src/pages/invite/index.astro", _page6],
    ["src/pages/programme_activites/add.astro", _page7],
    ["src/pages/programme_activites/[id].astro", _page8],
    ["src/pages/programme_activites/index.astro", _page9],
    ["src/pages/programme_films/add.astro", _page10],
    ["src/pages/programme_films/genre/[genre].astro", _page11],
    ["src/pages/programme_films/[id].astro", _page12],
    ["src/pages/programme_films/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "de6c48c5-d5c7-4fc7-bf1c-2e8932fc2708"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
