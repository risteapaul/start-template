/* Created by Paul on 04/04/2015 */
/* for complains or congrats */
/* risteapaul[at]gmail.com */

var Layout = {
    init: function () {
        //default function
        this.loading();
        this.loading("stop", 800);
    },
    loading: function(type, time) {
        var elem = $('.mainloading');
        var delay = 0;
        if (time) {
            delay = time;
        }
        if (type == "stop") {
            setTimeout(function() {
                elem.animate({'opacity': 0}, 500, function(){
                    $(this).hide();
                });
            }, delay);
            return;
        }
        if (type == "start") {
            setTimeout(function() {
                elem.show();
                elem.animate({'opacity': 1}, 500);
            }, delay);
            return;
        }
        $(document).on("click", "a", function(){
            if ($(this).hasClass('no-loader') || $(this).parents().hasClass('no-loader')) {
                return;
            }
            elem.show();
            elem.animate({'opacity': 1}, 500);
            Layout.loading("stop", 6000); //stop anyway after 6 seconds
        });
    }
};

(function ($) {
    $(document).ready(function() {
        Layout.init();
        if(window.console && window.console.log) {
            console.log("<!--js loaded-->");
        }
    });
})(jQuery);