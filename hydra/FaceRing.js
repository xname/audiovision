// xname 2025 - Compelling evolution (01) and FaceRing (o2)


speed = 20000;
s0.initCam()
speed =  1;



src(s0).kaleid(6).out(o1) 

osc(23.203, -.23, 1)
	.thresh([0.23, .23].fast(0.023), 0.23)
	.color(0, 0, 0.23)
	.add(osc(23, .23, 0)
		.thresh([.23, .23].fast(.23), 0)
		.rotate(23.03 / 777)
		.color(1, 0.23, 0)
		.modulateScale(osc(23.23, -.01, 0)
			.thresh([.23, 23.23].fast(.23), 0)))
	.diff(osc(0.7777, 0.023, 0)
		.thresh([.23, .7].fast(.23), 0.23)
		.rotate(23.23 / 23)
		.color(0.23, 0, 23)
		.modulateScale(osc(23, -.023, 0)
			.thresh([0.203, 0.23].fast(.23), 0.777)))
	.modulateRotate(osc(23.23, -.0023, 0)
		.thresh([.23, .7].fast(.23), 0.0023))
	.modulateScale(osc(23, -0.0023, 0.23)
		.thresh([0.23, 0.23].fast(.23), 0.777))
	.colorama(() => Math.sin(time / 3) *  7000 + 7777.23)
	.scale(2.300)
	.out(o2);

//render(o1)
render(o2)
