import React from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
    return(
        <tr key={props.mika}>
            <td>{props.mika}</td><td>{props.arvo}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const arvo = props.tieto.map(a => a.value).filter(b => b !== 0).length !== 0
    if (!arvo) {
        return(<div>palautteita ei vielä ole</div>)
    }else {
        const statistics = props.tieto.map(a => <Statistic mika={a.teksti} arvo ={a.value} key = {a.key}/>)
        return (
            <table><tbody>{statistics}</tbody></table>
        )
    }

}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    handleClick = (arvo) => {
        return () => {
            this.setState({[arvo]: this.state[arvo]+1});
            console.log(arvo)
        }
    }

    keskiarvo = () => {
        let yhteensa = this.state.good + this.state.neutral + this.state.bad
        let ka = 0

        if (yhteensa !== 0) {
            ka = (this.state.good*1+this.state.neutral*0+this.state.bad*-1)/(yhteensa)
        }

        return (ka)

    }

    positiivisia = () => {
        let jakaja = this.state.neutral + this.state.bad + this.state.good
        let tulos = (this.state.good / jakaja) * 100

        if (jakaja === 0) {
            tulos = 0
        }

        return (tulos)

    }

    render() {

        const palautteet = [

            {
                key: 'good',
                teksti: "Hyvä",
                value: this.state.good
            },
            {   key: 'neutral',
                teksti: "Neutraali",
                value: this.state.neutral
            },
            {
                key: 'bad',
                teksti: "Huono",
                value: this.state.bad
            },
            {
                key: 'ka',
                teksti: "Keskiarvo",
                value: this.keskiarvo()
            },
            {
                key:'positive',
                teksti: "Positiivisia",
                value: this.positiivisia()
            }

        ]
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <Button handleClick={this.handleClick('good')} text={"Hyvä"}/>
                    <Button handleClick={this.handleClick('neutral')} text={"Neutraali"}/>
                    <Button handleClick={this.handleClick('bad')} text={"Huono"}/>
                </div>
                <h1>statistiikkaa</h1>
                <Statistics tieto={palautteet}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));









import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (        
            <button onClick={props.handleClick}>{props.text}</button>
        
    )
}

const Statistic = (props) => {
  return (
    <div>
      <p>
        {props.text}: {props.arvo}
      </p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.yht === 0) {
    return (
        <div>
            <p>
                Yhtään palautetta ei ole vielä annettu
            </p>
        </div>
    )
}
  return (
    <div>
      <p>
        <Statistic text={"Hyvää"} arvo={props.good}/>
        <Statistic text={"Neutraalia"} arvo={props.neutral}/>
        <Statistic text={"Huonoa"} arvo={props.bad}/>
        <Statistic text={"Keskiarvo"} arvo={props.ka}/>
        <Statistic text={"Positiivisia"} arvo={props.positiivisia}/>
      </p>
    </div>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickBad = newValue => {   
    setBad(bad +1)    
  }

  const handleClickNeutral = newValue => {
    setNeutral(neutral +1)
  }

  return (
    <div>
        <h1>anna palautetta</h1>
        <Button handleClick={handleClickGood} text ={'good'}/>
        <Button handleClick ={handleClickNeutral} text ={'neutral'}/>
        <Button handleClick ={handleClickBad} text ={'bad'}/>
        <h1>statistiikkaa</h1>
        <Statistics yht={good+bad+neutral} good={good} neutral={neutral} bad={bad} ka={(good+(bad*-1))/(good+bad+neutral)} positiivisia={good/(good+bad+neutral)*100}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)