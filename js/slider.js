$(function(){

	let $sliderComponent=$(".slider-component");
	let $slider=$sliderComponent.find(".slider");
	let $dotsContainer=$sliderComponent.find(".dots-container");
	let i;
	let addDots = "<span class='dots' id="+i+"></span>";
	let dotsId;
	
	let slideCount=$slider.length;

	let currentSlide=1;
	let interval;
	let pause=15000;
	let animationSpeed=1000;

	

	function startSlide(number){
		let dots = $dotsContainer.find(".dots");
		moveToSlide(number);	
		$slider[currentSlide -1].style.display="block";
		dots[currentSlide -1].className +=" active-dot";
	
	}

	function moveToSlide(number){
		let dots = $dotsContainer.find(".dots");
		if(number > slideCount){
			currentSlide=1;
		}
		if(number < 1){
			currentSlide=slideCount;
		}
		for (i = 0; i < slideCount; i++) {
			$slider[i].style.display="none";
			dots[i].className = dots[i].className.replace(" active-dot", "");
		}
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
		$(".dots").click(function(){
			let dots = $dotsContainer.find(".dots");
			let slideId=$(this).attr("id");
			moveToSlide(slideId);
			$slider[slideId -1].style.display="block";
			dots[slideId -1].className +=" active-dot";
		});

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
	//create dots with unique ids

	for (i = 0; i < slideCount; i++) {
		let id= i+1;
		$dotsContainer.append("<span class='dots' id="+id+"></span>");			
	}

	
	startSlide(currentSlide);
	clickToSlide();
	startStopSlider();
	

});