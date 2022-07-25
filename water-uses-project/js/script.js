/* script.js 
   Author:
   Date:
*/
questions = [{"q":"q1","qtext":"What is the current state of water and drought in California right now?","time":"3"},
{"q":"q2","qtext":"How do water sources vary throughout the state?","time":"80"},
{"q":"q3","qtext":"How does water use vary throughout the state?","time":"150"},
{"q":"q4","qtext":"What is the difference between managed and unmanaged water use?","time":"257"},
{"q":"q5","qtext":"How do water conservation efforts vary in different regions?","time":"547"},
{"q":"q6","qtext":"What are some of the ways that the state is trying to conserve water?","time":"427"},
{"q":"q7","qtext":"Why are so many conservation efforts centered around urban water use if, in much of the state, agricultural water use makes up the majority of uses?","time":"525"},
{"q":"q8","qtext":"Why do water districts put emphasis on conserving outdoor water in urban/residential sectors in particular?","time":"615"},
{"q":"q9","qtext":"What are some of the ways water conservation is possible in other sectors?","time":"676"},
{"q":"q10","qtext":"Are there any plans to retrofit reservoirs and dams to make thhem as drought resistant as possible?","time":"733"},
{"q":"q11","qtext":"What about desalination plants?","time":"885"},
{"q":"q12","qtext":"Are there ways to make desalination plants cheaper to run?","time":"995"},
{"q":"q13","qtext":"Why have water conservation numbers been low so far?","time":"1066"},
{"q":"q14","qtext":"Is Governor Newsom's 15% water conservation goal possible? If so, when do you think we might reach it?","time":"1149"}]

links = [{"id":"01","caption":"LATEST NEWS","link":"https://abc7.com/watercrisis/"},
{"id":"02","caption":"WHAT TO KNOW ABOUT CA'S WATER EMERGENCY","link":"https://abc7.com/water-restrictions-in-california-2022-rationing-drought-eyewitness-newsmakers/11846791/"},
{"id":"03","caption":"DROUGHT MAPS","link":"https://abcotvdata.github.io/drought-maps/la_drought_map.html"},
{"id":"04","caption":"WATER CONSERVATION REPORTS","link":"https://www.waterboards.ca.gov/water_issues/programs/conservation_portal/conservation_reporting.html"},
{"id":"05","caption":"WATER SAVING TIPS","link":"https://saveourwater.com/en/How-to-Save-Water/Around-the-House"},
{"id":"06","caption":"CURRENT WATER SUPPLY CONDITIONS","link":"https://cww.water.ca.gov/info?address=Los%20Angeles,%20CA,%20USA"}
]


$(document).ready(function(){ // begin document.ready block


	//jquery code here

	$(".text1").waypoint(function(dir){
		if (dir=="down") {
			$(".map1").fadeIn()
		} if (dir=="up") {
			$(".map1").fadeOut()
		}
	});

	$(".text2").waypoint(function(dir){
		if (dir=="down") {
			$(".map2").fadeIn()
			$(".map1").fadeOut()
		} if (dir=="up") {
			$(".map2").fadeOut()
			$(".map1").fadeIn()
		}
	});

	$(".text3").waypoint(function(dir){
		if (dir=="down") {
			$(".map3").fadeIn()
			$(".map2").fadeOut()
		} if (dir=="up") {
			$(".map3").fadeOut()
			$(".map2").fadeIn()
		}
	});

	$(".text4").waypoint(function(dir){
		if (dir=="down") {
			$(".map4").fadeIn()
			$(".map3").fadeOut()
		} if (dir=="up") {
			$(".map4").fadeOut()
			$(".map3").fadeIn()
		}
	});

	$(".text5").waypoint(function(dir){
		if (dir=="down") {
			$(".map5").fadeIn()
			$(".map4").fadeOut()
		} if (dir=="up") {
			$(".map5").fadeOut()
			$(".map4").fadeIn()
		}
	});

	$(".text6").waypoint(function(dir){
		if (dir=="down") {
			$(".map6").fadeIn()
			$(".map5").fadeOut()
		} if (dir=="up") {
			$(".map6").fadeOut()
			$(".map5").fadeIn()
		}
	});

	$(".text7").waypoint(function(dir){
		if (dir=="down") {
			$(".map7").fadeIn()
			$(".map6").fadeOut()
		} if (dir=="up") {
			$(".map7").fadeOut()
			$(".map6").fadeIn()
		}
	});

	// $(".dropdown").click(function(){
	// 	var vid = document.getElementById("qandavid");
	// 	vid.currentTime = 5;
	// 	$('#qandavid').get(0).play()
	// });

	var qleng = questions.length;

	for (var i=0; i<qleng; i++) {
		console.log(questions[i].qtext)
		$('.countydrop').append('<p class="question" id='+questions[i].q+' numb='+i+'>'+ questions[i].qtext +'</p>')

	}

	$('.question').click(function(){
		var q_numb = $(this).attr("numb")
		console.log(q_numb)
		var vidtime = Number(questions[q_numb].time)
		console.log(vidtime)

		var vid = document.getElementById("qandavid");

	 	vid.currentTime = vidtime;
	 	
	 	$('#qandavid').get(0).play()

		$('#myDropdown').removeClass('show')
	});

	var linkleng = links.length

	for (var i=0; i<linkleng; i++) {

		$('.contentcontainer').append('<a href="'+links[i].link+'" target="_blank"><div class="photobox"><img src="img/thumb'+links[i].id+'.jpg"><div class="caption caption'+links[i].id+'"><p>'+links[i].caption+'</p></div></div></a>');
	
	}

}); //end document.ready block

function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	}

	function filterFunction() {
	  var input, filter, ul, li, a, i;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  div = document.getElementById("myDropdown");
	  p = div.getElementsByTagName("p");
	  for (i = 0; i < p.length; i++) {
	    txtValue = p[i].textContent || p[i].innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      p[i].style.display = "";
	    } else {
	      p[i].style.display = "none";
	    }
	  }
	}
