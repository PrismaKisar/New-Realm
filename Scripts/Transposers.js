
namespace Transposers {

    const lilKnobLaf = Content.createLocalLookAndFeel();
    lilKnobLaf.loadImage("{PROJECT_FOLDER}lilPointer.png", "lilPointer");
    lilKnobLaf.registerFunction("drawRotarySlider", function (g, obj) {
        var area = obj.area;
        var start = 2.5;
        var end = 2 * start * obj.valueNormalized - start;
        g.rotate(end, [area[2] * 0.5, area[3] * 0.5]);

        g.drawImage("lilPointer", [27, 6, 6, 6], 0, 0);
    });

	const var attackTransposer = Content.getComponent("attackTransposer");
    attackTransposer.setLocalLookAndFeel(lilKnobLaf);

    const var sustainTransposer = Content.getComponent("sustainTransposer");
    sustainTransposer.setLocalLookAndFeel(lilKnobLaf);

	const var attackTransposerEffect = Synth.getMidiProcessor("attackTransposer");
	inline function onAttackTransposerControl(component, value) {
		attackTransposerEffect.setAttribute(0, value);
        attackTransposerPanel.repaint();
    };

    attackTransposer.setControlCallback(onAttackTransposerControl);
    const var attackTransposerPanel = Content.getComponent("attackTransposerPanel");
    
    attackTransposerPanel.setPaintRoutine(function (g) {
        g.fillAll(Colours.transparentBlack);
        
        var limit = 2.5;
        var normalizedValue = attackTransposer.getValueNormalized();
        var startOffset = 0;        
        var endOffset = ((normalizedValue - 0.5) / 0.5) * limit;
        var arcThickness = 5;
        var margin = 2.5;
        

        function getPathArea(p, scale) {
            var area = p.getBounds(scale);
            area[0] += margin;
            area[1] += margin;
            return area;
        }

        var activeArc = Content.createPath();
        activeArc.addArc([0, 0, 1, 1], startOffset, endOffset);
        g.setColour("0x7040798C");
        var activeArea = getPathArea(activeArc, 85);
        g.drawPath(activeArc, activeArea, arcThickness);
        
        var attackTransposerLabel = Content.getComponent("attackTransposerLabel");
        attackTransposerLabel.set("text", attackTransposer.getValue());
    });


	const var sustainTransposerEffect = Synth.getMidiProcessor("sustainTransposer");
	inline function onSustainTransposerControl(component, value) {
		sustainTransposerEffect.setAttribute(0, value);
        sustainTransposerPanel.repaint();
    };
    
    sustainTransposer.setControlCallback(onSustainTransposerControl);
    const var sustainTransposerPanel = Content.getComponent("sustainTransposerPanel");
    
    sustainTransposerPanel.setPaintRoutine(function (g) {
        g.fillAll(Colours.transparentBlack);
        
        var limit = 2.5;
        var normalizedValue = sustainTransposer.getValueNormalized();
        var startOffset = 0;        
        var endOffset = ((normalizedValue - 0.5) / 0.5) * limit;
        var arcThickness = 5;
        var margin = 2.5;
        
        function getPathArea(p, scale) {
            var area = p.getBounds(scale);
            area[0] += margin;
            area[1] += margin;
            return area;
        }

        var activeArc = Content.createPath();
        activeArc.addArc([0, 0, 1, 1], startOffset, endOffset);
        g.setColour("0x7040798C");
        var activeArea = getPathArea(activeArc, 85);
        g.drawPath(activeArc, activeArea, arcThickness);
        
        var sustainTransposerLabel = Content.getComponent("sustainTransposerLabel");
        sustainTransposerLabel.set("text", sustainTransposer.getValue());
    });

}






