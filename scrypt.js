const target = document.querySelector('.target');
        const elements = document.querySelectorAll('.element');
        const note = document.querySelector('.note');

        let isDragging = false;
        let currentElement = null;

        elements.forEach(element => {
            element.addEventListener('mousedown', (e) => {
                isDragging = true;
                currentElement = element;
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging && currentElement) {
                const rect = currentElement.getBoundingClientRect();
                const x = e.clientX - rect.width / 2;
                const y = e.clientY - rect.height / 2;
                currentElement.style.left = `${x}px`;
                currentElement.style.top = `${y}px`;
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (isDragging && currentElement) {
                const targetRect = target.getBoundingClientRect();
                const elementRect = currentElement.getBoundingClientRect();

                if (
                    elementRect.left >= targetRect.left &&
                    elementRect.right <= targetRect.right &&
                    elementRect.top >= targetRect.top &&
                    elementRect.bottom <= targetRect.bottom
                ) {
                    if (currentElement.classList.contains('element1')) {
                        target.style.backgroundColor = currentElement.style.backgroundColor;
                        currentElement.style.display = 'none';
                        note.textContent = `Element1 (${currentElement.style.backgroundColor}) -> Target (${target.style.backgroundColor})`;
                    } else if (currentElement.classList.contains('element2')) {
                        const targetColor = window.getComputedStyle(target).backgroundColor;
                        const elementColor = currentElement.style.backgroundColor;
                        const mixedColor = blendColors(targetColor, elementColor);
                        target.style.backgroundColor = mixedColor;
                        note.textContent = `Element2 (${elementColor}) -> Target (${mixedColor})`;
                    }
                }

                isDragging = false;
                currentElement = null;
            }
        });

        function blendColors(color1, color2) {
            const rgb1 = color1.match(/\d+/g);
            const rgb2 = color2.match(/\d+/g);

            const r = Math.round((parseInt(rgb1[0]) + parseInt(rgb2[0]))) / 2;
            const g = Math.round((parseInt(rgb1[1]) + parseInt(rgb2[1]))) / 2;
            const b = Math.round((parseInt(rgb1[2]) + parseInt(rgb2[2]))) / 2;

            return `rgb(${r}, ${g}, ${b})`;
        }