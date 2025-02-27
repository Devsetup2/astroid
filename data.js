//MySQL bağlantısı

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // MySQL kullanıcı adın
    password: '',   // MySQL şifren (boşsa '')
    database: 'catmail_db'  // Kullanmak istediğin veritabanı adı
});

db.connect(err => {
    if (err) {
        console.error('MySQL bağlantı hatası:', err);
    } else {
        console.log('MySQL bağlantısı başarılı!');
    }
});


 // E-posta Kaydetme API’sini Yaz

const express = require('express');
const app = express();
app.use(express.json());

app.post('/add-email', (req, res) => {
    const { email, message } = req.body;
    if (!email || !message) {
        return res.status(400).json({ message: 'E-posta ve mesaj gereklidir.' });
    }

    db.query('INSERT INTO emails (email, message) VALUES (?, ?)', [email, message], (err, result) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });
        res.json({ message: 'E-posta başarıyla eklendi' });
    });
});

 // E-postaları Çekme API’sini Yaz
app.get('/get-emails', (req, res) => {
    db.query('SELECT * FROM emails', (err, results) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });
        res.json(results);
    });
});

//Toplu E-Posta Gönderme API'
const nodemailer = require('nodemailer');

app.post('/send-emails', (req, res) => {
    db.query('SELECT email, message FROM emails', (err, results) => {
        if (err) return res.status(500).json({ message: 'Veritabanı hatası' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: 'your-email@gmail.com', pass: 'your-password' }
        });

        results.forEach(row => {
            const mailOptions = {
                from: 'your-email@gmail.com',
                to: row.email,
                subject: 'Toplu Mail',
                text: row.message
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) console.error('E-posta gönderme hatası:', error);
            });
        });

        res.json({ message: 'E-postalar gönderildi' });
    });
});

