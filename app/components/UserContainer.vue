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
function unSelectUser() {
    activeUser.value = null
}
</script>

<template>
  <div v-if="pending">Chargement des utilisateurs...</div>

  <div v-else-if="error">Erreur de chargement</div>

  <div v-else class="users-layout" @keyup.esc="unSelectUser">
    <main class="user-list">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        :selected="activeUser?.id === user.id"
        @select="selectUser"
      />
    </main>

    <aside v-if="activeUser" class="user-details">
      <UserDetails
        :key="activeUser.id"
        :user="activeUser"
      />
    </aside>
  </div>
</template>


<style scoped>
.users-layout {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* Zone liste */
.user-list {
  flex: 1;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  overflow-y: auto;
}

/* Aside détail utilisateur */
.user-details {
  width: 320px;
  min-width: 320px;
  border-left: 1px solid #e5e7eb;
  background-color: #ffffff;
  padding: 1.5rem;
  overflow-y: auto;
}

</style>
