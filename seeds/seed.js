const sequelize = require("../config/connection");
const { Employee, Civ, ArtType, ArtWork, User } = require('../models')

const employees = [
    {
        username: "admin",
        password: "password"
    }
]
const civs = [
    {
        name: "Mayan Civilization",
        time_period:1200,
        museumId: 1
    
    },
    {
        name: "Inca Civilization",
        time_period:1300,
        museumId: 1
    
    },
    {
        name: "Olmec Civilization",
        time_period:1500,
        museumId: 1
    
    },
    {
        name: "Aztec Civilization",
        time_period:1700,
        museumId: 1
    
    },

]
const types = [
    // Mayan
    {
        name: "Sculptures",
        civId:1
    },
    {
        name: "Jewelry",
        civId:1
    },
    {
        name: "Architecture",
        civId:1
    },
    // Inca
    {
        name: "Sculptures",
        civId:2
    },
    {
        name: "Jewelry",
        civId:2
    },
    {
        name: "Architecture",
        civId:2
    },
    // Olmec
    {
        name: "Sculptures",
        civId:3
    },
    {
        name: "Jewelry",
        civId:3
    },
    {
        name: "Architecture",
        civId:3
    },
    // Aztec
    {
        name: "Sculptures",
        civId:4
    },
    {
        name: "Jewelry",
        civId:4
    },
    {
        name: "Architecture",
        civId:4
    },


]
const works = [
    {  
        "name": "Cancuén Panel",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683751970/Mesoart/cancuenpanel_smpgbb.jpg",
        "description": "This is a stone panel excavated from the ancient city of Cancuén in what is now present day Guatemala. It depicts their ruler Tajal Chan Ahk. Cancuén had one of the largest palaces in the Mayan World and reached its peak in the 7th century.",
        "date_created": "7th Century",
        "type_id": 1,
        "artTypeId": 1,
        "num_likes":99999
    },
    {  
        "name": "Copan Stela",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683752192/Mesoart/Stela_A_Copan_02_g6k7ck.jpg",
        "description": "Stelas are large stone slabs covered in carvings and inscriptions. Most of them depict rulers of the cities they are located in disguised as gods. The most famous Stelas are from Copan (like this one) and the near by area of Quirigua. These statues can be as long as 10 meters.",
        "date_created": "5th to 9th Century",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "Possible Mirror Bearer",
        "artist": "test artist",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683752764/Mesoart/800px-Mirror-Bearer_MET_DT1254_c6fkis.jpg",
        "description": "This wood carving is one of few examples that have survived as most were destroyed by Spanish Colonialists. This statue depicts a dignified seated man that has possibly been functioning as a mirror bearer.",
        "date_created": "6th Century",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "Mayan Skull",
        "artist": "test artist",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683840616/Mayan_skull_front_p2_mqmuer.jpg",
        "description": "This wood carving is one of few examples that have survived as most were destroyed by Spanish Colonialists. This statue depicts a dignified seated man that has possibly been functioning as a mirror bearer.",
        "date_created": "6th Century",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "Mayan Revival Relief",
        "artist": "test artist",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683840850/Mayan_Revival_relief_1_fu3k8z.jpg",
        "description": "This wood carving is one of few examples that have survived as most were destroyed by Spanish Colonialists. This statue depicts a dignified seated man that has possibly been functioning as a mirror bearer.",
        "date_created": "6th Century",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "Flower-shaped Jadeite Earflares",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683752976/Mesoart/1024px-Flower-Shaped_Earflares_LACMA_M.2007.85.1-.2_1_u4cqee.jpg",
        "description": "Jadeite Diameter: 2 3/4 in. (6.99 cm); Depth: 1 3/8 in. (3.49 cm). Jadeite is a very heavy and dense form of Jade, and jewlery created from this was done without the help of metal tools.",
        "date_created": "550-850 CE",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Jadeite Deity-Face Pendant",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683752977/Mesoart/1024px-Flower-Shaped_Earflares_LACMA_M.2007.85.1-.2_btvovw.jpg",
        "description": "This piece of jewelry was modeled after either a King or Diety, as many depictions of Kings from this time period were modeled after Dieties. Jadeite is a very heavy and dense form of Jade, and jewlery created from this was done without the help of metal tools.",
        "date_created": "7th-8th Century",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Funerary mask of a Palenque queen",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683752978/Mesoart/Palenque_-_Rote_K%C3%B6nigin_1_lbmjoi.jpg",
        "description": 'This mask was created as a funerary mask for a Palenque Queen also known as the "Red Queen". It is made from jade plaques and the green colors stand for life renovation. Also noteable are the inlaid pieces of malachite.',
        "date_created": "7th Century",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Mayan Necklace",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683840989/Necklace_-_Meta_Overbeck__27770427469_ty1hk8.jpg",
        "description": 'This mask was created as a funerary mask for a Palenque Queen also known as the "Red Queen". It is made from jade plaques and the green colors stand for life renovation. Also noteable are the inlaid pieces of malachite.',
        "date_created": "7th Century",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Jade Ear Disc",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683841176/WLA_lacma_jadeite_ear_disks_sqwdvi.jpg",
        "description": 'This mask was created as a funerary mask for a Palenque Queen also known as the "Red Queen". It is made from jade plaques and the green colors stand for life renovation. Also noteable are the inlaid pieces of malachite.',
        "date_created": "7th Century",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Tikal Temple",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683754094/Mesoart/Tikal_Temple_II_n0rcjb.jpg",
        "description": "The Tikal Temple is a Mayan Archaeological site in the Petén Department of northern Guatemala. It is also known as the Temple of the Great Jaguar because it houses a lintel that represents a king sitting upon a jaguar throne. The temple has another name, refering to the ruler Jasaw Chan K'awiil I who was buried here.  It is over 180 feet tall and is topped by a funerary shrine containing finely carfed wooden lintels.",
        "date_created": "732 AD",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Mayan House",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683754094/Mesoart/MayaHouse_pqontx.jpg",
        "description": "This traditional Mayan house is located at Chichen Itza. To construct a house, Mayan builders would start with a square and measure from corner to corner using a cord or vine. The new length would be determined using the square root of two. They used different proportions in temples and homes to create symetrical designs without the use of any units of measurement.",
        "date_created": "250-550 CE",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Copan Ball Court",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683754093/Mesoart/1024px-Cop%C3%A1n_Ballcourt_fibicx.jpg",
        "description": "This ball court is a large masonry structure where Mesoamericans played hip-ball. The shape is identified as a long narrow alley flanked by two horrizontal walls with sloping faces. They were used for functions other than ballgames, like wrestling matches and feasts.",
        "date_created": "426-822 CE",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Mayan Wall Detail",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683841292/Aurora_detail_Mayan_Archit_2008_m0sag7.jpg",
        "description": "This ball court is a large masonry structure where Mesoamericans played hip-ball. The shape is identified as a long narrow alley flanked by two horrizontal walls with sloping faces. They were used for functions other than ballgames, like wrestling matches and feasts.",
        "date_created": "426-822 CE",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Mayan Crested Temple",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683841391/800px-Mayan_crested_temple_vjtm0i.jpg",
        "description": "This ball court is a large masonry structure where Mesoamericans played hip-ball. The shape is identified as a long narrow alley flanked by two horrizontal walls with sloping faces. They were used for functions other than ballgames, like wrestling matches and feasts.",
        "date_created": "426-822 CE",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Camelid Conopa",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683772781/Camelid_Conopa__1470-1532__36.683_wmnkbn.jpg",
        "description": "These small stone figures were the most common ritual effigies used in Bolivia and Peru. These objects were often buried in an animals' corral to bring protection and prosperity to their owners and fertility to the herds. The cylindrical cavities in their backs were filled with offerings to the gods in the form of a mixture including animal fat, coca leaves, maize kernels and seashells.",
        "date_created": "1470–1532",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "Head of Viracocha",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683773602/768px-Cabeza_de_Viracocha__Museo_de_Am%C3%A9rica_bjezzo.jpg",
        "description": 'Diorite sculpture from Amarucancha in Peru. This stone is known to be difficult to carve because of its hardness and course grain size.',
        "date_created": "1400-1532 AD",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "Gold Bird",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683774007/800px-Gold_Inca_bird__Museo_de_Am%C3%A9rica_casdit.jpg",
        "description": "Sheet metal was a common way for Inca artists to create figures of a gold-rich silver alloy. While sometimes molding the metal into cylindars to create 3d objects, the use of solder was also noteable in construction of such works of art.",
        "date_created": "1400-1533 AD",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "Gold and Amythest Necklace",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683774789/CUENTAS-DE-ORO-Y-AMATISTAS-CULTURA-LAMBAYEQUE_vannvl.jpg",
        "description": "Sheet metal was a common way for Inca artists to create round objects of a gold-rich silver alloy. They molded the metal into cylindars to create 3d objects and beads.",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Gold and Chrysocolla Earings",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683774786/oro23_jm0c7w.jpg",
        "description": "A lot of gold jewlery made by the Incans was crafted using pounded sheet metal. ",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Gold Mask with Emerald Tears",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683774786/oro34_cosic2.jpg",
        "description": "This Mask was most likely used as a funerary item and placed on the deceased before burial. The Incans believed that burning the dead would remove their ability to enter the afterlife as it would sever their spiritual connection.",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Wall of the Coricancha temple",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683775350/1024px-Inca_wall_1_-_Coricancha_Peru_uou4hz.jpg",
        "description": "The Inca Empire employed a system of tribute to the Inca government in the form of labor, called Mit'a that required all males between 15-50 to work on large public construction projects.",
        "date_created": "1438-1471 CE",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Palace of Diego Sayri Túpac",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683775852/1280px-Casa_de_Sayri_T%C3%BApac__Interior_mjtggy.jpg",
        "description": "Inca walls practiced mortarless masonry and used partially worked, irregularly shaped rocks to complement the organic qualities and diversity of the natural environment.[36] Through the dry fitted masonry techniques of caninacukpirca, the Incas shaped their stone to conceal natural outcrops, fit tight crevices, and ultimately incorporate the landscape into their infrastructure.",
        "date_created": "1544-1560 CE",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Machu Picchu",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683776122/80_-_Machu_Picchu_-_Juin_2009_-_edit.2_urjeei.jpg",
        "description": "Also known as the Lost City of the Incas, this citadel built on a Peruvian mountain was occupied for a century before abandonment. Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Room of the Three Windows.",
        "date_created": "1420–1532",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "La Venta",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683776731/Olmec_Monument_19__La_Venta__1300-400_BC_vnmcch.jpg",
        "description": 'As a ceremonial center, La Venta contains an elaborate series of buried offerings and tombs, as well as monumental sculptures. These stone monuments, stelae, and "altars" were carefully distributed amongst the mounds and platforms. The mounds and platforms were built largely from local sands and clays. It is assumed that many of these platforms were once topped with wooden structures, which have long since disappeared.',
        "date_created": "1300-400 BC",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "Olmec Head",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683776734/1200px-Olmec_sculpture_gdv18r.jpg",
        "description": "The Olmec colossal heads are stone representations of human heads sculpted from large basalt boulders. They range in height from 1.17 to 3.4 metres (3.8 to 11.2 ft). All portray mature individuals with fleshy cheeks, flat noses, and slightly-crossed eyes; their physical characteristics correspond to a type that is still common among the inhabitants of Tabasco and Veracruz.",
        "date_created": "900 BC+",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "Olmec Stone Wrestler",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683776731/Olmec_Stone__Wrestler___Veracruz__Protoclassic__600-100_BC__66cm_qqfuum.jpg",
        "description": "The Wrestler is a basalt statuette dating back to between 1500 BCE and 400 BCE, which some believe to be one of the most important sculptures of the Olmec culture. The near life-size figure has been praised not only for its realism and sense of energy, but also for its aesthetic qualities.",
        "date_created": "600-100 BC",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "Jade Facemask",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683777400/Mask_MET_AO1977.187.33_j8fenp.jpg",
        "description": "Jade is a particularly precious material, and it was used as a mark of rank by the ruling classes.",
        "date_created": "10th–6th century BCE",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Jade Pendants",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683777404/WLA_lacma_Olmec_jadeite_pendants_uptuck.jpg",
        "description": "Jade is a particularly precious material, and it was used as a mark of rank by the ruling classes.",
        "date_created": "1000-600 B.C",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Olmec Ceramic Stamp",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683777403/WLA_lacma_Olmec_ceramic_stamp_puhgkf.jpg",
        "description": "The Olmec are not known to have any form of written language, but were among the first civilizations to have a spoken language. Despite this, the Olmec may have been the first civilization in the Western Hemisphere to develop a writing system however this is still widely disputed.",
        "date_created": "1000-600 B.C",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "The Pyramid of Chalcatzingo",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683778118/Piramide_de_Chalcatzingo_msdey6.jpg",
        "description": "Chalcatzingo is a Mesoamerican archaeological site in the Valley of Morelos. Chalcatzingo is estimated to have been settled as early as 1500 BCE. The inhabitants began to produce and display Olmec-style art and architecture around 900 BCE.",
        "date_created": "1500-500 BCE",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "La Venta Mosaic",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683778112/La_Venta_Mosaic__Ruben_Charles_zjoaxu.jpg",
        "description": "These Mosaics were roughly 4.5 by 6 metres (15 by 20 feet) and each consisting of up to 485 blocks of serpentine. These blocks were arranged horizontally to form what has been variously interpreted as a variety of shapes.",
        "date_created": "1200-900 BC",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "The Red Palace in San Lorenzo",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683825473/The_Olmec__Red_Palace__in_San_Lorenzo.webp_degeei.png",
        "description": "Ten colossal stone heads representing heads of past and present rulers have been found at San Lorenzo. Evidence suggests that these heads were plastered and painted in bright colors. They were arranged in ensembles and set in a plaza paved with red sand and yellow gravel.",
        "date_created": "1200-900 BC",
        "type_id": 9,
        "artTypeId": 9
    },

    {  
        "name": "Aztec calendar stone",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683778993/800px-Aztec_Calendar_Stone__8263450477_zrp6jp.jpg",
        "description": "It measures 3.6 metres (12 ft) in diameter and 98 centimetres (39 in) thick, and weighs 24,590 kg (54,210 lb). Although the exact date of its creation is unknown, the name glyph of the Aztec ruler Moctezuma II in the central disc dates the monument to his reign between 1502 and 1520.",
        "date_created": "1502–1521",
        "type_id": 10,
        "artTypeId": 10
    },
    {  
        "name": "The Coatlicue Statue",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683779078/1024px-Coatlicue_Statue_in_National_Museum_of_Anthropology__Mexico_City__2748833231_xev4za.jpg",
        "description": 'The Coatlicue statue is one of the most famous surviving Aztec sculptures. It is a 2.52 metre (8.3 ft) tall andesite statue by an unidentified Mexica artist. Although there are debates about what or who the statue represents, it is usually identified as the Aztec deity Coatlicue ("Snakes-Her-Skirt").',
        "date_created": "1439 or 1491 CE",
        "type_id": 10,
        "artTypeId": 10
    },
    {  
        "name": "Aztec Eagle Warrior",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683779240/Aztec_eagle_warrior_vbd1cc.jpg",
        "description": 'Nahua metaphysics centers around teotl, "a single, dynamic, vivifying, eternally self-generating and self-regenerating sacred power, energy or force." This is conceptualized in a kind of monistic pantheism as manifest in the supreme god Ometeotl, as well as a large pantheon of lesser gods and idealizations of natural phenomena such as stars and fire.',
        "date_created": "1350–1520 CE",
        "type_id": 10,
        "artTypeId": 10
    },
    {  
        "name": "Aztec feather shield",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683779730/Federschild-Sonne-retuschiert_hsvyif.jpg",
        "description": "An especially prized art form among the Aztecs was featherwork - the creation of intricate and colorful mosaics of feathers, and their use in garments as well as decoration on weaponry, war banners, and warrior suits. The class of highly skilled and honored craftsmen who created feather objects was called the amanteca.",
        "date_created": "1520 CE",
        "type_id": 11,
        "artTypeId": 11
    },
    {  
        "name": "Frog-shaped Necklace Ornaments",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683779858/Necklace_Ornaments__Frogs_MET_DT4265_onjn7e.jpg",
        "description": "Men engaged in craft specializations such as the production of ceramics and of obsidian and flint tools, and of luxury goods such as beadwork, featherwork and the elaboration of tools and musical instruments. Sometimes entire calpollis specialized in a single craft, and in some archeological sites large neighborhoods have been found where apparently only a single craft specialty was practiced.",
        "date_created": "15th-16th Century CE",
        "type_id": 11,
        "artTypeId": 11
    },
    {  
        "name": "Black on Orange Ceramic Ware",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683779948/800px-Plate_with_painted_decoration__Aztec_culture__Mexico__ceramic_-_Fitchburg_Art_Museum_-_DSC08809_qes85l.jpg",
        "description": "The Aztecs produced ceramics of different types. Common are orange wares, which are orange or buff burnished ceramics with no slip.",
        "date_created": "1350–1520 CE",
        "type_id": 11,
        "artTypeId": 11
    },
    {  
        "name": "Detail of Ruins of Tenochititlan",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683780428/1280px-Vestigios_de_Tenochtitlan_by_CDMX_Gov_IMG_5002__29972506550_hkzhpp.jpg",
        "description": "Tenochtitlan's main temple complex, the Templo Mayor, was dismantled and the central district of the Spanish colonial city was constructed on top of it. The great temple was destroyed by the Spanish during the construction of a cathedral.",
        "date_created": "1325-1521 CE",
        "type_id": 12,
        "artTypeId": 12
    },{  
        "name": "Pyramid of the Moon",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683780590/1920px-Pyramid_of_the_Moon_from_Pyramid_of_the_Sun__Teotihuacan__in_sunlight_my9nj4.jpg",
        "description": "The name Teōtīhuacān was given by the Nahuatl-speaking Aztecs centuries after the fall of the city around 550 CE. Teotihuacan was the largest urban center of Mesoamerica before the Aztecs, almost 1000 years prior to their epoch.The city was already in ruins by the time of the Aztecs.",
        "date_created": "100 BCE-500 CE",
        "type_id": 12,
        "artTypeId": 12
    },{  
        "name": "Pyramid of Santa Cecilia Acatitlan",
        "artist": "Unknown",
        "image_url": "https://res.cloudinary.com/ds1psny5l/image/upload/v1683780936/1280px-StaCeciliaAcatitlanNorte_vbl3u7.jpg",
        "description": "Only one quadrangular basement currently survives, which might have been one of the site's main structures. It consists of a large staircase leading up to a temple. Like Tenayuca, it is thought that the temple was dedicated to the worship of Huitzilopochtli and Tlaloc. The Aztec Empire was largely built through conquest, the Aztecs had the challenge of incorporating the ethnic groups of the regions they conquered into one unified empire. By having a distinct architectural style, the Aztec Empire was able to promote its worldview and showcase the power of the Empire's military.",
        "date_created": "12th Century +",
        "type_id": 12,
        "artTypeId": 12
    },






]
const startSeedin = async ()=>{
    try{
        await sequelize.sync({force:true});
        const employeeData = await Employee.bulkCreate(employees);
        const civData = await Civ.bulkCreate(civs);
        const typeData = await ArtType.bulkCreate(types);
        const workData = await ArtWork.bulkCreate(works);
        console.log("all done!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeedin()