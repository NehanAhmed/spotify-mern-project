const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const {uploadFile} = require('../services/storage.services')
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const createMusic = async (req, res) => {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized."
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "Forbidden." })
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Unauthorized."
        })
    }

    const {title} = req.body
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "No file uploaded." })
    }

    const result = await uploadFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri:result.url,
        title,
        artist:decoded.id
    })

    res.status(201).json({
        message:"Music Created Sucessfully.",
        music:{
            id:music._id,
            title:music.title,
            uri:music.uri,
            artist:music.artist
        }
    })

}

module.exports = { createMusic, upload }