{
const mayaBtn = document.getElementById("mayaicon");
const olmecBtn = document.getElementById("olmecicon");
const incaBtn = document.getElementById("incaicon");
const aztecBtn = document.getElementById("aztecicon");

const mayaNav = document.getElementById("mayanav");
const olmecNav = document.getElementById("olmecnav");
const incaNav = document.getElementById("incanav");
const aztecNav = document.getElementById("aztecnav");


function getMayaCatalog(){
    window.location.href = '/catalog/1';
};

function getOlmecCatalog(){
    window.location.href = '/catalog/3';
};

function getIncaCatalog(){
    window.location.href = '/catalog/2';
};

function getAztecCatalog(){
    window.location.href = '/catalog/4';
};

mayaBtn.addEventListener('click', getMayaCatalog)
olmecBtn.addEventListener('click', getOlmecCatalog)
incaBtn.addEventListener('click', getIncaCatalog)
aztecBtn.addEventListener('click', getAztecCatalog)

mayaNav.addEventListener('click', getMayaCatalog)
olmecNav.addEventListener('click', getOlmecCatalog)
incaNav.addEventListener('click', getIncaCatalog)
aztecNav.addEventListener('click', getAztecCatalog)
}