import {
  getVocab, htmlVocab, cssVocab, jsVocab
} from '../api/vocabData';
import { signOut } from '../utils/auth';
import { showVocab } from '../pages/vocab';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL VOCAB
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#all-btn').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#html-vocab').addEventListener('click', () => {
    htmlVocab(user.uid).then(showVocab);
  });

  document.querySelector('#css-vocab').addEventListener('click', () => {
    cssVocab(user.uid).then(showVocab);
  });

  document.querySelector('#js-vocab').addEventListener('click', () => {
    jsVocab(user.uid).then(showVocab);
  });

  document.querySelector('#html-btn').addEventListener('click', () => {
    htmlVocab(user.uid).then(showVocab);
  });

  document.querySelector('#css-btn').addEventListener('click', () => {
    cssVocab(user.uid).then(showVocab);
  });

  document.querySelector('#js-btn').addEventListener('click', () => {
    jsVocab(user.uid).then(showVocab);
  });
};
export default navigationEvents;
