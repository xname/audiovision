/* xname 2024 - performed at LOKI in Brixton, London, on 15 December 2024
NOISEMSAS 2024 
*/

a.show()
a.setBins(6)

// s0.initCam()
// s1.initCam(1)



pattern = () => osc(223.23, ()=>a.fft[1]*3, 0.000023).kaleid(23.23).rotate(0.2,0.3).kaleid(23,23).scale(3.2, 0.3)

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
	.kaleid(23.23)
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

