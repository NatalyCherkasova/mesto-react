import { useEffect, useState } from 'react';
import profileAvatar from '../images/avatar.png';
import avatarLoadBtn from '../images/big_pancil.svg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [cards, setCards] = useState([]);

  const [userName, setUserName] = useState(profileAvatar);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);

  const { handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick } = props;

  useEffect(() => {
    api.getProfileInfo()
      .then(ProfileInfo => {
        setUserName(ProfileInfo.name);
        setUserDescription(ProfileInfo.about);
        setUserAvatar(ProfileInfo.avatar);
      })
      .catch((err) =>
        console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(InitialCards => {
        setCards(
          InitialCards.map(card => ({
            id: card.id,
            title: card.name,
            src: card.link,
            alt: card.name,
          }))
        )
      })
      .catch((err) =>
        console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-cover">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар_фото"
          />
          <div className="profile__avatar-load-button-cover" onClick={() => handleEditAvatarClick(true)}>
            <img
              className="profile__avatar-load-button"
              src={avatarLoadBtn}
              alt="Редактировать аватар"
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-cover">
            <h1 className="profile__text profile__text_type_name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={() => handleEditProfileClick(true)} />
          </div>
          <p className="profile__text profile__text_type_ocupation">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={() => handleAddPlaceClick(true)} />
      </section>
      <section className="elements">
        <ul className="elements__grid"></ul>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) => {
            return <li key={card.id} className="element">
              <Card
                card={card}
                onCardClick={handleCardClick}
              />
            </li>
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;