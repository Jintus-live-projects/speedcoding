import './App.css'
import BookmarkIcon from "./Atoms/BookmarkIcon.tsx";
import Link from "./Atoms/Link.tsx";
import ArticleInfo from "./Atoms/Molecules/ArticleInfo.tsx";
import ClassedAuthor from "./Atoms/Molecules/ClassedAuthor.tsx";

function App() {
  return (
    <>
      <BookmarkIcon></BookmarkIcon>
      <BookmarkIcon isActive={true}></BookmarkIcon>
      <Link url='#'>
        <>Read more</>
      </Link>
      <h2>Test de titre</h2>
      <ArticleInfo title={'A brief history of creation'} author={'Eugene Francklin'} publicationDate={new Date()}></ArticleInfo>
      <ClassedAuthor author={'Elva Malone'} nbrFollowers={3455} profilePictureUrl={'https://randomuser.me/api/portraits/men/1.jpg'} classement={1}></ClassedAuthor>
      <ClassedAuthor author={'Mina Rodgers'} nbrFollowers={3119} profilePictureUrl={'https://randomuser.me/api/portraits/women/2.jpg'} classement={2}></ClassedAuthor>
      <ClassedAuthor author={'Lucy Bush'} nbrFollowers={2566} profilePictureUrl={'https://randomuser.me/api/portraits/men/4.jpg'} classement={3}></ClassedAuthor>
    </>
  )
}

export default App
