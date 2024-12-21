//* Generate Food Preview JS starts here!
  let basket = [];

    //? Get the container where the food previews will be displayed
    let foodSectionsContainer = document.getElementById('main');

    //* Function to dynamically generate sections and their items
    let generateFoodSections = () => {
      //? Loop through each section in the foodData array and generate HTML
      foodSectionsContainer.innerHTML = foodData.map((sectionData)=> {
        //? Get the name of the current section
        let sectionID = sectionData.section.id;
        let sectionName = sectionData.section.name;
        let foodItemsHTML = sectionData.items.map((foodPreview) => {
          // Destructure properties of each food item for easier access
          let { id, name, price, desc, img, takeAwayPackaging } = foodPreview;

          // Generate HTML for a single food item
          return `
            <div id="product-id-${id}" class="food-preview" onclick="showFoodPreviewModal('dialog-${id}')    
            showAddToBasketPrice('price-${id}', ${price})">
              <img class="food-preview-image" src="${img}" alt="">
              <p class="menu-item-name">${name}</p>
              <p>${desc}</p>
              <p class="menu-item-price">RM${price}.00</p>
            </div>

            <dialog id="dialog-${id}" class="food-preview-modal">

              <!--First Vertical Layout-->
              <div class="modal-title-and-and-close-button"> 
                <div class="modal-title">
                  Tambah Item Ke Bakul
                </div>
                <button class="close-button-food-preview-modal" onclick="closeFoodPreviewModal('dialog-${id}');
                         resetQuantity(${id});
                         resetTextArea('text-area-${id}');
                ">
                  x
                </button>
              </div>

              <div class="modal-scrollable-content">
                <!--Second Vertical Layout-->
                <div class="modal-food-preview-image">
                  <img class="food-preview-image-modal" src="${img}" alt=""></img>
                </div>

                <!--Third Vertical Layout-->
                <div class="modal-food-preview-name-and-price">
                  <div class="modal-food-preview-name">${name}</div>
                  <div class="modal-food-preview-price">RM${price}.00</div>
                </div>

                <!--Fourth Vertical Layout-->
                <div class="modal-food-preview-packaging-type">
                  <p class="modal-food-preview-takeaway">Pembungkusan Bawa pulang</p>
                  <p class="modal-food-preview-packaging-description">Diperlukan &middot; Pilih 1</p>
                </div>

                <!--Fifth Vertical Layout-->
                <div class="modal-food-preview-packaging-choice-and-price">
                  <div class="modal-food-preview-packaging-choice">Pembungkusan Bawa pulang</div>
                  <div class="modal-food-preview-packaging-price">
                    <p>+RM${takeAwayPackaging}.00</p>
                    <div class="modal-food-preview-packaging-price-tick">
                      <img src="icons/tick.svg"></img>
                    </div>
                  </div>
                </div>

                <!--Sixth Vertical Layout-->
                <div class="modal-food-preview-additional-notes">
                  <p>Nota Tambahan</p>
                </div>

                <!--Seventh Vertical Layout-->
                <div class="modal-food-preview-additional-notes-textarea-div">
                  <textarea id="text-area-${id}" class="modal-food-preview-additional-notes-textarea" placeholder="e.g. tidak mahu jeruk"></textarea>
                </div>

                <!--Eighth Vertical Layout-->
                <div class="modal-food-preview-blank"></div>
              </div>

              <!--Ninth Vertical Layout-->
              <div class="modal-food-preview-add-to-basket-button">
                <div class="quantity-input-group">
                  <button class="minus-button" onclick="decrement(${id})
                  decreaseAddToBasketPrice(${price}, 'price-${id}')
                  ">
                    <img src="icons/minus-circular-button.png"></img>
                  </button>
                  <div id=${id} class="quantity">1</div>
                  <button class="plus-button" onclick="increment(${id})
                  increaseAddToBasketPrice(${price}, ${id}, 'price-${id}')
                  ">
                    <img src="icons/plus-button.png"></img>
                  </button>
                  
                </div>
                <button class="add-to-basket-button"  onclick="
                let quantity = Number(document.getElementById('${id}').innerHTML);
                let notes = getAdditionalNotes('text-area-${id}');
                addObject('${name}', ${price}, ${takeAwayPackaging}, quantity, notes, '${img}');
                removeItem();
                generateBasketItems();
                closeFoodPreviewModal('dialog-${id}');
                resetTextArea('text-area-${id}');
                resetQuantity(${id});
                ">
                  <div>
                    TAMBAH KE BAKUL
                  </div>
                  <div id="price-${id}">
                  </div>
                </button>
              </div>

            </dialog>
          `;
        }).join(""); //? Join all food items HTML to form one string
        
        //? Generate the HTML for the section, including the title and items
        return `
          <section id="${sectionID}">
            <p class="food-category-text">${sectionName}</p>
            <div class="food-previews-div">${foodItemsHTML}</div>
          </section>
        `;
      }).join(""); //? Join all section HTML to form one string
    };

    generateFoodSections();

    //! Open Food Preview Modal
    function showFoodPreviewModal(dialogID) {
      let selectedDialog = document.getElementById(dialogID);
      selectedDialog.showModal();
      blurAndRemoveScrollBar.classList.add('blur-hide-scroll-bar');
    };

    //! Close Food Preview Modal
    function closeFoodPreviewModal(dialogID) {
      let selectedDialog = document.getElementById(dialogID);
      selectedDialog.close();
      blurAndRemoveScrollBar.classList.remove('blur-hide-scroll-bar');
    }

    //! Increment Button
    let increment = (id) => {
      let selectedItem = id;
      let search = basket.find((foodPreview) => foodPreview.id === selectedItem.id);

      if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          item: 2,
        });
      } else {
        search.item += 1;
      }
      
      // console.log(basket);
      update(selectedItem.id);

      // localStorage.setItem("data", JSON.stringify(basket));
      // updateBasket(selectedItem);
    };

    //! Decrement Button
    let decrement = (id) => {
      let selectedItem = id;
      let search = basket.find((foodPreview) => foodPreview.id === selectedItem.id);

      if (search === undefined) {
        return;
      } else if (search.item === 1) {
        return;
      } else {
        search.item -= 1;
      }

      // console.log(basket);
      update(selectedItem.id);
      basket = basket.filter((foodPreview) => foodPreview.item !== 0);

      // localStorage.setItem("data", JSON.stringify(basket));
      // updateBasket(selectedItem);
    };

    //! Reset quantity function
    function resetQuantity(id) {
      //? Select the whole quantity div. 
      let selectedItem = id;
      
      let search = basket.find((foodPreview) => foodPreview.id === selectedItem.id);
      
      if (search === undefined) {
        return;
      } else {
        search.item = 1;
      }

      update(selectedItem.id); 
    };
    
    //! Update quantity function
    let update = (id) => {
      let search = basket.find((foodPreview) => foodPreview.id === id);
      // console.log(search);
      document.getElementById(id).innerHTML = search.item;
      // console.log(document.getElementById(id).innerHTML);
    };

    //! Show Add To Basket Price Function
    function showAddToBasketPrice(selectedPrice, itemPrice) {
      let totalPrice = itemPrice + 1;
      document.getElementById(selectedPrice).innerHTML = `RM${totalPrice}.00`;
    };

    //! Increase Add To Basket Price Function
    function increaseAddToBasketPrice(itemPrice, selectedItem, selectedPriceID) {
      // console.log(itemPrice);
      // console.log(selectedItem);
      // console.log(basket);
      /*
      //! 1st METHOD
      let search = basket.find((foodPreview) => foodPreview.id === selectedItem.id);
      // console.log(search.item);
      let total = (itemPrice * search.item) + 1;

      document.getElementById(selectedPrice).innerHTML = `RM${total}.00`;
      */
      //! 2nd METHOD
      let selectedPrice = document.getElementById(selectedPriceID);
      let price = selectedPrice.textContent;
      //? Get the price in INTEGER.
      let number = parseInt(price.replace("RM", ""));
      
      let total = number + itemPrice;
      document.getElementById(selectedPriceID).innerHTML = `RM${total}.00`;
    };

    //! Decrease Add To Basket Price Function
    function decreaseAddToBasketPrice(itemPrice, selectedPriceID) {
      // console.log(itemPrice);
      // console.log(selectedItem);
      // console.log(basket);
      let total = itemPrice + 1;
      
      let selectedPrice = document.getElementById(selectedPriceID);
      let price = selectedPrice.textContent;
      //? Get the price in INTEGER.
      let number = parseInt(price.replace("RM", ""));
      
      //? Prevent price from NEGATIVE.
      if (number === total) {
        return;
      } else {
        total = number - itemPrice;
      }

      document.getElementById(selectedPriceID).innerHTML = `RM${total}.00`;
    };

    //! Get Additional Notes Function
    function getAdditionalNotes(textAreaID) {
      let selectedTextArea = document.getElementById(textAreaID);
      let additionalNotes = selectedTextArea.value;

      if (additionalNotes === '') {
        additionalNotes = 'undefined';
      }
      return `Notes: ${additionalNotes}`;
    };

    //! resetTextArea Function
    function resetTextArea(textAreaID) {
      let selectedTextArea = document.getElementById(textAreaID);
      selectedTextArea.value = '';
    }
   
//* Generate Food Preview JS ends here!