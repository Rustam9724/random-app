import { Link } from "react-router-dom";
import { useState } from "react";

function YesOrNoRandomiser() {
    const [result, setResult] = useState('');

    function reset() {
        setResult('');
    }

    function getMeaning() {
        setResult(Math.floor(Math.random() * 2) === 1 ? 'Да' : 'Нет')
    }

    return (
        <>
            <header className="header yesno-header">
                Да или нет
            </header>
            <div className="control-panel">
                <Link to="/">
                    <button className="control-btn">← Вернуться</button>
                </Link>
                <button className="control-btn" onClick={reset}>Сбросить</button>
            </div>
            <main className="yesno-main">
                <div className="result yesno-result">{result}</div>
                <button className="btn yesno-btn" onClick={getMeaning}>Сгенерировать</button>
            </main>
        </>
    )   
}

export default YesOrNoRandomiser;