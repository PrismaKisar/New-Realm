// ---------------- GUI ---------------- //
Content.makeFrontInterface(900, 600);

//include("ZoomHandler.js");

const laf = Engine.createGlobalScriptLookAndFeel();

laf.registerFunction("drawRotarySlider", function(g, obj)
{
	var area = obj.area;
	
	
	g.setColour(obj.bgColour);
	g.fillEllipse(area);
	
	var start = 2.5;
	var end = 2 * start * obj.valueNormalized - start;
	
	g.rotate(end, [area[2]*0.5, area[3]*0.5]);
	
	var pointerWidth = Math.max(area[2]*0.08, 6);
	var pointerHeight = Math.max(area[3]*0.08, 6);

	g.setColour(obj.itemColour1);
	g.fillEllipse([area[2]/2 - 4, area[3]*0.1, pointerWidth, pointerHeight]);
});



// ---------------- DSP ---------------- //
const var attackSampler = Synth.getSampler("attackSampler");
const var sustainSampler = Synth.getSampler("sustainSampler");
const var sampleMaps = Sampler.getSampleMapList();

inline function onAttackSelectorControl(component, value)
{
	attackSampler.loadSampleMap(sampleMaps[value - 1]);
};
Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

inline function onSustainSelectorControl(component, value)
{
	sustainSampler.loadSampleMap(sampleMaps[value - 1]);
};
Content.getComponent("sustainSelector").setControlCallback(onSustainSelectorControl);

 function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 