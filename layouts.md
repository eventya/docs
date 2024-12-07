---
title: Layouts
layout: default
---

# Layouts


# Code Block with Copy Functionality


<div class="relative bg-gray-800 text-white rounded-md p-4">
    <!-- Code Block -->
    <pre id="code-block" class="overflow-x-auto text-sm">
        <code>
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
        </code>
    </pre>
    <!-- Copy Button -->
    <button
        id="copy-button"
        class="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">
        Copy
    </button>
</div>
<p id="copy-success" class="text-green-600 mt-4 hidden">Code copied to clipboard!</p>

