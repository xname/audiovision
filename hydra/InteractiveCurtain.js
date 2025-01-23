s0.initCam()
a.setBins(6)

speed = 2323

src(s0)
  .kaleid(()=>a.fft[2])
   .rotate(0.8)
   .scale(()=>a.fft[4]/123)
   .kaleid(()=>a.fft[0])
   .diff(osc(100))
   .rotate(()=>a.fft[5])

  .out()


