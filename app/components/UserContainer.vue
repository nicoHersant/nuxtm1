<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import type { User } from '@/types/user'
import { useActiveUser } from '@/composables/useActiveUser'

const activeUser = useActiveUser()

const props = defineProps<{ modelValue: User | null }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: User | null): void
}>()

const search = ref<string>('')

const { data: users, refresh, pending, error } = useFetch<User[]>('/api/users', {
    query: { q: search},
    watch: [search]
})

function selectUser(user: User) {
  activeUser.value = user
  console.log('Utilisateur sélectionné :', user)
}
function unSelectUser() {
    activeUser.value = null
}
</script>

<template>
    <div class="search-field">
        <span class="search-icon" aria-hidden="true">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </span>

        <input v-model="search" type="search" class="search-input" placeholder="Rechercher…">
    </div>
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

.search-field {
  position: relative;
  width: 100%;
  max-width: 320px;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #9ca3af;
  pointer-events: none;
}

.search-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.search-input {
  width: 100%;
  padding: 10px 12px 10px 40px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  color: #111827;
  background-color: #ffffff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
}

</style>
