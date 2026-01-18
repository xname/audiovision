// xname 2026 - Falsehood Union
// The urge to speak when form collapses
// Ctrl + Shift + Enter to cycle through compositions

a.setBins(6)


pattern = () => osc(200, ()=>a.fft[5]*0.232323).kaleid(230).scale(1, 0.4)


pattern()
  .scrollX(0.1, 0.01)
  .mult(pattern())
  .modulate(noise(0.02323),()=>a.fft[0]*0.2323)
  .out(o0)


pattern()
  .scrollX(0.1, 0.01)
  .mult(pattern(), ()=>a.fft[4]*0.23)
  .modulate(noise(0.2323),()=>a.fft[0]*23.2323)
  .out(o1)


pattern()
  .scrollX(0.1, 0.01)
  .mult(pattern())
  .modulate(noise(0.02323),()=>a.fft[0]*0.2323)
  .repeat(()=>a.fft[4]*23,()=>a.fft[3]*23)
  .out(o2)


pattern()
  .kaleid(23.23)
    .modulate(noise(0.2323),()=>a.fft[0]*23.2323)
  .rotate(0.2,0.23)
  .scale(3, ()=>a.fft[2]*0.2323)
  .kaleid(23.23)
    .rotate(0.3,0.23)
    .mult(pattern(), ()=>a.fft[4]*2.3)
    .out(o3)


sources = [o0, o1, o2, o3]

src(
  sources[
    Math.floor(time / 2) % 4
  ]
).out()

