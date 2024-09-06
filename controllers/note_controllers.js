const express = require('express')
const router = express.Router()
const service = require('../services/note.service')

    //localhost:3000/api/note/
    router.get('/', async (req, res) => {
        const notes = await service.getAllNotes() 
        res.send(notes)
    } )

    //localhost:3000/api/note/{id}
    router.get('/:id', async (req, res) => {
        const note = await service.getNoteById(req.params.id) 
        if(note.lenght == 0)
            res.status(400).json("pas de données pour l'id :" + req.params.id)
        else
            res.send(note)
        res.send(note)
    } )

    //localhost:3000/api/note/delete/{id}
    router.delete('/delete/:id', async (req, res) => {
        const affectedRows = await service.getDeleteNoteById(req.params.id) 
        if(affectedRows.lenght == 0)
            res.status(400).json("pas de données pour l'id :" + req.params.id)
        else 
            res.send.json("ligne supprimer avec success")
    } )

    //localhost:3000/api/note/create
    router.post('/create', async (req, res) => {
        const note = req.body;
        const insertId = await service.createNote(note);
        res.status(201).json({ id: insertId, message: "Note créée avec succès" });
    });

    // localhost:3000/api/note/update/{id}
    router.put('/update/:id', async (req, res) => {
        const note = req.body;
        const affectedRows = await service.updateNote(req.params.id, note);
        if (affectedRows === 0)
            res.status(400).json("Pas de données pour l'id :" + req.params.id);
        else
            res.json("Note mise à jour avec succès");
    });

    module.exports = router;