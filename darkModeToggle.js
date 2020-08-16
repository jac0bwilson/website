window.onload = function() {
    const btn = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("dark-mode-icon");
    const darkClass = "dark-mode";
    
    function toggleTheme() {
        document.body.classList.toggle(darkClass);
        icon.classList.toggle("fa-moon")
        icon.classList.toggle("fa-sun")

        localStorage.setItem(darkClass, document.body.classList.contains(darkClass));
    }

    if (localStorage.getItem(darkClass) == "true") {
        toggleTheme();
    }

    if (btn) {
        btn.addEventListener("click", toggleTheme);
    }
}