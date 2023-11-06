import { CharacterList } from "./components/CharacterList";



function App() {
  return (
    <main className="bg-accent flex flex-col justify-center items-center">
      
      <img
        src="https://1000marcas.net/wp-content/uploads/2021/05/Clash-Royale-logo.png"
        alt="Clash Royale"
        className="h-60"
        style={{ zIndex: 1 }}
      />
      <CharacterList />
    </main>
  );
}

export default App;
