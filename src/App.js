
import './App.css';
import MyLineChart from './component/MyLineChart/MyLineChart';
import SpecialChart from './component/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
     to: { opacity: 1 }, 
     from: { opacity: 0 },
     reset: true,
     reverse: flip,
     delay: 200,
     onRest: () => set(!flip),
    })
  return (
    <div className="App">
      
      <animated.div style={props}><h1>My line Chart</h1></animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}


export default App;
