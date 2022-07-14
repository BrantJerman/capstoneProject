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
        console.log('hit createTrail function')
        console.log(req.body)

        const {trailname, locationname, difficultyValue, rating} = req.body


        sequelize.query(`
        insert into userTrails (trailname, locationname, difficulty, rating)
            values ('${trailname}', '${locationname}', '${difficultyValue}', ${rating})
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
