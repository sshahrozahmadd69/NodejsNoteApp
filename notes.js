 const fs= require('fs')
 const chalk = require('chalk')
const { title } = require('process')

//Add Note Function

 const addNote=  (title, body)=> {
 const notes= loadNotes()
 //const duplicateNote= notes.filter((note)=>   note.title===title)
const duplicateNote = notes.find((note)=> note.title ===title  )
      if (!duplicateNote){
         notes.push({
            title: title,
            body: body
         })
         saveNotes(notes)
         console.log("New Note Added")
      }
      else{
         console.log("Note already Added")
      }
}

//debugger

//Remove Note Function
const removeNote =  (title) => {
   const notes = loadNotes()
   const notesToKeep = notes.filter(note => note.title !== title);
   
   

   if (notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse('Note removed!'))
       saveNotes(notesToKeep)
   } else {
       console.log(chalk.red.inverse('No note found!'))
   }    
}

//List Notes
const listNotes = () => {
   const notes = loadNotes()
   notes.forEach(notes => {
         console.log(chalk.yellow(notes.title ));      
   });
   // // notes.for(note => note.title === title)
   // console.log(chalk.yellow(notes));
}

//ReadNotes
const readNotes = (title) => {
      const notes = loadNotes()
   const note =  notes.find((note)=> note.title === title)
    if( note){
      console.log(chalk.inverse(note.title))
      console.log(note.body);
    }
    else{
      console.log(chalk.inverse("note Not found"));
    }
}





//Save Notes
const saveNotes= (notes)=>{
      const dataJson= JSON.stringify(notes)
      fs.writeFileSync('notes.json' , dataJson )
}

//Load Notes
 const loadNotes= ()=>{
   try {
      const dataBuffer=fs.readFileSync('notes.json')
      const dataJson= dataBuffer.toString();
      return JSON.parse(dataJson)
   } catch (e) {
         return [];      
   }
   
 }
 module.exports={
  
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes

 }
