<template>
  <div class="current-risks">
    <h3>Current Risks</h3>
    <table>
      <thead>
      <tr>
        <th>Risk Name</th>
        <th>Level</th>
        <th>Identified Time</th>
        <th>Status</th>
        <th>Cost</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Scope Creep</td>
        <td>High</td>
        <td>12.09.2024</td>
        <td>Recalculating scope every 2 weeks</td>
        <td>$34,295</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CurrentRisks'
}
</script>

<style>
.current-risks {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>