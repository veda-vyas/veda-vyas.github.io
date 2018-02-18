var scaling = 1.50;
//count
var showCount = 5;
var currentSliderCount = showCount;
var controlsWidth = 40;
var scollWidth = 0;
    

$(document).ready(function(){
    //$('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container');
    init();
    
});
$( window ).resize(function() {
    init();
});
function init(){
    // elements
    var win = $(window);
    var sliderFrame = $(".slider-frame");
    var sliderContainer = $(".slider-container");
    var slide = $(".slide");
    
    //counts
    var scollWidth = 0;
 
    
    //sizes
    var windowWidth = win.width();
    var frameWidth = win.width() - 80;
     if(windowWidth >= 0 && windowWidth <= 414){
       showCount = 2;
   }else if(windowWidth >= 414 &&  windowWidth <= 768){
       showCount = 3;
   }else{
       showCount = 5;
   }
    var videoWidth = ((windowWidth - controlsWidth * 2) / showCount );
    var videoHeight = Math.round(videoWidth / (16/9));
    
    var videoWidthDiff = (videoWidth * scaling) - videoWidth;
    var videoHeightDiff = (videoHeight * scaling) - videoHeight;
    
  
    
    //set sizes
    sliderFrame.width(windowWidth);
    sliderFrame.height(videoHeight * scaling + 28);
    
    
    //sliderFrame.css("top", (videoHeightDiff / 2));
    
    sliderContainer.height(videoHeight * scaling);
    sliderContainer.width((videoWidth * 45) + videoWidthDiff);
    sliderContainer.css("top", (videoHeightDiff / 2));
    sliderContainer.css("margin-left", (controlsWidth));
    
    slide.height(videoHeight);
    slide.width(videoWidth);
    
    //hover effect
    $(".slide").mouseover(function() {
        $(this).css("width", videoWidth * scaling);
        $(this).css("height", videoHeight * scaling);
        $(this).css("top", -(videoHeightDiff / 2));
        $(this).css("z-index", 200);
        if($(".slide").index($(this)) == 0 || ($(".slide").index($(this))) % 4 == 0){
          // do nothing
        }
        
    }).mouseout(function() {
        $(this).css("width", videoWidth * 1);
        $(this).css("height", videoHeight * 1);
        $(this).css("top", 0);
        $(this).css("z-index", 0);
        // $(this).parent(".slider-container").animate({
        //     left: + 40
        // }, 50);
    });
    
    // controls
    controls(frameWidth, scollWidth);
}

function controls(frameWidth, scollWidth){
    var prev = $(".prev");
    var next = $(".next");
    
    next.on("click", function(){
        var slidercontainer = $(this).next(".slider-container");
        var videoCount = slidercontainer.children().length;
        var sliderCount = videoCount / showCount;

        if(currentSliderCount<videoCount-1){
            scollWidth = scollWidth + frameWidth;
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
            }, 50, function(){ 
                currentSliderCount-=showCount;
            });
        }
        slidercontainer.css("left", scollWidth);
    });
};