import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 8000;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


app.get('/properties', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) console.log(err);
        console.log(`connected as id ${connection.threadId}`);

        //Get owner_name, Place, Area_covered_in_sqft, No_of_Hoardings, owner_contact of all properties 
        const query1='SELECT owner_name, Place, Area_covered_in_sqft, No_of_Hoardings, owner_contact FROM property'
        connection.query(query1, (err, rows) => {
            if (err) console.log(err);
            res.status(200).json(rows);

            connection.release();
        });
    });
});
var newCompanyId=0;
app.post('/', (req, res) => {
    const cname = req.body.company_name;
    const contact = req.body.contact_no;
    const email = req.body.email_id;
    const location = req.body.location;

    // Get the max company_id
    var sql1 = `SELECT MAX(company_id) AS max_id FROM company`;
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        connection.query(sql1, (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
                connection.release();
                return;
            }

            // Extract the max_id
            const maxId = rows[0].max_id || 0; // Default to 0 if no records exist

            // Increment the max_id to get the new company_id
            newCompanyId = maxId + 1;

            // Use the new company_id in the INSERT query
            var sql2 = `INSERT INTO company VALUES (?, ?, ?, ?, ?)`;
            connection.query(sql2, [newCompanyId, cname, contact, email, location], (err) => {
                connection.release();
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }

                console.log(req.body);
                res.status(200).json(newCompanyId);
            });
        });
    });
   
});

app.post('/registered', (req, res) => {
    const cid = req.body.company_id;
    const name = req.body.company_name;
    
    var sql = `SELECT * FROM company WHERE company_name=? and company_id=?`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        console.log(`connected as id ${connection.threadId}`);
        
        // Update the query parameters
        connection.query(sql, [name, cid], (err, rows) => {
            connection.release();
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            console.log(rows);
            if (rows.length > 0) {
                // Company found, return null
                res.status(200).json(null);
            } else {
                // Company not found, return an error response
                res.status(404).json({ error: 'Company not found' });
            }
        });
    });
});



var loc='';
var companyname='';
// backend code
app.post('/agencyinfo', (req, res) => {
    loc = req.body.city;
    companyname = req.body.cname;
    
    // Use correct column names in the SQL query
    var sql = `UPDATE company SET Location=? WHERE company_name=?`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        console.log(`connected as id ${connection.threadId}`);
        
        // Update the query parameters
        connection.query(sql, [loc, companyname], (err) => {
            connection.release();
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            console.log(req.body);
            res.status(200).json({ message: 'Data updated successfully' });
        });
    });
});

app.get('/agencyinfo', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) console.log(err);
        console.log(`connected as id ${connection.threadId}`);

        const query1='SELECT Agency_name, Rating, Contact_no, Location FROM agencytable where Location=? ORDER BY Rating DESC'
        connection.query(query1,[loc], (err, rows) => {
            if (err) console.log(err);
            res.status(200).json(rows);
            connection.release();
        });
    });
});

app.get('/select',(req, res)=>{
    res.status(200).json(newCompanyId);
})
app.listen(port, () => {
    console.log("Listening on port");
});
