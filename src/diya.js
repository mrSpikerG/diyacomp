import React from 'react';


class Diya extends React.Component {
    render() {
        return (
            <div className='diya-cell'>
                <div className='diya-cell__header'>
                    <div className='diya-cell__main-header'>
                        <p className='diya-header'>Нова система розрахунку</p>
                        <p className='Ruslans-commentary'>написать отдельным <br />компонентом</p>
                    </div>
                    <p className='Ruslans-commentary Ruslans-commentary__lefter'>https://rozmytnennia.diia.gov.ua/  </p>
                    <p className='Ruslans-commentary Ruslans-commentary__upper '> &lt;----- пример с</p>
                </div>
                <div className='diya-cell__body'>
                    <div className='diya-cell__container'>
                        <div className='diya-cell__container-left'>
                            <div className='diya-cell__year-input input'>
                                <span className="inputLabel">Рік виготовлення</span>
                                <input id="yearData" className="input-number" type="number" min="1900" max="2022" placeholder="XXXX"></input>
                            </div>
                            <div className='diya-cell__type-select input'>
                                <span className="inputLabel">Тип двигуна</span>
                                <select id="engineData" required>
                                    <option value="" selected disabled>Оберіть зі списку</option>
                                    <option value="1">Бензин</option>
                                    <option value="1">Газ</option>
                                    <option value="1.2">Дизель</option>
                                    <option value="0.5">Гібрид</option>
                                    <option value="100">Електрокар</option>
                                </select>
                                <svg className="selectIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.38411 11.5391C8.18421 11.7789 7.81579 11.7789 7.61589 11.5391L3.68341 6.82009C3.41202 6.49443 3.6436 6 4.06752 6L11.9325 6C12.3564 6 12.588 6.49443 12.3166 6.82009L8.38411 11.5391Z" fill="black"></path>
                                </svg>

                            </div>
                            <div className='diya-cell__engine-capacity input'>
                                <span className="inputLabel">Робочий об’єм двигуна, см³</span>
                                <input id="capacityData" className="input-number" type="number" pattern="/\d+/" placeholder="XXXX"></input>
                            </div>

                            <div className='checkbox-container'>
                                <label className="switch">
                                    <input type="checkbox"></input>
                                    <span className="slider round"></span>
                                </label>
                                <label htmlFor="exclusiveData" className="checkbox-text">Ексклюзивне авто</label>
                                <a id="calcButton" href="#" >Розрахувати</a>
                            </div>
                        </div>
                       
                        <div className='diya-cell__container-right'>
                            <div className="result-total resultShow">
                                <div id="resultExTax" className="result-text">
                                    <div>Акцизний податок:</div>
                                    <div className="results-num-box">
                                        <div className="eur-text">€<span className="eur">630</span></div>
                                        <div>≈ <span className="uah">24&nbsp;611</span> грн</div>
                                    </div>
                                </div>
                                <div id="resultVat" className="result-text">
                                    <div>ПДВ:</div>
                                    <div className="results-num-box">
                                        <div className="eur-text">€<span className="eur">882</span></div>
                                        <div>≈ <span className="uah">34&nbsp;455</span> грн</div>
                                    </div>
                                </div>
                                <div id="resultTotal" className="result-text total">
                                    <div>Загалом:</div>
                                    <div className="results-num-box">
                                        <div className="eur-text">€<span className="eur">1&nbsp;512</span></div>
                                        <div>≈ <span className="uah">59&nbsp;065</span> грн</div>
                                    </div>
                                </div>
                            </div>
                            <a data-w-id="d77279d5-33d4-4467-ea4d-f8e36bc8a6c3" href="#" className="calc-button-about">Детальніше про розрахунок</a>
                        </div>

                    </div>
                </div>
                <div className='diya-cell__footer'>
                    <div className="calc-bottom">








                    </div>
                </div>
            </div>
        );
    }
}

export default Diya;