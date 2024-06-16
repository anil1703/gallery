// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageData, clickingTheImg} = this.props
    const {thumbnailUrl, id, thumbnailAltText} = imageData
    const imgClick = () => {
      clickingTheImg(id)
    }
    return (
      <li>
        <button type="button" onClick={imgClick} className="list-img">
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
