import type AbstractEntity from '@/types/AbstractEntity'

export default interface User extends AbstractEntity {
  login: String
  avatarPath: String
  about: String
  isPublic: boolean

  password?: String
}