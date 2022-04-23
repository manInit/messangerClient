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
          v-model="user.login"
          placeholder="Введите логин..."
          :err="errs.login"
          @input="validationLogin"
        />
        <input-form
          class="login__input"
          title="Имя"
          v-model="user.name"
          placeholder="Введите имя..."
          :err="errs.name"
          @input="validationName"
        />
        <input-form
          class="login__input"
          title="О себе"
          v-model="user.about"
          placeholder="Расскажите о себе"
          :err="errs.about"
        />
        <input-form
          class="login__input"
          title="Пароль"
          v-model="user.password"
          placeholder="Придумайте пароль..."
          :err="errs.password"
          :type="'password'"
          @input="validationPassword"
        />
        <input-form
          class="login__input"
          title="Подтвердите пароль"
          v-model="checkPassword"
          placeholder="Повторите пароль..."
          :err="errs.checkPassword"
          :type="'password'"
          @input="validationEqPassword"
        />
        <button-chat @click="register" class="btn-submit">Зарегистрироваться</button-chat>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import InputForm from '@/components/UI/InputForm.vue'
import ButtonChat from '@/components/UI/ButtonChat.vue'
import { defineComponent } from 'vue'
import Api from '@/api'
import type User from '@/types/User'

export default defineComponent({
  name: 'RegistrationPage',
  components: { ButtonChat, InputForm },
  methods: {
    validationName(): Boolean {
      this.errs.name = ''
      if (this.user.name.length < 2) {
        this.errs.name = 'Имя состоит не менее из 2 символов'
        return true
      }
      return false
    },
    validationLogin(): Boolean {
      this.errs.login = ''
      if (this.user.login.length < 5) {
        this.errs.login = 'Логин должен быть не менее 5 символов'
        return true
      }
      return false
    },
    validationPassword(): Boolean {
      this.errs.password = ''
      if (this.user.password!.length < 5) {
        this.errs.password = 'Пароль не мнее 5 символов.'
        return true
      }
      return false
    },
    validationEqPassword(): Boolean {
      this.errs.checkPassword = ''
      if (this.checkPassword !== this.user.password) {
        this.errs.checkPassword = 'Пароли не совпадают'
        return true
      }
      return false
    },
    validation(): Boolean {
      this.errs.name = ''
      this.errs.about = ''
      this.errs.login = ''
      this.errs.password = ''
      this.errs.checkPassword = ''

      const vLogin = this.validationLogin()
      const vName = this.validationName()
      const vPass = this.validationPassword()
      const vPassEq = this.validationEqPassword()

      return !vLogin && !vName && !vPass && !vPassEq
    },
    register() {
      let isValid = this.validation()
      if (!isValid) return

      Api.registration(this.user).then((data: User) => {
        if (!data.password) return

        Api.login(data.login, this.user.password!.toString()).then((data: User) => {
          //@ts-ignore
          this.$store.dispatch('auth/tryLogin', data)
          this.$router.push('/')
        })
      }).catch(e => {
        this.errs.login = 'Логин уже используется другим пользователем'
      })
    }
  },
  data() {
    return {
      user: {
        login: '',
        password: '',
        about: '',
        name: ''
      } as unknown as User,
      checkPassword: '',
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
  min-height: calc(100vh - 55px)
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