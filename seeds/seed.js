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
        name: "Mayan",
        time_period:1200,
        museumId: 1
    
    },
    {
        name: "Inca",
        time_period:1300,
        museumId: 1
    
    },
    {
        name: "Olmec",
        time_period:1500,
        museumId: 1
    
    },
    {
        name: "Aztec",
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
        "artTypeId": 1
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
        "name": "sculpture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "1470–1532",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "sculpture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "sculpture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "Jewelry 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Jewelry 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Jewelry 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Architecture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Architecture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Architecture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "sculpture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "sculpture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "sculpture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "Jewelry 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Jewelry 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Jewelry 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Architecture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "Architecture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "Architecture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/200",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 9,
        "artTypeId": 9
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