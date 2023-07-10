import './Link.css';
interface LinkProps {
  url: string
  children: JSX.Element
}
function Link({url, children}: LinkProps) {
  return <a target='_blank' href={url}>{children}</a>
}

export default Link
