
import './App.css';
import Tooltip from './Tooltip';

function App() {

 const tooltipPosition = {
    top:"top",
    bottom:"bottom",
    left:'left',
    right:'right'
  }



  return (
    <div className="App">
      <Tooltip position = {tooltipPosition}></Tooltip>
      
    </div>
  );
}

export default App;
