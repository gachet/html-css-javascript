/* global galeria */

$(document).ready(function () {
    'use strict';
    //////////////////////////////
    localStorage.BDFrases = localStorage.BDFrases || JSON.stringify(galeria);
    var t, actual, BDFrases_JsonToValue = JSON.parse(localStorage.BDFrases);
    /////////////////////////////////////////////////////
    
    
    
    function select(i) {
        actual = i;

        $("nav a")
            .removeClass("on off")
            .addClass(function (j) {
                return (j === i) ? "on" : "off";
            });

        $("#persona").html(BDFrases_JsonToValue[i].persona);
        $("#frase").html(BDFrases_JsonToValue[i].frase);
        $("#foto").attr("src", BDFrases_JsonToValue[i].foto);

        clearTimeout(t);
        t = setTimeout(function () {
            select((i + 1) % BDFrases_JsonToValue.length);
        }, 2000);
    }
        //para actualizar la BD de mi localStorage con loa camios hechos
    function Actualizar_BDFrases() {
        console.log('Actualizo!!! mi BDFrases');
            localStorage.BDFrases = JSON.stringify(BDFrases_JsonToValue);
            BDFrases_JsonToValue = JSON.parse(localStorage.BDFrases);
        }
    function Eliminar_BDLOCAL() { //restaura la bd en su estado por defecto en el array galeria
        localStorage.BDFrases = JSON.stringify(galeria);
        BDFrases_JsonToValue = JSON.parse(localStorage.BDFrases);
    }
    function generar_selector() { // regenera la botonera
        var selector = $("#selector");

        selector.html("");

        BDFrases_JsonToValue.forEach(function (elem, i) {
            selector.append("<li><a onClick='select(" + i + ")'></a></li>");
        });
    }

    $(function () {
        Actualizar_BDFrases();
        generar_selector();

        $("#editar").on("click", function () {
            clearTimeout(t);

            $("#persona_d").html(BDFrases_JsonToValue[actual].persona);
            $("#frase_d").html(BDFrases_JsonToValue[actual].frase);
            $("#foto_d").html(BDFrases_JsonToValue[actual].foto);

            $("#datos").css("display", "block");
        });


        $("#nuevo").on("click", function () {
            $("#datos").css("display", "none");

            actual = BDFrases_JsonToValue.push({
                persona: $("#persona_d").html(),
                frase: $("#frase_d").html(),
                foto: $("#foto_d").html()
            }) - 1;
            Actualizar_BDFrases();
            generar_selector();
            select(actual);
        });
        
        $("#guardar").on("click", function () {
            $("#datos").css("display", "none");
            
            BDFrases_JsonToValue[actual].persona = $("#persona_d").html();
            BDFrases_JsonToValue[actual].frase = $("#frase_d").html();
            BDFrases_JsonToValue[actual].foto = $("#foto_d").html();
            
            Actualizar_BDFrases();
            generar_selector();
            select(actual);
            
        });
        $("#borrar").on("click", function () {
            $("#datos").css("display", "none");
            var aux=actual;
            if(aux===0){aux+=1;}
            
            console.log("borrare a " + BDFrases_JsonToValue[actual].persona);
            BDFrases_JsonToValue.splice(actual, aux);
            
            Actualizar_BDFrases();
            generar_selector();
            
            select(0);//para que al borrar la cita actual comienze en el siguiente
            
        });
        $("#dialog-confirm").dialog({
            autoOpen: false,
            show: "blind",
            hide: "explode",
            modal: true,
            buttons: {
                "SI": function () {
                    Eliminar_BDLOCAL();
                    Actualizar_BDFrases();
                    generar_selector();
                    console.log("paso por aqui");
                    select(0);
                  $(this).dialog("close");
                },
                "Cancelar": function () {
                  $(this).dialog("close");
                }
               }
             });
        $("#restaurar").on("click", function () {
            $("#dialog-confirm").dialog("open");
            
        });
        ///////////////////////////
        //////////////
        select(0);
    });


});