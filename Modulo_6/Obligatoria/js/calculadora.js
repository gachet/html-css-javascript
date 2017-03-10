$(document).ready(function() {

    $("#ToM").on("click",
        function() {
            $("#res").draggable({
                disabled: true
            });
            console.log('0-ToM con->' + 'FromM:' + $("#FromM").html() + ' y ' + $("#ToM").html());

            if ($("#ToM").html() === 'ToM') {

                $("#ToM").html("ToM ▀");
                console.log('1-ToM con->' + 'FromM:' + $("#FromM").html() + ' y ' + $("#ToM").html());
                console.log('pase por tom');
                $("#res").draggable('enable');
                if ($("#origin").html() === '') {
                    $("#origin").html('<div id="res" class="draggable" contenteditable="true"></div>');
                    console.log("res no existe, lo procedo a crear");
                }
                $("#origin div").draggable({
                    appendTo: "body",
                    helper: "clone",
                    revert: "invalid",
                    cursor: "move"
                });

                $("#Memoria ul").droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    accept: ":not(.ui-sortable-helper)",
                    drop: function(event, ui) {
                        $(this).find(".placeholder").remove();
                        $('<li id="T"></li>').text(ui.draggable.text()).css({
                            display: 'inline'
                        }).appendTo(this).addClass('border_gris');

                    },
                    over: function(event, elem) {
                        $(this).addClass("over");
                        $("#res").removeAttr("contenEditable");
                        console.log("overM");
                    },
                    out: function(event, elem) {
                        $(this).removeClass("over");
                        console.log("outM");
                    }
                }).sortable({
                    items: "li:not(.placeholder)",
                    sort: function() {
                        // gets added unintentionally by droppable interacting with sortable
                        // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
                        $(this).removeClass("ui-state-default");
                        $(this).removeClass("over");
                    }
                }).disableSelection();

            } else {
                $("#ToM").html("ToM");
                $("#res").draggable({
                    disabled: true
                });
                console.log('2-ToM con->' + 'FromM:' + $("#FromM").html() + ' y ' + $("#ToM").html());
                $("#res").draggable('disable');
            }

        }
    );

    $("#FromM").on("click",
        function() {
            console.log('0-From con->' + 'FromM:' + $("#FromM").html() + ' y ' + $("#ToM").html());
            if ($("#FromM").html() === 'FromM') {
                console.log('1-From con->' + 'FromM:' + $("#FromM").html() + ' y ' + $("#ToM").html());
                $("#FromM").html('FromM ▀');
                //$("#ToM").trigger("click");
                console.log('pase por from y borre origin');
                $("#origin").html("");
                $("#T").draggable({cursor:"pointer"});
                $("#Memoria ul").draggable({
                    revert: 'invalid',
                    containment: 'window',
                    appendTo: document.body,
                    cursor: "crosshair"
                });

                $("#origin").droppable({
                    activeClass: "#origin",
                    drop: function(event, ui) {
                        console.log('droppFromM a: ' + ui.draggable.text());
                        $(this).html('<div id="res" contentEditable="true" class="draggable">' + ui.draggable.text() + '</div>');
                        ui.draggable.remove();

                    },
                    over: function(event, elem) {
                        $(this).addClass("over");
                        $("#res").attr("contenEditable", "true");
                        console.log('overFromM a:' + elem.draggable.text());
                        
                    },
                    out: function(event, elem) {
                        $(this).removeClass("over");
                        console.log('outFromM a:' + elem.draggable.text());
                        elem.draggable.remove();
                    }

                });
            } else {
                $("#FromM").html('FromM');
                
            }



        }
    );



    /*$(".draggable").draggable({
        cursor: "crosshair",
        revert: "invalid",
        helper: "clone"
    });
    $("#drop").droppable({
        activeClass: ".draggable",
        drop: function(event, ui) {
            console.log("drop1");
            $( this ).find( ".placeholder" ).remove();
      
        $(this).removeClass("border").removeClass("over");
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({
                top: 0,
                left: 0
            }).appendTo(droppedOn);
            $(dropped).text( ui.draggable.text() ).appendTo( this );


        },
        over: function(event, elem) {
            $(this).addClass("over");
            console.log("over");
        },
        out: function(event, elem) {
            $(this).removeClass("over");
            console.log("out");
        }
    });
    $("#drop").sortable();

    $("#origin").droppable({
        activeClass: "input",
        accept: ".draggable",
        drop: function(event, ui) {
            console.log("drop2");
 $(this).removeClass("border").removeClass("over");
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({
                top: 0,
                left: 0
            }).appendTo(droppedOn);


        }
    });*/
});