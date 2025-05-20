
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Play with Hydra - https://hydra.ojack.xyz
// Pink Spiral. 23 Studies Series by xname - 20 May 2025
// May the Alien be with You! 
// ((o_o))



a.show() //delete this to hide frequency bins
s0.initCam(0)
s1.initCam(1)

noise()
.color(() => a.fft[2]*23,0.23)
.modulate(noise(() => a.fft[0]*23.23))
.scale(()=> a.fft[2]*3)
.layer(
  src(o0)
  .mask(osc(23).modulateRotate(osc(),23,0))
  .scale(() => a.fft[4]*2)
  .luma(0.23,0.23)
)
.blend(o0)
.out(o0)

osc()
.modulate(noise(() => a.fft[2]+3.23))
.color(23.23,0,2.3)
.out(o1)

src(o0)
.modulate(o1)
.layer(
  src(o1)
  .mask(o1)
  .saturate(23)
)
.modulateRotate(o1)
.rotate(({time}) => time%230*23)
.out(o2)

render(o2)

