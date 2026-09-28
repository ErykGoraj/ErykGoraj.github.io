const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


const copyButtons = document.querySelectorAll(".copy");

copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const pre = button.closest("pre");
        const code = pre.querySelector("code");

        await navigator.clipboard.writeText(code.innerText);

        button.textContent = "Copied";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1200);

    });

});


const search = document.querySelector("#search");

search.addEventListener("input", () => {

    const query = search.value.toLowerCase();

    const items = document.querySelectorAll(
        ".sidebar .nav-item, .sidebar .folder"
    );

    items.forEach(item => {

        const text = item.innerText.toLowerCase();

        item.style.display =
            text.includes(query) ? "" : "none";

    });

});
