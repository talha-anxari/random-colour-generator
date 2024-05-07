const container = document.querySelector(`.container`);
const refreshBtn = document.querySelector(`.refresh-btn`);
const maxPaletteBox = 32;

const getRandomColor = () => {
  container.innerHTML = ''; // Clearing The Container
  for(let i = 0; i < maxPaletteBox; i++){
    // Generator A Random Hex Color Code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, `0`)}`;
    // Create A New `li` Element And Inserting It To The Container
    const color = document.createElement(`li`);
    color.classList.add(`color`);
    color.innerHTML = `<div class="rect-box" style='background: ${randomHex}'></div>
                       <span class="hex-value">${randomHex}</span>`;
    //    Adding The Copy Function To The Color
    color.addEventListener(`click`, () => copyColor(color, randomHex))
    //    Adding The Color To The Container
    container.appendChild(color);
  }
};
getRandomColor();
const copyColor = (elem, hexVal) =>{
  const colorElement = elem.querySelector('.hex-value');
  navigator.clipboard.writeText(hexVal);
  colorElement.innerText = `Copied!`;
  setTimeout(() => {
    colorElement.innerText = hexVal;
  }, 1000).catch(() => alert(`Failed To Copy The Color Code!`));
  //    Adding The Animation To The Color
  elem.classList.add(`animate`);
  setTimeout(() => {
    elem.classList.remove(`animate`);
  }, 1000);
  //    Adding The Animation To The Color

}
refreshBtn.addEventListener(`click`, getRandomColor);
