var Responsive = (function () {

    var self = {};
    var resources = {};
    var breakpoint = 992;

    self.init = function (args) {
        resources = args;
        var version = resources.version;
        var desktop = resources.desktop;
        var mobile = resources.mobile;

        if (head.screen.innerWidth >= breakpoint) {
            $.each(desktop, function(index, resource){
                head.load(resource+ '?' + version);
            });
        }

        if (head.screen.innerWidth < breakpoint) {
            $.each(mobile, function(index, resource){
                head.load(resource + '?' + version);
            });
        }

    };

    window.addEventListener('resize', function() {
        setTimeout( function() {
            self.init(resources);
        }, 500);
    });

    return self;

})();