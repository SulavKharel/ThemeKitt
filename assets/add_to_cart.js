const AddToCartAjax = () {
  const form = document.querySelector('#AddToCartForm');
  form.onsubmit = (event) => {
    event.preventDefault();
    Shopify.addItemFromForm("AddToCartForm");
  };
}

AddToCartAjax();
