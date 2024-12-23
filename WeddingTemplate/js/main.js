$(window).on("load", function () {
    // preLoader
    $(".preloader").fadeOut(1000)
    // console.log("hi")

    // home section slideshow
    let slideIndex = $(".slide.active").index()
        // console.log(slideIndex)
    const slideLen = $(".slide").length;
    function slideShow() {
        console.log(slideIndex);
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if (slideIndex == slideLen - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow()
});


$(document).ready(function(){
      // nav toggle on hamburger
      $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    });
    $(".header .nav a ").click(function(){
        if($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    });

    // Fixed header 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed")
        }
    });
    
    // ScrollIt 
    $.scrollIt({ topOffset: -50});


    // People filter
    peopleFilter($(".filter-btn.active").attr("data-target"));
    $(".filter-btn").click(function(){
        // if($(this).hasClass("active")){
        //     return;
        // }else{
        //     peopleFilter($(this).attr("data-target"));
        // }

        // alternative way
        if (!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"));
        }
    });

    function peopleFilter(target) {
        console.log(target);
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='" + target + "']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+ target +"']").fadeIn();
    }
});

// Gallery popup
const wHeight = $(window).height();
console.log(wHeight);
$(".gallery-popup .gp-img").css("max-height", wHeight + "px")

// render gallery-item dynamically
let itemIndex = 0;
const totalGalleryItems = $(".gallery-item").length;
// console.log(totalGalleryItems);

$(".gallery-item").click(function () {
    itemIndex = $(this).index();
    // console.log(ItemIndex); //click on each gallery image to see the index on the browser console
    $(".gallery-popup").addClass("open");
    $(".gallery-popup .gp-img").hide();
    gpSlideShow();
});

// handle next button 
$(".gp-controls .next").click(function () {
    if(itemIndex === totalGalleryItems - 1){
        itemIndex = 0
    } else {
        itemIndex++;
    }
    $(".gallery-popup .gp-img").fadeOut(function(){
        gpSlideShow();
    })
    console.log("handlingNext: ", itemIndex);
});

// handle prev button 
$(".gp-controls .prev").click(function () {
    if(itemIndex === 0){
        itemIndex = totalGalleryItems - 1;
    } else {
        itemIndex--;
    }
    $(".gallery-popup .gp-img").fadeOut(function(){
        gpSlideShow();
    })
    console.log("handlingPrev: ", itemIndex);
});

function gpSlideShow() {
    const imgSrc = $(".gallery-item")
     .eq(itemIndex)
     .find("img")
     .attr("data-large");
    // console.log(imgSrc);
    $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
    $(".gp-counter").text(itemIndex + 1 + "/" + totalGalleryItems);
}

// Close gallery popup
$(".gp-close").click(function(){
    $(".gallery-popup").removeClass("open");
});

// hide gallery popup when clicked outside of gp-container
$(".gallery-popup").click(function (event) {
    // console.log(event.target)
    if ($(event.target).hasClass("open")) {
        // console.log("You have click outside the gp-container: ", true);
        $(".gallery-popup").removeClass("open")
    }
});
