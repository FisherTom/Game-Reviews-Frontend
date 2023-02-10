import React from 'react'
import SplashCards from './SplashCards'

function LandingSplash() {
  return (
    <section id='landing-splash' className='fancy-border'>
      <p>Welcome to Board Game Buzz, the ultimate destination for board game enthusiasts! Discover the latest and greatest games, read in-depth reviews, and connect with other players. Share your thoughts and opinions on your favorite games and help others make informed decisions. Whether you're a seasoned player or just starting out, Board Game Buzz has something for everyone. Join our community of passionate gamers and start sharing your experiences today!</p>
      <h2 className='splash-cards-title'>Our Top Reviews 👇</h2>
      <SplashCards/>
    </section>
  )
}

export default LandingSplash
