import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const langArray = ['Javascript', 'HTML', 'CSS'];

const addVocabForm = (uid, obj = {}) => {
  console.warn(uid);
  clearDom();
  let domString = `<form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4"> 
      <div class="form-group">
        <label for="title">Vocab</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>  
      <label for="language">Language</label> 
      <select id="language" class="form-select" aria-label="Default select example" required>
      `;

  langArray.forEach((lang) => {
    domString += `
       <option 
         value="${lang}" ${lang === obj.language ? 'selected' : ''}>${lang}</option>`;
  });

  domString += `</select><button type="submit" class="btn btn-primary">Submit Vocab
    </button></form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
