(() => {
    window.document.writeln("Hola Mundo Desde El DOM");
    console.log("Hola Mundo");

    enum AudioLevel {
        min = 1,
        medium,
        medium2,
        max = 20,
    }
    
    console.log(AudioLevel);

    let currentAudio1: AudioLevel = AudioLevel.min;
    let currentAudio2: AudioLevel = AudioLevel.medium;
    let currentAudio3: AudioLevel = AudioLevel.medium2;
    let currentAudio4: AudioLevel = AudioLevel.max;

    console.log(currentAudio1);
    console.log(currentAudio2);
    console.log(currentAudio3);
    console.log(currentAudio4);
})();