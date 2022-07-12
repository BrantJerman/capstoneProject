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
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists brantTrails;
            drop table if exists userTrails;

            create table brantTrails (
                trail_id serial primary key, 
                trailName varchar,
                locationName varchar,
                difficulty varchar,
                rating int
            );

            create table userTrails (
                trail_id serial primary key, 
                trailName varchar,
                locationName varchar,
                difficulty varchar,
                rating int
            );

            insert into brantTrails (trailName)
            values ('Bonneville Shoreline Trail'),
            ('Gooseberry Mesa Trail'),
            ('Elephant Rock Trail');
            
            insert into brantTrails (locationName)
            values ('NSL, Utah'),
            ('St. George, Utah'),
            ('Bountiful, Utah');
            
            insert into brantTrails (difficulty)
            values (Hard),
            (Medium),
            (Hard);
            
            insert into brantTrails (rating)
            values (4),
            (5),
            (5);

            insert into userTrails (trailName)
            values ('Deer Valley Mountain'),
            ('Snow Basin Mountain');
            
            insert into brantTrails (locationName)
            values ('Park City, Utah'),
            ('Huntsville, Utah);
            
            insert into brantTrails (difficulty)
            values (Easy),
            (Easy);
            
            insert into brantTrails (rating)
            values (3),
            (4);
            
            
            
    `).then(() => {
        console.log('DB seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
    },
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
        sequelize.query(`
        select trail_id[1] from brantTrails
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },

    getGm : (req, res) => {
        sequelize.query(`
        select trail_id[2] from brantTrails
        `).then((dbRes => res.status(200).send(dbRes[0])))
    },

    getEr : (req, res) => {
        sequelize.query(`
        select trail_id[3] from brantTrails
        `).then((dbRes => res.status(200).send(dbRes[0])))
    }
}
