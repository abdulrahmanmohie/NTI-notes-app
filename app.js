/* const x = require('./data')
console.log(x.name1) */
/* const fs = require('fs')
fs.writeFileSync('notes.txt','hello')
// console.log(fs.readFileSync('notes.txt').toString())
fs.appendFileSync('notes.txt','ahmed')
console.log(fs.readFileSync('notes.txt').toString()) */

/* const validator = require('validator')
console.log(validator.isEmail('111@dddt')) */

// console.log(process.argv)

const yargs = require('yargs') //yargs retirns data as json string cannot be accessed
// yargs.command({ //To make a command
//     command:'add',
//     describe:'Add Notes',
//     builder:{
//         title:{
//             describe:'This is title description',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'This is body description',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{ //argv returns data aof title and body as object, So it can be accessed
//         console.log(argv)
//         console.log(argv.title)
//         console.log(argv.body)
//     }
// })
// yargs.command({//Will need title only
//     command:'delete',
//     describe:'Remove Notes',
//     builder:{
//         title:{
//             describe:'This is title delete description',
//             demandOption: true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{
//         console.log( argv.title + ' removed!')
//     }
// })
// yargs.command({//will need title only
//     command:'read',
//     describe:'Read Notes',
//     builder:{
//         title:{
//             describe: 'This is read description',
//             demandOption: true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{
//         console.log(argv.title)
//     }
// })
// yargs.command({
//     command:'list',//will need title and body to show them
//     describe:'List Notes',
//     builder:{
//         title:{
//             describe:'This is list title',
//             demandOption: true,
//             type:'string'
//         },
//         body:{
//             describe:'This is list body',
//             demandOption: true,
//             type:'string'
//         }
//     },
//     handler:(argv)=>{
//         console.log(argv.title)
//         console.log(argv.body)
//     }
// })

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
    handler:(argv)=>{ //argv returns data aof title and body as object, So it can be accessed
        notes.addNote(argv.name,argv.subject,argv.grade,argv.comment)
    }
})

yargs.command({//Will need title only
    command:'delete',
    describe:'Remove Notes',
    builder:{
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
    command:'list',//will need title and body to show them
    describe:'List Notes',
    handler:(argv)=>{
        notes.listNotes(argv.name)
    }
})

yargs.command({//will need title only
        command:'read',
        describe:'Read Notes',
        builder:{
            name:{
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