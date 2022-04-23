<template>
  <div class="wrapper">
    <main>
      <h1>Giga chat</h1>
      <nav class="login__links">
        <router-link class="login__link" to="/register">Регистрация</router-link>
        <router-link class="login__link" to="/login">Вход</router-link>
      </nav>
      <form @submit.prevent>
        <span class="err" v-if="errs">{{ errs }}</span>
        <input-form
          class="login__input"
          title="Логин"
          v-model="login"
          placeholder="Введите логин..."
        />
        <input-form
          class="login__input"
          title="Пароль"
          v-model="password"
          placeholder="Введите пароль..."
          :type="'password'"
        />
        <button-chat @click="auth" class="btn-submit">Войти</button-chat>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputForm from '@/components/UI/InputForm.vue'
import ButtonChat from '@/components/UI/ButtonChat.vue'
import Api from '@/api'
import type User from '@/types/User'

export default defineComponent({
  name: 'LoginPage',
  components: { ButtonChat, InputForm },
  data() {
    return {
      login: '',
      password: '',
      errs: ''
    }
  },
  methods: {
    auth() {
      this.errs = ''
      Api.login(this.login, this.password).then((data: User) => {
        this.$store.dispatch('auth/tryLogin', data)
        this.$router.push('/')
      }).catch(e => {
        this.$store.dispatch('auth/logOut')
        this.errs = 'Неверный логин или пароль'
      })
    }
  }
})
</script>

<style scoped lang="sass">
h1
  text-align: center
  font-weight: normal
.wrapper
  width: 100vw
  height: calc(100vh - 55px)
  display: flex
  justify-content: center
  align-items: center
  background: #161819
.err
  display: block
  color: #C51A1A
  text-align: center
  margin-top: 30px
.err-input
  border: 1px solid #C51A1A
main
  max-width: 500px
  color: #fff
.btn-submit
  margin-top: 51px
.login
  &__links
    margin-top: 30px
    display: flex
    justify-content: center
  &__link
    font-size: 20px
    text-decoration-line: underline
    color: #BABABA
    & + &
      margin-left: 30px
  &__input
    & + &
      margin-top: 15px

.router-link-active
  color: #5E50FF
</style>