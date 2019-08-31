const db = require('../db')
const { Item } = require('./models')

const items = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
]

async function runSeed() {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    await Item.bulkCreate(items)
    console.log(`Seeded ${items.length} items.`)
    console.log('seeded successfully')
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
