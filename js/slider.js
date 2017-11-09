$(function(){

	let $sliderComponent=$(".slider-component");
	let $slider=$sliderComponent.find(".slider");
	let $dotsContainer=$sliderComponent.find(".dots-container");
	let addDots = "<span class='dots'></span>";
	
	let slideCount=$slider.length;

	let currentSlide=1;
	let interval;
	let pause=3000;
	let animationSpeed=1000;

	

	function startSlide(number){
		let dots = $dotsContainer.find(".dots");
		if(number > slideCount){
			currentSlide=1;
		}
		if(number < 1){
			currentSlide=slideCount;
		}
		for (let i = 0; i < slideCount; i++) {
			$slider[i].style.display="none";
		}
		$slider[currentSlide -1].style.display="block";

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active-dot", "");
		}
		
		dots[currentSlide -1].className +=" active-dot";
		console.log(dots.length);
		

	}

	interval= setInterval(function(){
		startSlide(currentSlide);
		currentSlide++
	}, pause);


	function clickToSlide(){
		$(".prev").click(function(){
			startSlide(currentSlide +=-1);
		});
		$(".next").click(function(){
			startSlide(currentSlide +=1);
		})
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	function resumeSlider(){
		interval=setInterval(function(){
			startSlide(currentSlide);
			currentSlide++
		}, pause);
	}

	function startStopSlider(){
		$slider.on("mouseenter", pauseSlider).on("mouseleave", resumeSlider);
	}
	//show dots
	//create dots

	for (let i = 0; i < slideCount; i++) {
		$dotsContainer.append(addDots);			
	}

	
	startSlide(currentSlide);
	clickToSlide();
	startStopSlider();
	

});