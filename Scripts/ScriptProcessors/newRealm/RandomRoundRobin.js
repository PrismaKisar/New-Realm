const var attackSampler = Synth.getSampler("attackSampler");
const var sustainSampler = Synth.getSampler("sustainSampler");
attackSampler.enableRoundRobin(false);function onNoteOn()
{
	//attackSampler.setActiveGroup(Math.randInt(1, 4));
	//sustainSampler.setActiveGroup(Math.randInt(1, 4));
	Console.print(Math.randInt(1, 4));	
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
 