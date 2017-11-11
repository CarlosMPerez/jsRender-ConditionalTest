var ficha;

$(document).ready(function () {
    pruebaRender();
});

function pruebaRender() {
    ficha = [
        {
            nombreFila : 'Hoyo',
            res1: null,
            res2: null,
            res3: null,
            res4: null,
            res5: null,
            res6: null,
            res7: null,
            res8: null,
            res9: null,
            casilla1 : '1',
            casilla2 : '2',
            casilla3 : '3',
            casilla4 : '4',
            casilla5 : '5',
            casilla6 : '6',
            casilla7 : '7',
            casilla8 : '8',
            casilla9 : '9'
        },
        {
            nombreFila : 'Par',
            res1: null,
            res2: null,
            res3: null,
            res4: null,
            res5: null,
            res6: null,
            res7: null,
            res8: null,
            res9: null,
            casilla1 : 4,
            casilla2 : 3,
            casilla3 : 2,
            casilla4 : 4,
            casilla5 : 5,
            casilla6 : 2,
            casilla7 : 3,
            casilla8 : 3,
            casilla9 : 4
        },
        {
            nombreFila : 'Golpes',
            res1: null,
            res2: null,
            res3: null,
            res4: null,
            res5: null,
            res6: null,
            res7: null,
            res8: null,
            res9: null,
            casilla1 : 3,
            casilla2 : 3,
            casilla3 : 3,
            casilla4 : 2,
            casilla5 : 3,
            casilla6 : 3,
            casilla7 : 3,
            casilla8 : 2,
            casilla9 : 2
        },
    ];

    calculaPajaritos();

    var fichaTemplate = $.templates('#fichaTmpl');
    $('#bodyFicha').html(fichaTemplate.render(ficha));
}

function calculaPajaritos() {
    for (i = 1; i <= 9; i++) {
        var diff = ficha[2]['casilla' + i] - ficha[1]['casilla' + i];
        var res = "";
        switch(diff) {
            case -2:
                res = "Eagle";
                break;
            case -1:
                res = "Birdie";
                break;
            case 0:
                res = "Par";
                break;
            case 1:
                res = "Bogey";
                break;
            case 2:
                res = "DobleBogey";
                break;
            default:
                res = "";
        }
        ficha[2]['res' + i] = res;
    }
}