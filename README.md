# AMICTUS · La enciclopedia de la indumentaria

> *Todo el armario, en un solo perchero.*

AMICTUS es el proyecto editorial de **Diego Gutiérrez**: una colección de **32 volúmenes en 6 series** sobre historia, técnica, cuidado y compra de la indumentaria, con este sitio estático como portal, catálogo y embudo editorial.

- **Voz:** humana. Las IA (Qwen · research/escritura, Dola · imágenes, Gemini · apoyo) están declaradas en `autor.html`.
- **Idiomas del contenido:** ES · EN · IT · FR (glosarios e infografías).
- **Lead magnet:** `CURA` (manual de cuidado, gratis a cambio de email).

---

## 🚀 Arranque rápido

Sitio **100 % estático** (HTML + CSS + JS vanilla):

```bash
python -m http.server 8000   # → http://localhost:8000
```

`amictus.js` detecta la profundidad de cada página (desde su propio `src`) y prefija los links de menús/footer con los `../` necesarios: todo funciona en subcarpetas y en GitHub Pages sin configuración extra.

### Despliegue (GitHub Pages)

1. Settings → Pages → rama `main` → carpeta `/ (root)`.
2. Listo: todos los links son relativos.

---

## 🗂️ Estructura del repo

```
/
├── index.html                # Home: hero, manifiesto, catálogo, CURA
├── 404.html
├── autor.html                # Diego Gutiérrez + declaración de IA
├── el-hilo.html              # Newsletter / blog
├── fuentes.html              # Fuentes y verificación
├── glosario.html             # Glosario maestro 4 idiomas (datos: glosario.js)
├── herramientas.html         # Hub de las 12 herramientas
├── laminas.html              # Láminas / infografías
├── museos.html               # Museos y colecciones Open Access
├── prensa.html
├── qrs.html                  # Índice QR tricromático (datos: qrs.js)
├── sitemap.html
├── timeline.html             # Línea de tiempo de la moda
├── volumen-01-codex.html     # Hubs de serie (I–VI)
├── volumen-02-praxis.html
├── volumen-03-expansion.html
├── volumen-04-mundus.html
├── volumen-05-mercatus.html
├── volumen-06-opus.html
│
├── amictus.css · libro.css · capitulo.css
├── amictus.js · glosario.js · qrs.js
├── favicon.svg
│
├── fonts/
│   ├── Mogilte.otf           # ⚠️ El archivo se llama "Mogilte" (no "Moglite"):
│   │                         #    el @font-face apunta al nombre real.
│   ├── CheopsElegant.otf
│   └── … (otras en prueba)
├── img/
│   ├── tapas/                # Tapas de los volúmenes
│   └── infografias/          # img/infografias/{serie}/{libro}/info-{NN}-{idioma}.{ext}
│                             # ej.: img/infografias/codex/calceus/info-18-es.jpg
├── herramientas/
│   ├── casa-profesional.html # (antes casa-pro.html)
│   ├── cuanto-cuesta-vestir-bien.html
│   ├── cuidado.html
│   ├── etiqueta.html
│   ├── libros-de-moda.html
│   ├── mitos.html  (+ mitos.js)
│   ├── ocasiones.html
│   ├── perfume.html
│   ├── precio-uso.html
│   ├── simbolos.html
│   ├── tallas.html
│   └── test-color.html
│
├── codex/                    # SERIE I
│   ├── libro-calceus.html … libro-aurum.html
│   ├── calceus/capitulo-01.html … capitulo-40.html   ✔ escritos
│   └── corium/ stola/ toga/ cultus/ textum/ aurum/    # capítulos futuros
├── praxis/                   # SERIE II · libro-sartor … libro-color
├── expansion/                # SERIE III · libro-cura (gratis) … libro-essentia
├── mundus/                   # SERIE IV · libro-asia … libro-borealis
├── mercatus/                 # SERIE V · libro-invest … libro-digitalis
└── opus/                     # SERIE VI · libro-artifex … libro-technica
```

### Convención de rutas relativas

| Estás en… | CSS/JS raíz | Herramientas | Hub de serie | Tu libro | Capítulos |
|---|---|---|---|---|---|
| **Raíz** | `amictus.css` | `herramientas/x.html` | `volumen-01-codex.html` | `codex/libro-x.html` | `codex/x/capitulo-NN.html` |
| **Serie** (`codex/libro-x.html`) | `../amictus.css` | `../herramientas/x.html` | `../volumen-01-codex.html` | hermanos `libro-y.html` | `x/capitulo-NN.html` |
| **Capítulo** (`codex/x/capitulo-NN.html`) | `../../amictus.css` | `../../herramientas/x.html` | `../../volumen-01-codex.html` | `../libro-x.html` | `capitulo-NN.html` |

