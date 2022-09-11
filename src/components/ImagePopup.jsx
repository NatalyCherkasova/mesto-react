import React from 'react';

function ImagePopup(props) {
    const { card, onClose } = props;
    return (
        <div className={(card === "") ? 'popup popup_type_picture' : 'popup popup_type_picture popup_opened'} onClick={() => onClose("")}>
            <div className="popup__picture-cover">
                <button type="button" className="popup__close picture-close" onClick={() => onClose("")}/>
                <figure className="popup__picture-box" onClick={e => e.stopPropagation()}>
                    <img
                        className="popup__picture"
                        src={card.src}
                        alt={card.alt}
                    />
                    <figcaption className="popup__caption">{card.title}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;