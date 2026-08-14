const SERIES={1:'CODEX',2:'PRAXIS',3:'EXPANSIÓN',4:'MUNDUS',5:'MERCATUS',6:'OPUS'};
const QRS=[
 {t:'casa',s:1,l:'CALCEUS',c:1,url:'amictus.press/calceus/1'},
 {t:'compra',s:1,l:'CALCEUS',c:1,url:'amictus.press/x/kit-inicio'},
 {t:'fuente',s:1,l:'CALCEUS',c:1,url:'amictus.press/f/met-origen'},
 {t:'casa',s:1,l:'CALCEUS',c:2,url:'amictus.press/cap2'},
 {t:'fuente',s:1,l:'CALCEUS',c:2,url:'amictus.press/f/met-egipto'},
 {t:'casa',s:1,l:'CALCEUS',c:3,url:'amictus.press/cap3'},
 {t:'fuente',s:1,l:'CALCEUS',c:3,url:'amictus.press/f/museum-london'},
 {t:'casa',s:1,l:'CALCEUS',c:4,url:'amictus.press/cap4'},
 {t:'fuente',s:1,l:'CALCEUS',c:4,url:'amictus.press/f/bata-versalles'},
 {t:'casa',s:1,l:'CALCEUS',c:5,url:'amictus.press/cap5'},
 {t:'fuente',s:1,l:'CALCEUS',c:5,url:'amictus.press/f/met-flugel'},
 {t:'casa',s:1,l:'CALCEUS',c:6,url:'amictus.press/cap6'},
 {t:'fuente',s:1,l:'CALCEUS',c:6,url:'amictus.press/f/uspto-bata'},
 {t:'casa',s:1,l:'CALCEUS',c:7,url:'amictus.press/cap7'},
 {t:'fuente',s:1,l:'CALCEUS',c:7,url:'amictus.press/f/ferragamo-met'},
 {t:'casa',s:1,l:'CALCEUS',c:8,url:'amictus.press/cap8'},
 {t:'fuente',s:1,l:'CALCEUS',c:8,url:'amictus.press/f/bata-nike'},
 {t:'casa',s:1,l:'CALCEUS',c:9,url:'amictus.press/cap9'},
 {t:'fuente',s:1,l:'CALCEUS',c:9,url:'amictus.press/f/bof-stockx'},
 {t:'casa',s:1,l:'CALCEUS',c:10,url:'amictus.press/cap10'},
 {t:'fuente',s:1,l:'CALCEUS',c:10,url:'amictus.press/f/ferragamo-northampton'},
 {t:'casa',s:1,l:'CALCEUS',c:11,url:'amictus.press/cap11'},
 {t:'fuente',s:1,l:'CALCEUS',c:11,url:'amictus.press/f/bata-simbolo'},
 {t:'casa',s:1,l:'CALCEUS',c:12,url:'amictus.press/cap12'},
 {t:'casa',s:1,l:'CALCEUS',c:13,url:'amictus.press/cap13'},
 {t:'fuente',s:1,l:'CALCEUS',c:13,url:'amictus.press/f/saphir-tenerias'},
 {t:'casa',s:1,l:'CALCEUS',c:14,url:'amictus.press/cap14'},
 {t:'fuente',s:1,l:'CALCEUS',c:14,url:'amictus.press/f/vibram-goretex'},
 {t:'casa',s:1,l:'CALCEUS',c:15,url:'amictus.press/cap15'},
 {t:'fuente',s:1,l:'CALCEUS',c:15,url:'amictus.press/f/shoegazing-gazette'},
 {t:'casa',s:1,l:'CALCEUS',c:16,url:'amictus.press/cap16'},
 {t:'casa',s:1,l:'CALCEUS',c:17,url:'amictus.press/cap17'},
 {t:'fuente',s:1,l:'CALCEUS',c:17,url:'amictus.press/f/northampton-italia'},
 {t:'casa',s:1,l:'CALCEUS',c:18,url:'amictus.press/cap18'},
 {t:'casa',s:1,l:'CALCEUS',c:19,url:'amictus.press/cap19'},
 {t:'casa',s:1,l:'CALCEUS',c:20,url:'amictus.press/cap20'},
 {t:'fuente',s:1,l:'CALCEUS',c:20,url:'amictus.press/f/bass-alden-gucci'},
 {t:'casa',s:1,l:'CALCEUS',c:21,url:'amictus.press/cap21'},
 {t:'casa',s:1,l:'CALCEUS',c:22,url:'amictus.press/cap22'},
 {t:'casa',s:1,l:'CALCEUS',c:23,url:'amictus.press/cap23'},
 {t:'fuente',s:1,l:'CALCEUS',c:23,url:'amictus.press/f/nike-stockx'},
 {t:'casa',s:1,l:'CALCEUS',c:24,url:'amictus.press/cap24'},
 {t:'casa',s:1,l:'CALCEUS',c:25,url:'amictus.press/cap25'},
 {t:'compra',s:1,l:'CALCEUS',c:25,url:'amictus.press/kit'},
 {t:'casa',s:1,l:'CALCEUS',c:26,url:'amictus.press/cap26'},
 {t:'compra',s:1,l:'CALCEUS',c:26,url:'amictus.press/cremas'},
 {t:'casa',s:1,l:'CALCEUS',c:27,url:'amictus.press/cap27'},
 {t:'compra',s:1,l:'CALCEUS',c:27,url:'amictus.press/ante'},
 {t:'casa',s:1,l:'CALCEUS',c:28,url:'amictus.press/cap28'},
 {t:'casa',s:1,l:'CALCEUS',c:29,url:'amictus.press/cap29'},
 {t:'compra',s:1,l:'CALCEUS',c:29,url:'amictus.press/sneakers'},
 {t:'casa',s:1,l:'CALCEUS',c:30,url:'amictus.press/cap30'},
 {t:'casa',s:1,l:'CALCEUS',c:31,url:'amictus.press/cap31'},
 {t:'casa',s:1,l:'CALCEUS',c:32,url:'amictus.press/cap32'},
 {t:'casa',s:1,l:'CALCEUS',c:33,url:'amictus.press/cap33'},
 {t:'casa',s:1,l:'CALCEUS',c:34,url:'amictus.press/cap34'},
 {t:'casa',s:1,l:'CALCEUS',c:35,url:'amictus.press/cap35'},
 {t:'fuente',s:1,l:'CALCEUS',c:35,url:'amictus.press/f/reuse-reciclaje'},
 {t:'casa',s:1,l:'CALCEUS',c:36,url:'amictus.press/cap36'},
 {t:'compra',s:1,l:'CALCEUS',c:36,url:'amictus.press/3presupuestos'},
 {t:'casa',s:1,l:'CALCEUS',c:37,url:'amictus.press/cap37'},
 {t:'casa',s:1,l:'CALCEUS',c:38,url:'amictus.press/cap38'},
 {t:'casa',s:1,l:'CALCEUS',c:39,url:'amictus.press/cap39'},
 {t:'casa',s:1,l:'CALCEUS',c:40,url:'amictus.press/cap40'},
 {t:'fuente',s:1,l:'CALCEUS',c:40,url:'amictus.press/f/museos'}
];
const NOMBRES={casa:'🏠 Casa',compra:'🛍 Compra',fuente:'📚 Fuente'};
let fT='',fQ='';
const $=id=>document.getElementById(id);
function render(){
 const items=QRS.filter(q=>(!fT||q.t===fT)&&(!fQ||(q.l+q.url).toLowerCase().includes(fQ)));
 $('chips').innerHTML=`<span class="chip chip--oro">${QRS.length} códigos</span><span class="chip">${new Set(QRS.map(q=>q.l)).size} libros</span><span class="chip">3 tipos</span><span class="chip">Placeholders → URLs finales</span>`;
 $('qrGrid').innerHTML=items.map(q=>`<article class="qr-card qr-card--${q.t}"><h3>${NOMBRES[q.t]}</h3><div class="qr-img" data-url="${q.url}"></div><p class="qr-url">${q.url}</p><div class="prov"><span class="prov-serie">${SERIES[q.s]}</span><span class="prov-libro">${q.l}</span><span class="prov-cap">Cap. ${q.c}</span></div></article>`).join('')||'<p style="font-style:italic;opacity:.6">Sin resultados.</p>';
 if(typeof QRCode!=='undefined'){
  document.querySelectorAll('.qr-img').forEach(el=>{new QRCode(el,{text:el.dataset.url,width:440,height:440,colorDark:'#1C1B18',colorLight:'#FFFFFF',correctLevel:QRCode.CorrectLevel.H});});
 }else{
  document.querySelectorAll('.qr-img').forEach(el=>{el.innerHTML='<p style="color:#1C1B18;font-size:.7rem;text-align:center;padding:1rem 0">Librería QR sin conexión</p>'});
 }
}
document.querySelectorAll('.filtro').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filtro').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');fT=b.dataset.t;render();}));
$('buscar').addEventListener('input',e=>{fQ=e.target.value.toLowerCase();render();});
render();