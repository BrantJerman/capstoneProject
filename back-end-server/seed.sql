
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

            insert into brantTrails (trailName, locationName, difficulty, rating)
            values ('Bonneville Shoreline Trail',
            'NSL, Utah',
            'Hard',
            4);
            
            insert into brantTrails (trailName, locationName, difficulty, rating)
            values ('Gooseberry Mesa Trail',
            'St. George, Utah',
            'Medium',
            5);
            
           insert into brantTrails (trailName, locationName, difficulty, rating)
            values ('Elephant Rock Trail',
            'Bountiful, Utah',
            'Hard',
            5);
            

            insert into userTrails (trailName, locationName, difficulty, rating)
            values ('Deer Valley Mountain',
            'Park City, Utah',
            'Easy',
            3);
            
            insert into userTrails (trailName, locationName, difficulty, rating)
            values ('Snow Basin Mountain',
            'Huntsville, Utah',
            'Easy',
            4);
            
            
