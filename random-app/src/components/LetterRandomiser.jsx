import { Link } from "react-router-dom";
import { useState } from "react";

function LetterRandomiser() {
    const [language, setLanguage] = useState('english')
    const [result, setResult] = useState('');

    function reset() {
        setLanguage('english');
        setResult('');
    }

    function getRandomLetter() {
        if (language === 'english') {
            setResult(String.fromCharCode(Math.floor(Math.random() * 26) + 65))
        } else {
            setResult(String.fromCharCode(Math.floor(Math.random() * 32) + 1040))
        }
    }

    function changeHandler(event) {
        if (event.target.value !== language) {
            setLanguage(event.target.value)
        }
    }

    return (
        <>
            <header className="header letter-header">
                Получить букву 
            </header>
            <div className="control-panel">
                <Link to="/">
                    <button className="control-btn">← Вернуться</button>
                </Link>
                <button className="control-btn" onClick={reset}>Сбросить</button>
            </div>
            <main className="letters-main">
                <div className="letters-inputs">
                    <input type="radio" name="letters-language" id="letters-en-language" checked={language === 'english' ? true : false} onChange={(event) => changeHandler(event)} value="english"/>
                    {/* <label className="numbers-label">
                        <span>Минимум:</span>
                        <input type="text" value={minimum} onChange={(event) => setMinimum(+event.target.value)}/>
                    </label> */}
                    <input type="radio" name="letters-language" id="letters-ru-language"  checked={language === 'russian' ? true : false} onChange={(event) => changeHandler(event)} value="russian"/>
                    {/* <label className="numbers-label">
                        <span>Максимум:</span>
                        <input type="text" value={maximum} onChange={(event) => setMaximum(+event.target.value)}/>
                    </label> */}
                </div>
                <div className="letters-resultblock">
                    <div className="letters-result result">{result}</div>
                    <button className="btn numbers-btn" onClick={getRandomLetter}>Сгенерировать</button>
                </div>
            </main>
        </>
    )   
}

export default LetterRandomiser;