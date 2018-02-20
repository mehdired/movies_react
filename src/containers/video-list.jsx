import React from 'react'

import VideoListItemp from '../components/video-list-item'

const VideoList = (props) => {
  const {movieList} = props

  function receiveCallBack (movie) {
    props.callback(movie)
  }

  return (
    <div>
      <ul>
        {
          movieList.map(movie => {
            return <VideoListItemp key={movie.id} movie={movie} callback={receiveCallBack} />
          })
        }
      </ul>
    </div>
  )
}

export default VideoList
