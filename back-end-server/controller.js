require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  })

  module.exports = {
   
    getUserTrails: (req, res) => {
        sequelize.query(`
        select * from userTrails
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },
    createTrail: (req, res) => {
        const {trailName, locationName, difficulty, rating} = req.body

        sequelize.query(`
        insert into userTrails (trailName, locationName, difficulty, rating)
            values ('${trailName}', '${locationName}', ${difficulty}, ${rating})
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },

    getBst : (req, res) => {
        console.log('hit server')
        sequelize.query(`
        select * from branttrails where trail_id = 1
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },

    getGm : (req, res) => {
        sequelize.query(`
        select * from branttrails where trail_id = 2
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },

    getEr : (req, res) => {
        sequelize.query(`
        select * from branttrails where trail_id = 3
        `).then((dbRes => res.status(200).send(dbRes[0])))
    }
}
