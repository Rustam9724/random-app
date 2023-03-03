import { Link } from 'react-router-dom';

function Main() {
    return <>
        <header className="header">
            Выберите рандомайзер
        </header>
        <div className="main">
            <div className="random-card">
                <Link to="/date-randomiser">
                    <p className="random-card__icon">&#128197;</p>
                    <p className="random-card__type">Дата</p>
                </Link>
            </div>
            <div className="random-card">
                <Link to="/password-randomiser"> 
                    <p className="random-card__type">Пароли</p>
                    <p className="random-card__icon">&#128274;</p>
                </Link>
            </div>
            <div className="random-card">
                <p className="random-card__icon"><b>#</b></p>
                <p className="random-card__type">Число</p>
            </div>
            <div className="random-card">
                <p className="random-card__icon"><b>&#x3B1;</b></p>
                <p className="random-card__type">Буква</p>
            </div>
            <div className="random-card">
                <p className="random-card__icon">&#x1F44D;&#128078;</p>
                <p className="random-card__type">Да или нет</p>
            </div>
            <div className="random-card">
                <p className="random-card__icon">&#127912;</p>
                <p className="random-card__type">Цвета</p>
            </div>
        </div>
    </>
}

export default Main;