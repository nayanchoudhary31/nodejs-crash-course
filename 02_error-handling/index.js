const path = require('path');
const filePath = "/Users/apple/Downloads/node-learning/02_error-handling/files/sample.txt"

//dirname
// console.log(path.dirname(filePath))
//basename
// console.log(path.basename(filePath))
//extname
// console.log(path.extname(filePath));


const fs = require('fs');
const { CustomError } = require('./CustomError');

/**
 * Reading file Asynchronously
 */

// fs.readFile(filePath,'utf-8',(err,data)=>{
//     console.log(data);
// })


/**
 * Reading file synchonously
 */

// try {
//     const data1 = fs.readFileSync(path.join(__dirname, 'files', "sample.txt"), 'utf-8',)
//     console.log(data1)
// } catch (error) {
//     console.log(error);
// }


// Read file using fsPromises
const fsPromises = require('fs').promises

// const readFilePromises = async () => {
//     try {
//         const data = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFilePromises();

// const content = "This is the content i am writing to the file";
// fs.writeFile(path.join(__dirname, "files", "test.txt"), content, (err) => {
//     if (err) throw new CustomError(err.message);
//     console.log(`Write Operation Successfully`);
// })


// Writing, Appending, Reading using fsPromises
const txtPath = path.join(__dirname, "files", "test.txt");
const content = "This is writinh file using fsPromises"
const writeFilesFs = async () => {
    try {
        await fsPromises.writeFile(txtPath, content)
        await fsPromises.appendFile(txtPath, "\n this is new file appender");
        const data = await fsPromises.readFile(txtPath, 'utf-8')
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

writeFilesFs();