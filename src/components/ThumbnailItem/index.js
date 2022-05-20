// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnailItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnailItem = () => {
    clickThumbnailItem(id)
  }
  const activeTabClassName = isActive ? 'background-style' : ''
  return (
    <li className="list-style">
      <button
        className={`button ${activeTabClassName}`}
        type="button"
        onClick={onClickThumbnailItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumb-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
