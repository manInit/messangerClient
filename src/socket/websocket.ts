//@ts-ignore
import SockJS from 'sockjs-client/dist/sockjs'
import { Stomp } from '@stomp/stompjs'
const socket = new SockJS('http://192.168.0.102:8080/chat')
const stompClient = Stomp.over(socket)
stompClient.connect({}, (frame: any) => {

})

export default stompClient