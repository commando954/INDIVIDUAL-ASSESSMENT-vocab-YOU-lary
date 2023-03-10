import { getSingleVocab } from './vocabData';

// TODO: Get data for viewVocab
const getVocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE VOCAB
  getSingleVocab(firebaseKey).then((vocabularyObject) => { // returns single vocab object
    getSingleVocab(firebaseKey) // we nest this promise so that we can use the vocab object
      .then(() => resolve({ ...vocabularyObject }));
  }).catch(reject);
});

export default getVocabDetails;
