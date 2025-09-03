import multer from "multer";
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(),"uploads");
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir,{recursive:true});
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,uploadDir)
  },
  filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+ext)
  }
})
const upload = multer({ storage: storage }).single('demo')


// const storage = multer.diskStorage({
//     destination: (req,file,cb)=> cb(null,uploadDir),
//     filename:(req,file,cb=>{
//         const ext = path.extname(file.originalname);
//         cb(null,`${Date.now}${ext}`);
//     }),
// });


// const uploadSingle = multer({
//     storage,
// }).single("file");
const uploadFile = (req,res)=>{
   upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(422).json({errors:err})
    // }
    } else if (err) {
      // An unknown error occurred when uploading.
       return res.status(422).json({errors:err})
    }

   return res.status(201).json({message:"file uploaded successfully"})
    // Everything went fine.
  })
};
export default uploadFile;