const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
console.log(smallCups);

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
function highlightCups(idx) {
  console.log(idx);
  //console the idx of the cup clicked
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx3) => {
    if (idx3 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length; //always 8

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    //330 is the height of large cup
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if(fullCups===totalCups){
    remained.style.visibility='hidden'
    remained.style.height=0
  } else {
    remained.style.visibility='visible'
    liters.innerText=`${2-(250*fullCups/1000)}L`
  }
}
