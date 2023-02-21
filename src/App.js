
import './App.css';
import Configure from './configure/configure';
import Box from './desc_box/box';
import Drop from './dropdown/drop';
import Other from './elements/element';
import Header from './header/header';
import Tracker from './tracker/tracker';

function App() {
  return (
    <div className="form">
         <div className = 'container'>
              <Header/>
              <Drop/>
              <Box/>
              <Other/>
              <Tracker/>
              <Configure/>
         </div>
    </div>
  );
}

export default App;
