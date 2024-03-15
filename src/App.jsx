import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="EASY" targettime={1}/>
        <TimerChallenge title="NOT EASY" targettime={5}/>
        <TimerChallenge title="GETTING TOUGH" targettime={10}/>
        <TimerChallenge title="PROS ONLY" targettime={15}/>
      </div>
    </>
  );
}

export default App;
