/* script.js 
   Author:
   Date:
*/

function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


$(document).ready(function(){ // begin document.ready block

	//jquery code here

	var waterleng = wateruses.length - 1;

	for (var i=0; i<waterleng; i++) {
		// console.log(wateruses[i].Area)
		$('.labels').append('<p class="region" id="'+wateruses[i].AreaNoSpace+'" numb='+i+'>'+ wateruses[i].Area +'</p>')

	}

	$('.region').click(function(){
		$(".region").css({
			"text-shadow":"none",
			"text-decoration":"none"
		})

		$(this).css({
			"text-shadow":"0px 0px 5px darkgrey",
			"text-decoration":"underline"
		})


		var area_numb = $(this).attr("numb")
		console.log(area_numb)
		var region_name = wateruses[area_numb].Area
		console.log(region_name)
		var region_name_nospace = wateruses[area_numb].AreaNoSpace
		console.log(region_name_nospace)
		var Thousand_Acre_Feet = numberWithCommas(wateruses[area_numb].Thousand_Acre_Feet)
		console.log(Thousand_Acre_Feet)


		$('.map img').attr("src", 'img/' + region_name_nospace + '-01.png')
		$('.responsive iframe').attr("src", 'plots/fig_'+region_name_nospace+'.html')
		
		$('.region-name').html("the " + region_name + " region")
		$('.majority-use').html(wateruses[area_numb].Majority_Use)
		$('.pct-majority-use').html(Math.round(wateruses[area_numb].Pct_Majority_of_total) + "%")
		$('.total-water-use').html(Thousand_Acre_Feet)

		$('.region-name-title').html(region_name)

		$('.chart').show()
	});

	$('.backtoca').click(function(){

		$(".region").css({
			"text-shadow":"none",
			"text-decoration":"none"
		})

		$('.responsive iframe').attr("src", 'plots/fig_California.html')

		$('.region-name').html("California")
		$('.majority-use').html("agriculture")
		$('.pct-majority-use').html("45%")
		$('.total-water-use').html("76,000")

		$('.region-name-title').html("California")

		$('.chart').show()

	});

	$('.x').click(function(){
		$('.chart').hide()
	});

}); //end document.ready block
