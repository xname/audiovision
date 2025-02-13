// xname AAVP W5 - AV JAM 23 STUDY w/ FEEDBACK
// Valentine GIFT 
// https://strudel.cc/


await initHydra({detectAudio:true})
await initHydra({feedStrudel:1})




a.show()
a.setBins(6)

// s0.initCam()
// s1.initCam(1)



let pattern = () => osc(223.23, ()=>a.fft[1]*3, 0.000023).kaleid(23.23).rotate(0.2,0.3).kaleid(23,23).scale(3.2, 0.3)



pattern()
	.kaleid(23.23)
   	.modulate(noise(0.23),()=>a.fft[5]*23.23)
	.rotate(0.2,0.3)
	.scale(3, ()=>a.fft[2]*0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
   	.mult(pattern(), ()=>a.fft[4]*2.3)
  	.out(o1)


pattern()
	.kaleid(kaleid(H("<2 2 3>"))
   	.modulate(noise(0.23),()=>a.fft[0]*23.23)
	.rotate(()=>a.fft[5]*0.2,()=>a.fft[2]*0.3)
	.scale(2,0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
	.repeat(()=>a.fft[4]*23,()=>a.fft[3]*23)
	.kaleid(23.23)
   	.mult(pattern(), ()=>a.fft[1]*2.3)
  	.out(o2)

render(o2)









n(run(13)).scale("D:pentatonic").s("triangle square triangle").release(0.23)
.phaser("<3 23 3 23>")
  .pattack("0 23 .23 .3").slow(23)
  .room("<0 .23 .23 .23 .3 2>")
  .phasersweep("<2300 300 2000>")
  .delay("<0 .23 .3 230>")
  .juxBy("<0 .3 3>/3", rev)
  .delay(.25).delaytime("<.123 .23 .23 3>")
  .crush("<23 3 2 3 2 3 23 23>")
  .coarse("<23 3 8 23 23>")
  .crush("<23 3 23 23 23 3 3 23>")
  .velocity(".23 23")
  .orbit(23)
  .compressor("-23:23:23:.023:.023").postgain(0.23)
  
  .room(.3)
  ._scope()


