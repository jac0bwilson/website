window.onload = function() {
    const btn = document.getElementById("dark-mode-toggle");
    const icon = document.getElementById("dark-mode-icon");

    if (btn) {
        btn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            icon.classList.toggle("fa-moon")
            icon.classList.toggle("fa-sun")
        });
    }
}