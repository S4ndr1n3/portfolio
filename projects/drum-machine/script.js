const { useEffect } = React;

const sounds = [
  { key: "Q", name: "Heater 1", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
  { key: "W", name: "Heater 2", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
  { key: "E", name: "Heater 3", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
  { key: "A", name: "Heater 4", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
  { key: "S", name: "Clap", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
  { key: "D", name: "Open-HH", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick-n'-Hat", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed-HH", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
];

function DrumPad({ keyTrigger, clip, name, onPlay }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        document.getElementById(keyTrigger).play();
        onPlay(name);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleClick = () => {
    document.getElementById(keyTrigger).play();
    onPlay(name);
  };

  return (
    <div
      className="drum-pad"
      id={name}
      onClick={handleClick}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip}></audio>
    </div>
  );
}

function DrumMachine() {
  const [display, setDisplay] = React.useState("Press a pad");

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-grid">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.key}
            keyTrigger={sound.key}
            clip={sound.url}
            name={sound.name}
            onPlay={setDisplay}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
