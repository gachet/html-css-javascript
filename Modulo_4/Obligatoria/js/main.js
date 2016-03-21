var num, acc = 0,
    op = "";

function mas() {
    "use strict";
    acc = num.value;
    op = "+";
}

function menos() {
    "use strict";
    acc = num.value;
    op = "-";
}

function multiplicar() {
    "use strict";
    acc = num.value;
    op = "*";
}
function dividir() {
    "use strict";
    acc = num.value;
    op = "/";
}
function x_y() {
    "use strict";
    acc = num.value;
    op = "xy";
}
function x2() {
    "use strict";
    acc = num.value;
    op = "x2";
}
function x1() {
    "use strict";
    acc = num.value;
    op = "_1x";
}
function raiz() {
    "use strict";
    acc = num.value;
    op = "sqrt";
}
function parte_entera() {
    "use strict";
    acc = num.value;
    op = "_pEntera";
}

function calcular() {
    "use strict";
    if (op === "+") {
        num.value = (+acc + (+num.value));
    }
    if (op === "-") {
        num.value = (+acc - (+num.value));
    }
    if (op === "*") {
        num.value = (+acc * (+num.value));
    }
    if (op === "/") {
        num.value = (+acc / (+num.value));
    }
    if (op === "xy") {
        num.value = Math.pow(+acc, +num.value);
    }
    if (op === "x2") {
        num.value = Math.pow(+acc, 2);
    }
    if (op === "_1x") {
        num.value = 1 / (+acc);
    }
    if (op === "sqrt") {
        num.value = Math.sqrt(+acc);
    }
    if (op === "_pEntera") {
        (acc > 0) ? (num.value = Math.floor(+acc)) : (num.value = -Math.ceil(+acc));
    }
}

function inic() {
    "use strict";
    num = document.getElementById("num");
}

function vaciar() {
    "use strict";
    num.value = "";
}

