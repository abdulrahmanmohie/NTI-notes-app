const yargs = require('yargs') //yargs retirns data as json string cannot be accessed

const notes = require('./notes')
yargs.command({ //To make a command
    command:'add',
    describe:'Add Notes',
    builder:{
        name:{
            describe:'This is name Add description',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'This is subject Add description',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'This is grades subject Add description',
            demandOption:true,
            type:'number'
        },
        comment:{
            describe:'This is grades subject Add description',
            demandOption:false,
            type:'string'
        }
    },
    handler:(argv)=>{ //argv returns data of name, subject, grade, comment as object, So it can be accessed
        notes.addNote(argv.name,argv.subject,argv.grade,argv.comment)
    }
})

yargs.command({//Will need title only
    command:'delete',
    describe:'Remove Notes',
    builder:{ //we make delete by name only so we need name only in the builder
        name:{
            describe:'This is title delete description',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.name)
    }
})

yargs.command({
    command:'list',//no need to name in builder as it shows all names in the array only
    describe:'List Notes',
    handler:(argv)=>{
        notes.listNotes(argv.name)
    }
})

yargs.command({//will need title only
        command:'read',
        describe:'Read Notes',
        builder:{
            name:{ //same as delete
                describe: 'This is read description',
                demandOption: true,
                type:'string'
            }
        },
        handler:(argv)=>{
            notes.readNotes(argv.name)
        }
    })
yargs.parse()