import { showVocab } from '../pages/vocab';
import { getVocab, createVocab, updateVocab } from '../api/vocabData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING A VOCAB
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
