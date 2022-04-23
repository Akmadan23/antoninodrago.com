function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    if (id) show(id);
    else show("home");
}

function show(id) {
    var x = document.getElementsByClassName("main");
    var menu = document.getElementById("side-menu");

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";

    if (menu.className == "in") {
        toggleSideMenu();
    }

    var url = window.location.href.split("#");
    window.location.href = url[0] + "#" + id;
}

function toggleSideMenu(icon) {
    var menu = document.getElementById("side-menu");
    var icon = document.getElementById("icon");

    if (menu.className == "in") {
        menu.className = "out";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

    else {
        menu.className = "in";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
}

function switchLang() {
    var it = document.getElementsByClassName("it");
    var en = document.getElementsByClassName("en");
    var x = Math.max(it.length, en.length);

    for (var i = 0; i < x; i++) {
        if (it[i].style.display == "none") {
            en[i].style.display = "none";
            it[i].style.display = "block";
        }

        else {
            it[i].style.display = "none";
            en[i].style.display = "block";
        }
    }
}
