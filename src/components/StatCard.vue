<template>
  <div class="stat-card">
    <h3>{{ title }}</h3>
    <p>{{ count }}</p>
    <p>{{ trendText }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: ['title', 'count', 'trend', 'trendText']
}
</script>

<style>
.stat-card {
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>