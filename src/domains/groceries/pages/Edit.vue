<script setup>
import { useRoute } from 'vue-router'
import { getGroceryById, updateGrocery } from '../store.js'
import GrocerieForm from '../components/GrocerieForm.vue'
const route = useRoute()
const id = route.params.id
const grocery = getGroceryById(+id)
console.log(grocery.value)
</script>

<template>
  <GrocerieForm
    :grocery="grocery"
    :title="'Bewerk boodschap'"
    :buttonText="'Bewerk'"
    @submit="updateGrocery"
  />
</template>
