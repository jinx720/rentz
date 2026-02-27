import net from 'net'
import {Buffer} from 'buffer'
import * as tracker from './tracker.js'

export default (torrent)=>{
    tracker.getPeers(torrent, peers=>peers.forEach(download))
}


function download(peer){
    const socket = new net.Socket()
    socket.on('error', console.log)
    socket.connect(peer.port, peer.ip, ()=>{
        //socket.write()
    })
    socket.on('data', data=>{
        //action
    })
}