        'use strict'
   
        
        const target = document.getElementById('target');
        const elements = document.querySelectorAll('.element');
        const note = document.querySelector('.note');
        let currentElement = null;
        let bg = null;
        let score = 0;

        elements.forEach(elem => {
            elem.addEventListener('mousedown', (e) => {
                bg = getComputedStyle(elem);
                currentElement = elem;
            });
        });


  target.addEventListener("dragover", dragover);
  target.addEventListener("drop", drop);


function dragover(e) {
  e.preventDefault();
}

function drop(e) {
  target.append(currentElement);
  if(target.style.backgroundColor == 0)
  {
        score++;
        currentElement.style.display = 'none';
        target.style.backgroundColor = bg.backgroundColor;
        note.textContent = `Element${score} (${currentElement.style.backgroundColor}) -> Target (${target.style.backgroundColor})`;
  }
  else
  {
        score++;
        currentElement.style.display = 'none';
        target.style.backgroundColor = blendColors(target.style.backgroundColor, bg.backgroundColor); 
        note.textContent = `Element${score} (${currentElement.style.backgroundColor}) -> Target (${target.style.backgroundColor})`;
  }
  

}

function blendColors(color1, color2) {
        const rgb1 = color1.match(/\d+/g);
        const rgb2 = color2.match(/\d+/g);

        const r = Math.round((parseInt(rgb1[0]) + parseInt(rgb2[0]))) / 2;
        const g = Math.round((parseInt(rgb1[1]) + parseInt(rgb2[1]))) / 2;
        const b = Math.round((parseInt(rgb1[2]) + parseInt(rgb2[2]))) / 2;

        return `rgb(${r}, ${g}, ${b})`;
}