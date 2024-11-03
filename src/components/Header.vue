// File: components/HeaderSection.vue
<template>
  <div class="header-section">
    <input type="text" placeholder="Search" />
    <div class="profile">
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

<style>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.profile {
  display: flex;
  gap: 1rem;
}
</style>
