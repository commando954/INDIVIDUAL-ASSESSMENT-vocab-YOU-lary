import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocabulary Word</button>';
  renderToDOM('#add-button', btnString);

  const vocabFilter = `
  <div class="filter">
    <p class="center" id="filter-vocab-language-text"><b>Filter Language</b></p>
      <div class="filter-list">
        <button class="selector" id="all-btn">All</button>
        <button class="selector" id="html-btn">HTML</button>
        <button class="selector" id="css-btn">CSS</button>
        <button class="selector" id="js-btn">JavaScript</button>
      </div>
  </div>`;
  renderToDOM('#vocabFilter', vocabFilter);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${item.title}</h4>
      <h5 class="card-subtitle mb-2 text-muted">${item.definition}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
      <hr>
      <div class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}">Select</div>
      <div class="btn btn-info" id="edit-vocab-btn--${item.firebaseKey}">Edit</div>
      <div class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</div>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
