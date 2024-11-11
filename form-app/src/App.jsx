function App() {
  const characters = [
    {
      name: 'Daichi Sawamura',
      position: 'Captain/Opposite Hitter',
      image: './daichi.webp',
    },
    {
      name: 'Tobio Kageyama',
      position: 'Setter',
      image: './Kageyama.webp',
    },
    {
      name: 'Ryunosuke Tanaka',
      position: 'Open Hitter',
      image: './Tanaka.webp',
    },
    {
      name: 'Asahi Azumane',
      position: 'Open Hitter',
      image: './Asahi.webp',
    },
    {
      name: 'Shoyo Hinata',
      position: 'Middle Blocker',
      image: './Hinata.webp',
    },
    {
      name: 'Kei Tsukishima',
      position: 'Middle Blocker',
      image: './Tsukishima.webp',
    },
    {
      name: 'Yu Nishinoya',
      position: 'Libero',
      image: './Nishinoya.webp',
    },
    {
      name: 'Tadashi Yamaguchi',
      position: 'Service Specialist',
      image: './Yamaguchi.webp',
    },
  ];

  return (
    <>
      <form action="">
        <img id="mb-logo" src="./mb.png" alt="Metrobank" height="100em" />
        <label>
          First Name <br />
          <input className="field" type="input" placeholder="First Name" />
        </label>
        <label>
          Last Name <br />
          <input className="field" type="input" placeholder="Last Name" />
        </label>
        <label>
          Email <br />
          <input className="field" type="email" placeholder="Email" />
        </label>
        <label>
          Password <br />
          <input className="field" type="password" placeholder="Password" />
        </label>
        <button className="field" type="submit">Submit</button>
      </form>

      <div className="character-container">
      <img id="haikyuu-logo" src="./haikyuu.png" alt="Haikyuu" height="100em" />
        <h2>Karasuno High School</h2>
        <div className="character-list">
          {characters.map((character) => {
            return (
              <div key={character.name}>
                <img src={character.image} alt={character.name} height="150em" width="250em"/>
                <h3>{character.name}</h3>
                <p>{character.position}</p>
              </div>
            );
          })}
        </div>
      </div>
      <footer>Developed by: Oelch James Balbares</footer>
    </>
  );
}

export default App;
