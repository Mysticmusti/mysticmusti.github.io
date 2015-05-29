var main = function () {
    function Images() {
        if ($(".sscherryblossom").hasClass("selected")) {
            $(".sscherryblossom").fadeOut(3000, function () {
                $(".sscherryblossom").toggleClass('selected');
                $(".sseevee").fadeIn(3000).toggleClass('selected');
            });
        } else if ($(".sseevee").hasClass("selected")) {
            $(".sseevee").fadeOut(3000, function () {
                $(".sseevee").toggleClass('selected');
                $(".ssyugioh").fadeIn(3000).toggleClass('selected');
            });

          } else if ($(".ssyugioh").hasClass("selected")) {
            $(".ssyugioh").fadeOut(3000, function () {
                $(".ssyugioh").toggleClass('selected');
                $(".sscherryblossom").fadeIn(3000).toggleClass('selected');
            });
        };
    }
    setInterval(Images, 5000);
};
$("document").ready(main);