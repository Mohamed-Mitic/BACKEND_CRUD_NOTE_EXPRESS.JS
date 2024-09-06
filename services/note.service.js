const db = require('../databes/db')

module.exports.getAllNotes = async ()=>{
    const [rows] = await db.query("SELECT * FROM note") 
    return rows;
}

module.exports.getNoteById = async (id)=>{
    const [row] = await db.query("SELECT * FROM note WHERE id = ? ",[id]) 
    return row;
}

module.exports.getCreateOrUpdateNoteById = async (objet, id = 0)=>{
    const [{affectedRows}] = await db.query("DELETE  FROM note WHERE id = ? ",[id]) 
    returnrows.affectedRows;
}

module.exports.createNote = async (note) => {
    const { etudiant_nom, matiere, note_devoir, note_compo } = note;
    const [{ insertId }] = await db.query(
        "INSERT INTO note (etudiant_nom, matiere, note_devoir, note_compo) VALUES (?, ?, ?, ?)",
        [etudiant_nom, matiere, note_devoir, note_compo]
    );
    return insertId;
}

module.exports.updateNote = async (id, note) => {
    const { etudiant_nom, matiere, note_devoir, note_compo } = note;
    const [{ affectedRows }] = await db.query(
        "UPDATE note SET etudiant_nom = ?, matiere = ?, note_devoir = ?, note_compo = ? WHERE id = ?",
        [etudiant_nom, matiere, note_devoir, note_compo, id]
    );
    return affectedRows;
}