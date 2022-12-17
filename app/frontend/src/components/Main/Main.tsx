import React from 'react';
import '../Fonts/stylesheet.css';
import Header from '../Header/Header';

const Main: React.FC = () => {
    return (
        <><Header /><main className="page__main">
            <div className="container">
                <section className="main__content">
                    <h1 className="main__title">Web Work</h1>
                    <p className="main__text">Данная площадка была создана для сотрудников нашей компании, в которой они смогут получить доступ к обучающим и рабочим материалам</p>
                    <button className="button">Подробнее</button>
                </section>
            </div>
        </main></>
    )
}

export default Main