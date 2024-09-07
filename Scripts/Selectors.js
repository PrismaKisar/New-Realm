namespace Selectors {
    const var sampleMaps = Sampler.getSampleMapList();

    inline function loadSampleMapForSampler(sampler, value, offset) {
        sampler.loadSampleMap(sampleMaps[value - 1 + offset]);
    }

    const var attackSampler = Synth.getSampler("attackSampler");
    inline function onAttackSelectorControl(component, value) {
        loadSampleMapForSampler(attackSampler, value, 0);
    }
    Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

    const var sustainSampler = Synth.getSampler("sustainSampler");
    inline function onSustainSelectorControl(component, value) {
        loadSampleMapForSampler(sustainSampler, value, 5);
    }
    Content.getComponent("sustainSelector").setControlCallback(onSustainSelectorControl);
   
   
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
}