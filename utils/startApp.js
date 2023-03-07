import { getVocab } from '../api/vocabData';
import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/shared/navBar';
import { showVocab } from '../pages/vocab';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getVocab(user.id).then((vocabulary) => showVocab(vocabulary));
};

export default startApp;
