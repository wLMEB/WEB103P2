import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import LibrariesController from '../controllers/libraries.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', LibrariesController.getLibraries)

router.get('/:libraryId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/library.html'))
})

export default router
