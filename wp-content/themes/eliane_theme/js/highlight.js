$(function(){

    $("#highlight").slideLp({
        effects: "fade",
		auto: false,
	    timeSlide: 1,
	    timeDelayIn: 1,
	    timeDelayOut: 1,
	    paginationCounter: false,
	    barCounter: false,
	    timerClock: false,
	    pagination: false,
	    navButtons: true,
	    prevName: "anterior",
	    nextName: "próximo",
	    keyboard: false,
	    touch: false,
	    responsive: false
    });

    function galleryRezise(){
		var windowHeight = $( window ).height();
   		$("#highlight").height(windowHeight);
   		$(".img_table").height(windowHeight-100);
    }
    galleryRezise();
	$( window ).resize(function() {
		galleryRezise();
	});
});