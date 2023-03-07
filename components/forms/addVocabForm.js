import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Vocabulary Definition" id="description" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      <label for="title">Select Language</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabLanguage" placeholder="Enter Vocabulary Language" value="${obj.language || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
