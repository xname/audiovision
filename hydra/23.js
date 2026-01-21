//	licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// 	xname (C) 2025-26 ...:..:...  Eleonora Maria Irene Oreggia
// 	May the Alien Be with You >>  23 Studies Collection v.1
// 	Ctrl + Shift + Enter to cycle through compositions

//a.show()
a.setBins(6)


pattern = () => osc(23.2323, ()=>a.fft[5]*0.0232323, 0.0000023)
					.kaleid(23.23,23.232323)
					.rotate(0.23,0.3)
					.kaleid(23,23.23)
					.scale(3.2, 0.3)

pattern2 = () => osc(23.2323, ()=>a.fft[5]*0.0232323, 0.0000023)
					.modulate(osc(223.23, ()=>a.fft[1]*3, 0.000023)
					.kaleid(23.23)
					.rotate(0.2,0.3)
					.kaleid(23,23)
					.scale(3.2, 0.3))

pattern()
	.kaleid(23.23)
   	.modulate(noise(0.23),()=>a.fft[5]*23.23)
	.rotate(0.2,0.3)
	.scale(3, ()=>a.fft[2]*0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
   	.mult(pattern(), ()=>a.fft[4]*2.3)
  	 .out(o0)


pattern()
	.kaleid(23.23)
   	.modulate(src(s0),()=>a.fft[0]*23.23)
	.rotate(()=>a.fft[5]*0.2,()=>a.fft[2]*0.3)
	.scale(2,0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
	.repeat(()=>a.fft[4]*23,()=>a.fft[3]*23)
	.kaleid(23.23)
   	.mult(pattern(), ()=>a.fft[1]*2.3)
  	.out(o2)

pattern2()
	.kaleid(23.23)
   	.modulate(src(s0),()=>a.fft[0]*23.23)
	.rotate(()=>a.fft[5]*0.2,()=>a.fft[2]*0.3)
	.scale(2,0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
	.repeat(()=>a.fft[4]*23,()=>a.fft[3]*23)
	.kaleid(23.23)
   	.mult(pattern(), ()=>a.fft[1]*2.3)
  	.out(o3)

pattern2()
	.kaleid(23.23)
   	.modulate(noise(0.23),()=>a.fft[5]*23.23)
	.rotate(0.2,0.3)
	.scale(3, ()=>a.fft[2]*0.3)
	.kaleid(23.23)
   	.rotate(0.3,0.23)
   	.mult(pattern(), ()=>a.fft[4]*2.3)
  	 .out(o1)


// render()  // uncomment this to see the 4 screens

// This allows you to cycle	[[Ctrl + Shift + Enter]]
sources = [o0, o1, o2, o3]

src(
  sources[
    Math.floor(time / 2) % 4
  ]
).out()