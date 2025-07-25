// gsap.to("#page2 h1", {
//   transform : "translateX(-125%)",
//   scrollTrigger:{
//     trigger : "#page2 h1",
//     scroller: "body",
//     mark: true,
//     start: "top 0" ,
//     end: "top -100",
//     scrub:2,
//     pin:true
//   }
// })


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "+=3000",
    scrub: 2,
    pin: true,
    markers: true
  }
});

tl.from("#page2 h1", {
  opacity: 0,
  scale: 1.5,
  duration: 1
}).to("#page2 h1", {
  x: "-125%",
});
