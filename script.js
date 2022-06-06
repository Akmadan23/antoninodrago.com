// setting css file for zero-md
window.ZeroMdConfig = {
    cssUrls: [
        "https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css",
        "css/markdown.css"
    ]
}

function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    // updating visible section only if id is not empty
    if (id) show(id);
}

function show(id) {
    // replacing each zero-md src attribute with the selected section
    for (var item of document.getElementsByClassName("md")) {
        var old_src = item.src.split("/");
        old_src[2] = id + ".md";
        item.src = old_src.join("/");
    }

    // hiding the side menu if visible
    if (document.getElementById("side-menu").className == "in") {
        toggleSideMenu();
    }

    // updating url with id name
    var url = window.location.href.split("#");
    window.location.href = url[0] + "#" + id;
}

function toggleSideMenu() {
    var menu = document.getElementById("side-menu");
    var icon = document.getElementById("icon");

    if (menu.className == "in") {
        menu.className = "out";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    } else {
        menu.className = "in";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
}

function switchLang() {
    var it = document.getElementsByClassName("it");
    var en = document.getElementsByClassName("en");

    for (var i = 0; i < it.length; i++) {
        if (it[i].style.display == "none") {
            en[i].style.display = "none";
            it[i].style.display = "block";
        } else {
            it[i].style.display = "none";
            en[i].style.display = "block";
        }
    }
}
