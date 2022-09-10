import React from 'react';

function PopupWithForm(props) {
    const {name, title, typeSubm, textButton, isOpen, setIsOpen, children} = props;
    return (
        <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`} onClick={() => setIsOpen(false)} >
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <button type="button" className="popup__close" onClick={() => setIsOpen(false)}/>
                <h3 className="popup__title">{title}</h3>
                <form action='#' className={`popup__form ${name}`} name={`${name}`} noValidate>
                    {children}
                    <button type="submit" className={`popup__button popup__button_type_${typeSubm}`}>{textButton}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;