import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import DateRandomiser from "./components/DateRandomiser";
import PasswordRandomiser from './components/PasswordRandomiser';
import NumberRandomiser from './components/NumberRandomiser';

function App() {
  return (<>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/date-randomiser/" element={<DateRandomiser />} />
        <Route path="/password-randomiser/" element={<PasswordRandomiser />} />
        <Route path="/number-randomiser/" element={<NumberRandomiser />} />
      </Routes>
    </Router>
  </>)
}

export default App;