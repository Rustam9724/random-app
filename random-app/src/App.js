import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
import DateRandomiser from "./components/DateRandomiser";

function App() {
  return (<>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/date-randomiser/" element={<DateRandomiser />} />
      </Routes>
    </Router>
  </>)
}

export default App;