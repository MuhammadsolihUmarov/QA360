<template>
  <div class="sidebar-menu">
    <div class="sidebar-logo">
      <img src="@/assets/logo.png" alt="QA360 Logo" class="logo" />
    </div>
    <ul class="menu-items">
      <li>
        <router-link to="/dashboard" active-class="active-link">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/test-automation" active-class="active-link">Test Automation</router-link>
      </li>
      <li>
        <router-link to="/test-management" active-class="active-link">Test Management</router-link>
      </li>
      <li>
        <router-link to="/risk-assessment" active-class="active-link">Risk Assessment</router-link>
      </li>
      <li>
        <router-link to="/performance-testing" active-class="active-link">Performance Testing</router-link>
      </li>
      <li>
        <router-link to="/uat" active-class="active-link">UAT</router-link>
      </li>
      <li>
        <router-link to="/reports" active-class="active-link">Reports and Analytics</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu'
}
</script>

<style scoped>
.sidebar-menu {
  width: 250px;
  background: #343a40;
  color: white;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers logo and items horizontally */
}

.sidebar-logo {
  margin-bottom: 2rem; /* Space between logo and menu items */
}

.logo {
  width: 150px;  /* Adjust logo size to fit nicely in sidebar */
  height: auto;
}

.menu-items {
  list-style: none;
  padding: 0;
  width: 100%;
}

.menu-items li {
  margin: 1rem 0;
}

.menu-items a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;  /* Adjust padding for better alignment */
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
}

.menu-items a:hover {
  background: #495057;
  color: #ffffff;
}

.active-link {
  background: #556677;  /* Lighter background color for the selected menu item */
  color: #ffffff !important;  /* Ensure the text color is white */
}

.menu-items li:hover .active-link {
  background: #556677;  /* Maintain the selected background when hovered */
}

</style>
