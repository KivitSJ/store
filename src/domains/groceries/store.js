import { ref, computed } from 'vue'

const groceries = ref([
  { id: 1, name: 'Brood', price: 1.0, quantity: 0 },
  { id: 2, name: 'Broccoli', price: 0.99, quantity: 0 },
  { id: 3, name: 'Krentebollen', price: 1.2, quantity: 0 },
  { id: 4, name: 'Noten', price: 2.99, quantity: 0 },
])

export const getAllGroceries = computed(() => groceries.value)
export const getGroceryById = (id) => computed(() => groceries.value.find((g) => g.id === id))

export const addGrocery = (grocery) => {
  grocery.id = groceries.value[groceries.value.length - 1].id + 1
  groceries.value.push(grocery)
}

export const deleteGrocery = (id) => {
  groceries.value = groceries.value.filter((g) => g.id !== id)
}

export const updateGrocery = (updatedGrocery) => {
  const index = groceries.value.findIndex((g) => g.id === updatedGrocery.id)
  if (index !== -1) {
    groceries.value[index] = updatedGrocery
  }
}
