namespace GUI {
	const var background = Content.getComponent("background");
    background.loadImage("{PROJECT_FOLDER}background.png", "background");
    background.setPaintRoutine(function (g) {
        var a = [0, 0, 900, 600];
        g.drawImage("background", a, 0, 0);
    });
	
	
}