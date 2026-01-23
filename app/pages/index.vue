<script setup lang="ts">
import UserContainer from '@/components/UserContainer.vue'
import type { User } from '@/types/user'
import { useActiveUser } from '@/composables/useActiveUser'

const activeUser = useActiveUser()

</script>

<template>
  <UserContainer v-model="activeUser" />

  <section v-if="activeUser" class="active-user">
    <p>Utilisateur actif : {{ activeUser.pseudo }}</p>
  </section>
</template>

<style scoped>
.debug {
  margin-top: 1.5rem;
  color: #9ca3af;
  text-align: center;
}
.active-user {
  margin-top: 2rem;
  text-align: center;
  color: #9ca3af;
}
</style>
