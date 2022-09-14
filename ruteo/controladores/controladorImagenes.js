import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images')
    },
    filename: function (req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})



export const upload = multer ({ storage: storage})

export const controladorImagenes = async function(req,res,next) {
    const file = req.file
    if(!file){
        throw new Error("Subir un archivo")
    }
    else{
        res.json(`${req.hostname}/images/${file.filename}`)
    }
}
