// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} cards-list`}>
      <div>
        <h1 className="title-heading"> {title}</h1>
        <p className="bottom-paragraph">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
