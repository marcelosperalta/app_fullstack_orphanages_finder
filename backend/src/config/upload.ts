import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        // it is import to rename the file to avoid the scenario where two users give the same name to a uploaded file 
        // without the line below, the second file with the same name will overwrite the first uploaded file 
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        }
    })
};