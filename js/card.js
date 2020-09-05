 //Create a Stripe client
 var stripe = Stripe('pk_test-mXKkNHUq77VmMXgdQPsiMlbC');

 //create an instance of elements
 var elements = stripe.elements();


 
 var style = {
     base: {
         color:'#32325d',
         lineHeight: '18px',
         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
         fontSmoothing: 'antialiased', 
         fontSize: '16px',
         '::placeholder': {
             color: '#aab7c4'
         }
     },
     invalid: {
         color: '#fa755a',
         iconColor: '#fa755a'
     }
 };


 //create an instance of the card element
 var card = elements.create('cardNumber', {
     classes : {
        base : "form-control",
        focus : "green",
        invalid : "error"
     }
 });


 var cvc = elements.create('cardCvc', {
     classes : {
        base : "form-control",
        focus : "green",
        invalid : "error"
     }
 });

 var exp = elements.create('cardExpiry', {
     classes : {
        base : "form-control",
        focus : "green",
        invalid : "error"
     }
 });


 card.mount('#card-number');
 cvc.mount('#card-cvc');
 exp.mount('#card-exp');



 var stripe = Stripe('pk_test-mXKkNHUq77VmMXgdQPsiMlbC');

 var elements = stripe.elements();

 var style = {
     base: {
         color:'#32325d',
         lineHeight: '18px',
         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
         fontSmoothing: 'antialiased', 
         fontSize: '16px',
         '::placeholder': {
             color: '#aab7c4'
         }
     },
     invalid: {
         color: '#fa755a',
         iconColor: '#fa755a'
     }
 };

 var card = elements.create('card', {
     classes : {
         base : "form-control",
         focus : "green",
         invalid : "error"
     },
     style : {
         base : {
             color : "green"
         }
     }
 });



 card.mount('#card-number');

 card.addEventListner('change', function(event) {
     var displayError = document.getElementById('card-errors');
     if (event.error) {
         displayError.textContent = event.error.message;
     } else {
         displayError.textContent = '';
     }
 });


 var form = document.getElementById('payment-form');
 form.addEventListener('submit', function(event) {
     event.preventDefault();

     stripe.createToken(card), then(function(result) {
         if (result.error) {
             var errorElement = document.getElementById('card-errors');
             errorElement.textContent = result.error.message;
         } else {
             stripeTokenHandler(result.token);
         }
     });
 });



 function stripeTokenHandler(token) {
     var form = document.getElementById('payment-form');
     var hiddenInput = document.createElement('input');
     hiddenInput.setAttribute('type', 'hidden');
     hiddenInput.setAttribute('name', 'stripeToken');
     hiddenInput.setAttribute('value', 'token.id');
     form.appendChild(hiddenInput);

     form.submit();

 }
