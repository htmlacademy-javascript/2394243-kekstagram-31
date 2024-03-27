import {getRandomArrayElement} from "./util";

// Создание комментариев

const COMMENTS_TEXT = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Петр', 'Владимир', 'Карина', 'Никита', 'Кирилл', 'Эдик', 'Рушанна', 'Эвелина', 'Виталий', 'Михаил'];

const createComments = () => {
  const randomComment = getRandomArrayElement(COMMENTS_TEXT);
  const randomCommentId = Math.round(Math.random() * (100));
  const randomName = getRandomArrayElement(NAMES);

  return {
    comment: randomComment,
    id: randomCommentId,
    name: randomName,
  };
};

export {createComments};
