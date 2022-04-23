import { createStore } from 'vuex'
import { authModule } from '@/store/authModule'
import { userModalModule } from '@/store/userModalModule'

export default createStore({
  modules: {
    auth: authModule,
    userModal: userModalModule
  }
})