import "../App.css";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  const [selectedCard, setSelectedCard] = useState("null");

  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);

  return (
    <div className="page">
      <div className="root">
        <Header />
        <Main
          handleEditProfileClick={setProfilePopupOpen}
          handleAddPlaceClick={setPlacePopupOpen}
          handleEditAvatarClick={setAvatarPopupOpen}
          handleCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          setIsOpen={setProfilePopupOpen}
          name="profile-form"
          title="Редактировать профиль"
          typeSubm="profile-submit"
          textButton="Сохранить"
        >
          <input
            id="name-input"
            type="text"
            name="profile-form-name"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="name-input-error popup__input-error" />
          <input
            id="ocupation-input"
            type="text"
            name="profile-form-ocupation"
            placeholder="О себе"
            className="popup__input popup__input_type_ocupation"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="ocupation-input-error popup__input-error" />
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          setIsOpen={setPlacePopupOpen}
          name="adding-form"
          title="Новое место"
          typeSubm="adding-submit"
          textButton="Создать"
        >
          <input
            id="title-input"
            type="text"
            name="adding-form-title"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="title-input-error popup__input-error" />
          <input
            id="link-input"
            type="url"
            name="adding-form-link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required=""
          />
          <span className="link-input-error popup__input-error" />
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          setIsOpen={setAvatarPopupOpen}
          name="avatar-form"
          title="Обновить аватар"
          typeSubm="avatar-submit"
          textButton="Сохранить"
        >
          <input
            id="avatar-input"
            type="url"
            name="avatar-form-link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required=""
          />
          <span className="avatar-input-error popup__input-error" />
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={setSelectedCard}></ImagePopup>
      </div>
    </div>
  );
}

export default App;
