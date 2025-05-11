const uploadFiles = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: 'Upload failed!' });
    }

    const fileKeys = Object.keys(req.files);

    fileKeys.forEach((fileKey) => {
      req.files[fileKey].mv('./uploads/' + req.files[fileKey].name);

      console.log(JSON.parse(req.body[`${fileKey}metadata`]));
    });

    res.status(200).json({ message: 'Files uploaded!' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { uploadFiles };
