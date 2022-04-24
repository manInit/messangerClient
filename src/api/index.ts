import axios from 'axios'
import type Chat from '@/types/Chat'
import type User from '@/types/User'
import type Channel from '@/types/Channel'

export default class Api {
  static root = 'http://192.168.0.102:8080/api'

  static async fileUpload(file: File, token: string) {
    const formData = new FormData()
    formData.append('image', file)

    return await Api.sendFormData(Api.root + 'images', formData, token)
  }

  static async sendFormData(url: String, bodyFormData: FormData, token: String) {
    const res = await axios({
      method: 'post',
      url: this.root + url,
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + token }
    })
    return res.data
  }

  static async fetchJsonWithToken<T>(url: string, token: string) {
    let addHeaders = {'Authorization': 'Bearer ' + token}
    return await axios.get<T>(this.root + url, {
      headers: addHeaders
    })
  }

  static async sendJsonWithToken<T>(data: any, url: string, token: string) {
    let addHeaders = {'Authorization': 'Bearer ' + token}
    return await axios.post<T>(this.root + url, data, {
      headers: addHeaders
    })
  }

  static async createChannel(channel: Channel, token: string) {
    return this.sendJsonWithToken<Channel>({
      name: channel.name,
      about: channel.about
    }, '/channels', token)
  }

  static async getChats(id: string, token: string): Promise<Chat[]> {
    const res = await Api.fetchJsonWithToken<Chat[]>(`/channels/${id}/chats`, token)
    return res.data
  }

  static async createChat(chat: {name: String, chatType: number, channel: Channel}, token: string): Promise<Chat> {
    const res = await this.sendJsonWithToken<Chat>({
      name: chat.name,
      chatType: chat.chatType,
      channel: chat.channel
    }, '/chats', token)

    return res.data
  }

  static async getChannels(token: string): Promise<Channel[]> {
    const res = await Api.fetchJsonWithToken<Channel[]>('/channels', token)
    return res.data
  }

  static async login(login: String, password: String): Promise<User> {
    const res = await axios.post<User>(Api.root + '/login', {
      login,
      password
    })
    return res.data
  }

  static async registration(user: User): Promise<User> {
    const res = await axios.post<User>(Api.root + '/register', {
      login: user.login,
      name: user.name,
      password: user.password,
      about: user.about,
      avatar: null
    })
    return res.data
  }
}