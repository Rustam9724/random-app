import { Link } from 'react-router-dom';
import { useState } from 'react';

function PasswordRandomiser() {
    const [isNumbers, setIsNumbers] = useState(true);
    const [isLowerCase, setIsLowerCase] = useState(true);
    const [isUpperCase, setIsUpperCase] = useState(true);
    const [isSymbols, setIsSymbols] = useState(true);
    const [passwordLength, setPasswordLength] = useState(10);
    const [combination, setCombination] = useState(['numbers', 'lower-case', 'upper-case', 'symbols']);   
    const [result, setResult] = useState('');
    const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];

    function getRandomPassword() {
        let currentResult = '';
        for (let i = 1; i <= passwordLength; i++) { 
            const combinationItemNumber = Math.floor(Math.random() * combination.length)
            if (combination[combinationItemNumber] === 'numbers') {
                currentResult += Math.floor(Math.random() * 9) + 1;
            } else if (combination[combinationItemNumber] === 'lower-case') {
                currentResult += String.fromCharCode(Math.floor(Math.random() * 26) + 97) 
            } else if (combination[combinationItemNumber] === 'upper-case') {
                currentResult += String.fromCharCode(Math.floor(Math.random() * 26) + 65) 
            } else if (combination[combinationItemNumber] === 'symbols') {
                currentResult += symbols[Math.floor(Math.random() * 32)];
            }
        }   
        setResult(currentResult);
    }

    function reset() {
        setResult('');
        setIsNumbers(true);
        setIsLowerCase(true);
        setIsUpperCase(true);
        setIsSymbols(true);
        setCombination(['numbers', 'lower-case', 'upper-case', 'symbols']);
    }

    function checkHandler(event) {
        switch (event.target.dataset.symboltype) {
            case "numbers":
                setIsNumbers(!isNumbers);
                if (combination.includes('numbers')) {
                    setCombination(combination.filter(item => item !== 'numbers'));
                } else {
                    setCombination([...combination, 'numbers']);
                }
                break;
            case "lower-case":
                setIsLowerCase(!isLowerCase);
                if (combination.includes('lower-case')) {
                    setCombination(combination.filter(item => item !== 'lower-case'));
                } else {
                    setCombination([...combination, 'lower-case']);
                }
                break;
            case "upper-case":
                setIsUpperCase(!isUpperCase);
                if (combination.includes('upper-case')) {
                    setCombination(combination.filter(item => item !== 'upper-case'));
                } else {
                    setCombination([...combination, 'upper-case']);
                }
                break; 
            case "symbols":
                setIsSymbols(!isSymbols);
                if (combination.includes('symbols')) {
                    setCombination(combination.filter(item => item !== 'symbols'));
                } else {
                    setCombination([...combination, 'symbols']);
                }
                break; 
            default:
                console.error('Error!')
        }
    }
    
    return (
        <>
            <header className="header password-header">
                Создание пароля
            </header>
            <div className="control-panel">
                <Link to="/">
                    <button className="control-btn">← Вернуться</button>
                </Link>
                <button className="control-btn" onClick={reset}>Сбросить</button>
            </div>
            <main className="password-main">
                <div className="password-checkboxes">
                    <label>
                        <span>Цифры</span>
                        <input data-symboltype="numbers" type="checkbox" checked={isNumbers} onChange={(event) => checkHandler(event)}/>
                    </label>
                    <label>
                        <span>Строчные буквы</span>
                        <input data-symboltype="lower-case" type="checkbox" checked={isLowerCase} onChange={(event) => checkHandler(event)}/>
                    </label>
                    <label>
                        <span>Прописные буквы</span>
                        <input data-symboltype="upper-case" type="checkbox" checked={isUpperCase} onChange={(event) => checkHandler(event)}/>
                    </label>
                    <label>
                        <span>Символы</span>
                        <input data-symboltype="symbols" type="checkbox" checked={isSymbols} onChange={(event) => checkHandler(event)}/>
                    </label>
                    <label>
                        <span>Длина пароля:</span>
                        <input type="text" value={passwordLength} onChange={(event) => setPasswordLength(event.target.value)}/>
                    </label>
                </div>
                <div className="password-resultblock">
                    <div className="result">{result}</div>
                    <button onClick={getRandomPassword}>Сгенерировать</button>
                </div>
            </main>
        </>
    )
}

export default PasswordRandomiser;