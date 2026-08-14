const SERIES={1:'CODEX',2:'PRAXIS',3:'EXPANSIÓN',4:'MUNDUS',5:'MERCATUS',6:'OPUS'};
const G=[
 // Cap. 1
 {t:'Calceus',en:'Shoe (Latin)',it:'Calceus (latino)',fr:'Calceus (latin)',d:'Calzado romano que distinguía al ciudadano; da nombre al libro I·01.',s:1,l:'CALCEUS',c:1},
 {t:'Cáliga',en:'Caliga',it:'Caliga',fr:'Calige',d:'Sandalia militar romana claveteada; antecedente de toda suela técnica.',s:1,l:'CALCEUS',c:1},
 {t:'Sandalia',en:'Sandal',it:'Sandalo',fr:'Sandale',d:'El calzado más antiguo conservado: una suela y un sistema de sujeción.',s:1,l:'CALCEUS',c:1},
 {t:'Suela',en:'Sole',it:'Suola',fr:'Semelle',d:'La parte en contacto con el suelo; el primer gesto de todo calzado.',s:1,l:'CALCEUS',c:1},
 {t:'Horma',en:'Last',it:'Forma',fr:'Forme',d:'Molde que da forma al zapato; la caligrafía del oficio.',s:1,l:'CALCEUS',c:1},
 {t:'Curtido',en:'Tanning',it:'Concia',fr:'Tannage',d:'Proceso que convierte la piel en cuero estable y durable.',s:1,l:'CALCEUS',c:1},
 // Cap. 2
 {t:'Coturno',en:'Buskin / kothornos',it:'Coturno',fr:'Cothurne',d:'Bota alta del actor de tragedia griego; el zapato como efecto especial.',s:1,l:'CALCEUS',c:2},
 {t:'Caliga',en:'Caliga',it:'Caliga',fr:'Caliga',d:'Sandalia militar romana; dio apodo a Calígula.',s:1,l:'CALCEUS',c:2},
 {t:'Zueco',en:'Clog',it:'Zoccolo',fr:'Sabot',d:'Calzado de madera de una pieza; base de la espadrille y del patten.',s:1,l:'CALCEUS',c:2},
 {t:'Geta',en:'Geta',it:'Geta',fr:'Geta',d:'Zueco japonés con dientes; su sonido es un icono cultural.',s:1,l:'CALCEUS',c:2},
 {t:'Calcetín tabi',en:'Tabi sock',it:'Calza tabi',fr:'Chaussette tabi',d:'Calcetín de dedo separado, obligatorio con geta y zōri.',s:1,l:'CALCEUS',c:2},
 {t:'Paduka',en:'Paduka',it:'Paduka',fr:'Paduka',d:'Sandalia de madera con perilla; símbolo de legitimidad en India.',s:1,l:'CALCEUS',c:2},
 {t:'Mocasín',en:'Moccasin',it:'Mocassino',fr:'Mocassin',d:'Construcción de una pieza de cuero; identidad tejida por tribu.',s:1,l:'CALCEUS',c:2},
 {t:'Huarache',en:'Huarache',it:'Huarache',fr:'Huarache',d:'Sandalia trenzada mexicana de origen prehispánico.',s:1,l:'CALCEUS',c:2},
 {t:'Kamik',en:'Kamik',it:'Kamik',fr:'Kamik',d:'Bota inuit multicapa; ingeniería de supervivencia.',s:1,l:'CALCEUS',c:2},
 {t:'Zapato de loto',en:'Lotus shoe',it:'Scarpa del loto',fr:'Soulier de lotus',d:'Calzado del vendaje de pies chino; sacrificio estético.',s:1,l:'CALCEUS',c:2},
 // Cap. 3
 {t:'Poulaine',en:'Poulaine / Crackow',it:'Poulaine',fr:'Poulaine',d:'Zapato medieval de punta extrema; rango social legislado.',s:1,l:'CALCEUS',c:3},
 {t:'Zapato volteado',en:'Turnshoe',it:'Scarpa rivoltata',fr:'Soulier retourné',d:'Zapato cosido del revés; flexible como un calcetín de cuero.',s:1,l:'CALCEUS',c:3},
 {t:'Patten',en:'Patten',it:'Patino / zoccolo',fr:'Patin',d:'Sobrezueco protector contra el barro; ancestro de la galocha.',s:1,l:'CALCEUS',c:3},
 {t:'Cordwainer',en:'Cordwainer',it:'Cordovaniere',fr:'Cordouanier',d:'Zapatero fabricante de calzado nuevo; oficio regulado.',s:1,l:'CALCEUS',c:3},
 {t:'Remendón',en:'Cobbler',it:'Ciabattino',fr:'Savetier',d:'Reparador; distinto del fabricante por ley gremial.',s:1,l:'CALCEUS',c:3},
 {t:'Alpargata',en:'Espadrille',it:'Espadrillas',fr:'Espadrille',d:'Lona con suela de esparto; el calzado humilde que sobrevivió.',s:1,l:'CALCEUS',c:3},
 {t:'Leyes suntuarias',en:'Sumptuary laws',it:'Leggi suntuarie',fr:'Lois somptuaires',d:'Normas que regulaban el lujo del calzado según la clase.',s:1,l:'CALCEUS',c:3},
 // Cap. 4
 {t:'Chopine',en:'Chopine',it:'Zoccolo veneziano',fr:'Chopine',d:'Plataforma veneciana; la más alta de la historia (54 cm).',s:1,l:'CALCEUS',c:4},
 {t:'Tacón',en:'Heel',it:'Tacco',fr:'Talon',d:'Nació masculino y ecuestre (jinete persa); se feminizó en el s. XVIII.',s:1,l:'CALCEUS',c:4},
 {t:'Tacón rojo',en:'Red heel',it:'Tacco rosso',fr:'Talon rouge',d:'Prerrogativa de Luis XIV; heredero de la suela roja de Louboutin.',s:1,l:'CALCEUS',c:4},
 {t:'Bota de montar',en:'Riding boot',it:'Stivale da equitazione',fr:"Botte d'équitation",d:'Del combate al ocio aristocrático y a la moda civil.',s:1,l:'CALCEUS',c:4},
 {t:'Estribo',en:'Stirrup',it:'Staffa',fr:'Étrier',d:'El anclaje que originó el tacón.',s:1,l:'CALCEUS',c:4},
 {t:'Roseta',en:'Shoe rose',it:'Fiocco da scarpa',fr:'Rosette de chaussure',d:'Lazo decorativo del empeine barroco; costaba fortunas.',s:1,l:'CALCEUS',c:4},
 {t:'Hebilla',en:'Buckle',it:'Fibbia',fr:'Boucle',d:'Cierre decorativo del s. XVIII; bien patrimonial.',s:1,l:'CALCEUS',c:4},
 // Cap. 5
 {t:'Strass',en:'Paste / strass',it:'Strass',fr:'Strass',d:'Cristal de plomo que imitaba el diamante a bajo costo.',s:1,l:'CALCEUS',c:5},
 {t:'Tacón Luis',en:'Louis heel',it:'Tacco Luigi',fr:'Talon Louis',d:'Tacón curvo en S del calzado cortesano femenino.',s:1,l:'CALCEUS',c:5},
 {t:'Seda bordada',en:'Embroidered silk',it:'Seta ricamata',fr:'Soie brodée',d:'El material cumbre del zapato de corte del Antiguo Régimen.',s:1,l:'CALCEUS',c:5},
 {t:'Slipper',en:'Slipper',it:'Pantofole',fr:'Chausson',d:'Zapatilla de interior del s. XVIII.',s:1,l:'CALCEUS',c:5},
 {t:'Gran Renuncia Masculina',en:'Great Male Renunciation',it:'Grande Rinuncia Maschile',fr:'Grande Renonciation Masculine',d:'El abandono masculino del adorno; nace la diferenciación moderna.',s:1,l:'CALCEUS',c:5},
 {t:'Bota Hessian',en:'Hessian boot',it:'Stivale assiano',fr:'Botte hessoise',d:'Bota militar prusiana adoptada por la moda civil.',s:1,l:'CALCEUS',c:5},
 {t:'Bota Wellington',en:'Wellington boot',it:'Stivale Wellington',fr:'Botte Wellington',d:'Bota baja de cuero liso; ancestro de la Wellington de goma.',s:1,l:'CALCEUS',c:5},
 // Cap. 6
 {t:'Cordón cerrado',en:'Closed lacing (Oxford)',it:'Allacciatura chiusa',fr:'Laçage fermé',d:'Sistema Oxford: palas cosidas por debajo; más formal.',s:1,l:'CALCEUS',c:6},
 {t:'Cordón abierto',en:'Open lacing (Derby)',it:'Allacciatura aperta',fr:'Laçage ouvert',d:'Sistema Derby: palas por encima; más flexible.',s:1,l:'CALCEUS',c:6},
 {t:'Vulcanización',en:'Vulcanization',it:'Vulcanizzazione',fr:'Vulcanisation',d:'Caucho + azufre; permitió la suela de goma y el sneaker.',s:1,l:'CALCEUS',c:6},
 {t:'Plimsoll',en:'Plimsoll / Sneaker',it:'Scarpe da ginnastica',fr:'Chaussure de toile',d:'Zapatilla de lona y goma; el calzado de ocio.',s:1,l:'CALCEUS',c:6},
 {t:'Vira',en:'Welt',it:'Vira',fr:'Trépointe',d:'Tira que une corte, plantilla y suela; corazón del resolable.',s:1,l:'CALCEUS',c:6},
 // Cap. 7
 {t:'Spectator',en:'Spectator shoe',it:'Scarpa bicolore',fr:'Richelieu bicolore',d:'Oxford/Derby bicolor; icono del jazz de entreguerras.',s:1,l:'CALCEUS',c:7},
 {t:'Mary Jane',en:'Mary Jane',it:'Mary Jane',fr:'Salomé',d:'Zapato con correa frontal; liberó el baile femenino.',s:1,l:'CALCEUS',c:7},
 {t:'T-strap',en:'T-strap',it:'Scarpa a T',fr:'Bride en T',d:'Correa en T que sujeta el zapato al bailar.',s:1,l:'CALCEUS',c:7},
 {t:'Cuña',en:'Wedge',it:'Zeppa',fr:'Compensé',d:'Plataforma continua de Ferragamo; altura cómoda.',s:1,l:'CALCEUS',c:7},
 {t:'Plataforma',en:'Platform',it:'Plateau',fr:'Plateforme',d:'Suela gruesa que eleva por igual; icono del disco.',s:1,l:'CALCEUS',c:7},
 {t:'Penny loafer',en:'Penny loafer / Weejun',it:'Mocassino penny',fr:'Mocassin penny',d:'El loafer original de G.H. Bass; rey del estilo ivy.',s:1,l:'CALCEUS',c:7},
 // Cap. 8
 {t:'Stiletto',en:'Stiletto',it:'Stiletto',fr:'Stiletto',d:'Tacón aguja con varilla de acero; el zapato como efecto.',s:1,l:'CALCEUS',c:8},
 {t:'Botín Beatles',en:'Beatle boot',it:'Stivaletto Beatles',fr:'Bottine Beatles',d:'Variación del Chelsea con tacón cubano; moda mod.',s:1,l:'CALCEUS',c:8},
 {t:'Bota go-go',en:'Go-go boot',it:'Stivale go-go',fr:'Botte go-go',d:'Bota blanca de Courrèges para la minifalda.',s:1,l:'CALCEUS',c:8},
 {t:'Sneaker',en:'Sneaker',it:'Sneaker',fr:'Basket / sneaker',d:'Zapatilla deportiva convertida en objeto cultural.',s:1,l:'CALCEUS',c:8},
 {t:'Sneakerhead',en:'Sneakerhead',it:'Sneakerhead',fr:'Sneakerhead',d:'Coleccionista de sneakers; el zapato como activo.',s:1,l:'CALCEUS',c:8},
 // Cap. 9
 {t:'Reventa',en:'Resale',it:'Rivendita',fr:'Revente',d:'Mercado secundario de sneakers (StockX, GOAT).',s:1,l:'CALCEUS',c:9},
 {t:'Empeine tejido',en:'Knit',it:'Tomaia in maglia',fr:'Tige tricotée',d:'Empeine tejido como calcetín (Flyknit, Primeknit).',s:1,l:'CALCEUS',c:9},
 {t:'Impresión 3D',en:'3D printing',it:'Stampa 3D',fr:'Impression 3D',d:'Entresuelas con geometrías imposibles.',s:1,l:'CALCEUS',c:9},
 {t:'Cuero de hongo',en:'Mushroom leather',it:'Pelle di fungo',fr:'Cuir de champignon',d:'Material bio (Mylo) del calzado sostenible.',s:1,l:'CALCEUS',c:9},
 {t:'Lujo silencioso',en:'Quiet luxury',it:'Lusso silenzioso',fr:'Luxe discret',d:'Estatus susurrado por el material, no por el logo.',s:1,l:'CALCEUS',c:9},
 // Cap. 10
 {t:'Bespoke',en:'Bespoke',it:'Su misura',fr:'Sur mesure',d:'Zapato hecho a medida desde cero, con horma propia.',s:1,l:'CALCEUS',c:10},
 {t:'Listo para usar',en:'Ready-to-wear (RTW)',it:'Prêt-à-porter',fr:'Prêt-à-porter',d:'Calzado de serie; lo que compra la mayoría.',s:1,l:'CALCEUS',c:10},
 {t:'Pátina',en:'Patina',it:'Patina',fr:'Patine',d:'Teñido capa por capa; el zapato como obra (Berluti).',s:1,l:'CALCEUS',c:10},
 {t:'Suela roja',en:'Red sole',it:'Suola rossa',fr:'Semelle rouge',d:'Firma de Louboutin; heredera del tacón rojo real.',s:1,l:'CALCEUS',c:10},
 {t:'Cuero Venezia',en:'Venezia leather',it:'Pelle Venezia',fr:'Cuir Venezia',d:'Cuero de Berluti para pátina.',s:1,l:'CALCEUS',c:10},
 // Cap. 11
 {t:'Fetiche',en:'Fetish',it:'Feticcio',fr:'Fétiche',d:'El zapato como objeto de deseo.',s:1,l:'CALCEUS',c:11},
 {t:'Retifismo',en:'Retifism',it:'Retifismo',fr:'Rétifisme',d:'Fetichismo del calzado, abordado con rigor.',s:1,l:'CALCEUS',c:11},
 {t:'Zapato ritual',en:'Ritual shoe',it:'Scarpa rituale',fr:'Chaussure rituelle',d:'Calzado vinculado a rito y purificación.',s:1,l:'CALCEUS',c:11},
 {t:'Calzado litúrgico',en:'Liturgical footwear',it:'Calzatura liturgica',fr:'Chaussure liturgique',d:'Sandalias de oficio religioso.',s:1,l:'CALCEUS',c:11},
 {t:'Símbolo de estatus',en:'Status symbol',it:'Simbolo di status',fr:'Symbole de statut',d:'El zapato como código de acceso.',s:1,l:'CALCEUS',c:11},
 // Cap. 12
 {t:'Pala',en:'Vamp',it:'Tomaia',fr:'Tige',d:'Pieza frontal que cubre empeine y dedos.',s:1,l:'CALCEUS',c:12},
 {t:'Puntera',en:'Toe cap',it:'Puntale',fr:'Bout dur',d:'Refuerzo o adorno sobre los dedos.',s:1,l:'CALCEUS',c:12},
 {t:'Cuartos',en:'Quarters',it:'Quartieri',fr:'Quartiers',d:'Piezas laterales y traseras que abrazan el talón.',s:1,l:'CALCEUS',c:12},
 {t:'Lengüeta',en:'Tongue',it:'Linguetta',fr:'Languette',d:'Pieza bajo los cordones que protege el empeine.',s:1,l:'CALCEUS',c:12},
 {t:'Forro',en:'Lining',it:'Fodera',fr:'Doublure',d:'Capa interna que toca el pie.',s:1,l:'CALCEUS',c:12},
 {t:'Plantilla',en:'Insole',it:'Sottopiede',fr:'Semelle intérieure',d:'Base interior donde apoya la planta.',s:1,l:'CALCEUS',c:12},
 {t:'Alma',en:'Shank',it:'Cambione',fr:'Cambrion',d:'Lámina rígida que da soporte al arco.',s:1,l:'CALCEUS',c:12},
 {t:'Entresuela',en:'Midsole',it:'Intersuola',fr:'Semelle intermédiaire',d:'Capa de amortiguación entre plantilla y suela.',s:1,l:'CALCEUS',c:12},
 {t:'Ojales',en:'Eyelets',it:'Occhielli',fr:'Œillets',d:'Orificios por donde pasan los cordones.',s:1,l:'CALCEUS',c:12},
 // Cap. 13
 {t:'Flor',en:'Grain',it:'Fiore',fr:'Fleur',d:'Capa superior del cuero; su grano natural.',s:1,l:'CALCEUS',c:13},
 {t:'Flor entera',en:'Full grain',it:'Pieno fiore',fr:'Pleine fleur',d:'La mejor calidad: respira, resiste y desarrolla pátina.',s:1,l:'CALCEUS',c:13},
 {t:'Cuero corregido',en:'Corrected grain',it:'Fiore corretto',fr:'Fleur corrigée',d:'Flor lijada y recubierta; la red flag del económico.',s:1,l:'CALCEUS',c:13},
 {t:'Curtido vegetal',en:'Vegetable tanning',it:'Concia al vegetale',fr:'Tannage végétal',d:'Con taninos naturales; envejece con carácter.',s:1,l:'CALCEUS',c:13},
 {t:'Curtido al cromo',en:'Chrome tanning',it:'Concia al cromo',fr:'Tannage au chrome',d:'Rápido y flexible; el más común.',s:1,l:'CALCEUS',c:13},
 {t:'Ante',en:'Suede',it:'Camoscio',fr:'Daim',d:'Flor lijada aterciopelada; delicado al agua.',s:1,l:'CALCEUS',c:13},
 {t:'Nobuck',en:'Nubuck',it:'Nabuk',fr:'Nubuck',d:'Flor lijada fina; textura aterciopelada.',s:1,l:'CALCEUS',c:13},
 {t:'Charol',en:'Patent leather',it:'Vernice',fr:'Cuir verni',d:'Recubierto brillante; se limpia, no se nutre.',s:1,l:'CALCEUS',c:13},
 {t:'Cordovan',en:'Shell cordovan',it:'Cordovan',fr:'Cordouan',d:'De la grupa del caballo; brilla solo y dura décadas.',s:1,l:'CALCEUS',c:13},
 // Cap. 14
 {t:'Lona',en:'Canvas',it:'Tela di cotone',fr:'Toile',d:'Algodón tejido; el material de las casuales.',s:1,l:'CALCEUS',c:14},
 {t:'Malla',en:'Mesh',it:'Rete',fr:'Maille',d:'Tejido transpirable; estándar del running.',s:1,l:'CALCEUS',c:14},
 {t:'Caucho crepe',en:'Crepe rubber',it:'Gomma crepe',fr:'Caoutchouc crêpe',d:'Goma elástica de estética artesanal.',s:1,l:'CALCEUS',c:14},
 {t:'Entresuela EVA',en:'EVA midsole',it:'Intersuola EVA',fr:'Semelle EVA',d:'Amortiguación liviana de sneakers.',s:1,l:'CALCEUS',c:14},
 {t:'Membrana impermeable',en:'Waterproof membrane',it:'Membrana impermeabile',fr:'Membrane imperméable',d:'Gore-Tex; impermeable y transpirable.',s:1,l:'CALCEUS',c:14},
 // Cap. 15
 {t:'Cosido Blake',en:'Blake stitch',it:'Cucitura Blake',fr:'Couture Blake',d:'Suela cosida directo al corte; flexible, italiano.',s:1,l:'CALCEUS',c:15},
 {t:'Cementado',en:'Cemented',it:'Incollato',fr:'Soudé',d:'Suela pegada; barato y no resolable.',s:1,l:'CALCEUS',c:15},
 {t:'Resolable',en:'Resoleable',it:'Risuolabile',fr:'Ressoumable',d:'Que puede cambiar la suela varias veces.',s:1,l:'CALCEUS',c:15},
 {t:'Noruego',en:'Norwegian',it:'Norvegese',fr:'Norvégien',d:'Construcción cosida de alta durabilidad.',s:1,l:'CALCEUS',c:15},
 // Cap. 16
 {t:'Ancho',en:'Width',it:'Pianta',fr:'Largeur',d:'La medida olvidada: B/C, D, E/EE.',s:1,l:'CALCEUS',c:16},
 {t:'Talla',en:'Size',it:'Taglia',fr:'Pointure',d:'Largo del pie; distinto por sistema.',s:1,l:'CALCEUS',c:16},
 {t:'Arco',en:'Arch',it:'Arco plantare',fr:'Voûte plantaire',d:'Soporte plantar que da el alma.',s:1,l:'CALCEUS',c:16},
 {t:'Punta libre',en:'Toe room',it:'Spazio in punta',fr:'Aisance au bout',d:'~1 cm libre delante de los dedos.',s:1,l:'CALCEUS',c:16},
 {t:'Mondopoint',en:'Mondopoint (mm)',it:'Mondopoint',fr:'Mondopoint',d:'Medida en milímetros; la única fiable.',s:1,l:'CALCEUS',c:16},
 // Cap. 17
 {t:'Hecho a pedido',en:'Made to Order (MTO)',it:'Su ordinazione',fr:'Sur commande',d:'Personalizable sobre horma existente.',s:1,l:'CALCEUS',c:17},
 {t:'Montado',en:'Lasting',it:'Montaggio',fr:'Montage',d:'Dar la forma de la horma al cuero.',s:1,l:'CALCEUS',c:17},
 {t:'Corte del cuero',en:'Clicking',it:'Taglio',fr:'Découpe',d:'Cortar las piezas de cuero.',s:1,l:'CALCEUS',c:17},
 // Cap. 18
 {t:'Wholecut',en:'Wholecut',it:'Wholecut',fr:'Richelieu uni',d:'Una sola pieza de cuero; minimalismo máximo.',s:1,l:'CALCEUS',c:18},
 {t:'Puntera cosida',en:'Cap-toe',it:'Puntale',fr:'Bout droit',d:'Puntera recta cosida; el estándar de negocios.',s:1,l:'CALCEUS',c:18},
 {t:'Brogue',en:'Brogue / wingtip',it:'Brogue',fr:'Richelieu golf',d:'Perforaciones decorativas; restan formalidad.',s:1,l:'CALCEUS',c:18},
 {t:'Monk strap',en:'Monk strap',it:'Monk',fr:'Boucle',d:'Zapato de hebilla lateral; punto intermedio.',s:1,l:'CALCEUS',c:18},
 {t:'Opera pump',en:'Opera pump',it:'Opera pump',fr:'Escarpin',d:'Charol con lazo para White Tie.',s:1,l:'CALCEUS',c:18},
 // Cap. 19
 {t:'Chelsea boot',en:'Chelsea boot',it:'Chelsea boot',fr:'Chelsea boot',d:'Botín elástico sin cordones; el más versátil.',s:1,l:'CALCEUS',c:19},
 {t:'Chukka',en:'Chukka / desert boot',it:'Chukka',fr:'Desert boot',d:'Botín de 2-3 ojales en ante.',s:1,l:'CALCEUS',c:19},
 {t:'Bota de trabajo',en:'Work boot',it:'Stivale da lavoro',fr:'Botte de travail',d:'Piel gruesa y puntera reforzada; icono heritage.',s:1,l:'CALCEUS',c:19},
 {t:'Bota vaquera',en:'Western / cowboy boot',it:'Stivale western',fr:'Botte de cowboy',d:'Caña alta y tacón cubano; identidad regional.',s:1,l:'CALCEUS',c:19},
 {t:'Bota militar',en:'Combat boot',it:'Anfibi',fr:'Rangers',d:'Piel dura; de la trinchera al punk.',s:1,l:'CALCEUS',c:19},
 {t:'Caña',en:'Shaft',it:'Gambale',fr:'Tige',d:'La parte alta de la bota.',s:1,l:'CALCEUS',c:19},
 // Cap. 20
 {t:'Mocasín de antifaz',en:'Penny loafer',it:'Mocassino penny',fr:'Mocassin penny',d:'El loafer original con ranura para el penique.',s:1,l:'CALCEUS',c:20},
 {t:'Mocasín de borlas',en:'Tassel loafer',it:'Mocassino con nappine',fr:'Mocassin à glands',d:'El loafer de abogados y Wall Street.',s:1,l:'CALCEUS',c:20},
 {t:'Mocasín de bocado',en:'Horsebit loafer',it:'Mocassino con morsetto',fr:'Mocassin à mors',d:'El loafer de lujo de Gucci.',s:1,l:'CALCEUS',c:20},
 {t:'Zapato náutico',en:'Boat shoe',it:'Scarpa da barca',fr:'Chaussure bateau',d:'Suela antideslizante de Sperry.',s:1,l:'CALCEUS',c:20},
 {t:'Mocasín de conducir',en:'Driving shoe / Gommino',it:'Gommino',fr:'Mocassin de conduite',d:'Con tacos de goma para los pedales.',s:1,l:'CALCEUS',c:20},
 // Cap. 21
 {t:'Tacón aguja',en:'Stiletto',it:'Stiletto',fr:'Stiletto',d:'Tacón alto y fino; alarga y define.',s:1,l:'CALCEUS',c:21},
 {t:'Tacón bajo',en:'Kitten heel',it:'Tacco basso',fr:'Talon kitten',d:'3-5 cm; equilibrio entre elegancia y comodidad.',s:1,l:'CALCEUS',c:21},
 {t:'Correa trasera',en:'Slingback',it:'Slingback',fr:'Slingback',d:'Destapado del talón con correa.',s:1,l:'CALCEUS',c:21},
 {t:'Escotado lateral',en:"D'Orsay",it:"D'Orsay",fr:"D'Orsay",d:'Laterales abiertos que muestran el arco.',s:1,l:'CALCEUS',c:21},
 {t:'Plano de ballet',en:'Ballerina / flat',it:'Ballerina',fr:'Ballerine',d:'El plano de Repetto; elegancia sin esfuerzo.',s:1,l:'CALCEUS',c:21},
 {t:'Mule',en:'Mule',it:'Mule',fr:'Mule',d:'Destapado por detrás; despreocupación elegante.',s:1,l:'CALCEUS',c:21},
 // Cap. 22
 {t:'Botín',en:'Ankle boot',it:'Stivaletto',fr:'Bottine',d:'Al tobillo; el punto de entrada a las botas.',s:1,l:'CALCEUS',c:22},
 {t:'Caña alta',en:'Knee-high boot',it:'Stivale alto',fr:'Botte haute',d:'Hasta la rodilla; clásica de invierno.',s:1,l:'CALCEUS',c:22},
 {t:'Sobre la rodilla',en:'Over-the-knee',it:'Cuissard',fr:'Cuissarde',d:'La bota más dramática.',s:1,l:'CALCEUS',c:22},
 {t:'Gladiadora',en:'Gladiator boot',it:'Gladiatore',fr:'Gladiateur',d:'Tiras que suben por la pierna; la bota del verano.',s:1,l:'CALCEUS',c:22},
 // Cap. 23
 {t:'Zapatilla de running',en:'Running shoe',it:'Scarpa da corsa',fr:'Chaussure de running',d:'Amortiguación y ligereza según pisada.',s:1,l:'CALCEUS',c:23},
 {t:'Zapatilla de skate',en:'Skate shoe',it:'Scarpa da skate',fr:'Chaussure de skate',d:'Suela plana y refuerzo.',s:1,l:'CALCEUS',c:23},
 {t:'Cámara de aire',en:'Air unit',it:"Unità d'aria",fr:"Unité d'air",d:'Amortiguación visible de Nike.',s:1,l:'CALCEUS',c:23},
 // Cap. 24
 {t:'Punta de acero',en:'Steel toe',it:'Puntale in acciaio',fr:'Bout acier',d:'Protección industrial del calzado de seguridad.',s:1,l:'CALCEUS',c:24},
 {t:'Suela antiperforación',en:'Anti-perforation sole',it:'Suola antiperforazione',fr:'Semelle anti-perforation',d:'Protege la planta en el trabajo.',s:1,l:'CALCEUS',c:24},
 {t:'Drop',en:'Drop / heel-to-toe',it:'Drop',fr:'Drop',d:'Diferencia de altura talón-punta.',s:1,l:'CALCEUS',c:24},
 {t:'Amortiguación',en:'Cushioning',it:'Ammortizzazione',fr:'Amorti',d:'Absorción de impacto.',s:1,l:'CALCEUS',c:24},
 {t:'Bota de agua',en:'Wellington boot',it:'Stivale da pioggia',fr:'Botte en caoutchouc',d:'Wellington de goma para lluvia.',s:1,l:'CALCEUS',c:24},
 {t:'Puntera amplia',en:'Wide toe box',it:'Pianta ampia',fr:'Bout large',d:'Espacio para los dedos; calzado ortopédico.',s:1,l:'CALCEUS',c:24},
 // Cap. 25
 {t:'Horma de cedro',en:'Cedar shoe tree',it:'Tendente in cedro',fr:'Embauchoir en cèdre',d:'Absorbe humedad y mantiene la forma.',s:1,l:'CALCEUS',c:25},
 {t:'Cepillo de crin',en:'Horsehair brush',it:'Spazzola in crine',fr:'Brosse en crin',d:'Para pulir y retirar el polvo.',s:1,l:'CALCEUS',c:25},
 {t:'Acondicionador',en:'Conditioner',it:'Balsamo',fr:'Nourrissant',d:'Nutre el cuero.',s:1,l:'CALCEUS',c:25},
 {t:'Crema',en:'Cream',it:'Crema',fr:'Crème',d:'Nutre, hidrata y da color.',s:1,l:'CALCEUS',c:25},
 {t:'Cera',en:'Wax',it:'Cera',fr:'Cire',d:'Da brillo y protege; capa final.',s:1,l:'CALCEUS',c:25},
 {t:'Calzador',en:'Shoehorn',it:'Calzascarpe',fr:'Chausse-pied',d:'Protege el contrafuerte al calzar.',s:1,l:'CALCEUS',c:25},
 // Cap. 26
 {t:'Brillo espejo',en:'Mirror shine',it:'Lucidatura a specchio',fr:'Glaçage',d:'Capas finas de cera + agua, pulidas.',s:1,l:'CALCEUS',c:26},
 {t:'Cuartearse',en:'To crack',it:'Screpolarsi',fr:'Se craqueler',d:'Resecarse el cuero hasta agrietarse.',s:1,l:'CALCEUS',c:26},
 // Cap. 27
 {t:'Cepillo de crepe',en:'Crepe brush',it:'Spazzola crepe',fr:'Brosse crêpe',d:'Levanta el pelo del ante sin dañarlo.',s:1,l:'CALCEUS',c:27},
 {t:'Goma para ante',en:'Suede eraser',it:'Gomma per camoscio',fr:'Gomme à daim',d:'Frota manchas superficiales en seco.',s:1,l:'CALCEUS',c:27},
 {t:'Spray protector',en:'Protector spray',it:'Spray protettivo',fr:'Imperméabilisant',d:'Barrera invisible contra el agua.',s:1,l:'CALCEUS',c:27},
 {t:'Pelo',en:'Nap',it:'Pelo',fr:'Grain',d:'La superficie aterciopelada del ante.',s:1,l:'CALCEUS',c:27},
 // Cap. 28
 {t:'Exóticos',en:'Exotic leathers',it:'Pelli esotiche',fr:'Cuirs exotiques',d:'Cocodrilo, avestruz, serpiente; regulación CITES.',s:1,l:'CALCEUS',c:28},
 {t:'Encerado',en:'Waxed leather',it:'Pelle cerata',fr:'Cuir ciré',d:'Cuero tratado con grasa o cera; acabado mate.',s:1,l:'CALCEUS',c:28},
 {t:'Grasa de visón',en:'Mink oil',it:'Olio di visone',fr:'Huile de vison',d:'Nutrición para cueros encerados.',s:1,l:'CALCEUS',c:28},
 {t:'Hueso de ciervo',en:'Deer bone',it:'Osso di cervo',fr:'Os de cerf',d:'Pule el cordovan sin saturarlo.',s:1,l:'CALCEUS',c:28},
 // Cap. 29
 {t:'Blanquear suelas',en:'Sole whitening',it:'Sbiancamento suola',fr:'Blanchiment semelle',d:'Bicarbonato + vinagre para suelas blancas.',s:1,l:'CALCEUS',c:29},
 {t:'De-yellowing',en:'De-yellowing',it:'Rimozione ingiallimento',fr:'Déjaunissement',d:'Peróxido + UV para devolver el blanco.',s:1,l:'CALCEUS',c:29},
 {t:'Hidrólisis',en:'Hydrolysis',it:'Idrolisi',fr:'Hydrolyse',d:'Degradación del PU con la humedad; el enemigo silencioso.',s:1,l:'CALCEUS',c:29},
 {t:'Gel de sílice',en:'Silica gel',it:'Gel di silice',fr:'Gel de silice',d:'Previene moho en el guardado.',s:1,l:'CALCEUS',c:29},
 // Cap. 30
 {t:'Satén',en:'Satin',it:'Raso',fr:'Satin',d:'Material de gala; solo limpieza en seco.',s:1,l:'CALCEUS',c:30},
 {t:'Seda',en:'Silk',it:'Seta',fr:'Soie',d:'Delicada; nunca agua.',s:1,l:'CALCEUS',c:30},
 {t:'Tapa de tacón',en:'Heel cap / tip',it:'Tacco',fr:'Talonnette',d:'La pieza que toca el suelo; reemplazar a tiempo.',s:1,l:'CALCEUS',c:30},
 {t:'Pedrería',en:'Embellishments',it:'Decorazioni',fr:'Ornements',d:'Cristales y perlas; cepillo suave y sin líquidos.',s:1,l:'CALCEUS',c:30},
 {t:'Limpieza en seco',en:'Dry cleaning',it:'Pulizia a secco',fr:'Nettoyage à sec',d:'Método para delicados.',s:1,l:'CALCEUS',c:30},
 {t:'Horma de punta',en:'Pointed toe tree',it:'Tendente a punta',fr:'Embauchoir pointu',d:'Mantiene la forma de puntas finas.',s:1,l:'CALCEUS',c:30},
 // Cap. 31
 {t:'Impermeabilizar',en:'Waterproof',it:'Impermeabilizzare',fr:'Imperméabiliser',d:'Proteger antes de la lluvia.',s:1,l:'CALCEUS',c:31},
 {t:'Mancha de sal',en:'Salt stain',it:'Macchia di sale',fr:'Tache de sel',d:'Se trata con vinagre blanco diluido.',s:1,l:'CALCEUS',c:31},
 {t:'Galocha',en:'Overshoe',it:'Soprascarpa',fr:'Surlunette',d:'Sobrecalzado protector; heredero del patten.',s:1,l:'CALCEUS',c:31},
 {t:'Secar a temperatura',en:'Air dry',it:"Asciugare all'aria",fr:"Sécher à l'air",d:'Nunca calor directo.',s:1,l:'CALCEUS',c:31},
 // Cap. 32
 {t:'Plantilla ortopédica',en:'Orthotic insole',it:'Plantare ortopedico',fr:'Semelle orthopédique',d:'Soporte a medida; inversión en salud.',s:1,l:'CALCEUS',c:32},
 {t:'Carbón activado',en:'Activated charcoal',it:'Carbone attivo',fr:'Charbon actif',d:'Combate el olor.',s:1,l:'CALCEUS',c:32},
 {t:'Lana merino',en:'Merino wool',it:'Lana merino',fr:'Laine mérinos',d:'Transpira y no retiene olor.',s:1,l:'CALCEUS',c:32},
 {t:'Ampolla',en:'Blister',it:'Vescica',fr:'Ampoule',d:'Señal de que el zapato no es el correcto.',s:1,l:'CALCEUS',c:32},
 {t:'Juanete',en:'Bunion',it:'Alluce valgo',fr:'Oignon',d:'Deformación por calzado incorrecto.',s:1,l:'CALCEUS',c:32},
 // Cap. 33
 {t:'Re-solado',en:'Resole',it:'Risuolatura',fr:'Ressemelage',d:'Cambiar la suela entera; varias veces en Goodyear.',s:1,l:'CALCEUS',c:33},
 {t:'Estirar',en:'To stretch',it:'Allargare',fr:'Étirer',d:'Ceder un punto específico en el zapatero.',s:1,l:'CALCEUS',c:33},
 {t:'Teñido',en:'Dyeing',it:'Tintura',fr:'Teinture',d:'Trabajo de color avanzado.',s:1,l:'CALCEUS',c:33},
 // Cap. 34
 {t:'Bolsa de tela',en:'Dust bag',it:'Sacchetto in tessuto',fr:'Housse en tissu',d:'Protege del polvo y deja respirar.',s:1,l:'CALCEUS',c:34},
 {t:'Moho',en:'Mold',it:'Muffa',fr:'Moisissure',d:'Riesgo del plástico sellado.',s:1,l:'CALCEUS',c:34},
 {t:'Horma de viaje',en:'Travel tree',it:'Tendente da viaggio',fr:'Embauchoir de voyage',d:'Mantiene la forma en la maleta.',s:1,l:'CALCEUS',c:34},
 // Cap. 35
 {t:'Segunda mano',en:'Second-hand',it:'Seconda mano',fr:'Seconde main',d:'Mercado de reventa de calzado de calidad.',s:1,l:'CALCEUS',c:35},
 {t:'Donación',en:'Donation',it:'Donazione',fr:'Don',d:'Opción social del fin de vida.',s:1,l:'CALCEUS',c:35},
 {t:'Reciclaje',en:'Recycling',it:'Riciclo',fr:'Recyclage',d:'Programas de marcas (Reuse-A-Shoe).',s:1,l:'CALCEUS',c:35},
 {t:'Reutilización',en:'Reuse',it:'Riutilizzo',fr:'Réutilisation',d:'Segunda vida del calzado.',s:1,l:'CALCEUS',c:35},
 // Cap. 36
 {t:'Costo por uso',en:'Cost per wear',it:'Costo per utilizzo',fr:'Coût par port',d:'La cuenta que importa al comprar.',s:1,l:'CALCEUS',c:36},
 {t:'Presupuesto',en:'Budget',it:'Budget',fr:'Budget',d:'Niveles entrada/medio/premium.',s:1,l:'CALCEUS',c:36},
 {t:'Vintage',en:'Vintage',it:'Vintage',fr:'Vintage',d:'Calzado con historia y mercado propio.',s:1,l:'CALCEUS',c:36},
 {t:'Inversión',en:'Investment',it:'Investimento',fr:'Investissement',d:'Comprar mejor, no más caro.',s:1,l:'CALCEUS',c:36},
 // Cap. 37
 {t:'Etiqueta',en:'Dress code',it:'Codice di abbigliamento',fr:'Code vestimentaire',d:'El código de vestimenta de cada ocasión.',s:1,l:'CALCEUS',c:37},
 {t:'Esmoquin',en:'Tuxedo / Black tie',it:'Smoking',fr:'Smoking',d:'Máxima etiqueta contemporánea.',s:1,l:'CALCEUS',c:37},
 {t:'Traje',en:'Suit',it:'Abito',fr:'Costume',d:'El uniforme del business.',s:1,l:'CALCEUS',c:37},
 {t:'Un nivel por encima',en:'One step up',it:'Un livello sopra',fr:'Un cran au-dessus',d:'La regla de oro del código.',s:1,l:'CALCEUS',c:37},
 // Cap. 38
 {t:'Silueta',en:'Silhouette',it:'Silhouette',fr:'Silhouette',d:'La línea que el calzado modifica.',s:1,l:'CALCEUS',c:38},
 {t:'Punta alargada',en:'Elongated toe',it:'Punta allungata',fr:'Bout effilé',d:'Estiliza y alarga el pie.',s:1,l:'CALCEUS',c:38},
 {t:'Punta redonda',en:'Round toe',it:'Punta tonda',fr:'Bout rond',d:'Suaviza y relaja.',s:1,l:'CALCEUS',c:38},
 {t:'Tono continuo',en:'Tone-on-tone',it:'Tono su tono',fr:'Ton sur ton',d:'Alarga la línea con el pantalón/media.',s:1,l:'CALCEUS',c:38},
 {t:'Efecto visual',en:'Visual effect',it:'Effetto visivo',fr:'Effet visuel',d:'Lo que el calzado comunica de la silueta.',s:1,l:'CALCEUS',c:38},
 // Cap. 39
 {t:'Mito',en:'Myth',it:'Mito',fr:'Mythe',d:'Afirmación popular a desmontar con razón.',s:1,l:'CALCEUS',c:39},
 {t:'Regla',en:'Rule',it:'Regola',fr:'Règle',d:'Norma contextual, no fija.',s:1,l:'CALCEUS',c:39},
 {t:'Principio',en:'Principle',it:'Principio',fr:'Principe',d:'Proporción, contraste, contexto.',s:1,l:'CALCEUS',c:39},
 {t:'Veredicto',en:'Verdict',it:'Verdetto',fr:'Verdict',d:'Sí/No con razón.',s:1,l:'CALCEUS',c:39},
 // Por publicar (otros libros)
 {t:'Bespoke (sastrería)',en:'Bespoke',it:'Su misura',fr:'Sur mesure',d:'Sastrería hecha a medida desde cero.',s:2,l:'FORMA',c:null},
 {t:'Sashiko',en:'Sashiko',it:'Sashiko',fr:'Sashiko',d:'Zurcido visible japonés; reparación como ornamento.',s:3,l:'INDICUM',c:null}
];
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let filtroSerie='',filtroTexto='';
function render(){
 const cont=document.getElementById('glosario');
 const items=G.filter(g=>(!filtroSerie||g.s==filtroSerie)&&(!filtroTexto||norm(g.t).includes(filtroTexto)||norm(g.d).includes(filtroTexto))).sort((a,b)=>norm(a.t).localeCompare(norm(b.t)));
 document.getElementById('chips').innerHTML=`<span class="chip chip--oro">${G.length} términos</span><span class="chip">${new Set(G.map(g=>g.l)).size} libros citados</span><span class="chip">ES · EN · IT · FR</span><span class="chip">Actualizado por capítulo</span>`;
 if(!items.length){cont.innerHTML='<p class="vacio">Sin resultados para esa búsqueda.</p>';return;}
 const letras={};
 items.forEach(g=>{const L=norm(g.t)[0].toUpperCase();(letras[L]=letras[L]||[]).push(g);});
 cont.innerHTML=Object.keys(letras).sort().map(L=>`<section class="letra-sec"><h2 class="letra-mark">${L}</h2>${letras[L].map(g=>`<article class="entrada"><div><div class="ent-head"><h3>${g.t}</h3></div><span class="trad">EN ${g.en} · IT ${g.it} · FR ${g.fr}</span><p class="def">${g.d}</p></div><div class="prov"><span class="prov-serie">${SERIES[g.s]}</span><span class="prov-libro">${g.l}</span><span class="prov-cap ${g.c?'':'prov-cap--np'}">${g.c?'Cap. '+g.c:'Por publicar'}</span></div></article>`).join('')}</section>`).join('');
}
const fCont=document.getElementById('filtros');
const seriesPresentes=[...new Set(G.map(g=>g.s))].sort();
fCont.innerHTML=`<button class="filtro-g is-active" data-s="">Todas</button>`+seriesPresentes.map(s=>`<button class="filtro-g" data-s="${s}">${SERIES[s]}</button>`).join('');
fCont.querySelectorAll('.filtro-g').forEach(b=>b.addEventListener('click',()=>{fCont.querySelectorAll('.filtro-g').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');filtroSerie=b.dataset.s;render();}));
document.getElementById('buscar').addEventListener('input',e=>{filtroTexto=norm(e.target.value);render();});
render();