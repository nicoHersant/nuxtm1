<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import type { User } from '@/types/user'

const props = defineProps<{
  user: User
  selected?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', user: User): void
}>()

function handleClick() {
  emit('select', props.user)
}
</script>

<template>
  <div
    class="click-area"
    @click="handleClick"
  >
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
        Statut :
        <span :class="user.isActive ? 'active' : 'inactive'">
          {{ user.isActive ? 'Actif' : 'Inactif' }}
        </span>
      </p>
    </BaseCard>
  </div>
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
