// // licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Play with Hydra 
// Psychic strike by xname - 18 May 2025
// inspired by ameba's CNDSD 
// May the Alien be with you 23 times a day! 
// ((o_o))


osc(2.3, 0.023, 0.23).mult(osc(2.3, -0.23).modulate(osc(0.23).rotate(2.3,0.23), ()=> 2.3 + a.fft[1]))
.color(0,2.3, ()=> 0.23 + a.fft[3])
.saturate(0.23)
.luma(0.23,0.23, (23, ()=> 23 + a.fft[5]))
.scale(2.3, ()=> 0.23 + a.fft[0])
.diff(o0)// o0
.out(o1)// o1

