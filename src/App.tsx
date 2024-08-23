// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import { Compositions, VideoPlayer } from "./components/VideoPlayer";
const App: React.FC = () => {
  const [currentComposition, setCurrentComposition] = useState<Compositions>(
    Compositions.Composition1
  );

  return (
    <div>
      <h1>Video Composition Preview</h1>
      <div className="flex gap-4">
        <button
          style={{
            backgroundColor:
              currentComposition === Compositions.Composition1 ? "white" : "",
            color:
              currentComposition === Compositions.Composition1 ? "#1a1a1a" : "",
          }}
          onClick={() => setCurrentComposition(Compositions.Composition1)}
        >
          Composition 1
        </button>
        <button
          style={{
            backgroundColor:
              currentComposition === Compositions.Composition2 ? "white" : "",
            color:
              currentComposition === Compositions.Composition2 ? "#1a1a1a" : "",
          }}
          onClick={() => setCurrentComposition(Compositions.Composition2)}
        >
          Composition 2
        </button>
        <button
          style={{
            backgroundColor:
              currentComposition === Compositions.Composition3 ? "white" : "",
            color:
              currentComposition === Compositions.Composition3 ? "#1a1a1a" : "",
          }}
          onClick={() => setCurrentComposition(Compositions.Composition3)}
        >
          Composition 3
        </button>
      </div>
      <VideoPlayer compositionId={currentComposition} />
    </div>
  );
};
export default App;
