const d = document,
    w = window;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            tester = w.open($form.direccion.value, "tester", `width=${$form.ancho.value}, height=${$form.alto.value}`);
        }
    });
    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) {
            tester.close()
            console.log("Cerrado");
        };
    });
}