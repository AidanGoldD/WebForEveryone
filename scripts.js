//https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
//https://web.archive.org/web/20230415020439/https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html

const regElement = document.getElementById("regBtn");
const proElement = document.getElementById("proBtn");
const deuElement = document.getElementById("deuBtn");
const triElement = document.getElementById("triBtn");
const achElement = document.getElementById("achBtn");
const sliElement = document.getElementById("slider");
const frameElement = document.getElementById("iframeView");
const fullElement = document.getElementById("fullBtn");
const urlElement = document.getElementById("urlTxtbx");
const fileElement = document.getElementById("fileSelect");
const percentElement = document.getElementById("slidePercent");
var selectedType = "reg"
var selectedNumber = 10;

percentElement.innerHTML = sliElement.value;
//slidePercent
/*
var output = document.getElementById("demo");
output.innerHTML = sliElement.value;
sliElement.oninput = function() {
  output.innerHTML = sliElement.value;
}
*/

regElement.addEventListener("click", function(){selectedType="reg"; updateFilter();});
proElement.addEventListener("click", function(){selectedType="pro"; updateFilter();});
deuElement.addEventListener("click", function(){selectedType="deu"; updateFilter();});
triElement.addEventListener("click", function(){selectedType="tri"; updateFilter();});
achElement.addEventListener("click", function(){selectedType="ach"; updateFilter();});
urlElement.addEventListener("input", function(){loadURL("textbox")});
fileElement.addEventListener("change", function(){loadURL("fileselection"); urlElement.value = "";});
sliElement.oninput = function() {selectedNumber = sliElement.value / 10; updateFilter(); percentElement.innerHTML = sliElement.value;};

fullElement.addEventListener("click", openFullscreen);

//achromatopsia

function updateFilter() {
  regElement.className = "";
  proElement.className = "";
  deuElement.className = "";
  triElement.className = "";
  achElement.className = "";
  if (selectedType == "reg") {
    frameElement.className = "regularFilter";
    regElement.className = "selectedButton";
  }
  else if (selectedType == "pro") {
    updateProFilter();
    proElement.className = "selectedButton";
  }
  else if (selectedType == "deu") {
    updateDeuFilter();
    deuElement.className = "selectedButton";
  }
  else if (selectedType == "tri") {
    updateTriFilter();
    triElement.className = "selectedButton";
  }
  else {
    updateAchFilter();
    achElement.className = "selectedButton";
  }
}

function updateProFilter() {
  if (selectedNumber == 0) {
    frameElement.className = "regularFilter";
  }
  else if (selectedNumber == 1) {
    frameElement.className = "protanopia1Filter";
  }
  else if (selectedNumber == 2) {
    frameElement.className = "protanopia2Filter";
  }
  else if (selectedNumber == 3) {
    frameElement.className = "protanopia3Filter";
  }
  else if (selectedNumber == 4) {
    frameElement.className = "protanopia4Filter";
  }
  else if (selectedNumber == 5) {
    frameElement.className = "protanopia5Filter";
  }
  else if (selectedNumber == 6) {
    frameElement.className = "protanopia6Filter";
  }
  else if (selectedNumber == 7) {
    frameElement.className = "protanopia7Filter";
  }
  else if (selectedNumber == 8) {
    frameElement.className = "protanopia8Filter";
  }
  else if (selectedNumber == 9) {
    frameElement.className = "protanopia9Filter";
  }
  else {
    frameElement.className = "protanopia10Filter";
  }
}

function updateDeuFilter() {
  if (selectedNumber == 0) {
    frameElement.className = "regularFilter";
  }
  else if (selectedNumber == 1) {
    frameElement.className = "deuteranopia1Filter";
  }
  else if (selectedNumber == 2) {
    frameElement.className = "deuteranopia2Filter";
  }
  else if (selectedNumber == 3) {
    frameElement.className = "deuteranopia3Filter";
  }
  else if (selectedNumber == 4) {
    frameElement.className = "deuteranopia4Filter";
  }
  else if (selectedNumber == 5) {
    frameElement.className = "deuteranopia5Filter";
  }
  else if (selectedNumber == 6) {
    frameElement.className = "deuteranopia6Filter";
  }
  else if (selectedNumber == 7) {
    frameElement.className = "deuteranopia7Filter";
  }
  else if (selectedNumber == 8) {
    frameElement.className = "deuteranopia8Filter";
  }
  else if (selectedNumber == 9) {
    frameElement.className = "deuteranopia9Filter";
  }
  else {
    frameElement.className = "deuteranopia10Filter";
  }
}

function updateTriFilter() {
  if (selectedNumber == 0) {
    frameElement.className = "regularFilter";
  }
  else if (selectedNumber == 1) {
    frameElement.className = "tritanopia1Filter";
  }
  else if (selectedNumber == 2) {
    frameElement.className = "tritanopia2Filter";
  }
  else if (selectedNumber == 3) {
    frameElement.className = "tritanopia3Filter";
  }
  else if (selectedNumber == 4) {
    frameElement.className = "tritanopia4Filter";
  }
  else if (selectedNumber == 5) {
    frameElement.className = "tritanopia5Filter";
  }
  else if (selectedNumber == 6) {
    frameElement.className = "tritanopia6Filter";
  }
  else if (selectedNumber == 7) {
    frameElement.className = "tritanopia7Filter";
  }
  else if (selectedNumber == 8) {
    frameElement.className = "tritanopia8Filter";
  }
  else if (selectedNumber == 9) {
    frameElement.className = "tritanopia9Filter";
  }
  else {
    frameElement.className = "tritanopia10Filter";
  }
}

function updateAchFilter() {
  if (selectedNumber == 0) {
    frameElement.className = "regularFilter";
  }
  else if (selectedNumber == 1) {
    frameElement.className = "achromatopsia1Filter";
  }
  else if (selectedNumber == 2) {
    frameElement.className = "achromatopsia2Filter";
  }
  else if (selectedNumber == 3) {
    frameElement.className = "achromatopsia3Filter";
  }
  else if (selectedNumber == 4) {
    frameElement.className = "achromatopsia4Filter";
  }
  else if (selectedNumber == 5) {
    frameElement.className = "achromatopsia5Filter";
  }
  else if (selectedNumber == 6) {
    frameElement.className = "achromatopsia6Filter";
  }
  else if (selectedNumber == 7) {
    frameElement.className = "achromatopsia7Filter";
  }
  else if (selectedNumber == 8) {
    frameElement.className = "achromatopsia8Filter";
  }
  else if (selectedNumber == 9) {
    frameElement.className = "achromatopsia9Filter";
  }
  else {
    frameElement.className = "achromatopsia10Filter";
  }
}

function openFullscreen() {
  if (frameElement.requestFullscreen) { //Generic fullscreen request
    frameElement.requestFullscreen();
  } else if (frameElement.webkitRequestFullscreen) { //Safari spefic fullscreen request
    frameElement.webkitRequestFullscreen();
  } else if (frameElement.msRequestFullscreen) { //Internet Explorer 11 spefic fullscreen request
    frameElement.msRequestFullscreen();
  }
}

function loadURL(passedElement) {
  if (passedElement == "textbox") {
    frameElement.src = urlElement.value;
  }
  else {
    const files = Array.from(fileElement.files);
  	const indexFile = files.find((file) => file.name === "index.html");
  	if (indexFile) {
    	const reader = new FileReader();
    	reader.onload = function(e) {
      	frameElement.src = e.target.result;
    	};
    	reader.readAsDataURL(indexFile);
  	}
    else {
      alert("An index.html file is needed");
    }
  } 
}
