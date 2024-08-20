
namespace LookAndFeel {

const var background = Content.getComponent("background");
background.loadImage("{PROJECT_FOLDER}background.png", "background");
background.setPaintRoutine(function(g)
{
	var a = [0, 0, 900, 600];
	g.drawImage("background", a, 0, 0);
});


const bigKnobLaf = Content.createLocalLookAndFeel();
bigKnobLaf.loadImage("{PROJECT_FOLDER}bigPointer.png", "bigPointer");
bigKnobLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var area = obj.area;
	var start = 2.5;
	var end = 2 * start * obj.valueNormalized - start;
	g.rotate(end, [area[2]*0.5, area[3]*0.5]);
	
	g.drawImage("bigPointer", [72, 10, 15, 15], 0, 0);
});

const var attackSelector = Content.getComponent("attackSelector");
attackSelector.setLocalLookAndFeel(bigKnobLaf);

const var sustainSelector = Content.getComponent("sustainSelector");
sustainSelector.setLocalLookAndFeel(bigKnobLaf);



const lilKnobLaf = Content.createLocalLookAndFeel();
lilKnobLaf.loadImage("{PROJECT_FOLDER}lilPointer.png", "lilPointer");
lilKnobLaf.registerFunction("drawRotarySlider", function(g, obj)
{
	var area = obj.area;
	var start = 2.5;
	var end = 2 * start * obj.valueNormalized - start;
	g.rotate(end, [area[2]*0.5, area[3]*0.5]);
	
	g.drawImage("lilPointer", [27, 6, 6, 6], 0, 0);
});

const var attackGain = Content.getComponent("attackGain");
attackGain.setLocalLookAndFeel(lilKnobLaf);

const var sustainGain = Content.getComponent("sustainGain");
sustainGain.setLocalLookAndFeel(lilKnobLaf);

}