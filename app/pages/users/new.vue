<script setup lang="ts">
const form = reactive({
  pseudo: '',
  email: '',
  avatar: '',
  description:'',
  isActive: false
})

function onSubmit() {
    const router = useRouter()
    router.push("/")
}
</script>

<template>
  <form class="user-form" @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="pseudo">Pseudo</label>
      <input
        id="pseudo"
        type="text"
        v-model.trim="form.pseudo"
        placeholder="Ex : nico_dev"
      >
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model.trim="form.email"
        placeholder="Ex : nico_dev@example.com"
      >
    </div>

    <div class="form-group">
      <label for="avatar">Avatar (URL)</label>
      <input
        id="avatar"
        type="url"
        v-model.trim="form.avatar"
        placeholder="https://i.pravatar.cc/150?img=12"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="4"
        placeholder="Description de l’utilisateur"
      />
    </div>

    <div class="form-group checkbox-group">
      <input
        id="isActive"
        type="checkbox"
        v-model="form.isActive"
      >
      <label for="isActive">Utilisateur actif</label>
    </div>

    <input type="submit" value="Enregistrer" class="submit-button">
  </form>
</template>

<style scoped>
.user-form {
  max-width: 420px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.form-group input,
.form-group textarea {
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
}

.checkbox-group label {
  font-weight: 500;
}

</style>