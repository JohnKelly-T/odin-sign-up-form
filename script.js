let root = document.documentElement
let themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
    if (root.classList.contains("light")) {
        root.classList.remove("light");
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
        root.classList.add("light");
    }
})