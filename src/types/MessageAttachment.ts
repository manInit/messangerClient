import type AbstractEntity from '@/types/AbstractEntity'
import type Message from '@/types/Message'

export default interface MessageAttachment extends AbstractEntity {
  message: Message
  attachmentPath: String
}