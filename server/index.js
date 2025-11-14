import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname) || '';
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const url = `/uploads/${req.file.filename}`; // served from /public/uploads
  res.json({ url });
});

app.use('/uploads', express.static(uploadDir));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Upload server listening on port', port);
});
