<template>
  <div class="wrapper">
    <main>
      <h1>Giga chat</h1>
      <nav class="login__links">
        <router-link class="login__link" to="/register">Регистрация</router-link>
        <router-link class="login__link" to="/login">Вход</router-link>
      </nav>
      <form @submit.prevent>
        <input-form
            class="login__input"
            title="Логин"
            v-model="login"
            placeholder="Введите логин..."
            :err="errs.login"
        />
        <input-form
            class="login__input"
            title="Имя"
            v-model="name"
            placeholder="Введите имя..."
            :err="errs.name"
        />
        <input-form
            class="login__input"
            title="О себе"
            v-model="about"
            placeholder="РАсскажите о себе"
            :err="errs.about"
        />
        <input-form
            class="login__input"
            title="Пароль"
            v-model="password"
            placeholder="Придумайте пароль..."
            :err="errs.password"
        />
        <input-form
            class="login__input"
            title="Подтвердите пароль"
            v-model="checkPassword"
            placeholder="Повторите пароль..."
            :err="errs.checkPassword"
        />
        <button-chat class="btn-submit">Зарегистрироваться</button-chat>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import InputForm from '@/components/UI/InputForm.vue'
import ButtonChat from '@/components/UI/ButtonChat.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegistrationPage',
  components: { ButtonChat, InputForm },
  data() {
    return {
      login: '',
      password: '',
      checkPassword: '',
      about: '',
      name: '',
      errs: {
        name: '',
        about: '',
        login: '',
        password: '',
        checkPassword: ''
      }
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
  padding-bottom: 50px
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