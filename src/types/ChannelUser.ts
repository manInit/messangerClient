import type AbstractEntity from '@/types/AbstractEntity'
import type Channel from '@/types/Channel'
import type User from '@/types/User'

export default interface ChannelUser extends AbstractEntity {
  channel: Channel
  user: User
}