<template>
  <div class="auth-form">
    <div>
      <ul>
        <li :class="{ 'is-active': !register }"><a>Login</a></li>
        <li :class="{ 'is-active': !register }"><a>Registro</a></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const register = ref(false)
</script>

<style lang="scss" scoped></style>
