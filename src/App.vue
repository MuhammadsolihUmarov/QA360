<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Header Styling */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-links {
  font-weight: bold;
}

.nav-links a {
  margin: 0 10px; /* Space between links */
  color: #2c3e50;
  text-decoration: none;
}

.nav-links a:hover {
  color: #007bff; /* Highlight color on hover */
}

.nav-links a.router-link-exact-active {
  color: #42b983; /* Active link color */
}
</style>
