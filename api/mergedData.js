import { getSingleVocab } from './vocabData';

// TODO: Get data for viewBook
const getVocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleVocab(firebaseKey).then((bookObject) => { // returns single book object
    getSingleVocab(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getVocabDetails;
