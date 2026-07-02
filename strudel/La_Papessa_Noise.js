// xname 2026 (C) La Papessa Noise
// She only had eyes for her books | London July 2026
// She has lost control 


await initHydra({detectAudio:true},{feedStrudel:1})

src(s0).kaleid(H("<4 5 6>"))
.diff(osc(1,0.5,5))
.modulateScale(osc(2,-0.25,1))
.out()

all(x=>x.fft(4).scope({pos:0,smear:.95}))


let pattern =  s("[[bd bd <hh <lt mt>bd>]*2 rim]*2").bank("tr909").dec(.3).lpf(130).ply("<1 2 3>")

$: s("[[bd bd <hh <lt mt>bd>]*2 rim]*2").bank("tr909").dec(.3).lpf(130).ply("<1 2 3>")


$: note("48 67 63 [62, 58]")
.sound("square")

shape(H(pattern)).repeat()
.scrollY(
  ()=> a.fft[2]*.25)
.add(src(o0).color(.2333).scrollX(.0023),.2333).rotate(a.fft[3]* 0.233).kaleid(()=> a.fft[0]*23)
.out(o0)

 
// tempo
setcpm(140/23) 

$: sound("<bd bd hh bd>*4 rim <bd lt>*2 bd <insect:9>*12 bd").ply("<1 3 9>")

$: sound(`bd*2, - cp, 
- - - oh, hh*3,
[- casio]*3`).lpf(8200)

$: n("0 1 [4 2] 2*2").sound("jazz").lpf(8200)

$: sound(`
[-  lt  -  - ] [-  -  -  lt ] [-  -  -  - ] [-  -  oh:1 - ],
[hh hh hh hh] [hh hh bd hh] [hh bd hh hh] [hh hh -  - ],
[-  -  -  - ] [cp -  rim  - ] [-  -  -  - ] [~  cp -  - ],
[bd bd -  - ] [-  -  bd - ] [bd bd - bd ] [-  -  rim  bd ]
`).bank("RolandTR909").rev().jux(rev).off(1/16, x=>x.speed(2))

$: note("0 1 2 3 ~ <a#, c, ~ a b c ~ > ~ ~48 67 63 c# <[<~ 62 ~>, <~ 58>]*2 [c# a]>").rev().transpose(irand(36)).fast(3, 9, 13, 23, 7).lastOf(2, x=>x.rev().chunkBack(2, x=>x.add(3)))
  
.sound("piano, square supersaw, gm_telephone").scale("A:major A:minor, C:ritusen bebop").lpf("200 1000 100 2000")
.adsr(".1:.1:.55:.2")
.pan("0 1 .6 0.1")
.gain("[.025 0.05 0.3]").fast(3, 9, 13, 23, 7)
.gain(sine)

$: s(`jazz*3, 
insect:3 [insect[1] metal:1], 
- space:1 - space:1,
- wind:1`)

// Waves because it is winter and we miss the sun

$: sound("<white pink brown>*3".lpf(8800).delay(.9).adsr(".1:.1:.5:.9").pan("0 0.3 .6 1")).lpf(8280, 120)._scope()

$: sound("<white pink brown>*9".lpf(7800).delay(.7).adsr(".9:.5:.1:.1").pan("1 0.6 .1 0")).lpf(8089, 88)._scope()

$: sound("<white pink brown>*9".lpf(7800).delay(.7).adsr(".9:.5:.1:.1").pan("1 0.6 .1 0")).lpf(889, 88).rev()._scope()



