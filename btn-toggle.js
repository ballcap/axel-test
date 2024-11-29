const button = document.getElementById("toggleButton");
const text = document.getElementById("toggleText");

button.addEventListener("click", () => {
    if (text.classList.contains("hidden")) {
        text.classList.remove("hidden");
        button.textContent = "Hide Info";
    } else {
        text.classList.add("hidden");
        button.textContent = "More Info";
    }
});