---
title: Layouts
layout: home
---

# Layouts

A standard layout with a header, footer, and sidebar.

``` ruby
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/flowbite"></script>
</head>
<body class="bg-gray-50">
  <!-- Navbar -->
  <nav class="sticky top-0 bg-white shadow-lg z-10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Brand -->
      <a href="#" class="text-xl font-bold text-blue-500">Brand</a>

      <!-- Navigation Links -->
      <ul class="flex space-x-6 text-gray-700">
        <li><a href="#home" class="hover:text-blue-500">Home</a></li>
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#services" class="hover:text-blue-500">Services</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
      </ul>

      <!-- User Account -->
      <div class="relative">
        <button id="userMenuButton" class="flex items-center space-x-2 text-gray-700 focus:outline-none">
          <img src="https://via.placeholder.com/32" alt="User Avatar" class="rounded-full w-8 h-8">
          <span class="hidden sm:inline">John Doe</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div id="userMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 hidden">
          <a href="#profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="#settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="#logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-white">
    <div class="container mx-auto px-4 py-16 text-center">
      <h1 class="text-4xl font-extrabold text-gray-800 sm:text-5xl">
        Welcome to Our Amazing Product
      </h1>
      <p class="mt-4 text-lg text-gray-600">
        Discover the best way to achieve your goals with our innovative platform. Start your journey today.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <a href="#features" class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </a>
        <a href="#learn-more" class="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200">
          Learn More
        </a>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
        Features that Make Us Stand Out
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="flex items-center p-6 bg-white rounded-lg shadow">
          <div class="flex-shrink-0">
            <div class="p-4 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.707 9.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293zM9 10h2v5a1 1 0 11-2 0v-5z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-800">
              User-Friendly Design
            </h3>
            <p class="text-sm text-gray-600">
              Navigate easily with our intuitive and clean interface.
            </p>
          </div>
        </div>
        <!-- Feature 2 -->
        <div class="flex items-center p-6 bg-white rounded-lg shadow">
          <div class="flex-shrink-0">
            <div class="p-4 bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3H2V5zm0 5h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5zm2-7a1 1 0 00-1 1v3h14V4a1 1 0 00-1-1H4z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-800">
              Secure Payments
            </h3>
            <p class="text-sm text-gray-600">
              Enjoy peace of mind with our advanced security protocols.
            </p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="flex items-center p-6 bg-white rounded-lg shadow">
          <div class="flex-shrink-0">
            <div class="p-4 bg-purple-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm4 3a1 1 0 000-2H9a1 1 0 000 2h2z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-800">
              Affordable Pricing
            </h3>
            <p class="text-sm text-gray-600">
              Get the best value for your money with our competitive plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Content -->
  <section id="home" class="h-screen flex items-center justify-center">
    <h1 class="text-4xl font-bold text-gray-800">Welcome to the Home Section</h1>
  </section>

  <section id="about" class="h-screen flex items-center justify-center bg-gray-200">
    <h1 class="text-4xl font-bold text-gray-800">About Us</h1>
  </section>

  <section id="services" class="h-screen flex items-center justify-center">
    <h1 class="text-4xl font-bold text-gray-800">Our Services</h1>
  </section>

  <section id="contact" class="h-screen flex items-center justify-center bg-gray-200">
    <h1 class="text-4xl font-bold text-gray-800">Contact Us</h1>
  </section>

</body>
</html>
```
