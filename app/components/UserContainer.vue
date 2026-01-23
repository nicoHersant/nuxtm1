<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import type { User } from '@/types/user'
import { useActiveUser } from '@/composables/useActiveUser'

const activeUser = useActiveUser()

const props = defineProps<{
  modelValue: User | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: User | null): void
}>()

const { data: users, pending, error } = useFetch<User[]>('/api/users')

function selectUser(user: User) {
  activeUser.value = user
  console.log('Utilisateur sélectionné :', user)
}
</script>

<template>
  <div v-if="pending">Chargement des utilisateurs...</div>

  <div v-else-if="error">Erreur de chargement</div>

  <div v-else class="user-grid">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user="user"
      :selected="activeUser?.id === user.id"
      @select="selectUser"
    />
  </div>
</template>

<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
</style>
