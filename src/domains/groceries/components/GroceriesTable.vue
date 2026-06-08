<script setup>
import { computed } from 'vue'
const { groceries } = defineProps({
  groceries: Array,
})

const total = computed(() => {
  return groceries.reduce((sum, grocerie) => {
    return sum + grocerie.price * grocerie.quantity
  }, 0)
})
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
            <div class="edit-link"><RouterLink to="/edit">Bewerk</RouterLink></div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <strong class="total">Totaal: €{{ total.toFixed(2) }}</strong>
          </td>
          <td></td>
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
</style>
