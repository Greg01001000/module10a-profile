// https://github.com/Greg01001000/module10a-profile

import Profile from './Profile';

function App() {
  document.getElementById('root').style.margin = 'auto';
  return (
    <div>
      <Profile
        name="Ludwig van Beethoven"
        occupation="Musician"
        funFact="Beethoven is celebrated for his music's intense emotion, dramatic flair, and revolutionary pushing of musical boundaries."
        imageUrl="https://cso.org/media/g1kbjynd/beethoven-ludwig.jpg"
      />
    </div>
  );
}

export default App;
