<script setup>
import GroceriesTable from '../components/GroceriesTable.vue'
import { getAllGroceries as groceries } from '../store.js'
</script>

<template>
  <div>
    <GroceriesTable :groceries="groceries" />
  </div>
</template>
