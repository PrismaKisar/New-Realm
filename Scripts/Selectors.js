namespace Selectors {
    const var sampleMaps = Sampler.getSampleMapList();
    
    var paintValue = 1;

	const var icons = [];
	

	const var pianoPanel = Content.getComponent("pianoPanel");
	pianoPanel.loadImage("{PROJECT_FOLDER}piano.png", "piano");
	pianoPanel.setPaintRoutine(function(g){
		if (paintValue == 0.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("piano", a, 0, 0);
		}
	});
	icons[0] = pianoPanel;
	
	const var guitarPanel = Content.getComponent("guitarPanel");
	guitarPanel.loadImage("{PROJECT_FOLDER}guitar.png", "guitar");
	guitarPanel.setPaintRoutine(function(g){
		if (paintValue == 1.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("guitar", a, 0, 0);
		}
	});
	icons[1] = guitarPanel;
	
	const var vibraphonePanel = Content.getComponent("vibraphonePanel");
	vibraphonePanel.loadImage("{PROJECT_FOLDER}vibraphone.png", "vibraphone");
	vibraphonePanel.setPaintRoutine(function(g){
		if (paintValue == 2.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("vibraphone", a, 0, 0);
		}
	});
	icons[2] = vibraphonePanel;
	
	const var marimbaPanel = Content.getComponent("marimbaPanel");
	marimbaPanel.loadImage("{PROJECT_FOLDER}marimba.png", "marimba");
	marimbaPanel.setPaintRoutine(function(g){
		if (paintValue == 3.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("marimba", a, 0, 0);
		}
	});
	icons[3] = marimbaPanel;
		
		
	const var glockenspielPanel = Content.getComponent("glockenspielPanel");
	glockenspielPanel.loadImage("{PROJECT_FOLDER}glockenspiel.png", "glockenspiel");
	glockenspielPanel.setPaintRoutine(function(g){
		if (paintValue == 4.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("glockenspiel", a, 0, 0);
		}
	});
	icons[4] = glockenspielPanel;
	
	
	
	

    inline function loadSampleMapForSampler(sampler, value, offset) {
        sampler.loadSampleMap(sampleMaps[value - 1 + offset]);
    }

    const var attackSampler = Synth.getSampler("attackSampler");
    inline function onAttackSelectorControl(component, value) {
        loadSampleMapForSampler(attackSampler, value, 0);
        paintValue = value - 1;
        for (icon in icons)
	        icon.repaintImmediately();
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