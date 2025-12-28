const d = document;
let x = 0, y = 0;



export function moveBall(e, ball, stage) {

    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();
    
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(limitsBall);
    // console.log(limitsStage);


    switch (e.keyCode) {
        case 37:
            if (limitsBall.left > limitsStage.left + 5) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            if (limitsBall.top > limitsStage.top + 5) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            if (limitsBall.right < limitsStage.right - 5) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom - 5) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`alt: ${e.altKey}`);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e);*/

    if (e.altKey && e.key === "a") {
        alert("Has lanzado una alerta desde el teclado");
    }
    else if (e.altKey && e.key === "c") {
        confirm("Has lanzado una confirmación desde el teclado");
    }
    else if (e.altKey && e.key === "p") {
        prompt("Has lanzado un prompt desde el teclado");
    }
}