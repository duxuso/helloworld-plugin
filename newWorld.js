/**
 * Created by xuesongdu on 21/08/15.
 */

(function($) {

    $.fn.hello2 = function (customText) {

        this.click(function() {

            $(this).text(customText);

        });

    }

}(jQuery));