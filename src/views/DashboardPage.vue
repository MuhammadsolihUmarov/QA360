<template>
  <div className="dashboard-container">
    <Sidebar/>
    <div className="main-content">
      <Header/>
      <div className="stats-cards">
        <!-- Stats Cards -->
        <StatCard title="Total Projects" count="38" trend="up" trendText="8.5% Up from last month"/>
        <StatCard title="Total Auto Tests" count="876" trend="up" trendText="1.3% Up from last week"/>
        <!-- More Stat Cards -->
      </div>
      <div className="chart-and-risks">
        <PassFailChart/>
        <CurrentRisks/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/SidebarMenu.vue'
import Header from '../components/Header.vue'
import StatCard from '../components/StatCard.vue'
import PassFailChart from '../components/PassFailChart.vue'
import CurrentRisks from '../components/CurrentRisks.vue'

export default {
  components: {
    Sidebar,
    Header,
    StatCard,
    PassFailChart,
    CurrentRisks
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.dashboard-container {
  display: flex;
  height: 100vh;
  overflow: hidden; /* Prevents unnecessary scrollbars */
}

.sidebar-menu {
  width: 250px;
  background: #343a40;
  color: white;
  padding: 1.5rem 1rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f4f6f8;
  overflow-y: auto;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-and-risks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Sidebar Styling */
.sidebar-menu ul {
  list-style: none;
  padding: 0;
}

.sidebar-menu li {
  margin: 1rem 0;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  padding: 0.5rem;
  border-radius: 8px;
}

.sidebar-menu li:hover {
  background: #495057;
  color: #ffffff;
}

/* Header Styling */
.header {
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Stat Cards Styling */
.stat-card {
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.stat-card h3 {
  margin-bottom: 1rem;
  color: #343a40;
  font-weight: 500;
}

.stat-card .count {
  font-size: 2rem;
  font-weight: bold;
}

/* Pass & Fail Chart and Current Risks */
.pass-fail-chart,
.current-risks {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.pass-fail-chart h3,
.current-risks h3 {
  margin-bottom: 1rem;
  color: #343a40;
  font-weight: 500;
}

/* Scroll Styling */
.main-content::-webkit-scrollbar {
  width: 8px;
}

.main-content::-webkit-scrollbar-thumb {
  background-color: #ced4da;
  border-radius: 4px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background-color: #adb5bd;
}
</style>
