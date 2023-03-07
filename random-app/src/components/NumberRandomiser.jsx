import { Link } from "react-router-dom";
import { useState } from "react";


function NumberRandomiser() {
    const [minimum, setMinimum] = useState(0);
    const [maximum, setMaximum] = useState(10);
    const [result, setResult] = useState(null);

    function reset() {
        setMinimum(0);
        setMaximum(10);
        setResult(null);
    }

    function getRandomNumber() {
        setResult(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum)
    }
    
    return (
        <>
            <header className="header number-header">
                Получить число 
            </header>
            <div className="control-panel">
                <Link to="/">
                    <button className="control-btn">← Вернуться</button>
                </Link>
                <button className="control-btn" onClick={reset}>Сбросить</button>
            </div>
            <main className="numbers-main">
                <div className="numbers-inputs">
                    <label className="numbers-label">
                        <span>Минимум:</span>
                        <input type="text" value={minimum} onChange={(event) => setMinimum(+event.target.value)}/>
                    </label>
                    <label className="numbers-label">
                        <span>Максимум:</span>
                        <input type="text" value={maximum} onChange={(event) => setMaximum(+event.target.value)}/>
                    </label>
                </div>
                <div className="numbers-resultblock">
                    <div className="numbers-result result">{result}</div>
                    <button className="btn numbers-btn" onClick={getRandomNumber}>Сгенерировать</button>
                </div>
            </main>
        </>
    )   
}

export default NumberRandomiser