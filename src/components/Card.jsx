import React from 'react';

function Card(props) {
    const { card, onCardClick } = props;
    return (
        <>
            <img
                id={card.id}
                className="element__image" 
                src={card.src}
                alt={card.alt}
                onClick={() => onCardClick(card)}
            />
            <button type="button" className="element__basket" />
            <div className="element__caption">
                <h2 className="element__title">{card.title}</h2>
                <div className="element__like-wraper">
                    <button type="button" className="element__like" />
                    <span className="element__like-number">0</span>
                </div>
            </div>
        </>
    );
}

export default Card;