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
    {
        name: "Sculptures",
        civId:1
    },
    {
        name: "Jewery",
        civId:1
    },
    {
        name: "Architecture",
        civId:1
    },
    {
        name: "Sculptures",
        civId:2
    },
    {
        name: "Jewery",
        civId:2
    },
    {
        name: "Architecture",
        civId:2
    },
    {
        name: "Sculptures",
        civId:3
    },
    {
        name: "Jewery",
        civId:3
    },
    {
        name: "Architecture",
        civId:3
    },


]
const works = [
    {  
        "name": "sculpture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "sculpture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "sculpture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 1,
        "artTypeId": 1
    },
    {  
        "name": "Jewery 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Jewery 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Jewery 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 2,
        "artTypeId": 2
    },
    {  
        "name": "Architecture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Architecture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "Architecture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 3,
        "artTypeId": 3
    },
    {  
        "name": "sculpture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "sculpture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "sculpture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 4,
        "artTypeId": 4
    },
    {  
        "name": "Jewery 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Jewery 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Jewery 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 5,
        "artTypeId": 5
    },
    {  
        "name": "Architecture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Architecture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "Architecture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 6,
        "artTypeId": 6
    },
    {  
        "name": "sculpture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "sculpture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "sculpture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 7,
        "artTypeId": 7
    },
    {  
        "name": "Jewery 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Jewery 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Jewery 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 8,
        "artTypeId": 8
    },
    {  
        "name": "Architecture 1",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "Architecture 2",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
        "description": "this is a test art post route",
        "date_created": "12-02-2023",
        "type_id": 9,
        "artTypeId": 9
    },
    {  
        "name": "Architecture 3",
        "artist": "test artist",
        "image_url": "http://placekitten.com/200/300",
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