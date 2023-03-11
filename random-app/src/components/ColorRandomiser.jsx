import { Link } from "react-router-dom";
import { useState } from "react";

function ColorRandomiser() {
    const [color, setColor] = useState('white');
    const [isGradient, setIsGradient] = useState(false);

    function reset() {
        setColor('white');
    }

    function getColor() {
        if (isGradient) {
            setColor(`linear-gradient(rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}), rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}))`)
        } else {
            setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
        }
    }

    const sectionStyle = {
        background: color,
    }

    return (
        <section className="color-section" style={sectionStyle}>
            <header className="header color-header">
                Выбрать цвет
            </header>
            <div className="control-panel">
                <Link to="/">
                    <button className="control-btn">← Вернуться</button>
                </Link>
                <button className="control-btn" onClick={reset}>Сбросить</button>
            </div>
            <main className="color-main">
                <div className="color-inputs">
                    <input className="color-input" type="radio" name="color-gradient" id="color-gradient-on" checked={isGradient} onChange={() => setIsGradient(!isGradient)} hidden/>
                    <label className="color-label" htmlFor="color-gradient-on">
                        Градиент
                    </label>
                    <input className="color-input" type="radio" name="color-language" id="color-gradient-off"  checked={!isGradient} onChange={() => setIsGradient(!isGradient)} hidden/>
                    <label className="color-label" htmlFor="color-gradient-off">
                        Обычный
                    </label>
                </div>
                <button className="btn yesno-btn" onClick={getColor}>Сгенерировать</button>
            </main>
        </section>
    )   
}

export default ColorRandomiser;