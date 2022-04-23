import type AbstractEntity from '@/types/AbstractEntity'
import type User from '@/types/User'
import type Chat from '@/types/Chat'

export default interface Message extends AbstractEntity {
  w: User
  chat: Chat
  isRead: Boolean
  text: String
}