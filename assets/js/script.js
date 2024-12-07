document.addEventListener('DOMContentLoaded', function () {
  listenForCopyActions();
});


function listenForCopyActions() {
  // Get the button element
  const button = document.getElementById('copy-button');

  if (!button) {
    return;
  }

  button.addEventListener('click', function() {
    // Get the text content of the code block
    const code = document.getElementById('code-block').innerText.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
        // Show success message
        const successMessage = document.getElementById('copy-success');
        successMessage.classList.remove('hidden');

        // Hide message after 2 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
  });
}
