import React from 'react'

import VideoListItemp from '../components/video-list-item'

const VideoList = () => {
  const movies = ['film1', 'film2', 'film3']
  return (
    <div>
      <ul>
        {
          movies.map(movie => {
            return <VideoListItemp key={movie} movie={movie} />
          })
        }
      </ul>
    </div>
  )
}

export default VideoList
