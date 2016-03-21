/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var num = 0,
        op = "";

    $("#res").on("click",
        function () {
            $("#res").val("");
        }
    );

    $("#mas").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "+";
        }
    );

    $("#menos").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "-";
        }
    );

    $("#multiplicar").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "*";
        }
    );

    $("#dividir").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "/";
        }
    );

    $("#x_y").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "xy";
        }
    );

    $("#x2").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "x2";
        }
    );
    $("#x1").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "x1";
        }
    );
    $("#raiz").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "raiz";
        }
    );
    $("#pE_r").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "pE_r";
        }
    );

    function p_entera(x) {
        var aux;
        (num > 0) ? aux = Math.floor(num) : aux = -Math.ceil(num);
        return aux;
    }
    $("#2_n").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "2_n";
        }
    );
    $("#factorial").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = +$("#res").val(); //
            op = "fact";
        }
    );

    //funcion que calcula el factorial de un numero N recursivamente tomando como definicion que
    // n!= n(n-1)! = n(n-1)(n-2)!
    // y asi sucesivamente hasta llegar a 1!=1;
    function factorial(n) {
        var aux;
            if (n === 1) {
                aux = 1;
            }else{
                aux = factorial(n - 1) * n;
            }
        return aux;
        }
        /////////////////////////////////

    $("#sumatoria").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = $("#res").val(); //
            op = "sumat";
        }
    );

    function sumatoria(array) {
        var acc = 0, i;
        array = num.split(",");
        for (i = 0; i < array.length; i++) {
            acc += +array[i];
        }
        return acc;
    };
    $("#productoria").on("click",
        function () {
            /*var num = $("#n1");
            num.val(num.val() * num.val());*/
            num = $("#res").val(); //
            op = "product";
        }
    );

    function productoria(array) {
        var acc = 1, i;
        array = num.split(",");
        for (i = 0; i < array.length; i++) {
            acc *= +array[i];
        }
        return acc;
    }
    $("#calcular").on("click",
        function () {
            var actual_n = +$("#res").val(), actual = $("#res");
            if (op === "+") {
                actual.val(num + actual_n);
            } else if (op === "-") {
                actual.val(num - actual_n);
            } else if (op === "*") {
                actual.val(num * actual_n);
            } else if (op === "/") {
                actual.val(num / actual_n);
            } else if (op === "xy") {
                actual.val(Math.pow(num, actual_n));
            } else if (op === "x2") {
                actual.val(actual_n * actual_n); // o puede ser actual.val(Math.pow(actual_n,2)); -Creo que seria mas eficiente multiplicarlos por si mismo en ves de llamar a un metodo.
            } else if (op === "x1") {
                actual.val(1 / actual_n);
            } else if (op === "raiz") {
                actual.val(Math.sqrt(actual_n));
            } else if (op === "2_n") {
                actual.val(Math.pow(2, actual_n));
            } else if (op === "fact") {
                actual.val(factorial(actual_n));
            } else if (op === "sumat") {
                actual.val(sumatoria(actual_n));

            } else if (op === "product") {
                actual.val(productoria(actual_n));
            } else if (op === "pE_r") {
                actual.val(p_entera(actual_n));
            }
        }
    );
});