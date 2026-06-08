import { ref, computed } from 'vue'

const groceries = ref([
  { id: 1, name: 'Brood', price: 1.0, quantity: 0 },
  { id: 2, name: 'Broccoli', price: 0.99, quantity: 0 },
  { id: 3, name: 'Krentebollen', price: 1.2, quantity: 0 },
  { id: 4, name: 'Noten', price: 2.99, quantity: 0 },
])

export const getAllGroceries = computed(() => groceries.value)

export const addGrocery = (grocery) => {
  groceries.value.push(grocery)
}
