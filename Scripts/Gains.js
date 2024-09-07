namespace Gains {
    const bigKnobLaf = Content.createLocalLookAndFeel();
    bigKnobLaf.loadImage("{PROJECT_FOLDER}bigPointer.png", "bigPointer");
    bigKnobLaf.registerFunction("drawRotarySlider", function (g, obj) {
        var area = obj.area;
        var start = 2.5;
        var end = 2 * start * obj.valueNormalized - start;
        g.rotate(end, [area[2] * 0.5, area[3] * 0.5]);

        g.drawImage("bigPointer", [72, 10, 15, 15], 0, 0);
    });

    const var attackSelector = Content.getComponent("attackSelector");
    attackSelector.setLocalLookAndFeel(bigKnobLaf);

    const var sustainSelector = Content.getComponent("sustainSelector");
    sustainSelector.setLocalLookAndFeel(bigKnobLaf);



    const lilKnobLaf = Content.createLocalLookAndFeel();
    lilKnobLaf.loadImage("{PROJECT_FOLDER}lilPointer.png", "lilPointer");
    lilKnobLaf.registerFunction("drawRotarySlider", function (g, obj) {
        var area = obj.area;
        var start = 2.5;
        var end = 2 * start * obj.valueNormalized - start;
        g.rotate(end, [area[2] * 0.5, area[3] * 0.5]);

        g.drawImage("lilPointer", [27, 6, 6, 6], 0, 0);
    });

    const var attackGain = Content.getComponent("attackGain");
    attackGain.setLocalLookAndFeel(lilKnobLaf);

    const var sustainGain = Content.getComponent("sustainGain");
    sustainGain.setLocalLookAndFeel(lilKnobLaf);

const var attackGainEffect = Synth.getEffect("attackGain");
inline function onAttackGainControl(component, value) {
		attackGainEffect.setAttribute(0, value);
        attackGainPanel.repaint();
    };

    attackGain.setControlCallback(onAttackGainControl);
    const var attackGainPanel = Content.getComponent("attackGainPanel");
    
    attackGainPanel.setPaintRoutine(function (g) {
        g.fillAll(Colours.transparentBlack);


        var startOffset = 2.5;
        var arcThickness = 5;
        var margin = 2.5;
        var normalizedValue = attackGain.getValueNormalized();

        function getPathArea(p, scale) {
            var area = p.getBounds(scale);
            area[0] += margin;
            area[1] += margin;
            return area;
        }

        var endOffset = Math.max(-startOffset + 2.0 * startOffset * normalizedValue, -startOffset + 0.1);


        var activeArc = Content.createPath();
        activeArc.addArc([0, 0, 1, 1], -startOffset, endOffset);
        g.setColour("0x7040798C");
        var activeArea = getPathArea(activeArc, 85);
        g.drawPath(activeArc, activeArea, arcThickness);
    });





const var sustainGainEffect = Synth.getEffect("sustainGain");
inline function onSustainGainControl(component, value) {
		sustainGainEffect.setAttribute(0, value);
        sustainGainPanel.repaint();
    };
    
    sustainGain.setControlCallback(onSustainGainControl);
    const var sustainGainPanel = Content.getComponent("sustainGainPanel");
    sustainGainPanel.setPaintRoutine(function (g) {
        g.fillAll(Colours.transparentBlack);


        var startOffset = 2.5;
        var arcThickness = 5;
        var margin = 2.5;
        var normalizedValue = sustainGain.getValueNormalized();

        function getPathArea(p, scale) {
            var area = p.getBounds(scale);
            area[0] += margin;
            area[1] += margin;
            return area;
        }

        var endOffset = Math.max(-startOffset + 2.0 * startOffset * normalizedValue, -startOffset + 0.1);


        var activeArc = Content.createPath();
        activeArc.addArc([0, 0, 1, 1], -startOffset, endOffset);
        g.setColour("0x7040798C");
        var activeArea = getPathArea(activeArc, 85);
        g.drawPath(activeArc, activeArea, arcThickness);
    });

}