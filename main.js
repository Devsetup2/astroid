const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Veritabanı bağlantıları
const databases = {
    catmail_db: mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'catmail_db' }),
    database2: mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'database2' }),
    database3: mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'database3' })
};

// Veritabanına bağlanma
Object.values(databases).forEach(db => db.connect(err => {
    if (err) console.error('Veritabanı bağlantı hatası:', err);
    else console.log('Veritabanına bağlandı');
}));

// Email ekleme endpointi
app.post('/add-email', (req, res) => {
    const { email, database } = req.body;
    if (!email || !database || !databases[database]) {
        return res.status(400).json({ message: 'Geçersiz giriş' });
    }
    
    const db = databases[database];
    db.query('INSERT INTO emails (email) VALUES (?)', [email], (err) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });
        res.json({ message: 'E-posta başarıyla eklendi' });
    });
});

// Email listesini alma endpointi
app.get('/get-emails/:database', (req, res) => {
    const { database } = req.params;
    if (!database || !databases[database]) {
        return res.status(400).json({ message: 'Geçersiz veritabanı seçimi' });
    }
    
    const db = databases[database];
    db.query('SELECT email FROM emails', (err, results) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });
        res.json(results);
    });
});

// Toplu mail gönderme endpointi
app.post('/send-emails', (req, res) => {
    const { database } = req.body;
    if (!database || !databases[database]) {
        return res.status(400).json({ message: 'Geçersiz veritabanı seçimi' });
    }
    
    const db = databases[database];
    db.query('SELECT email FROM emails', (err, results) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });
        
        const emailList = results.map(row => row.email);
        
        // Nodemailer ile e-posta gönderme
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: 'your-email@gmail.com', pass: 'your-password' }
        });
        
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: emailList.join(','),
            subject: 'Toplu Mail',
            text: 'Bu bir test mailidir.'
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return res.status(500).json({ message: 'E-posta gönderme hatası' });
            res.json({ message: 'E-postalar başarıyla gönderildi' });
        });
    });
});

app.listen(3000, () => console.log('Server 3000 portunda çalışıyor.'));


