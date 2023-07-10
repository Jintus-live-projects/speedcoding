import './ArticleInfo.css'
interface ArticleInfoProps {
  title: string;
  author: string;
  publicationDate: Date
}

function ArticleInfo({title, author, publicationDate}: ArticleInfoProps) {
  return <>
    <h2>{title}</h2>
    <div className='article--author'>{author}</div>
    <div className='article--date'>{publicationDate.toLocaleDateString()}</div>
  </>
}

export default ArticleInfo;
