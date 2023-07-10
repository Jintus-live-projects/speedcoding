import './ClassedAuthor.css';

interface ClassedAuthorProps {
  author: string;
  nbrFollowers: number;
  profilePictureUrl: string;
  classement: number;
}

function ClassedAuthor({author, nbrFollowers, profilePictureUrl, classement}: ClassedAuthorProps) {
  return <div className='author'>
    <div className='author__picture-wrapper'>
      <img className='author__picture' src={profilePictureUrl}/>
      <div className='author__classement'>{classement}</div>
    </div>
    <div className='author__info'>
      <span className='author__name'>{author}</span>
      <span className='author__followers'>{`${nbrFollowers} Followers`}</span>
    </div>
  </div>
}

export default ClassedAuthor;
