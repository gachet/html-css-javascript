/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var num = 0,
        op = "";
    
    
    $("#res").on("click",
        function () {
            $("#res").html("");
        }
    );

    $("#mas").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            num = +$("#res").html(); //
            op = "+";
        }
    );

    $("#menos").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            num = +$("#res").html(); //
            op = "-";
        }
    );

    $("#multiplicar").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            num = +$("#res").html(); //
            op = "*";
        }
    );

    $("#dividir").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            num = +$("#res").html(); //
            op = "/";
        }
    );

    $("#x_y").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            num = +$("#res").html(); //
            op = "xy";
        }
    );

    $("#x2").on("click",
        function () {
            $("#res").html(+$("#res").html()* +$("#res").html());
            op = "x2";
        }
    );
    $("#x1").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            $("#res").html(1/ +$("#res").html()); //
        }
    );
    $("#raiz").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            $("#res").html(Math.sqrt(+$("#res").html()));
        }
    );
    $("#pE_r").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            $("#res").html(p_entera(+$("#res").html()));
        }
    );

    function p_entera(x) {
        var aux;
        (x > 0) ? aux = Math.floor(x) : aux = -Math.ceil(x);
        return aux;
    }
    $("#2_n").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            $("#res").html(Math.pow(2, +$("#res").html())); //
        }
    );
    $("#factorial").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            +$("#res").html(factorial(+$("#res").html())); //
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
            num.html(num.html() * num.html());*/
            $("#res").html(sumatoria($("#res").html().split(","))); //
        }
    );

    function sumatoria(array) {
        var acc = 0, i;
        for (i = 0; i < array.length; i++) {
            acc += +array[i];
        }
        return acc;
    }
    $("#productoria").on("click",
        function () {
            /*var num = $("#n1");
            num.html(num.html() * num.html());*/
            $("#res").html(productoria($("#res").html().split(","))); //
        }
    );

    function productoria(array) {
        var acc = 1, i;
        for (i = 0; i < array.length; i++) {
            acc *= +array[i];
        }
        return acc;
    }
    $("#calcular").on("click",
        function () {
            var actual_n = +$("#res").html(), actual = $("#res");
            if (op === "+") {
                actual.html(num + actual_n);
            } else if (op === "-") {
                actual.html(num - actual_n);
            } else if (op === "*") {
                actual.html(num * actual_n);
            } else if (op === "/") {
                actual.html(num / actual_n);
            } else if (op === "xy") {
                actual.html(Math.pow(num, actual_n));
            }/* else if (op === "x2") {
                actual.html(actual_n * actual_n); // o puede ser actual.html(Math.pow(actual_n,2)); -Creo que seria mas eficiente multiplicarlos por si mismo en ves de llamar a un metodo.
            } else if (op === "x1") {
                actual.html(1 / actual_n);
            } else if (op === "raiz") {
                actual.html(Math.sqrt(actual_n));
            } else if (op === "2_n") {
                actual.html(Math.pow(2, actual_n));
            } else if (op === "fact") {
                actual.html(factorial(actual_n));
            } else if (op === "sumat") {
                actual.html(sumatoria(actual_n));
            } else if (op === "product") {
                actual.html(productoria(actual_n));
            } else if (op === "pE_r") {
                actual.html(p_entera(actual_n));
            }*/
        }
    );
});