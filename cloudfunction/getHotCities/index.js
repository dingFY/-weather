const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  env: 'weather-4gkvmicz8bd72dee',
})
exports.main = async (event, context) => {
  return db.collection('hotCities')
    .get()
}