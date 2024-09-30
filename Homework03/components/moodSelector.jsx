import React, { useState } from "react"

    const MoodSelector = ({ setCurrentMood }) => {
        const moods = ['Happy', 'Sad', 'Excited', 'Tired']

    return (
        <div>
          {moods.map(mood => (
            <button key={mood} 
            onClick={() => setCurrentMood(mood)}> {mood} </button>
          ))}
        </div>
    )
}

export default MoodSelector