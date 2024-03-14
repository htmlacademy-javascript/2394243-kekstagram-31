const COMMENTS_TEXT = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Петр', 'Владимир', 'Карина', 'Никита', 'Кирилл', 'Эдик', 'Рушанна', 'Эвелина', 'Виталий', 'Михаил'];

const DESCRIPTIONS = ['Хорошее фото', 'Плохое фото', 'Нормальное фото', 'Красивое фото'];

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_ID = 1;
const MAX_ID = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => {
  const randomComment = getRandomArrayElement(COMMENTS_TEXT);
  const randomCommentId = Math.round(Math.random() * (100));
  const randomName = getRandomArrayElement(NAMES);

  return () => {
    const comments = {};
    comments.comment = randomComment;
    comments.id = randomCommentId;
    comments.name = randomName;
    return comments;
  };
};

const createPhotoDescription = () => {
  const randomId = getRandomInteger(MIN_ID, MAX_ID);
  const randomAvatarId = getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID);
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);

  return () => {
    const photoDescription = {};
    photoDescription.id = randomId;
    photoDescription.url = 'img/avatar-' + randomAvatarId + '.svg';
    photoDescription.description = randomDescription;
    photoDescription.likes = randomLikes;
    photoDescription.comments = Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComments());
    return photoDescription;
  };
};


let similarPhotoDescriptions = Array.from({length: 25}, createPhotoDescription());

console.log(similarPhotoDescriptions);
