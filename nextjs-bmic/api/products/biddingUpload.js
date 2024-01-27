const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/upload/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/upload', async (req, res, next) => {
  const biddingUpload = upload.single('file1');

  biddingUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.json({ status: 500, message: 'error' });
    } else if (err) {
      console.log(err);
      res.json({ status: 500, message: 'error' });
    } else {
      const data = req.body;
      // 파일 업로드 성공시
      console.log('00', data.inputData);
      console.log('11', req.file.filename);
      auctionDAO.bidding(data.inputData, req.file.filename, (resp) => {
        res.json(resp);
      });
    }
  });
});
