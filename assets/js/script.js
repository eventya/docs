document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
      // Create a copy button
      const button = document.createElement("button");
      button.textContent = "Copy";
      button.className = "copy-button";

      // Add click event to copy code
      button.addEventListener("click", () => {
          navigator.clipboard.writeText(codeBlock.textContent).then(() => {
              button.textContent = "Copied!";
              setTimeout(() => (button.textContent = "Copy"), 2000);
          });
      });

      // Append button to the code block
      const pre = codeBlock.parentNode;
      pre.style.position = "relative";
      button.style.position = "absolute";
      button.style.top = "10px";
      button.style.right = "10px";
      pre.appendChild(button);
  });
});
