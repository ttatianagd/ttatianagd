var ColumnFlag = null;
var ColumnFlag2 = null;
var ColumnFlag3 = null;

function flagName(column) {
  console.log(this);
  if (column == 0) {
    document.getElementById("flag").innerHTML = ColumnFlag;
  } else if (column == 1) {
    document.getElementById("flag").innerHTML = ColumnFlag2;
  } else if (column == 2) {
    document.getElementById("flag").innerHTML = ColumnFlag3;
  }
}

function imgChange(box) {
  if (box == "0") {
    document.getElementById("col1").src =
      "https://img5.goodfon.ru/original/1600x900/2/af/romania-romanian-flag-flag-of-romania-flag-romania-large-fla.jpg";
    ColumnFlag = "Romania";
  } else if (box == "1") {
    document.getElementById("col1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png";
    ColumnFlag = "Bulgaria";
  } else if (box == "2") {
    document.getElementById("col1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png";
    ColumnFlag = "Grecia";
  } else if (box == "3") {
    document.getElementById("col1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png";
    ColumnFlag = "Franta";
  } else if (box == "4") {
    document.getElementById("col1").src =
      "https://cdn.britannica.com/10/6210-004-F4DE7D8D/Flag-Moldova.jpg";
    ColumnFlag = "Moldova";
  } else if (box == "5") {
    document.getElementById("col2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png";
    ColumnFlag2 = "China";
  } else if (box == "6") {
    document.getElementById("col2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png";
    ColumnFlag2 = "Germania";
  } else if (box == "7") {
    document.getElementById("col2").src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png";
    ColumnFlag2 = "Rusia";
  } else if (box == "8") {
    document.getElementById("col2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png";
    ColumnFlag2 = "Australia";
  } else if (box == "9") {
    document.getElementById("col2").src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png";
    ColumnFlag2 = "Brazilia";
  } else if (box == "10") {
    document.getElementById("col3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png";
    ColumnFlag3 = "India";
  } else if (box == "11") {
    document.getElementById("col3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png";
    ColumnFlag3 = "Spania";
  } else if (box == "12") {
    document.getElementById("col3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png";
    ColumnFlag3 = "Suedia";
  } else if (box == "13") {
    document.getElementById("col3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png";
    ColumnFlag3 = "Canada";
  } else if (box == "14") {
    document.getElementById("col3").src =
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
    ColumnFlag3 = "Statele Unite ale Americii";
  }
}
var firstCol = document.getElementById("box1");
var secondCol = document.getElementById("box2");
var thirdCol = document.getElementById("box3");
var container = document.getElementById("container");

function getColor() {
  const colors = ["00", "0F", "5F", "AF", "FF"];
  const fisrIndex = getActiveIndex(firstCol);
  console.log(fisrIndex);
  const red = colors[fisrIndex];
  const green = colors[getActiveIndex(secondCol)];
  const blue = colors[getActiveIndex(thirdCol)];
  return `#${red}${green}${blue}`;
}

function resetColors() {
  firstCol.style.borderColor = "transparent";
  secondCol.style.borderColor = "transparent";
  thirdCol.style.borderColor = "transparent";
}

function getActiveIndex(element) {
  let i = 0;
  const inputs = element.getElementsByTagName("input");
  for (i = 0; i < 5; i++) {
    if (inputs.item(i).checked) {
      return i;
    }
  }

  return i < 5 ? i : 0;
}

firstCol.addEventListener("click", () => {
  resetColors();
  firstCol.style.borderColor = getColor();
});
secondCol.addEventListener("click", () => {
  resetColors();
  secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener("click", () => {
  resetColors();
  thirdCol.style.borderColor = getColor();
});

function clearFunc() {
  document.getElementById("col1").src =
    "https://img5.goodfon.ru/original/1600x900/2/af/romania-romanian-flag-flag-of-romania-flag-romania-large-fla.jpg";
  document.getElementById("col2").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png";
  document.getElementById("col3").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png";
  document.getElementById("flag").innerHTML = "Flag";

  const firstCol = document.getElementById("romania");
  const secondCol = document.getElementById("china");
  const thirdCol = document.getElementById("india");

  firstCol.checked = true;
  secondCol.checked = true;
  thirdCol.checked = true;
}
document.getElementById("col1").addEventListener("click", () => {
  flagName(0);
});
document.getElementById("col2").addEventListener("click", () => {
  flagName(1);
});
document.getElementById("col3").addEventListener("click", () => {
  flagName(2);
});
