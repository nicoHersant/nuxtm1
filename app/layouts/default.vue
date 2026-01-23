<template>
  <div class="app-root">
    <nav class="nav">
      <NuxtLink to="/" class="link">Accueil</NuxtLink>
      <NuxtLink to="/users/new" class="link">Nouvel utilisateur</NuxtLink>
    </nav>

    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style>
/* RESET GLOBAL MINIMAL */
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background-color: #020617;
}

/* CONTENEUR GLOBAL */
.app-root {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1f2937, #020617);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
}

/* NAVIGATION */
.nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid #1f2937;
}

.link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.95rem;
}

.link.router-link-active {
  color: #22c55e;
}

/* ZONE DE CONTENU */
/* volontairement neutre */
.page {
  padding: 2rem;
}
</style>
