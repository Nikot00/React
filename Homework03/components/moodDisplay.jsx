import React from "react"

const MoodDisplay = ({ currentMood, moodEmojiMap}) => {
    return (
        <div>
            <h2>Your current mood is: {currentMood} </h2>
            <h2>{moodEmojiMap[currentMood]} </h2>
        </div>
    )
}

export default MoodDisplay