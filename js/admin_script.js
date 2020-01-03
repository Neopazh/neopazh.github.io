$(document).ready(function () {

    // Create the grid items
    for (i = 1; i <= 360; i++) {
        $('.parent').append('<div class="day btn btn-primary"  data-toggle="button" aria-pressed="false" id="' + i + '"></div>');
        $('#' + i).append(i);
    }



    // Every reload read cookies and update the clicks
    for (i = 1; i <= 360; i++) {
        if (JSON.parse(localStorage.getItem('state' + i)) == '1') {
            $("#" + i).addClass('done');
            $("#" + i).attr('aria-pressed', 'true');
        }
    }

    jQuery.fn.clickToggle = function (a, b) {
        return this.on("click", function (ev) {
            [b, a][this.$_io ^= 1].call(this, ev)
        })
    };

    // TEST:
    $('.day').clickToggle(function (ev) {
        var i = Number(this.id);
        console.log(i);
        localStorage.setItem('state' + i, JSON.stringify(1));
        $("#" + i).addClass('done');
        $("#" + i).attr('aria-pressed', 'true');
    }, function (ev) {
        var i = Number(this.id);
        console.log(i);
        localStorage.setItem('state' + i, JSON.stringify(0));
        $("#" + i).removeClass('done');
        $("#" + i).attr('aria-pressed', 'false');
    });



    // // Below code will save the state of the clicks for all sessions
    // var tog = ["0", "1"];

    // function will strike the days when clicked
    // $('.day').click(function () {
    // var i = Number(this.id);
    // $("#" + i).
    // localStorage.setItem('state' + i, JSON.stringify(1));
    // $("#" + i).addClass('done');
    // })


})