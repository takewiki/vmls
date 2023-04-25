 $(function () {
            $('.myscroll').myScroll({
                speed: 100, //数值越大，速度越慢
                rowHeight: 20 //li的高度
            });
        });
        $(document).ready(function () {
            var whei = $(window).width()
            $("html").css({ fontSize: whei / 22 });
            $(window).resize(function () {
                var whei = $(window).width();
                $("html").css({ fontSize: whei / 22 })
            });
        });