import axios from 'axios'
import type Chat from '@/types/Chat'
import type User from '@/types/User'

export default class Api {
  static root = 'http://192.168.0.102:8080/api'

  static async fetchJsonWithToken<T>(url: string, token: string) {
    let addHeaders = {'Authorization': 'Bearer ' + token}
    return await axios.get<T>(this.root + url, {
      headers: addHeaders
    })
  }

  static async getChats(token: string): Promise<Chat[]> {
    const res = await Api.fetchJsonWithToken<Chat[]>('/chats', token)
    return res.data
  }

  static async login(): Promise<User> {
    const res = await axios.post<User>(Api.root + '/login', {
      login: 'user',
      password: '123'
    })
    return res.data
  }
}