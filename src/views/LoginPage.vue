<template>
  <div class="login-container">
    <div class="login-box">
      <div class="brand-logo">
        <!-- Placeholder for logo -->
        <img src="@/assets/logo.png" alt="QA360 Logo" class="logo" />
      </div>
      <h2>Login to QA360</h2>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="username">
            <i class="fa fa-user"></i> <!-- FontAwesome icon -->
          </label>
          <input type="text" id="username" v-model="username" required placeholder="Username" />
        </div>
        <div class="input-group">
          <label for="password">
            <i class="fa fa-lock"></i> <!-- FontAwesome icon -->
          </label>
          <input type="password" id="password" v-model="password" required placeholder="Password" />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginUser() {
      if (this.username && this.password) {
        // For simplicity, redirect to the dashboard on login
        this.$router.push('/dashboard');
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e9ecef;
}

.login-box {
  width: 350px;
  padding: 2.5rem;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.login-box:hover {
  transform: scale(1.03);
}

.brand-logo img {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: 1.5rem;
  color: #343a40;
  font-weight: 500;
}

.input-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.input-group label {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
}

.input-group input {
  width: 80%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #ced4da;
  border-radius: 30px;
  transition: all 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.login-button:active {
  background-color: #004494;
}
</style>
