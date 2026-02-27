import fs from 'fs'
import bencode from 'bencode'
import bignum from 'bignum'

function open(filepath){
    return bencode.decode(fs.readFileSync(filepath))
}

function infohash(torrent){
    const info = bencode.encode(torrent.info)
    return crypto.createHash('sha1').update(info).digest()
}