/// INSERT Food Category Data here to add new category ///

foodCategories = [{
  id: 'SetMenuEksklusif',
  name: 'Set Menu Eksklusif',
  className: 'SetMenuEksklusif active', //! ALWAYS ADD ACTIVE TO THE FIRST CLASS
}, 
{
  id: 'PastaAndMi',
  name: 'Pasta & Mi',
  className: 'PastaAndMi',
}, 
{
  id: 'PencuciMulut',
  name: 'Pencuci Mulut',
  className: 'PencuciMulut',
}, 
{
  id: 'Minuman',
  name: 'Minuman',
  className: 'Minuman',
}];

function generateFoodCategories() {
  return (
    document.getElementById('ul-food-category').innerHTML = foodCategories.map((foodCategory) => {
      let { id, name, className } = foodCategory;
        return `
        <li class="li-food-category">
          <a class="food-category-link ${className}" href="#${id}">
            ${name}
          </a>
        </li>`;
    }).join("")
  );
};

generateFoodCategories();