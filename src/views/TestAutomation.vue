<template>
  <div class="test-automation-container">
    <div class="request-section">
      <div class="request-config">
        <!-- HTTP Method Selection -->
        <select v-model="selectedMethod" class="http-method-select">
          <option v-for="method in httpMethods" :key="method" :value="method">{{ method }}</option>
        </select>

        <!-- Endpoint URL Input -->
        <input type="text" v-model="endpointUrl" class="endpoint-input" placeholder="Enter request URL" />
      </div>

      <!-- Headers Section -->
      <div class="headers-section card">
        <div class="card-header">
          <h3>Headers</h3>
          <button @click="addHeader" class="add-header-button">Add Header</button>
        </div>
        <div class="header-item" v-for="(header, index) in headers" :key="index">
          <input type="text" v-model="header.key" placeholder="Header Key" />
          <input type="text" v-model="header.value" placeholder="Header Value" />
          <button @click="removeHeader(index)" class="remove-header-button">Remove</button>
        </div>
      </div>

      <!-- Body Section -->
      <div class="body-section card">
        <h3>Body</h3>
        <textarea v-model="requestBody" class="body-input" placeholder="Enter request body (JSON)"></textarea>
      </div>

      <!-- Send Button -->
      <button @click="sendRequest" class="send-button">Send Request</button>
    </div>

    <!-- Response Display Area -->
    <div class="response-section card" v-if="response">
      <h3>Response</h3>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestAutomation',
  data() {
    return {
      selectedMethod: 'GET',
      endpointUrl: '',
      httpMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: [{ key: '', value: '' }],
      requestBody: '',
      response: null,
    };
  },
  methods: {
    addHeader() {
      this.headers.push({ key: '', value: '' });
    },
    removeHeader(index) {
      this.headers.splice(index, 1);
    },
    async sendRequest() {
      try {
        // Construct headers from user input
        const headers = this.headers.reduce((acc, header) => {
          if (header.key && header.value) {
            acc[header.key] = header.value;
          }
          return acc;
        }, {});

        // Configure the request based on method
        const options = {
          method: this.selectedMethod,
          url: this.endpointUrl,
          headers: headers,
        };

        if (['POST', 'PUT', 'PATCH'].includes(this.selectedMethod) && this.requestBody) {
          options.data = JSON.parse(this.requestBody);
        }

        const response = await axios(options);
        this.response = JSON.stringify(response.data, null, 2);
      } catch (error) {
        this.response = error.message;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.test-automation-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
}

.request-section {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.request-config {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.http-method-select {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
}

.endpoint-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
}

.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.add-header-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.add-header-button:hover {
  background-color: #218838;
}

.header-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.header-item input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ced4da;
}

.remove-header-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.remove-header-button:hover {
  background-color: #c82333;
}

.body-section {
  margin-top: 1rem;
}

.body-input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
  min-height: 150px;
}

.send-button {
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
  align-self: center;
}

.send-button:hover {
  background-color: #0056b3;
}

.response-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.response-section pre {
  white-space: pre-wrap;
  text-align: left;
  color: #2c3e50;
}
</style>
