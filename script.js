function start() {
    var url = new URL(window.location.href);
    var id = url.hash.replace("#", "");

    if (id) show(id);
    else show("home");
}

function show(id) {
    var x = document.getElementsByClassName("main");

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
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
