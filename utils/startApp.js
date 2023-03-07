import { getVocab } from '../api/vocabData';
import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBar';
import { showVocab } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  getVocab().then((vocabulary) => showVocab(vocabulary));
};

export default startApp;
