const fs = require('fs')

const addNote = (name,subject,grade,comment)=>{
    const notes = loadNotes()//returns array
    const duplicatedTitle = notes.filter((note)=>{//we used filter to compare item in array with another data, so we compared note.title which is item inside note object that exist in notes array , WITH title found in arguments of addNote(title,body), which is argv.title in app.js> And return a new array in duplicatedTitle
        return note.name === name//if true returns array of duplicatedTitle, If false returns empty array in duplicatedTitles
    })
    if(duplicatedTitle.length === 0){//if the length of the returned array is empty
        notes.push({//adding object to array in file notes.json
            name:name,
            subject,
            grade,
            comment,
        })
        saveNotes(notes)//saves data in the file notes.json
        console.log('Added Successfully!')
    }
    else(//if the length is not equal to 0 it won't add title as title found twice in duplicatedTitle
        console.log('Error: Duplicated Data')
    )
    
}
const loadNotes = ()=>{
    try{
        const data = fs.readFileSync('notes.json').toString()//will return error because there is no such notes.json yet, because the code that creates the file exist in saveNotes()//toString because returned data from readFileSync is Buffer so we convert data from buffer to string then to object next line
        return JSON.parse(data)//convert data from json to object
    }
    catch(e){
        return[]//handling the error to return empty array
    }
}
const saveNotes = (notes)=>{//notes from loadNotes()
    const saveData = JSON.stringify(notes)//convert to json to create json file
    fs.writeFileSync('notes.json',saveData)//creates the json file to hold json data
}

const removeNotes = (name)=>{
    const notes = loadNotes()
    const notesKeep = notes.filter((note)=>{//used filter to compare object name of note to the name inserted after the command and check if they arent equal, then return array without the name entered which will make removeNotes() work and create a new array in notes.json file
        return note.name !== name
    })
    saveNotes(notesKeep)
    console.log('Note removed!')
}
const listNotes = ()=>{ //it wont take any entries as it just shows list of object names in the array in notes.json by looping every object and show the name
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.name)
    });
}
const readNotes = (name)=>{//its a query by just name to show all content related to the name, so no need to other arguments
    const notes = loadNotes()
    const note =  notes.find(note=>{//find() id method to return first value of objects name that entered and compare it with name in the argumrnts
        return note.name === name
    })
    if(note){//This means if object "note" exists then execute some code
        console.log(`Name: '${note.name}'
        Subject: '${note.subject}'
        Grade:'${note.grade}'
        Comment:'${note.comment}'`)
    }else{
        console.log('Title Not Found!')
    }
}
module.exports = {
    addNote,
    removeNotes,
    listNotes,
    readNotes
}