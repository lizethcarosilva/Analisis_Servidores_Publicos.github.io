
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/orange"
  },
  {
    "renderMode": 2,
    "route": "/analisis"
  },
  {
    "renderMode": 2,
    "route": "/herramientas"
  },
  {
    "renderMode": 2,
    "route": "/mineria"
  },
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2548, hash: 'd5ffdc4bf76c832e09b0a60fb5a1f5494f24f96b2f627296d1338d6dc2db8daf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '7d5def5e7fd74592a74e3f12fef9cd54ea7406012d3e45b03d8f17b08ccc0e7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'orange/index.html': {size: 15757, hash: 'e3812d08dd38c420f172ace7a0d3f3440b735fddc0490af0d68562eaf9006c9c', text: () => import('./assets-chunks/orange_index_html.mjs').then(m => m.default)},
    'analisis/index.html': {size: 16863, hash: 'd5b99f6aaca0193448cbce2951585e3cb970a9f726c86187d5ebea6c51ab4229', text: () => import('./assets-chunks/analisis_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 26248, hash: 'aca692dce4dd7cdf5789533dab65f647c1cfd9e5cbd4de31afd7197d7b2b23df', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'mineria/index.html': {size: 18019, hash: '4caf892d949aaff342dffd81b6012edb37af22c10e7545883fd31bce70b87a82', text: () => import('./assets-chunks/mineria_index_html.mjs').then(m => m.default)},
    'herramientas/index.html': {size: 20856, hash: '9e7d676470a9b42b44319691fe98f208c180a69a04709daae4102076f7c667c7', text: () => import('./assets-chunks/herramientas_index_html.mjs').then(m => m.default)},
    'styles-ENNGCXGR.css': {size: 27305, hash: 'YjW5my8mWhA', text: () => import('./assets-chunks/styles-ENNGCXGR_css.mjs').then(m => m.default)}
  },
};
