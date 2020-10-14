
const notes = require('./notes.js');
const validator  = require('validator');
const chalk = require('chalk');
const yargs =require('yargs');

yargs.version("1.1.1");  //this has to be at the beginning of the program to take effect
//const str = getNotes();
//console.log(str);
//console.log(validator.isEmail('pooja@exam.com'));
//console.log(validator.isURL('x.com'));
// console.log(chalk.green("blah success"));
// console.log(chalk.bold("This one is bold"));
// console.log(chalk.inverse("This one is inverse"));
// console.log(process.argv[2]) 
// const add= require('./utils.js');
// const sum = add(6,-2);
// console.log(sum);

//const command=process.argv[2]


//console.log(process.argv);


yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'true',
            type:'string'
        },
        body:{
            describe:'The body of the note',
            demandOption:'true',
            type:'string'

        }

    },
    handler: function (argv)
    {
        notes.addNote(argv.title,argv.body )
    }
})

yargs.command({
    command:'remove',
    describe:'remove a  note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'true',
            type:'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
       // console.log('removing a note');

    }
})

yargs.command({
    command:'list',
    describe:'lists a note',
    handler ()
    {
        notes.listNotes();
        //console.log('listing the note');
    }
})

yargs.command({
    command:'read',
    describe:'reads a note',
    handler(argv)
    {
        notes.readNote(argv.title)
        //console.log('reading the note');
    }
})

//console.log(yargs.argv);

yargs.parse();

