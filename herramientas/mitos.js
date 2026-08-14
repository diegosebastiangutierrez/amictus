const M=[
 /* — Cuidado / CURA — */
 ['La tintorería no usa agua.',true,'Verdadero: la «limpieza en seco» usa solventes (percloroetileno o hidrocarburos), no agua. Por eso no encoge ni deforma.'],
 ['El denim no se lava nunca.',false,'Falso: se lava poco, pero se lava. Airear entre usos sí; la higiene y los aceites de la piel degradan la fibra si se acumulan.'],
 ['La bolsa de la tintorería protege la ropa guardada.',false,'Falso: la ropa necesita respirar. La bolsa atrapa humedad y olor; guardá en funda de tela o algodón.'],
 ['La lana es solo para invierno.',false,'Falso: la lana fría (tropical) termorregula y es de los mejores tejidos de verano. El mito confunde lana con punto grueso.'],
 ['Un cuero caro no necesita crema.',false,'Falso: cuanto mejor el cuero, más vale nutrirlo. El cuero es piel: sin grasa, se cuartea.'],
 ['Colgar el suéter no lo deforma.',false,'Falso: la percha marca los hombros y estira el punto por gravedad. El suéter vive doblado.'],
 ['El cedro ahuyenta polillas.',true,'Verdadero: su aroma repele polillas en espacios cerrados. En armario abierto pierde casi todo el efecto.'],
 ['El blanco es más fresco que el negro en verano.',true,'Verdadero con matiz: el blanco refleja radiación externa; el negro absorbe pero también disipa calor del cuerpo. En tejido suelto gana el claro.'],
 ['Cuanto más cara la prenda, menos cuidado necesita.',false,'Falso: suele ser al revés. Los materiales nobles piden más cuidado, no menos: por eso duran décadas.'],
 ['Los zapatos se nutren solo cuando se ven secos.',false,'Falso: el cuero se nutre por calendario de uso, no por apariencia. Esperar a que «se vea mal» es llegar tarde.'],
 /* — CALCEUS · Parte I · Historia — */
 ['En Roma todos usaban sandalias.',false,'Falso (Cap. 2): la solea era de interior y verano; el calceus cerrado era la norma del ciudadano. El calzado romano era un documento de identidad.'],
 ['Zapatero y remendón son lo mismo.',false,'Falso (Cap. 3): el cordwainer fabrica; el cobbler repara. Eran oficios distintos separados por ley gremial.'],
 ['El tacón alto siempre fue femenino.',false,'Falso (Cap. 4): nació masculino (jinete persa) y fue símbolo de virilidad cortesana. Recién en el s. XVIII se feminiza.'],
 ['La moda siempre fue cosa de mujeres.',false,'Falso (Cap. 5): hasta el s. XVIII el hombre se adornaba igual o más. La Gran Renuncia Masculina es una construcción histórica, no una ley natural.'],
 ['Oxford y Derby son lo mismo.',false,'Falso (Cap. 6): el Oxford cierra el cordón (palas por debajo); el Derby lo abre (por encima). Oxford formaliza; Derby acomoda.'],
 ['Los sneakers son solo para hacer deporte.',false,'Falso (Cap. 8): desde los 80 el sneaker es objeto cultural: identidad, colección, estatus. Lo deportivo es apenas una parte.'],
 ['El calzado sostenible es una moda pasajera.',false,'Falso (Cap. 9): la sostenibilidad está redefiniendo los materiales de base. Es una presión estructural, no una tendencia.'],
 /* — Parte II · Anatomía — */
 ['Si dice «genuine leather», es buen cuero.',false,'Falso (Cap. 13): es un término genérico que suele referir a gamas bajas. Buscá full grain / top grain.'],
 ['El cuero siempre es mejor que lo sintético.',false,'Depende (Cap. 14): para vestir que dure, sí; para correr bajo lluvia, un mesh con Gore-Tex es superior. El material correcto es el del uso.'],
 ['La suela de goma es inferior.',false,'Falso (Cap. 15): una goma de calidad (Vibram, Dainite) supera al cuero en lluvia y agarre. Lo que delata lo barato es la construcción cementada + cuero corregido.'],
 ['Si me aprieta, con el uso se estira y se amolda.',false,'A medias (Cap. 16): cede a lo ancho, nunca a lo largo. El largo correcto es innegociable.'],
 /* — Parte III · Monografías — */
 ['Un brogue es un zapato formal.',false,'A medias (Cap. 18): es elegante, pero las perforaciones lo hacen menos formal que un Oxford liso. Para etiqueta, cap-toe o wholecut.'],
 ['Las botas son solo para el invierno o el campo.',false,'Falso (Cap. 19): la Chelsea y el chukka son botas urbanas de todo el año. El error no es la bota: es el modelo.'],
 ['Para verse elegante hay que sufrir con tacones.',false,'Falso (Cap. 21): la elegancia está en la silueta y la proporción, no en el dolor. Una ballerina o un kitten bien elegidos se llevan todo el día.'],
 ['Las botas altas son solo para el frío.',false,'A medias (Cap. 22): la caña alta es de invierno, pero la gladiadora es de verano y el ankle de todo el año.'],
 ['Un sneaker caro es mejor que uno barato.',false,'Depende (Cap. 23): el precio muchas veces lo pone el hype, no la calidad. Una Stan Smith puede ser más versátil que una reventa carísima.'],
 ['Un buen calzado sirve para todo.',false,'Falso (Cap. 24): cuanto más específico el uso, más importante el calzado correcto. La versatilidad tiene un límite.'],
 /* — Parte IV · Cuidado — */
 ['Cuidar el calzado es caro y complicado.',false,'Falso (Cap. 25): un kit básico cuesta poco y dura años. Lo caro es comprar barato y reemplazar.'],
 ['Mucha cera = más brillo.',false,'Falso (Cap. 26): el exceso de cera tapa el poro y asfixia. El brillo viene de capas finas y pulido.'],
 ['El ante es imposible de mantener.',false,'Falso (Cap. 27): es delicado, pero con protector y cepillo en seco dura mucho. El error es tratarlo como cuero liso.'],
 ['Todos los cueros se cuidan igual.',false,'Falso (Cap. 28): charol se limpia, cordovan se pule, exótico se hidrata, encerado se engrasa.'],
 ['Si guardo los sneakers sin usar, me duran más.',false,'Falso (Cap. 29): el PU sufre hidrólisis; un sneaker guardado años se deshace al primer uso. Los sneakers están para usarlos.'],
 ['Los zapatos delicados no duran.',false,'A medias (Cap. 30): duran lo que su uso permite. Un zapato de satén está hecho para la ocasión, no para el adoquín.'],
 ['Si se moja, lo seco con secador.',false,'Falso (Cap. 31): el calor directo cuartea y deforma. El secado correcto es lento, a temperatura ambiente, con hormas o papel.'],
 ['El zapato se amolda al pie con el uso.',false,'A medias (Cap. 32): cede a lo ancho, no a lo largo ni en la horma. Si duele desde el primer día, no se arregla solo.'],
 ['Guardar en la caja de plástico original es lo mejor.',false,'Falso (Cap. 34): el plástico sellado atrapa humedad y genera moho. Mejor caja ventilada o bolsa de tela.'],
 ['El calzado no se puede reciclar.',false,'Falso (Cap. 35): no es fácil, pero sí posible (Reuse-A-Shoe, reciclaje textil). La clave es no tirar.'],
 /* — Parte V · Compra — */
 ['Hay que comprar el zapato más caro que puedas.',false,'Falso (Cap. 36): comprá el mejor para el uso que le vas a dar. Para una tendencia, entrada; para el diario, medio o premium.'],
 ['Sneakers en un evento formal de empresa.',false,'No (Cap. 37): el código es un pacto de respeto. Excepción: sneaker de cuero minimalista impecable, solo en culturas creativas.'],
 ['Stiletto en una fiesta de sociedad.',true,'Sí (Cap. 37): es el código cocktail/black tie. Matiz: para jardín o de día, cuña o tacón bloque.'],
 ['Las personas bajitas no pueden usar botas altas.',false,'Falso (Cap. 38): no hay prohibiciones por cuerpo, hay efectos. Una bota al tono del pantalón alarga; una que corta en el punto equivocado acorta.'],
 ['No mezclar marrón y negro.',false,'Parcial (Cap. 39): funciona con matices; la clave es el contraste intencional.'],
 ['El cinturón debe combinar con los zapatos.',true,'Sí en formal (Cap. 39); en casual es más flexible.'],
 ['Blanco solo en verano.',false,'Falso (Cap. 39): regla anticuada; el blanco funciona todo el año.'],
 ['Las reglas de la moda son fijas.',false,'Falso (Cap. 39): las reglas cambian con la cultura. Lo fijo son los principios: proporción, contraste, contexto.']
];
let i=0,ac=0;
const $=id=>document.getElementById(id);
function pinta(){
 const m=M[i];
 $('card').innerHTML=`<p class="num">MITO ${String(i+1).padStart(2,'0')} / ${String(M.length).padStart(2,'0')}</p><h2>«${m[0]}»</h2><div class="mito-btns"><button class="btn btn--oro" data-r="1" >Verdadero</button><button class="btn btn--oro" data-r="0" >Falso</button></div><div class="explica" id="exp"></div>`;
 $('card').querySelectorAll('.mito-btns .btn').forEach(b=>b.addEventListener('click',()=>{
  const r=b.dataset.r==='1';
  if(r===m[1])ac++;
  $('exp').classList.add('is-on');
  $('exp').innerHTML=`<p class="ver">${m[1]?'VERDADERO':'FALSO'}${r===m[1]?' · ✓ acertaste':' · ✗ fallaste'}</p><p style="margin-top:2rem">${m[2]}</p><div class="cta-row" style="justify-content:center"><button class="btn btn--oro" id="next">${i===M.length-1?'Ver resultado':'Siguiente mito →'}</button></div>`;
  $('card').querySelector('.mito-btns').style.display='none';
  $('next').addEventListener('click',()=>{i++;if(i>=M.length)final();else pinta();});
 }));
}
function final(){
 const nota=ac>=38?'Sastre honorario.':ac>=28?'Editor de AMICTUS en potencia.':ac>=15?'Aprendiz con futuro':'Acá empieza el viaje';
 $('card').innerHTML=`<p class="num">RESULTADO</p><p class="score">${ac} / ${M.length}</p><h2>${nota}</h2><p class="final--explain">Los porqués completos viven en CALCEUS (caps. de cuidado y el Cap. 39) y en CURA. Compartí tu puntaje.</p><div class="cta-row" style="justify-content:center"><button class="btn btn--oro" id="again">Jugar de nuevo</button></div>`;
 $('again').addEventListener('click',()=>{i=0;ac=0;pinta();});
}
pinta();
