/*Nina Kong*/

function followPopUp() {
	"use strict";
	$("#follow").show();
}

$(document).ready(function () {
	"use strict";
	$("#follow").hide();
	setTimeout(followPopUp,3000);
});
