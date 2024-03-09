import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card({card, isCardFlipped, handleClick}) {

  return (

    <div className="card-container">

      <div className="card-content" onClick={handleClick}>

        <div className="card-content-box">

          {!isCardFlipped && card.front}
          {isCardFlipped && card.back}

        </div>
      </div>

    </div>
  )
  
}

function Buttons({ next }) {

  return (

    <div className="buttons-container">

      <div classname="buttons-content">

        <button onClick={next}>Next Question</button>

      </div>
    </div>
  )
}

function Quiz() {

  const [cardIndex, setCardIndex] = useState(0)

  const cards = [
    {front: "What is the name of Monkey D. Luffy's signature attack?", back: "Gomu Gomu no Pistol"},
    {front: "Which character in One Piece can manipulate time with the Mera Mera no Mi?", back: "Borsalino (Admiral Kizaru)"},
    {front: "What is the name of the ship that the Straw Hat Pirates sail on?", back: "Thousand Sunny"},
    {front: "Who is known as the 'Strongest Man in the World' in One Piece?", back: "Edward Newgate (Whitebeard)"},
    {front: "Which Straw Hat Pirate has the ability to become invisible using the Suke Suke no Mi?", back: "Nami"},
    {front: "What is the Devil Fruit eaten by Nico Robin, allowing her to sprout additional body parts?", back: "Hana Hana no Mi"},
    {front: "Who is the doctor of the Straw Hat Pirates?", back: "Tony Tony Chopper"},
    {front: "What is the name of the mysterious and powerful swordsman in One Piece?", back: "Roronoa Zoro"},
    {front: "Which Yonko (Emperor) is known as the 'Queen of the Pleasure District'?", back: "Boa Hancock"},
    {front: "What is the name of Luffy's brother who possesses the Mera Mera no Mi?", back: "Portgas D. Ace"},
    {front: "Who is the navigator of the Straw Hat Pirates?", back: "Nami"},
    {front: "What is the name of Luffy's first ship?", back: "Going Merry"},
    {front: "Which character in One Piece has the ability to stretch his body like rubber?", back: "Monkey D. Luffy"},
    {front: "What is the nickname of Brook, the skeleton musician in the Straw Hat Pirates?", back: "Soul King"},
    {front: "Which Admiral in the Marines has the power of the Ice-Ice Fruit (Hie Hie no Mi)?", back: "Aokiji (Admiral Kuzan)"},
    {front: "Who is the captain of the Heart Pirates and a member of the Worst Generation?", back: "Trafalgar D. Water Law"},
    {front: "What is the name of the island where the Revolutionary Army is based?", back: "Baltigo"},
    {front: "Who is the archaeologist and historian of the Straw Hat Pirates?", back: "Nico Robin"},
    {front: "What is the name of the legendary treasure in One Piece that Gol D. Roger left at the end of the Grand Line?", back: "One Piece"},
    {front: "Who is the cook of the Straw Hat Pirates?", back: "Sanji"}
];

  const handleNext = () => {

    const randomIndex = Math.floor(Math.random() * cards.length);
    setCardIndex(randomIndex);
    setCardStatus(false);
  }

  const [isCardFlipped, setCardStatus] = useState(false);

  const handleClick = () => {

    setCardStatus(!isCardFlipped);
    console.log("Clicked");
  }



  return (

    <div className="quiz-container">

      <div className="quiz-content">

        <Card card={cards[cardIndex]} isCardFlipped={isCardFlipped} handleClick={handleClick}/>
        <Buttons next={handleNext} />

      </div>

    </div>
  )
}

function Title() {

  return (

    <div className="title-container">

      <div className="title-content">

        <p className="title-text">One Piece Flashcards</p>
        <p className="card-count-text">Test your knowledge over the popular show, One Piece!</p>
        <p className='card-count-text'>Number of Cards: 20</p>

      </div>
    </div>
  )
}

function App() {

  return (

    <div className='body-container'>

      <div className='body-content'>

        <Title />
        <Quiz />

      </div>
    </div>
  )
}

export default App
