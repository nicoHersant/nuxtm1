<script setup lang="ts">
import UserContainer from '@/components/UserContainer.vue'
import type { User } from '@/types/user'

const activeUser = ref<User | null>(null)
</script>

<template>
  <UserContainer v-model="activeUser" />
</template>
