const {ImageKit} = require('@imagekit/nodejs')
const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
});

async function uploadFile (file){
    const result = await client.files.upload({
        file:file,
        fileName:`music - ${Date.now()}`,
        folder:"spotify-clone/music"
    })
    return result;
}

module.exports = {uploadFile}