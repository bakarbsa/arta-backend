exports.createArticle = (req, res, next) => {
  const author = req.body.author;
  const createdAt = req.body.createdAt;
  const views = req.body.views;
  const title = req.body.title;
  // const image = req.body.image;
  const content = req.body.content;

  const result = {
    message: 'Create article successfully',
    data: {
      author: author,
      createdAt: createdAt,
      views: views,
      title: title,
      // image: 'sdsdsd',
      content: content
    }
  };
  res.status(200).json(result);
};