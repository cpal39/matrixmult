
$(document).ready(function () {
	$("#navLink").click(function () {
		location.reload(true);
	});
	$("form").submit(function (e) {
		e.preventDefault();
		$("#results").empty();
		let result = "";
		let m1 = $("textarea[name='m1']").val();
		let m2 = $("textarea[name='m2']").val();
		if (m1 === undefined || m2 === undefined) {
			result = "Add two matrixes. Come on."
		}
		else {
			m1 = eval(`[${m1}]`);
			m2 = eval(`[${m2}]`);
			if (m1[0].length !== m2.length) {
				result = "The number of columns in matrix 1 must equal the number of rows in matrix 2";
			}
			else {
				result = matrixMult(m1, m2);
				console.log(result);
				let stringRes = "";
				for (let i = 0; i < result.length; i++) {
					//stringRes+=`${JSON.stringify(result[i])}`;
					stringRes += `[${result[i].toString()}]`;
					if (i != result.length - 1) {
						stringRes += "<br>";
					}
				}
				result = stringRes;
			}
		}
		$("#results").append(
			result
		);
	});
});
