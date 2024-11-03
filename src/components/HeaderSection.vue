<template>
  <div class="header-section">
    <input type="text" class="search-input" placeholder="Search" />
    <div class="profile">
      <img src="@/assets/logo.png" alt="QA360 Logo" class="logo" />
      <span>English</span>
      <span>Admin</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}

.search-input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ced4da;
  transition: box-shadow 0.3s;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 5px #007bff;
}
</style>
