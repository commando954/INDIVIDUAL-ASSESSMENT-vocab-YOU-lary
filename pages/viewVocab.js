import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewBook = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="text-white ms-5 details">
    <h5 class="card-title">${obj.title}</h5>
    <h4 class="card-language">${obj.language}</h4>
    <p class="card-definition">${obj.definition}</p>
     <hr>
     <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewBook;
