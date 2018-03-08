var scaling = 1.50;
//count
var showCount = 5;
var currentSliderCount = showCount;
var controlsWidth = 40;
var scollWidth = 0;
    

$(document).ready(function(){
    //$('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container');
    init(showCount);
    
});
$( window ).resize(function() {
    init(showCount);
});
function init(showCount){
    // elements
    var win = $(window);
    var sliderFrame = $(".slider-frame");
    var sliderFrame2 = $(".slider-frame2");
    var sliderFrames = $(".slider-frames");
    var sliderContainer = $(".slider-container");
    var sliderContainer2 = $(".slider-container2");
    var sliderContainers = $(".slider-containers");
    var slide = $(".slide");
    var slidee = $(".slidee");
    var slides = $(".slides");
    
    //counts
    var scollWidth = 0;
 
    
    //sizes
    var windowWidth = win.width();
    var frameWidth = win.width() - 300;
     if(windowWidth >= 0 && windowWidth <= 414){
       showCount = 2;
   }else if(windowWidth >= 414 &&  windowWidth <= 768){
       showCount = 3;
   }else{
       showCount = 5;
   }
    var videoWidth = ((windowWidth - controlsWidth * 2) / (showCount+1) );
    var videoHeight = Math.round(videoWidth / (16/9));
    
    var videoWidthDiff = (videoWidth * scaling) - videoWidth;
    var videoHeightDiff = (videoHeight * scaling) - videoHeight;
    
  
    
    //set sizes
    sliderFrame.width(frameWidth);
    sliderFrame.height(videoHeight * scaling + 28);
    
    sliderFrames.width(frameWidth);
    sliderFrames.height(videoHeight * scaling + 78);
    // sliderFrame.css("margin-left", '50px');
    // sliderFrame.css("margin-right", '90px');
    
    
    //sliderFrame.css("top", (videoHeightDiff / 2));
    
    sliderContainer.height(videoHeight * scaling);
    sliderContainer.width((videoWidth * 45) + videoWidthDiff);
    sliderContainer.css("top", (videoHeightDiff / 2));
    
    sliderContainers.height(videoHeight * scaling+50);
    sliderContainers.width((videoWidth * 45) + videoWidthDiff);
    sliderContainers.css("top", (videoHeightDiff / 2));
    // sliderContainer.css("margin-left", (controlsWidth));

    slide.height(videoHeight);
    slide.width(videoWidth);
    
    slides.height(videoHeight+50);
    slides.width(videoWidth);
    

    var videoWidth2 = ((windowWidth-400 - controlsWidth * 2) / (showCount+1) );
    var videoHeight2 = Math.round(videoWidth2 / (16/9));
    
    var videoWidth2Diff = (videoWidth2 * scaling) - videoWidth2;
    var videoHeight2Diff = (videoHeight2 * scaling) - videoHeight2;
    
    //set sizes
    sliderFrame2.width(frameWidth-300);
    sliderFrame2.height(videoHeight2 * scaling + 28);

    sliderContainer2.height(videoHeight2 * scaling);
    sliderContainer2.width((videoWidth2 * 45) + videoWidth2Diff);
    sliderContainer2.css("top", (videoHeight2Diff / 2));
    // sliderContainer2.css("margin-left", (controlsWidth));
    
    slidee.height(videoHeight2);
    slidee.width(videoWidth2);
    
    //hover effect
    $(".slide").mouseover(function() {
        $(this).css("width", videoWidth * scaling);
        $(this).css("height", videoHeight * scaling);
        $(this).css("top", -(videoHeightDiff / 2));
        $(this).css("z-index", 200);
        // if($(".slide").index($(this)) == 0){
        //   // do nothing
        //   var slidercontainer = $(this)
        //   slidercontainer.animate({
        //         left: + 40
        //     }, 10)
        // }
        // if($(".slide").index($(this)) > 0 && $(".slide").index($(this)) % 4 == 0){
        //   // do nothing
        //   var slidercontainer = $(this)
        //   slidercontainer.animate({
        //         left: - 120
        //     }, 10);
        // }
        
    }).mouseout(function() {
        $(this).css("width", videoWidth * 1);
        $(this).css("height", videoHeight * 1);
        $(this).css("top", 0);
        $(this).css("z-index", 0);
        // if($(".slide").index($(this)) == 0){
        //   // do nothing
        //   var slidercontainer = $(this)
        //   slidercontainer.animate({
        //         left: - 0
        //     }, 10);
        // }
        // if($(".slide").index($(this)) > 0 && $(".slide").index($(this)) % 4 == 0){
        //   // do nothing
        //   var slidercontainer = $(this)
        //   slidercontainer.animate({
        //         left: + 0
        //     }, 10);
        // }
    });
    
    $(".slidee").mouseover(function() {
        $(this).css("width", videoWidth2 * scaling);
        $(this).css("height", videoHeight2 * scaling);
        $(this).css("top", -(videoHeight2Diff / 2));
        $(this).css("z-index", 200);
        if($(".slidee").index($(this)) == 0){
          // do nothing
          var slidercontainer = $(this)
          slidercontainer.animate({
                left: + 40
            }, 10)
        }
        
    }).mouseout(function() {
        $(this).css("width", videoWidth2);
        $(this).css("height", videoHeight2);
        $(this).css("top", 0);
        $(this).css("z-index", 0);
        if($(".slidee").index($(this)) == 0){
          // do nothing
          var slidercontainer = $(this)
          slidercontainer.animate({
                left: - 0
            }, 10);
        }
    });

    // controls
    controls(frameWidth, scollWidth, showCount);
}

