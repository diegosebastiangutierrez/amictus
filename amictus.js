/* AMICTUS · amictus.js v3 — menú global + countdown + footer con columnas.
   Overrides por página (definir ANTES de este script):
   window.AMICTUS_LAUNCH={tipo,titulo,detalle,fecha} · window.AMICTUS_CHROME={topbar,countdown,footer} */
(function(){
const LOGO='<svg class="logo-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M63 24 C 90 28, 98 46, 79 58 C 58 71, 30 63, 26 79 C 22 95, 45 102, 63 97" stroke="currentColor" stroke-width="1.6"/><path d="M67 21 C 85 19, 97 14, 106 7" stroke="currentColor" stroke-width="1.6"/><path d="M60 15 L34 99" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><ellipse cx="61.5" cy="18" rx="4.5" ry="9.5" transform="rotate(17 61.5 18)" stroke="currentColor" stroke-width="3"/><path d="M62 15 L70 15 L90 96 Q91.5 100 99 100 L81 100 Z" fill="currentColor"/><path d="M46 79 L74 74.5 L75 80 L47.5 84 Z" fill="currentColor"/><path d="M28 101 L58 101 M64 101 L98 101" stroke="currentColor" stroke-width="1.4"/></svg>';
const LAUNCH=window.AMICTUS_LAUNCH||{tipo:'Próxima publicación · volumen completo',titulo:'CALCEUS — <em>el libro del calzado</em>',detalle:'Serie I · CODEX · 40 capítulos · ebook, impreso y capítulos gratis en el portal',fecha:'2026-11-20T10:00:00'};
const CHROME=Object.assign({topbar:true,countdown:true,footer:true},window.AMICTUS_CHROME||{});

document.addEventListener('DOMContentLoaded',()=>{

 if(CHROME.topbar){
  const t=document.createElement('header');t.className='topbar';
  t.innerHTML='<div class="contenedor">'+
   '<a href="index.html" class="logo" aria-label="AMICTUS — inicio"><span class="logo-tipo">AMICTUS</span></a>'+
   '<nav><a href="index.html#catalogo">Catálogo</a><a href="volumen-01-codex.html">VOL I · CODEX</a><a href="volumen-02-praxis.html">VOL II · PRAXIS</a><a href="volumen-03-expansion.html">VOL III · EXPANSION</a><a href="volumen-04-mundus.html">VOL IV · MUNDUS</a><a href="volumen-05-mercatus.html">VOL V · MERCATUS</a><a href="volumen-06-opus.html">VOL VI · OPUS</a><a href="herramientas.html">Herramientas</a><a href="glosario.html">Glosario</a><a href="qrs.html">QR</a><a href="autor.html">Autor</a></nav>'+
   '<a class="btn btn--oro nav-cta" href="index.html#cura">CURA gratis</a>'+
   '<button class="burger" id="burger" aria-label="Abrir menú"><svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" stroke-width="2"/></svg></button>'+
   '<div class="movil-panel" id="movilPanel">'+
   '<div><h4>Portal</h4><a href="index.html#manifiesto">Manifiesto</a><a href="autor.html">El autor</a><a href="prensa.html">Prensa & sponsors</a><a href="el-hilo.html">El Hilo</a><a href="sitemap.html">Mapa del sitio</a></div>'+'<div><h4>Colección</h4><a href="index.html#catalogo">Catálogo</a><a href="index.html#series">Series</a><a href="herramientas/libros-de-moda.html">Libros de moda</a><a href="index.html#cura">CURA gratis</a></div>'+
    '<div><h4>Recursos</h4><a href="herramientas.html">Herramientas</a><a href="glosario.html">Glosario</a><a href="qrs.html">Índice QR</a><a href="fuentes.html">Fuentes</a><a href="museos.html">Museos</a><a href="laminas.html">Láminas</a><a href="sitemap.html">Mapa del sitio</a></div>'+'</div>'+  
   '</div></div>';
  document.body.prepend(t);
  t.querySelector('#burger').addEventListener('click',()=>t.querySelector('#movilPanel').classList.toggle('is-on'));
  t.querySelectorAll('.movil-panel a').forEach(a=>a.addEventListener('click',()=>t.querySelector('#movilPanel').classList.remove('is-on')));
 }

 if(CHROME.countdown){
  const cd=document.createElement('section');cd.className='countdown';
  cd.innerHTML='<div class="contenedor cd-inner"><div class="cd-txt"><p class="tipo">'+LAUNCH.tipo+'</p><h3>'+LAUNCH.titulo+'</h3><p>'+LAUNCH.detalle+'</p></div>'+
   '<div class="cd-num"><div><strong id="cdD">--</strong><span>días</span></div><div><strong id="cdH">--</strong><span>horas</span></div><div><strong id="cdM">--</strong><span>min</span></div><div><strong id="cdS">--</strong><span>seg</span></div></div>'+
   '<a class="btn btn--oro" href="index.html#cura">Avisame al lanzamiento</a></div>';
  document.body.append(cd);
  const target=new Date(LAUNCH.fecha).getTime(),pad=n=>String(n).padStart(2,'0');
  (function tick(){
    const d=target-Date.now();
    if(d<=0){['cdD','cdH','cdM','cdS'].forEach(i=>{const e=document.getElementById(i);if(e)e.textContent='00';});
      const tp=cd.querySelector('.tipo');if(tp)tp.textContent='¡Disponible ahora!';return;}
    const s=Math.floor(d/1000);
    document.getElementById('cdD').textContent=Math.floor(s/86400);
    document.getElementById('cdH').textContent=pad(Math.floor(s/3600)%24);
    document.getElementById('cdM').textContent=pad(Math.floor(s/60)%60);
    document.getElementById('cdS').textContent=pad(s%60);
    setTimeout(tick,1000);
  })();
 }

 if(CHROME.footer){
  const f=document.createElement('footer');f.className='footer';
  f.innerHTML='<div class="contenedor"><p class="footer-marca">Amictus</p>'+
   '<div class="footer-cols">'+
   '<div><h4>Colección</h4><a href="index.html#catalogo">Catálogo completo</a><a href="volumen-01-codex.html">VOL I · CODEX</a><a href="volumen-02-praxis.html">VOL II · PRAXIS</a><a href="volumen-03-expansion.html">VOL III · EXPANSION</a><a href="volumen-04-mundus.html">VOL IV · MUNDUS</a><a href="volumen-05-mercatus.html">VOL V · MERCATUS</a><a href="volumen-06-opus.html">VOL VI · OPUS</a></div>'+
   '<div><h4>Recursos</h4><a href="herramientas.html">Herramientas</a><a href="glosario.html">Glosario maestro</a><a href="qrs.html">Índice QR</a><a href="fuentes.html">Fuentes verificadas</a><a href="museos.html">Museos Open Access</a><a href="laminas.html">Láminas</a><a href="herramientas/libros-de-moda.html">Comprar Libros de moda</a></div>'+
   '<div><h4>Portal</h4><a href="index.html#manifiesto">Manifiesto</a><a href="autor.html">El autor</a><a href="prensa.html">Prensa & sponsors</a><a href="el-hilo.html">El Hilo</a><a href="sitemap.html">Mapa del sitio</a></div>'+
   '</div>'+
   '<div class="footer-barra"><p>© 2026 Amictus — Historia, oficio y estilo de lo que vistes</p><p>Hecho con Qwen · Dola · Gemini</p></div></div>';
  document.body.append(f);
 }
});
})();

