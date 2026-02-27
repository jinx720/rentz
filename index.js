import fs from 'fs'
import bencode from 'bencode'
import * as tracker from './tracker.js'
import * as torrentParser from "./torrent-parser.js"

const torrent = torrentParser.open(process.argv[2])

tracker.getPeers(torrent,peers => {
    console.log('peers list: ', peers)
})

