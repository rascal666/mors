/** @format */

import React from 'react';
import s from './priseServices.module.css';

const PriseServices = (props) => {
    const aff = {
        "data-company-contacts-url": "https://one-shop.pulscen.ru/contacts",
        "data-company-name": "Магазин онлайн сервисов",
        "data-params": '{"company_id":"99701862", "message":"Добрый день! Меня интересует услуга Турбопоиск на Пульс цен."}',
        "onclick": "dataLayer.push({ 'event':'GAevent', 'eventCategory':'МОРС', 'eventAction':'Переход по кнопке: подробнее', 'eventLabel':'Турбопоиск'})"
    }

    const idd = "'99701862'"
    const tit = 'Турбопоиск'
    // const message = 'Добрый день! Меня интересует услуга' + ` ${tit} ` + 'на Пульс цен.' + `dataLayer.push({ "event":"GAevent", "eventCategory":"МОРС", "eventAction":"Переход по кнопке: подробнее", "eventLabel" ${message}}`
    // const fff = '{"company_id":"99701862", "message":"Добрый день! Меня интересует услуга Турбопоиск на Пульс цен."}'
    // const fff = `{"company_id": ${idd}, "message": ${message}}`
    return (
        <div className={s.priseServices}>
            <p className={s.priseServices__title}>СТОИМОСТЬ И ЗАКАЗ УСЛУГИ</p>
            <p><span className={s.priseServices__price}>{props.servisePrice}</span> {props.servisePriceNote}</p>
            <div className={s.priseServices__button} {...aff} > Заказать</div>
        </div>
    );
};

export default PriseServices;
