
import './App.css'
import quotes from './modulos/quotes.json'
import { useState } from "react";


const colors=["#263238","#1565C0 ","#00FF33","#3300FF","#330000 ","#fdcae1","#fabfb7","#fdf9c4","#c5c6c8","#b2e2f2","#98f6a9","#4afde7","#eef6b0","#5086c1","#c999af","#42ab49","#77dd77","#a68069","#ecd6c0","#75f9f2"];


function App() {

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeUser = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  
  document.body.style = `background: ${color}`;
    


  return (
    <div className="App">
      <div className='card'style={{ color: color }} >
      
        
        <p><i class="fa-solid fa-quote-left"></i> <br/>{quotes[index].quote}</p>
        <div className='textSmall'><small>{quotes[index].author}</small></div>
        <div className='buttonNext'>
        <button onClick={changeUser}style={{ background: color }} ><i style={{ color: "rgba(11, 11, 11, 0.494)" }}class="fa-solid fa-forward" ></i></button>
        </div>
        </div>
    </div>
  )
}

export default App
