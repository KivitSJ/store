<script setup></script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink tag="button" to="/"><button>Overview</button></RouterLink>
      </li>
      <li>
        <RouterLink tag="button" to="/create"><button>Create</button></RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style>
a,
a:hover,
a:visited {
  color: white;
  text-decoration: none;
}

a:active {
  background-color: #45a049;
}
nav {
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}
ul {
  display: inline-block;
  list-style: none;
  display: flex;
  gap: 1rem;
  text-align: center;
}

button {
  border: none;
  width: 100px;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}
button:hover {
  background-color: #45a049;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #4caf50;
  color: white;
}

th {
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

.quantity-input {
  width: 60px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}
</style>
