/**
 * Created by xuesongdu on 21/08/15.
 */
(function($) {

    $.fn.hello2 = function (urls) {

        this.click(function() {

            // jQuery.ajax()

            $.ajax({
                type: 'GET',
                timeout: 3000,
                async: false,
                url: urls,
                jsonpCallback: 'cb',
                contentType: "application/json",
                dataType: 'jsonp',

                success: function (result) {

                    var flag = false;

                    if ($.isEmptyObject(result) == true) {

                        document.getElementById("results").style.display = "block";

                    }

                    else {

                        var total = "";
                        var length = result.length;
                        //alert (length);

                        for (var i = 0; i < length; i++) {
                            var status = result[i].status;

                            var title = result[i].title;

                            var begin = result[i].beganAt;

                            var end = result[i].resolvedAt;

                            var des = result[i].description;

                            var update = result[i].updates;

                            var sum = "";
                            var len = update.length;

                            for (var j = 0; j < len; j++) {
                                var by = update[j].by;

                                var at = update[j].at;

                                var up = update[j].update;

                                var to = "<div class=\"update-template\"><p>" + up + "</p><em>By " + by + " " + at + "</em><hr style=\"width:50%\"/></div>";

                                sum += to;

                            }

                            var tem = "<h3>" + title + " - Begin " + begin + "</h3>" + "<h3>" + title + " - Resolved " + end + "</h3>"
                                + "<p>" + des + "</p><div style=\"padding-left:50px\"><p>Updates:</p>" + sum + "</div><hr/>";

                            total += tem;
                        }
                        $(".issue-template").html(total);

                        document.getElementById("results").style.display = "block";

                        document.getElementById("d").style.display = "none";

                    }

                },

                error: function () {

                    alert("Something happens");
                    document.getElementById("results").style.display = "none";

                }
            });

        });
    }

}(jQuery));