<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import type { User } from '@/types/user'

const props = defineProps<{
  modelValue: User | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: User | null): void
}>()

const users: User[] = [
  {
    id: 1,
    pseudo: 'nico_dev',
    avatar: 'https://i.pravatar.cc/150?img=12',
    isActive: true
  },
  {
    id: 2,
    pseudo: 'alice_ui',
    avatar: 'https://i.pravatar.cc/150?img=32',
    isActive: false
  },
  {
    id: 3,
    pseudo: 'bob_ts',
    avatar: 'https://i.pravatar.cc/150?img=56',
    isActive: true
  },
  {
    id: 4,
    pseudo: 'clara_nuxt',
    avatar: 'https://i.pravatar.cc/150?img=68',
    isActive: false
  }
]

function selectUser(selectedUser: User) {
  emit('update:modelValue', selectedUser)
  console.log('Utilisateur sélectionné :', selectedUser)
}
</script>

<template>
  <div class="user-grid">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user="user"
      :selected="modelValue?.id === user.id"
      @select="selectUser"
    />
  </div>
</template>

<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
</style>
