var t1 = gsap.timeline()

t1.from(".nav h4,.nav img,.nav h3,.nav button" ,{
        y:-100,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.3
})

t1.from(".main h1",{
        x:-100,
        opacity:0,
        stagger:0.3

})

t1.from(".main>img",{
        scale:0,
        duration:1,
        delay:0.3,
        opacity:0,
        stagger:0.3
})

t1.from(".main h5",{
        scale:0,
        duration:1,
        delay:0.3,
})

t1.to(".main h5",{
        y:30,
        repeat:-1,
        duration:1,
        yoyo:true
})



