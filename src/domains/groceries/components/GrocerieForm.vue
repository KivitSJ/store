<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { grocery, title, buttonText } = defineProps({
  grocery: Object,
  title: String,
  buttonText: String,
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  if (!grocery.name || grocery.price <= 0 || grocery.quantity <= 0) {
    alert('Vul alle velden correct in.')
    return
  }
  emit('submit', grocery)
  router.push('/')
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Prijs</th>
          <th>Hoeveelheid</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" v-model="grocery.name" /></td>
          <td><input type="number" v-model.number="grocery.price" min="0" step="0.01" /></td>
          <td><input type="number" v-model.number="grocery.quantity" min="1" /></td>
          <td></td>
          <td>
            <button @click="handleSubmit">{{ buttonText }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
