<script setup>
import { ref } from 'vue'
import GrocerieForm from '../components/GrocerieForm.vue'
import { addGrocery } from '../store.js'
const grocery = ref({
  name: '',
  price: 0,
  quantity: 0,
})
</script>

<template>
  <GrocerieForm
    :grocery="grocery"
    :title="'Nieuwe boodschap'"
    :buttonText="'Voeg toe'"
    @submit="addGrocery"
  />
</template>
