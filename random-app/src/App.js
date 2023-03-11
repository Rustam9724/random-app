import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import DateRandomiser from "./components/DateRandomiser";
import PasswordRandomiser from './components/PasswordRandomiser';
import NumberRandomiser from './components/NumberRandomiser';
import LetterRandomiser from './components/LetterRandomiser';
import YesOrNoRandomiser from './components/YesOrNoRandomiser';
import ColorRandomiser from './components/ColorRandomiser';

function App() {
  return (<>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/date-randomiser/" element={<DateRandomiser />} />
        <Route path="/password-randomiser/" element={<PasswordRandomiser />} />
        <Route path="/number-randomiser/" element={<NumberRandomiser />} />
        <Route path="/letter-randomiser/" element={<LetterRandomiser />} />
        <Route path="/yesno-randomiser/" element={<YesOrNoRandomiser />} />
        <Route path="/color-randomiser/" element={<ColorRandomiser />} />
      </Routes>
    </Router>
  </>)
}

export default App;