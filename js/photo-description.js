import { getRandomInteger } from "./util";
import { getRandomArrayElement} from "./util";
import { createComments } from "./commentary";

// Создание описание фото

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_ID = 1;
const MAX_ID = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const DESCRIPTIONS = ['Хорошее фото', 'Плохое фото', 'Нормальное фото', 'Красивое фото'];

const createPhotoDescription = () => {
  const randomId = getRandomInteger(MIN_ID, MAX_ID);
  const randomAvatarId = getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);

  return {
    id: randomId,
    url: `img/${ randomAvatarId }.svg`,
    description: randomDescription,
    likes: randomLikes,
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComments),
  };
};

export {createPhotoDescription};
