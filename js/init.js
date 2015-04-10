/* Created by Paul on 04/04/2015 */
/* for complains or congrats */
/* risteapaul[at]gmail.com */

var Layout = {
    variables: {
        a: 'start'
    },
    init: function () {
        var vars = Layout.variables;
        console.log(vars.a);
    }
};

(function ($) {
    Layout.init();
    if(window.console && window.console.log) {
        console.log("all done!");
    }
})(jQuery);