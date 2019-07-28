const AddToCartAjax = () => {
    window.onload = function() {
      const cartButton = document.getElementById('AddToCart');
      if (cartButton) {
       cartButton.addEventListener('click', (e) => {
        e.preventDefault();
         const quantity = document.querySelector('#Quantity').value;
     const productVariant = document.querySelector('#productSelect').value;
         jQuery.post('/cart/add.js', $('form[action="/cart/add"]').serialize())
         .done(function( data, textStatus, jqXHR ) {
          Swal.fire(
       'Thank You!',
         'The Item has been added to the cart!',
         'success'
          )
          const sweetAlertOk = document.querySelector('.swal2-confirm')
          if (sweetAlertOk) {
            sweetAlertOk.addEventListener('click', (e) => {
              reloadAfterAdd();
            })
          }
       })
         .fail(function( jqXHR, textStatus, errorThrown ) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'None left'
           })
         })
      });
    };
  }
}

AddToCartAjax();
