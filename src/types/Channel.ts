import type AbstractEntity from '@/types/AbstractEntity'
import type User from '@/types/User'

export default interface Channel extends AbstractEntity {
  name: String
  avatarPath?: String
  about?: String
  link?: String
  owner: User
}