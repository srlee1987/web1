
$("body").imagesLoaded( function() {
    // images have loaded
    var list = $(".typoList").isotope({
        // options
        itemSelector: ".item",
        layoutMode: "masonry"
    });
    // $(".filterBox .filter01").on("click",function(){
    //     list.isotope({ filter: ".typo" });
    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");
    //     return false;
    // });
    // $(".filterBox .filter02").on("click",function(){
    //     list.isotope({ filter: ".design" });
    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");
    //     return false;
    // });
    // $(".filterBox .filter03").on("click",function(){
    //     list.isotope({ filter: ".paint" });
    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");
    //     return false;
    // });
    // $(".filterBox .all").on("click",function(){
    //     list.isotope({ filter: ".item" });
    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");
    //     return false;
    // });
    $(".filterBox li").on("click",function(){
        var filterItem = $(this).data("filter");
        list.isotope({ filter: "."+filterItem });
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        return false;
    });
});
      

Splitting();
var timeline = new TimelineMax();
timeline.staggerFrom("h1 .char",1,{
    x:100,
    opacity:0,
    ease:Back.easeOut,
    stagger:0.05,
})
.staggerFrom(".filterBox li",1,{
    x:100,
    opacity:0,
    ease:Back.easeOut,
    stagger:0.05,
})
.staggerFrom(".typoList > li",2,{
    y:-200,
    opacity:0,
    ease:Bounce.easeOut,
    stagger:0.2,
});