/* ============================================================
   LINKS RELATIVOS · los menues no se rompen en subcarpetas
   Detecta la raíz desde el propio src de amictus.js y prefija
   los links internos de topbar/footer con los ../ necesarios.
   ============================================================ */
(function(){
  function raiz(){
    var sc=document.currentScript;
    if(!sc){var all=document.getElementsByTagName('script');
      for(var i=0;i<all.length;i++){if(/amictus\.js/.test(all[i].src)){sc=all[i];break;}}}
    if(!sc||!sc.src)return '';
    var root=sc.src.split('amictus.js')[0];
    var dir=location.href.replace(/[#?].*/,'').replace(/[^/]*$/,'');
    var p='';
    while(dir!==root&&dir.indexOf(root)===0){
      dir=dir.slice(0,dir.lastIndexOf('/',dir.length-2)+1);
      p+='../';
    }
    return p;
  }
  var B=raiz();
  if(!B)return; /* estamos en la raíz: todo funciona tal cual */
  function fix(a){
    var h=a.getAttribute('href')||'';
    if(!h)return;
    if(/^(https?:|mailto:|tel:|#)/.test(h))return;  /* externos o anclas de la página */
    if(h.indexOf('../')===0)return;                 /* ya relativos, no tocar */
    a.setAttribute('href',B+h);
  }
  function arreglar(){
    var sel=document.querySelectorAll('.topbar a, footer a, .footer a');
    for(var i=0;i<sel.length;i++)fix(sel[i]);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',arreglar);
  else arreglar();
})();
