namespace Selectors {
    const var sampleMaps = Sampler.getSampleMapList();

    // Funzione generica per caricare i SampleMap, mantenuta come funzione normale
    inline function loadSampleMapForSampler(sampler, value, offset) {
        sampler.loadSampleMap(sampleMaps[value - 1 + offset]);
    }

    // Inizializzazione del selettore dell'attacco
    const var attackSampler = Synth.getSampler("attackSampler");
    inline function onAttackSelectorControl(component, value) {
        loadSampleMapForSampler(attackSampler, value, 0);
    }
    Content.getComponent("attackSelector").setControlCallback(onAttackSelectorControl);

    // Inizializzazione del selettore del sostegno
    const var sustainSampler = Synth.getSampler("sustainSampler");
    inline function onSustainSelectorControl(component, value) {
        loadSampleMapForSampler(sustainSampler, value, 5);
    }
    Content.getComponent("sustainSelector").setControlCallback(onSustainSelectorControl);
}


