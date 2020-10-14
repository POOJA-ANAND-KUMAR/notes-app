const fs =require('fs');
const chalk = require('chalk');

const getnotes = function(){
    return "your notes";
}

const addNote =function(title ,body)
{       const notes =loadNotes();
       
        const duplicateNote = notes.find((note)=> note.title === title )
       debugger

        if(!duplicateNote){
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes);
            console.log(chalk.green.inverse("New note added"));

        }
        else
        {
            console.log(chalk.red.inverse("Note title taken"));
        }

    }

    const listNotes = function(){
        console.log(chalk.inverse.blue("Your notes are"));
        const notes =loadNotes();
        notes.forEach((note)=>
        {
            console.log(note.title);
        });

    }

    const readNote = function(title)
    {
        const notes =loadNotes();
        noteToRead=notes.find((note)=> note.title === title);

        if(!noteToRead)
        {
            console.log(chalk.red("No note found!"))
        }
        else{

            console.log(chalk.underline.bold(noteToRead.title));
            console.log(noteToRead.body);
        }

    }
const removeNote = function(title){
    const notes =loadNotes();
     const notesToKeep=notes.filter((note)=>{ note.title != title});

    if(notesToKeep.length < notes.length)
    {
        console.log(chalk.green("Note removed"));
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red("Note not found"));
    }

}
      
const saveNotes= function(notes)
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}

const loadNotes = function()
{

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        
    }
    catch (e)
    {
        return [] //returns an empty array
         
    }
  
}

module.exports={
    getnotes: getnotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}