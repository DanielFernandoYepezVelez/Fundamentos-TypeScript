"use strict";
(() => {
    window.document.writeln("Hola Mundo Desde El DOM");
    console.log("Hola Mundo");
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 20] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    let currentAudio1 = AudioLevel.min;
    let currentAudio2 = AudioLevel.medium;
    let currentAudio3 = AudioLevel.medium2;
    let currentAudio4 = AudioLevel.max;
    console.log(currentAudio1);
    console.log(currentAudio2);
    console.log(currentAudio3);
    console.log(currentAudio4);
})();
