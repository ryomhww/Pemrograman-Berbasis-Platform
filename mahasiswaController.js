const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res) => {
    db.query('SELECT * FORM  mahasiswa', (error, results) => {
        if (error) {
            console.error('error fetching mahasiwa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

router.get('/:nim', (req, res) => {
    const mahasiswaId = req.parans.nim;
    db.query('SELECT * FORM  mahasiswa WHERE nim = ?', [mahasiswaID], (error, results) => {
        if (error) {
            console.error('error fetching mahasiwa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.legth === 0) {
            res.status(404).json({ message: 'Mahasiswa not found' });
        } else {
            res.json(results[0]);
        }
    });
});

router.get('/:nim', (req, res) => {
    const mahasiswaId = req.parans.nim;
    const { nama, gender, prodi, alamat } = req.body;
    db.query('UPDATE  mahasiswa  SET nama = ?,gender = ?,alamat= ? WHERE nim = ?' [nama, gender, prodi, alamat, mahasiswaNim], (error, results) => {
        if (error) {
            console.error('error updating mahasiwa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json("updating mahasiswa successfullys");
        }
    });
});

module.exports = router;