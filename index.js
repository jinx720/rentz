import fs from 'fs'
import bencode from 'bencode'

const torrent = bencode.decode(fs.readFileSync('./test/edubuntu-24.04.3-desktop-amd64.iso.torrent'), 'utf8');
console.log('Announce:', torrent.announce);
console.log('Name:', torrent.info.name);