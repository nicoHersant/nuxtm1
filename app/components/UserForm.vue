<script setup lang="ts">
const form = reactive({
  pseudo: '',
  email: '',
  isActive: false,
  isComplete: false,
})

const isValid = computed(() => {
  return form.pseudo.length >= 3 && form.email.includes('@')
})
</script>
<template>
  <form>
    <input v-model.trim="form.pseudo" placeholder="Pseudo">
    <input v-model.lazy="form.email" placeholder="Email">
    <input type="checkbox" v-model="form.isActive">
    <input type="submit" :disabled="!isValid">
  </form>
</template>
