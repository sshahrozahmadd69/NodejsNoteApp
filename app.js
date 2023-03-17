const Notes= require('./notes.js')
const yargs = require('yargs')

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe:'Note Title',
            demandOption: true,
            type:'string',
            
        },
        body:{
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        Notes.addNote(argv.title, argv.body)
    }
})



//remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => {
        Notes.removeNote(argv.title)
    }
})


//list Command
yargs.command({
    command:'list',
    describe:'List a Document',
    handler: (argv) => {
        Notes.listNotes()
    }
})

//Read Command

yargs.command({
    command: 'read',
    describe: "Read Notes",
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        Notes.readNotes(argv.title)
    }
})

.parse();



