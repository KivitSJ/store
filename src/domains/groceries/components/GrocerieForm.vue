<script setup>
const { groceries } = defineProps({
  groceries: Array,
})

const emit = defineEmits(['submit'])
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
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <div class="total">
      <strong>totaal: €{{ total.toFixed(2) }}</strong>
    </div>
  </div>
</template>