Los menús inyectados por `amictus.js` se autocomponen según profundidad; los links de contenido se escriben a mano con la tabla de arriba.

---

## 📚 La colección

| Serie | Tema | Volúmenes | Estado |
|---|---|---|---|
| **I · CODEX** | Enciclopedia: calzado, marroquinería, prendas, accesorios, textiles, joyería | 7 | `CALCEUS` escrito (40 caps.); resto en outline |
| **II · PRAXIS** | Guías: vestuario, colorimetría, protocolo, sastrería, historia, color | 6 | Outlines |
| **III · EXPANSIÓN** | Verticales: cuidado, abrigos, lencería, denim, sportswear, perfume | 6 | `CURA` gratis (18 caps.); resto en outline |
| **IV · MUNDUS** | Moda regional: Asia, África, Américas, Islam, Oceanía, Nórdica | 6 | Outlines |
| **V · MERCATUS** | Industria: inversión, supply chain, retail, moda digital | 4 | Outlines |
| **VI · OPUS** | Oficio: artesanos, herramientas, técnicas | 3 | Outlines |

**Pricing:** ebook US$ 6.99 · impreso US$ 24.99 · bundles por serie (CODEX 24.99 / PRAXIS–EXPANSIÓN–MUNDUS 19.99 / MERCATUS 14.99 / OPUS 12.99) · `CURA` gratis.

---

## 🎨 Sistema de diseño

- **Tipografías:** display *Moglite* (`fonts/Mogilte.otf`, fallback Archivo Black) · títulos *Cheops Elegant* (`fonts/CheopsElegant.otf`, fallback Cormorant Garamond) · texto *Lora* (Google Fonts).
- **Color:** tinta `#0A0A0B`/`#1C1B18` · hueso `#F4F1E8` · dorado `#C9A24B` · azul cobalto · oxblood `#8C1F2F`.
- **Chrome compartido:** `amictus.js` inyecta topbar, countdown y footer, y repara links relativos en subcarpetas.
- **QR tricromático:** 🏠 Casa (dorado/oxblood) · 🛍 Compra (azul/cobre) · 📚 Fuente (blanco/tinta). Fondo blanco, mín. 20 mm, clicables en ebook.
- **Infografías:** una por capítulo por idioma, en `img/infografias/{serie}/{libro}/info-{NN}-{idioma}.{ext}` (NN con cero: `info-03-es.jpg`).

---

## 🧱 Plantillas y convenciones

- **Hub de serie:** `volumen-0N-{serie}.html` en la raíz.
- **Página de libro:** `{serie}/libro-{libro}.html` → usa `libro.css`.
- **Página de capítulo:** `{serie}/{libro}/capitulo-NN.html` (NN con cero) → usa `capitulo.css`.
- **Slugs sin tilde:** `cuanto-cuesta-vestir-bien.html`, `libros-de-moda.html`.

### Actualizar datos (sin tocar el HTML)

```js
// glosario.js (raíz) — nuevo término
{t:'Vira', en:'Welt', it:'Vira', fr:'Trépointe', d:'Tira que une corte y suela.', s:1, l:'CALCEUS', c:6}

// qrs.js (raíz) — nuevo código (t: casa | compra | fuente)
{t:'casa', s:1, l:'CALCEUS', c:6, url:'amictus.press/cap6'}

// herramientas/mitos.js — nuevo mito [afirmación, verdad, explicación]
['La suela de goma es inferior.', false, 'Depende del clima y el uso. (Cap. 15)']
```

---

## 🛣️ Roadmap / TODO

- [ ] Escribir capítulos de los volúmenes en outline (prioridad: CORIUM, SARTOR).
- [ ] Exportar tapas a `img/tapas/` e infografías a `img/infografias/` (nomenclatura anterior).
- [ ] Conectar el formulario de `CURA` al proveedor de email marketing.
- [ ] Pack de lanzamiento de CALCEUS (preventa + countdown como pieza central).
- [ ] Migración a **Drupal**: content types por serie/libro/capítulo, campo `aff_tag`, servicios por país; índices y glosarios pasan a vistas automáticas.

---

## ©️ Licencia y créditos

© 2026 **Diego Gutiérrez — AMICTUS**. Texto, tapas e infografías: © del autor.
QR generados con *qrcodejs* (MIT). Fuentes web vía Google Fonts.

*«El calzado es lenguaje. Ahora lo sabés leer, elegir y cuidar.»*