namespace Selectors {
    const var sampleMaps = Sampler.getSampleMapList();
    
    var paintValue = 1;

	const var attackIcons = [];
	const var sustainIcons = [];
	
	/* --- Attack --- */
	const var attackPianoPanel = Content.getComponent("attackPianoPanel");
	attackPianoPanel.loadImage("{PROJECT_FOLDER}piano.png", "piano");
	attackPianoPanel.setPaintRoutine(function(g){
		if (paintValue == 0.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("piano", a, 0, 0);
		}
	});
	attackIcons[0] = attackPianoPanel;
	
	const var attackGuitarPanel = Content.getComponent("attackGuitarPanel");
	attackGuitarPanel.loadImage("{PROJECT_FOLDER}guitar.png", "guitar");
	attackGuitarPanel.setPaintRoutine(function(g){
		if (paintValue == 1.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("guitar", a, 0, 0);
		}
	});
	attackIcons[1] = attackGuitarPanel;
	
	const var attackVibraphonePanel = Content.getComponent("attackVibraphonePanel");
	attackVibraphonePanel.loadImage("{PROJECT_FOLDER}vibraphone.png", "vibraphone");
	attackVibraphonePanel.setPaintRoutine(function(g){
		if (paintValue == 2.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("vibraphone", a, 0, 0);
		}
	});
	attackIcons[2] = attackVibraphonePanel;
	
	const var attackMarimbaPanel = Content.getComponent("attackMarimbaPanel");
	attackMarimbaPanel.loadImage("{PROJECT_FOLDER}marimba.png", "marimba");
	attackMarimbaPanel.setPaintRoutine(function(g){
		if (paintValue == 3.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("marimba", a, 0, 0);
		}
	});
	attackIcons[3] = attackMarimbaPanel;
		
		
	const var attackGlockenspielPanel = Content.getComponent("attackGlockenspielPanel");
	attackGlockenspielPanel.loadImage("{PROJECT_FOLDER}glockenspiel.png", "glockenspiel");
	attackGlockenspielPanel.setPaintRoutine(function(g){
		if (paintValue == 4.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("glockenspiel", a, 0, 0);
		}
	});
	attackIcons[4] = attackGlockenspielPanel;
	
	/* --- Sustain --- */
	const var sustainPianoPanel = Content.getComponent("sustainPianoPanel");
	sustainPianoPanel.loadImage("{PROJECT_FOLDER}piano.png", "piano");
	sustainPianoPanel.setPaintRoutine(function(g){
		if (paintValue == 0.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("piano", a, 0, 0);
		}
	});
	sustainIcons[0] = sustainPianoPanel;
	
	const var sustainGuitarPanel = Content.getComponent("sustainGuitarPanel");
	sustainGuitarPanel.loadImage("{PROJECT_FOLDER}guitar.png", "guitar");
	sustainGuitarPanel.setPaintRoutine(function(g){
		if (paintValue == 1.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("guitar", a, 0, 0);
		}
	});
	sustainIcons[1] = sustainGuitarPanel;
	
	const var sustainVibraphonePanel = Content.getComponent("sustainVibraphonePanel");
	sustainVibraphonePanel.loadImage("{PROJECT_FOLDER}vibraphone.png", "vibraphone");
	sustainVibraphonePanel.setPaintRoutine(function(g){
		if (paintValue == 2.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("vibraphone", a, 0, 0);
		}
	});
	sustainIcons[2] = sustainVibraphonePanel;
	
	const var sustainMarimbaPanel = Content.getComponent("sustainMarimbaPanel");
	sustainMarimbaPanel.loadImage("{PROJECT_FOLDER}marimba.png", "marimba");
	sustainMarimbaPanel.setPaintRoutine(function(g){
		if (paintValue == 3.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("marimba", a, 0, 0);
		}
	});
	sustainIcons[3] = sustainMarimbaPanel;
		
		
	const var sustainGlockenspielPanel = Content.getComponent("sustainGlockenspielPanel");
	sustainGlockenspielPanel.loadImage("{PROJECT_FOLDER}glockenspiel.png", "glockenspiel");
	sustainGlockenspielPanel.setPaintRoutine(function(g){
		if (paintValue == 4.0) {
			var a = this.getLocalBounds(0);
			g.drawImage("glockenspiel", a, 0, 0);
		}
	});
	sustainIcons[4] = sustainGlockenspielPanel;

	
	
	

    inline function loadSampleMapForSampler(sampler, value, offset) {
        sampler.loadSampleMap(sampleMaps[value - 1 + offset]);
    }

    const var attackSampler = Synth.getSampler("attackSampler");
    inline function onAttackSelectorControl(component, value) {
        loadSampleMapForSampler(attackSampler, value, 0);
        paintValue = value - 1;
        for (icon in attackIcons)
	        icon.repaintImmediately();
    }
    Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

    const var sustainSampler = Synth.getSampler("sustainSampler");
    inline function onSustainSelectorControl(component, value) {
        loadSampleMapForSampler(sustainSampler, value, 5);
        paintValue = value - 1;
        for (icon in sustainIcons)
	        icon.repaintImmediately();
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