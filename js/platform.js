$(function () {
    var timer;
    $('.Breathing a').hover(function (e) {
        e.preventDefault();
        $(this).tab('show');
        var self = $(this);
        clearInterval(timer);
        function setIn() {
            self.find('.jty>img').animate({
                "width": "100px",
                "height": "100px"
            }, 500).animate({
                "width": "142px",
                "height": "142px"
            }, 500);
        }

        setIn();
        timer = setInterval(setIn, 1000)

    }, function () {
        clearInterval(timer);
    });

    $('.Breathing a').click(function (e) {
        e.preventDefault();
        window.open($(this).attr('data-href'), '_self');
    });

    function initStart(fn) {
        setTimeout(fn,1000);
        $('a.jkb').animate({
            "top": "0",
            "left": "171px"
        }, 1000);
        $('a.tsb').animate({
            "top": "280px",
            "right": "0"
        }, 1000);
        $('a.ycb').animate({
            "top": "280px",
            "left": "0"
        }, 1000)
    }
    initStart(function(){
        $('.Breathing>div').addClass('guiji');
    });


});

