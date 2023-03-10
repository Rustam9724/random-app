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
                <Link to="/number-randomiser"> 
                    <p className="random-card__icon"><b>#</b></p>
                    <p className="random-card__type">Число</p>
                </Link>
            </div>
            <div className="random-card">
                <Link to="/letter-randomiser">
                    <p className="random-card__icon"><b>&#x3B1;</b></p>
                    <p className="random-card__type">Буква</p>
                </Link>
            </div>
            <div className="random-card">
                <Link to="/yesno-randomiser">
                    <p className="random-card__icon">&#x1F44D;&#128078;</p>
                    <p className="random-card__type">Да или нет</p>
                </Link>
            </div>
            <div className="random-card">
                <Link to={"/color-randomiser"}>
                    <p className="random-card__icon">&#127912;</p>
                    <p className="random-card__type">Цвета</p>
                </Link>
            </div>
        </div>
    </>
}

export default Main;