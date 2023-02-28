import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers';
import About from './containers/about';
import StringList from './containers/stringlist';
import AddString from './containers/addstring'
import ReSelect from './containers/reselect'
import Demo from './containers/demo';



function App() {

  return (
    <div className='APP'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/StringList' element={<StringList />} />
          <Route path='/AddString' element={<AddString />} />
          <Route path='/demo' exact element={<Demo />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
