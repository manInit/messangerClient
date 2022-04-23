import type AbstractEntity from '@/types/AbstractEntity'
import type User from '@/types/User'
import type Avatar from '@/types/Avatar'

export default interface Channel extends AbstractEntity {
  name: String
  avatar?: Avatar
  about?: String
  link?: String
  owner?: User
}