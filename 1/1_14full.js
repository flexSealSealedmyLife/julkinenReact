import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            best: 0
        }
    }

    displayBest = () => {
        if (this.state.best === 0) {
            return (
                <p>Äänestä suosikkiasi ja kannusta se voittoon</p>
            )
            }else {
                return (
                    <div>
                        <h3>Kaikkien suosikki on: </h3>
                    <p>"{anecdotes[this.state.best]}"</p>
                    </div>
                        )


            }
        }


    handleClick = (arvo, aani) => {

        let suurin = 0;
        let testeri = 0;
        let vastaus = 0;

        for( let i = 1; i < 6; i++) {
            testeri = this.state[i]
            if (testeri > suurin) {
                suurin = testeri
                vastaus = i
            }
        }


        if (aani) {
            return () => {
                this.setState({[arvo]: Math.floor(Math.random() * 6)});
            }
        } else {
            return () => {
                this.setState({[arvo]:  this.state[arvo] + 1});
                this.setState({best:  vastaus});

            }
        }
    }

    render() {

        const aanet = [{

        }]

        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>this particular anecdote has {this.state[this.state.selected]} votes </p>
                <button onClick={this.handleClick("selected", true).bind(this)}>next anecdote</button>
                <button onClick={this.handleClick(this.state.selected, false).bind(this)}>vote</button>
                {this.displayBest()}


            </div>

        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)










import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  let [eka, setEka] = useState(0)
  let [toka, setToka] = useState(0)
  let [kolmas, setKolmas] = useState(0)
  let [neljas, setNeljas] = useState(0)
  let [viides, setViides] = useState(0)
  let [kuudes, setKuudes] = useState(0)
  let [paras, setParas] = useState(0)



  const randomize = () => {
    return () => {
      setSelected(Math.floor(Math.random() * 6))
    }
  }

  const setVotes = (selected) => {
    return () => {
      console.log("heloo", eka, toka, kolmas, neljas, viides, kuudes, "paras on:", paras)
      if (selected === 0){
        setEka(eka+=1)
      }else if (selected === 1){
        setToka(toka+=1)
      }else if (selected === 2){
        setKolmas(kolmas+=1)
      }else if (selected === 3){
        setNeljas(neljas+=1)
      }else if (selected === 4){
        setViides(viides+=1)
      }else if (selected === 5){
        setKuudes(kuudes+=1)
      }

      
      
      
    }
  }

  const findBest = () => {
    return ()  => {
      const baseline = 0

      console.log("käytiin findbest")

      if (baseline < eka) {
        setParas(0)
      }
      if (eka < toka) {
        setParas(1)
      }
      if (toka < kolmas) {
        setParas(2)
      }
      if (kolmas < neljas) {
        setParas(3)
      }
      if (neljas < viides) {
        setParas(4)
      }
      if (viides < kuudes) {
        setParas(5)
      }
    


    }
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={findBest()}>Päivitä paras</button>
      <button onClick={randomize()}>next anecdote</button>
      <button onClick={setVotes(selected)}>Vote</button>
      <p>Paras anekdootii on: {props.anecdotes[paras]}</p>
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
