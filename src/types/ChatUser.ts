import type AbstractEntity from '@/types/AbstractEntity'
import type Chat from '@/types/Chat'
import type User from '@/types/User'
import type Message from '@/types/Message'

export default interface ChatUser extends AbstractEntity {
  chat: Chat
  user: User
  lastReadMessage: Message
}