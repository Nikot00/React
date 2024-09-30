import React, { useState } from 'react'
import './App.css'
import MoodSelector from './components/moodSelector'
import MoodDisplay from './components/moodDisplay'
import Parent from './components/Parent'

const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
}

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

const App = () => {
  const [currentMood, setCurrentMood] = useState('')

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Parent family={family} />

      <h1>Mood Tracker</h1>
      <MoodSelector setCurrentMood={setCurrentMood} />
      <MoodDisplay currentMood={currentMood} moodEmojiMap={moodEmojiMap} />
    </div>
  )
}
export default App
