import './BookmarkIcon.css'

interface BookmarkIconProps {
  isActive?: boolean
}
function BookmarkIcon({isActive} : BookmarkIconProps) {
  return (
    <span className={`material-symbols-outlined ${isActive ? 'active': ''}`}>
bookmark
</span>)
}

export default BookmarkIcon
