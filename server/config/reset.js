import { pool } from './database.js'
import './dotenv.js'
import libraryData from '../data/libraries.js'

const createLibrariesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS libraries;

    CREATE TABLE IF NOT EXISTS libraries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      hours VARCHAR(500) NOT NULL,
      image VARCHAR(500) NOT NULL,
      description TEXT NOT NULL,
      phone VARCHAR(50) NOT NULL,
      website VARCHAR(255) NOT NULL,
      services TEXT NOT NULL,
      memberSince VARCHAR(10) NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 libraries table created successfully')
  } catch (err) {
    console.error('⚠️ error creating libraries table', err)
  }
}

const seedLibrariesTable = async () => {
  await createLibrariesTable()

  libraryData.forEach((library) => {
    const insertQuery = {
      text: 'INSERT INTO libraries (name, city, type, hours, image, description, phone, website, services, memberSince) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
    }

    const values = [
      library.name,
      library.city,
      library.type,
      library.hours,
      library.image,
      library.description,
      library.phone,
      library.website,
      library.services,
      library.memberSince
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting library', err)
        return
      }

      console.log(`✅ ${library.name} added successfully`)
    })
  })
}

seedLibrariesTable()
