function init() {

    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });





    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


    ScrollTrigger.refresh();

}

init()

var cursor = document.querySelector(".cursor")


var main = document.querySelector(".main")


document.addEventListener("mousemove",function(dets){
   cursor.style.left = dets.x+ 10+"px"
   cursor.style.top = dets.y+10+"px"
})




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: false,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: false,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})


tl.to(".page1 h1",
    {
        x: -100,
    }, "anim"
)

tl.to(".page1 h2", {
    x: 100
}, "anim")


tl.to(".page1 video",{
    width:"90%"
},"anim")


tl2.to(".main",{
    backgroundColor:"#fff"
})

tl3.to(".main",{
    backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "470px"
        cursor.style.height = "370px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
        console.log(att)
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})
var naveffect = document.querySelector("#naveffect");
var h4 = document.querySelectorAll("#nav h4");

h4.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        naveffect.style.display = "block";
        naveffect.textContent = item.textContent + " " + item.textContent + " " + item.textContent + " " + item.textContent;

        gsap.fromTo(
            naveffect,
            { x: "100%" },
            { x: "-100%", duration: 4, ease: "linear", repeat: -1 }
        );
    });

    item.addEventListener("mouseleave", function () {
        naveffect.style.display = "none";
        gsap.killTweensOf(naveffect);
    });
});




