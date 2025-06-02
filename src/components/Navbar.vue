<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/simulator">Simulator</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}
ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
