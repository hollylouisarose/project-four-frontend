import React from 'react'
import axios from 'axios'
import { getHeaders } from '../../lib/api'
import { Link, useParams, useHistory } from 'react-router-dom'


function UserProfile(){
  const history = useHistory()
  const [user, setUser] = React.useState('')
  const [likedImages, setLikedImages] = React.useState([])
  const userId = useParams()

  React.useEffect(() => {

    const getData = async () => {
      try {
        const response = await axios.get('/api/auth/profile', getHeaders())
        setUser(response.data)
        setLikedImages(response.data.likedImages)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [userId]) 

  const handleRemove = async (e) => {
    const imageId = e.target.value
    const updatedImages = likedImages.filter(image => {
      return image.source !== e.target.id
    })

    setLikedImages(updatedImages)

    try {
      const response = await axios.post(`/api/images/${imageId}/like/`, likedImages, getHeaders())
      console.log(response.data)
      history.push(`/${userId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section key={user.id} className="section">
      {user && 
      <div>
        <div className="profile-header">
          <div>
            <h3>Welcome back, {user.username}</h3>
            <img className="profile-image" src={user.profileImage}/>
          </div>
          <button className="button">Edit profile </button>
        </div>
        <div className="navbar" role="navigation" aria-label="user navigation">
          <div className="navbar-brand">
            <div className="navbar-item ">
              <Link to="/choosemood"> Moodboard</Link>
              <Link to={`/${userId}/notes`}>Your notes</Link>
            </div>
          </div>
          
        </div>
      </div>
      }
      <div className="columns is-multiline">
        { user && user.likedImages.map(image => {
          return (
            <div key={image.id} className="column is-one-quarter-desktop is-one-third-tablet">
              <button 
                onClick={handleRemove}
                className="button unfavourite-button" 
                id={image.source}
                value={image.id}
              >
                Remove</button>
              <img src={image.source}/>
            </div>
          )
        })}
      </div> 
    </section>
  )

}

export default UserProfile