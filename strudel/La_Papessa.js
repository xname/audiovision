// xname 2026 - La Papessa
// She only had eyes for her books | London January 2026
// Versione Senza Emozione 


$: s("[[bd bd <hh <lt mt>bd>]*2 rim]*2").bank("tr909").dec(.3).lpf(130).ply("<1 2 3>")

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


$: s(`jazz*3, 
insect:3 [insect[1] metal:1], 
- space:1 - space:1,
- wind:1`)

// Waves because it is winter and we miss the sun

$: sound("<white pink brown>*3".lpf(8800).delay(.9).adsr(".1:.1:.5:.9").pan("0 0.3 .6 1")).lpf(8280, 120)._scope()

$: sound("<white pink brown>*9".lpf(7800).delay(.7).adsr(".9:.5:.1:.1").pan("1 0.6 .1 0")).lpf(8089, 88)._scope()

$: sound("<white pink brown>*9".lpf(7800).delay(.7).adsr(".9:.5:.1:.1").pan("1 0.6 .1 0")).lpf(889, 88).rev()._scope()
