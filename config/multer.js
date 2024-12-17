import multer from 'multer'
import path from 'path'

// Define storage location and file naming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Upload files to "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Rename file to avoid duplication
  },
});

// File filter: allow only .png, .jpg, .jpeg, .gif
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /png|jpg|jpeg|gif/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Only .png, .jpg, .jpeg, and .gif files are allowed'));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
