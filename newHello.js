/**
 * Created by xuesongdu on 21/08/15.
 */

(function($) {

    $.fn.helloWorld = function() {

        this.each( function() {

            $(this).text("Hello, World!");

        });

    }

}(jQuery));