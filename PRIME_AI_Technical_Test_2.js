/*
1. selectSize accepts a size (like "M" for medium) as an argument.

2. Inside this function, retrieve the product variants data from the website's script tag.

3. Search this data to find a product variant that matches the size passed to the function.

4. If a matching variant is found:
   1. Update a hidden form field with the ID of this variant. This ensures the correct product variant will be added to the cart.
   2. Find the "Add to basket" button on the page.
   3. If the button is found, simulate a click on this button, which adds the product to the cart, and logs a success message.
   4. If the button is not found, log an error message.

5. If no matching variant is found, log an error message.

6. Finally, call the function `selectSize` with the desired size as an argument to perform the size selection and add the product to the cart.
*/

function selectSize(theSize) {
  // Get the product variants from the JSON script tag
  var productVariants = JSON.parse(document.querySelector('variant-radios script[type="application/json"]').textContent);
  // Find the variant with the matching size
  var variant = productVariants.find(variant => variant.option1 === theSize);
  if (variant) {
      // Set the hidden input's value to the variant's ID
      document.querySelector('input[name="id"]').value = variant.id;
      // Find the add to basket button and click it
      var addToBasketButton = document.querySelector('button[name="add"]');
      if (addToBasketButton) {
          addToBasketButton.click();
          console.log(`Size "${theSize}" has been added to the basket.`);
      } else {
          console.error('Add to basket button not found.');
      }
  } else {
      console.error(`Size "${theSize}" not found.`);
  }
}

selectSize("L");
