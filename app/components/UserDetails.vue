<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import type { User } from '@/types/user'

const props = defineProps<{
  user: User
  selected?: boolean
}>()

</script>

<template>
    <BaseCard :class="{ selected }">
      <template #header>
        <img
          :src="user.avatar"
          alt="Avatar utilisateur"
          class="avatar"
        >
        <h2 class="pseudo">{{ user.pseudo }}</h2>
      </template>

      <p class="status">
        <span> {{ user.email }} </span>
        <span> {{ user.description }} </span>
      </p>
    </BaseCard>
</template>

<style scoped>
.click-area {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;
}

.pseudo {
  margin: 0;
  font-size: 1.25rem;
}

.status {
  margin: 0.75rem 0;
}

.active {
  color: #22c55e;
}

.inactive {
  color: #ef4444;
}
</style>
