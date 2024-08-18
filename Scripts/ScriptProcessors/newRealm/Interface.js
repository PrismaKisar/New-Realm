// ---------------- GUI ---------------- //
Content.makeFrontInterface(900, 600);
include("ZoomHandler.js");

const LAF = Engine.createGlobalScriptLookAndFeel();
const START = 2.5;
const HALF = 0.5;
const POINTER_REDUCING_FACTOR = 0.08;
const POINTER_DISTANCE_FACTOR = 0.1;

LAF.registerFunction("drawRotarySlider", function(g, obj)
{
	var area = obj.area;
		
	g.setColour(obj.bgColour);
	g.fillEllipse(area);
	
	var end = 2 * START * obj.valueNormalized - START;
	
	g.rotate(end, [area[2]*HALF, area[3]*HALF]);
	
	var pointerWidth = Math.max(area[2]*POINTER_REDUCING_FACTOR, 6);
	var pointerHeight = Math.max(area[3]*POINTER_REDUCING_FACTOR, 6);

	g.setColour(obj.itemColour1);
	g.fillEllipse([area[2]/2 - 4, area[3]*POINTER_DISTANCE_FACTOR, pointerWidth, pointerHeight]);
});



// ---------------- DSP ---------------- //
const var sampleMaps = Sampler.getSampleMapList();

const var attackSampler = Synth.getSampler("attackSampler");
inline function onAttackSelectorControl(component, value)
{
	attackSampler.loadSampleMap(sampleMaps[value - 1]);
};
Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

const var sustainSampler = Synth.getSampler("sustainSampler");
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
 