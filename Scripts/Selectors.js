namespace Selectors {
	
	/* --- DSP --- */

    const var sampleMaps = Sampler.getSampleMapList();
    
    var attackPaintValue = 1;
    var sustainPaintValue = 1;
    const var attackIcons = [];
    const var sustainIcons = [];
	
	function configureAttackPanel(panel, imageName, index) {
	    panel.data.imageName = imageName;
	    panel.data.index = index;
	    
	    panel.loadImage("{PROJECT_FOLDER}" + imageName + ".png", imageName);
	    panel.setPaintRoutine(function(g){
	        if (attackPaintValue == this.data.index) {
	            var area = this.getLocalBounds(0);
	            g.drawImage(this.data.imageName, area, 0, 0);
	        }
	    });
	}
	
	function configureSustainPanel(panel, imageName, index) {
	    panel.data.imageName = imageName;
	    panel.data.index = index;
	    
	    panel.loadImage("{PROJECT_FOLDER}" + imageName + ".png", imageName);
	    panel.setPaintRoutine(function(g){
	        if (sustainPaintValue == this.data.index) {
	            var area = this.getLocalBounds(0);
	            g.drawImage(this.data.imageName, area, 0, 0);
	        }
	    });
	}
	
	function setupIcons(iconArray, panelNames, imageNames, configureFunction) {
	    for (var i = 0; i < panelNames.length; i++) {
	        var panel = Content.getComponent(panelNames[i]);
	        configureFunction(panel, imageNames[i], i);
	        iconArray[i] = panel;
	    }
	}
	
	setupIcons(attackIcons, 
	           ["attackPianoPanel", "attackGuitarPanel", "attackVibraphonePanel", "attackMarimbaPanel", "attackGlockenspielPanel", "attackNothingPanel"], 
	           ["piano", "guitar", "vibraphone", "marimba", "glockenspiel", "nothing"],
	           configureAttackPanel);
	
	setupIcons(sustainIcons, 
	           ["sustainPianoPanel", "sustainGuitarPanel", "sustainVibraphonePanel", "sustainMarimbaPanel", "sustainGlockenspielPanel", "sustainNothingPanel"], 
	           ["piano", "guitar", "vibraphone", "marimba", "glockenspiel", "nothing"],
	           configureSustainPanel);
	
	
    function loadSampleMapForSampler(sampler, value, offset) {
        sampler.loadSampleMap(sampleMaps[value - 1 + offset]);
    }

    const var attackSampler = Synth.getSampler("attackSampler");
    const var sustainSampler = Synth.getSampler("sustainSampler");
    
    inline function onAttackSelectorControl(component, value) { 
        loadSampleMapForSampler(attackSampler, value, 0);
        attackPaintValue = value - 1;
        for (icon in attackIcons)
            icon.repaintImmediately();
    }
    Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

    inline function onSustainSelectorControl(component, value) {
        loadSampleMapForSampler(sustainSampler, value, 6);
        sustainPaintValue = value - 1;
        for (icon in sustainIcons)
            icon.repaintImmediately();
    }
    Content.getComponent("sustainSelector").setControlCallback(onSustainSelectorControl);
   
   	/* --- Look and Feel --- */
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
