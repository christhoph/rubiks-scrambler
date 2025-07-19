import { generateScramble } from './generateScramble';

// Reference to the <code> element where the scramble will be displayed
const $code = document.getElementById('code');
// Reference to the button that generates a new scramble
const $newBtn = document.getElementById('new-one');

/**
 * Generates a new scramble and updates the page.
 */
function getCode() {
  const code = generateScramble();

  $code.textContent = code;
}

// Generate an initial scramble on page load
getCode();

// Attach click handler to the button to generate a new scramble on demand
$newBtn.addEventListener('click', function () {
  getCode();
});
