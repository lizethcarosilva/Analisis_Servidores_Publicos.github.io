
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
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
    'index.csr.html': {size: 2549, hash: 'b63c455f3e2ad34639b951f929fae433089acc5edddbd201563d4ac7aab13eb2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'eb810f08121d2884c7ecb00c79e719abc7337e5a16ef120f6a2b4ff64b187c04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'orange/index.html': {size: 10922, hash: 'f47acc32acd9d0bc1d8cbb5140935c771d0133b8ee99417ee0a697c2aa4f459d', text: () => import('./assets-chunks/orange_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 17107, hash: '87f569dd4088fedbb4a59735294ceec2611567419e582276971cfae1a440f011', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'mineria/index.html': {size: 13274, hash: '98d919c8b64a0b22d20a6def107d2887e0b5bcb7752e19c1400174102fb4f3ae', text: () => import('./assets-chunks/mineria_index_html.mjs').then(m => m.default)},
    'analisis/index.html': {size: 13199, hash: '80159f7b1ee676d80158b17aa16370749e209f7f8d5c4a5e78682752297f4f8c', text: () => import('./assets-chunks/analisis_index_html.mjs').then(m => m.default)},
    'herramientas/index.html': {size: 15294, hash: 'e60392c9fbaee7717e3cfa5af50465a20f2f264bdae8744197de27a94d1c43f7', text: () => import('./assets-chunks/herramientas_index_html.mjs').then(m => m.default)},
    'styles-HA5TLQ6Z.css': {size: 9367, hash: '5hKOfgGjWbM', text: () => import('./assets-chunks/styles-HA5TLQ6Z_css.mjs').then(m => m.default)}
  },
};
