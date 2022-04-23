import type AbstractEntity from '@/types/AbstractEntity'
import type Avatar from '@/types/Avatar'

export default interface User extends AbstractEntity {
  login: String
  name: String
  avatarPath: String
  about: String
  isPublic: boolean
  avatar: Avatar

  password?: String
  token?: String
}