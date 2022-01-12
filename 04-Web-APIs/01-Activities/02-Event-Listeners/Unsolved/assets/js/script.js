var count = 0;

// TODO: Pull element from html, increase count by 1 with a click or decrease count by 1 until it hits 0.
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: This is to set the function, setting counter
function setCounterText() {
  countEl.textContent = count;
}
// TODO: This is adding count by 1.
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: This is subtracting count by 1.
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
