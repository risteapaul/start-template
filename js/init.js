/* Created by Paul on 04/04/2015 */
/* for complains or congrats */
/* risteapaul[at]gmail.com */

var Layout = {
    init: function () {
        //default function
        this.loading("stop", 1000);
    },
    loading: function(type, time) {
        $(document).on("click", "a", function(){
            if ($(this).hasClass('no-loader')) {
                return;
            }
            $('.mainloading').show();
            setTimeout(function(){
                $('.mainloading').hide();
            }, 6000);
        });
        var delay = 0;
        if (time) {
            delay = time;
        }
        if (type == "stop") {
            setTimeout(function() {
                $('.mainloading').hide();
            }, delay);
        }
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