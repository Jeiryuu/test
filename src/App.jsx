import { useEffect, useRef, useState } from 'react'
import './App.css'
import moanAudio from './assets/moan.mp3';

const App = () => {
  const audioRef = useRef(null)
  const [showGift, setShowGift] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGift(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleToggle = (e) => {
    if (e.target.checked) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return (
    <>
      {!showGift && (
        <div className="volume-warning">
          <div className="volume-text">
            <span>🔊</span> Increase your device’s volume for the best experience
          </div>
        </div>
      )}

      {showGift && (
        <div className="birthday-gift">
          <div className="gift">
            <input id="click" type="checkbox" onChange={handleToggle} />
            <label className="click" htmlFor="click"></label>
            <div className="wishes">Happy Birthday!</div>
            <div className="sparkles">
              <div className="spark1"></div>
              <div className="spark2"></div>
              <div className="spark3"></div>
              <div className="spark4"></div>
              <div className="spark5"></div>
              <div className="spark6"></div>
            </div>
            <audio ref={audioRef} src={moanAudio} preload="auto" />
          </div>
        </div>
      )}
    </>
  )
}

export default App
