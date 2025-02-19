        'use strict'
   
        


        // elements.forEach(element => {
        //     element.addEventListener('mousedown', (e) => {
        //         isDragging = true;
        //         currentElement = element;
        //     });
        // });

        // document.addEventListener('mousemove', (e) => {
        //     if (isDragging && currentElement) {
        //         const rect = currentElement.getBoundingClientRect();
        //         const x = e.clientX;
        //         const y = e.clientY;
        //         currentElement.style.left = `${x - 550}px`;
        //         currentElement.style.top = `${y - 220}px`;
        //     }
        // });

        // document.addEventListener('mouseup', (e) => {
        //     if (isDragging && currentElement) {
        //         const targetRect = target.getBoundingClientRect();
        //         const elementRect = currentElement.getBoundingClientRect();

        //         if (
        //             elementRect.left >= targetRect.left &&
        //             elementRect.right <= targetRect.right &&
        //             elementRect.top >= targetRect.top &&
        //             elementRect.bottom <= targetRect.bottom
        //         ) {
        //             if (currentElement.classList.contains('element1')) {
        //                 target.style.backgroundColor = currentElement.style.backgroundColor;
        //                 currentElement.style.display = 'none';
        //                 note.textContent = `Element1 (${currentElement.style.backgroundColor}) -> Target (${target.style.backgroundColor})`;
        //             } else if (currentElement.classList.contains('element2')) {
        //                 const targetColor = window.getComputedStyle(target).backgroundColor;
        //                 const elementColor = currentElement.style.backgroundColor;
        //                 const mixedColor = blendColors(targetColor, elementColor);
        //                 target.style.backgroundColor = mixedColor;
        //                 note.textContent = `Element2 (${elementColor}) -> Target (${mixedColor})`;
        //             }
        //         }

        //         isDragging = false;
        //         currentElement = null;
        //     }
        // });

        // function blendColors(color1, color2) {
        //     const rgb1 = color1.match(/\d+/g);
        //     const rgb2 = color2.match(/\d+/g);

        //     const r = Math.round((parseInt(rgb1[0]) + parseInt(rgb2[0]))) / 2;
        //     const g = Math.round((parseInt(rgb1[1]) + parseInt(rgb2[1]))) / 2;
        //     const b = Math.round((parseInt(rgb1[2]) + parseInt(rgb2[2]))) / 2;

        //     return `rgb(${r}, ${g}, ${b})`;
        // }


        
        // elements.forEach(element => {
        //     element.addEventListener('mousedown', (e) => {
        //         isDragging = true;
        //         currentElement = element;
        //     });
        // });

        // currentElement.addEventListener('mousedown', (event) =>{ // (1) отследить нажатие
    
        //     // (2) подготовить к перемещению:
        //     // разместить поверх остального содержимого и в абсолютных координатах
        //     currentElement.style.position = 'absolute';
        //     currentElement.style.zIndex = 1000;
        //     // переместим в body, чтобы мяч был точно не внутри position:relative
        //     document.body.append(currentElement);
        //     // и установим абсолютно спозиционированный мяч под курсор
          
        //     moveAt(event.pageX, event.pageY);
          
        //     // передвинуть мяч под координаты курсора
        //     // и сдвинуть на половину ширины/высоты для центрирования
        //     function moveAt(pageX, pageY) {
        //         currentElement.style.left = `${pageX - currentElement.offsetWidth / 2} px`;
        //         currentElement.style.top = `${pageY - currentElement.offsetHeight / 2}  px`;
        //     }
          
        //     function onMouseMove(event) {
        //       moveAt(event.pageX, event.pageY);
        //     }
          
        //     // (3) перемещать по экрану
        //     document.addEventListener('mousemove', onMouseMove);
          
        //     // (4) положить мяч, удалить более ненужные обработчики событий
        //     currentElement.onmouseup = function() {
        //       document.removeEventListener('mousemove', onMouseMove);
        //       currentElement.onmouseup = null;
        //     };
          
        //   });   
        
        

        const target = document.getElementById('target');
        const elements = document.querySelectorAll('.element');
        const note = document.querySelector('.note');
        let currentElement = null;
        let bg = null;
        
elements.forEach((elem) => {
        elem.addEventListener("dragstart", dragstart);
        elem.addEventListener("dragend", dragend);
});


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
        target.style.backgroundColor = bg.backgroundColor;
  }
  else
  {
        target.style.backgroundColor = blendColors(target.style.backgroundColor, bg.backgroundColor); 
  }
  
  currentElement.style.display = 'none';
}

        function blendColors(color1, color2) {
            const rgb1 = color1.match(/\d+/g);
            const rgb2 = color2.match(/\d+/g);

            const r = Math.round((parseInt(rgb1[0]) + parseInt(rgb2[0]))) / 2;
            const g = Math.round((parseInt(rgb1[1]) + parseInt(rgb2[1]))) / 2;
            const b = Math.round((parseInt(rgb1[2]) + parseInt(rgb2[2]))) / 2;

            return `rgb(${r}, ${g}, ${b})`;
        }