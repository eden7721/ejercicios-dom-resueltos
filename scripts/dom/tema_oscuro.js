const d = document;
const ls = localStorage;
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");


    let moon = "🌙",
        sun = "☀️";

    const lightTheme = () => {
        $selectors.forEach(i => {
            i.classList.remove(classDark);
        })
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    }
    const darkTheme = () => {
        $selectors.forEach(i => {
            i.classList.add(classDark);
        });
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", e => {

        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkTheme();
            }
            else {
                lightTheme();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if(ls.getItem("theme" === null)) ls.setItem("theme", "light");
        if(ls.getItem("theme") === "light") lightTheme();
        if(ls.getItem("theme") === "dark") darkTheme();
    });

}