function createDiv(num) {
    const container = document.getElementById('container');
    const squareSize = 16;
    container.style.width = `${num * squareSize}px`
    container.style.height = `${num * squareSize}px`
    container.innerHTML = '';
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
                  div.addEventListener('mouseenter', () => {
            div.classList.add('active');
          });
        // document.body.appendChild(div);
        container.appendChild(div);
    }

}

const btn = document.getElementById('sqr-size-btn');

btn.onclick = () => {
    const input = prompt("Enter grid side size:")
    if (!input) {
        alert("You entered no value!")
    }else if (input > 100) {
        alert("Limit is 100!")
    }

    createDiv(input);
}

// createDiv(16);