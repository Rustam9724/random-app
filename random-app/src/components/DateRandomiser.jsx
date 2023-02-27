import { useState } from 'react';
import { Link } from 'react-router-dom';

function DateRandomiser() {
    const [result, setResult] = useState([])

    function getRandomDay() {
        const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        setResult([...result, days[Math.floor(Math.random() * 7)]]);
    }
    
    function getRandomTime() {
        const newTime = `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`
        if (newTime.match(/^\d{2}:\d{2}$/)) {
            setResult([...result, newTime]);
        } else {
            getRandomTime();
        }
    }

    function getRandomDate() {
        setResult([...result, Math.floor(Math.random() * 31) + 1]);     
    }

    function getRandomMonth() {
        const monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        setResult([...result, monthes[Math.floor(Math.random() * 13)]]);
    }

    return (
        <>
        <header className="date-header">
            Случайная дата
        </header>
        <main className="date-main">
            <div className="control-panel">
                <Link to="/">
                    ← Вернуться
                </Link>
                <button className="btn" onClick={() => setResult([])}>Сбросить</button>
            </div>
            <div className="date-result">
                {result}
            </div>
            <div className="date-buttons">
                <button className="btn" onClick={getRandomDay}>День недели</button>
                <button className="btn" onClick={getRandomTime}>Время</button>
                <button className="btn" onClick={getRandomDate}>Число</button>
                <button className="btn" onClick={getRandomMonth}>Месяц</button>
            </div>
        </main>
        </>
    )
}

export default DateRandomiser;