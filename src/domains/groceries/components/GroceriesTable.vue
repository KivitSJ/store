<script setup>
import { computed } from 'vue'
import { deleteGrocery } from '../store.js'
const { groceries } = defineProps({
  groceries: Array,
})

const total = computed(() => {
  return groceries.reduce((sum, grocerie) => {
    return sum + grocerie.price * grocerie.quantity
  }, 0)
})

const confirmDelete = (id) => {
  if (confirm('Weet je zeker dat je deze boodschap wilt verwijderen?')) {
    deleteGrocery(id)
  }
}
</script>

<template>
  <div class="container">
    <h1>Boodschappenlijst</h1>

    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Prijs</th>
          <th>Hoeveelheid</th>
          <th>Subtotaal</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grocerie in groceries" :key="grocerie.id">
          <td>{{ grocerie.name }}</td>
          <td>€{{ grocerie.price.toFixed(2) }}</td>
          <td>
            <input
              v-model.number="grocerie.quantity"
              type="number"
              min="0"
              class="quantity-input"
            />
          </td>
          <td>€{{ (grocerie.price * grocerie.quantity).toFixed(2) }}</td>
          <td>
            <RouterLink :to="`/edit/${grocerie.id}`"><button>Bewerk</button></RouterLink>
          </td>
          <td>
            <button class="delete-button" @click="() => confirmDelete(grocerie.id)">
              Verwijder
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td class="totalText"><strong>Totaal:</strong></td>
          <td class="total" colspan="3">€{{ total.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.edit-link {
  width: 100px;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-weight: bold;
}
.edit-link:hover {
  background-color: #45a049;
}

.totalText {
  text-align: right;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>