function controls(frameWidth, scollWidth, showCount){
    var prev = $(".prev");  
    var next = $(".next");
    var prevv = $(".prevv");
    var nextt = $(".nextt");
    var prevs = $(".prevs");
    var nexts = $(".nexts");

    next.on("click", function(){
        var slidercontainer = $(this).next(".slider-container");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        if(currentSliderCount<videoCount-1){
            scollWidth = scollWidth + frameWidth;
            slidercontainer.animate({
                left: - scollWidth
            }, 150, function(){ 
                console.log(currentSliderCount);
                console.log(videoCount);
                if(currentSliderCount >= videoCount){
                    slidercontainer.css("left", 0);
                    currentSliderCount = showCount;
                    scollWidth = 0;
                }else{
                    currentSliderCount+=showCount;
                }
            });
        }
    });

    prev.on("click", function(){
        var slidercontainer = $(this).next().next(".slider-container");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        console.log(currentSliderCount)
        console.log(videoCount)
        if(currentSliderCount<=showCount){
            prev.display = 'none';
        }else{

            prev.display = 'block';
            scollWidth = (scollWidth - frameWidth);
            slidercontainer.animate({
                left: - scollWidth
            }, 150, function(){ 
                currentSliderCount-=showCount;
            });
        }
        slidercontainer.css("left", scollWidth);
    });

    nexts.on("click", function(){
        var slidercontainer = $(this).next(".slider-containers");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        if(currentSliderCount<videoCount-1){
            scollWidth = scollWidth + frameWidth;
            slidercontainer.animate({
                left: - scollWidth
            }, 150, function(){ 
                console.log(currentSliderCount);
                console.log(videoCount);
                if(currentSliderCount >= videoCount){
                    slidercontainer.css("left", 0);
                    currentSliderCount = showCount;
                    scollWidth = 0;
                }else{
                    currentSliderCount+=showCount;
                }
            });
        }
    });

    prevs.on("click", function(){
        var slidercontainer = $(this).next().next(".slider-containers");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        console.log(currentSliderCount)
        console.log(videoCount)
        if(currentSliderCount<=showCount){
            prev.display = 'none';
        }else{

            prev.display = 'block';
            scollWidth = (scollWidth - frameWidth);
            slidercontainer.animate({
                left: - scollWidth
            }, 150, function(){ 
                currentSliderCount-=showCount;
            });
        }
        slidercontainer.css("left", scollWidth);
    });

    nextt.on("click", function(){
        var slidercontainer = $(this).next(".slider-container2");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        if(currentSliderCount<videoCount-1){
            scollWidth = scollWidth + frameWidth-320;
            slidercontainer.animate({
                left: - scollWidth
            }, 50, function(){ 
                console.log(currentSliderCount);
                console.log(videoCount);
                if(currentSliderCount >= videoCount){
                    slidercontainer.css("left", 0);
                    currentSliderCount = showCount;
                    scollWidth = 0;
                }else{
                    currentSliderCount+=showCount;
                }
            });
        }
    });

    prevv.on("click", function(){
        var slidercontainer = $(this).next().next(".slider-container2");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        console.log(currentSliderCount)
        console.log(videoCount)
        if(currentSliderCount<=showCount){
            prev.display = 'none';
        }else{

            prev.display = 'block';
            scollWidth = (scollWidth - frameWidth)+320;
            slidercontainer.animate({
                left: - scollWidth
            }, 50, function(){ 
                currentSliderCount-=showCount;
            });
        }
        slidercontainer.css("left", scollWidth);
    });
};