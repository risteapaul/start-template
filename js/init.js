/* Created by Paul on 04/04/2015 */
/* for complains or congrats */
/* risteapaul[at]gmail.com */

var Layout = (function($) {

    'use strict';

    var output = {};

    output.constants = function (args) {
        output.constants.website = args.website;
        output.constants.txt4mobile = args.txt4mobile;
        output.constants.txt4desktop = args.txt4desktop;
    };

    output.loading = function (type, time) {
        var LoadingElem = $('#mainloading');
        if (!output.loading.init) {
            output.loading.init = true;
            $(document).on("click", "a", function(){
                if ($(this).is("[target]") || $(this).hasClass('no-loader') || $(this).parents().hasClass('no-loader')) {
                    return;
                }
                LoadingElem.show();
                LoadingElem.animate({'opacity': 1}, 500);
                output.loading("stop", 6000); //stop anyway after 6 seconds
            });
        }

        var delay = 0;
        if (time) {
            delay = time;
        }

        switch(type) {
            case "stop" :
                setTimeout(function() {
                    LoadingElem.animate({'opacity': 0}, 500, function(){
                        $(this).hide();
                    });
                }, delay);
                break;

            case "start" :
                setTimeout(function() {
                    LoadingElem.show();
                    LoadingElem.animate({'opacity': 1}, 300);
                }, delay);
        }
    };

    var init = (function () {
        output.loading("stop", 500);

        $(document).ready(function() {
            document.title = output.constants.website;
        });
    })();

    return output;

})(jQuery);
