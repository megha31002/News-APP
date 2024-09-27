const Newsitem = ({ articles }) => {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
   } = articles;
  return (
  <div className="news-item-container">
    <a href={url} taeget="_blank">
    <div className="image-container">
      <img className="thumbnail" src={urlToImage} alt={'thumbnail'}/>
      <h1 className="title">{title}</h1>
      {author && <p className="author">{author}</p>}
    </div>
    <div className="detail-container">
    <p>{description}</p>
    <p className="source">{source.name}</p>
    <p className="published">{publishedAt}</p>
    </div>
    </a>
    </div>
  );
};

export default Newsitem;
