import type AbstractEntity from '@/types/AbstractEntity'
import type Channel from '@/types/Channel'
import type ChatType from '@/types/ChatType'

export default interface Chat extends AbstractEntity {
  name: String
  avatarPath: String
  channel: Channel
  chatType: ChatType
}