namespace DSP {
const var sampleMaps = Sampler.getSampleMapList();

const var attackSampler = Synth.getSampler("attackSampler");
inline function onAttackSelectorControl(component, value) {
	attackSampler.loadSampleMap(sampleMaps[value - 1]);
};
Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

const var sustainSampler = Synth.getSampler("sustainSampler");
inline function onSustainSelectorControl(component, value) {
	sustainSampler.loadSampleMap(sampleMaps[value - 1 + 5]);
};
Content.getComponent("sustainSelector").setControlCallback(onSustainSelectorControl);

inline function onAttackGainControl(component, value) {
        attackGainPanel.repaint();
    };
} 

