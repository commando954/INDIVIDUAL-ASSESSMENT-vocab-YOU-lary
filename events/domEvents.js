import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
import viewVocab from '../pages/viewVocab';
// import getVocabDetails from '../api/vocabDetails';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A VOCAB
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user.uid);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabularyObj) => addVocabForm(user.uid, vocabularyObj));
    }

    // TODO: CLICK EVENT FOR VIEW VOCAB DETAILS
    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewVocab(firebaseKey).then(viewVocab);
    }
  });
};

export default domEvents;
