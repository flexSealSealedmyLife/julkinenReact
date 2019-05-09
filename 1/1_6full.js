import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicksgood: 0,
            clicksneutral: 0,
            clicksbad: 0,
    };
   }

   render() {
        return(
            <div>
                <h1>Anna palautetta</h1>
                <button onClick={this.IncrementItem.bind(this, 0)}>Positiivinen</button>
                <button onClick={this.IncrementItem.bind(this, 1)}>Neutraali</button>
                <button onClick={this.IncrementItem.bind(this, 2)}>Huono</button>
                <h1>Statistiikkaa:</h1>
                {<p>Positiivisia {this.state.clicksgood}</p>}
                {<p>Neutraaleja {this.state.clicksneutral}</p>}
                {<p>Huonoja {this.state.clicksbad}</p>}
            </div>
        )
   }
   IncrementItem = (props) => {
            if (props === 0) {
                this.setState({clicksgood: this.state.clicksgood + 1});
            }else if (props === 1) {
                this.setState({clicksneutral: this.state.clicksneutral + 1});
            } else {
                this.setState({clicksbad: this.state.clicksbad + 1});
            }

   }
  }



ReactDOM.render(<App />, document.getElementById('root'));



















import React from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter, text }) => <div>{text}{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 1,
            huono: 1,
            neutraali: 1,
        }
    }


    asetaArvoon = (props) => {
        return () => {
                if (props === 0) {
                    this.setState({hyva: this.state.hyva + 1});
                }else if (props === 1) {
                    this.setState({neutraali: this.state.neutraali + 1});
                } else {
                    this.setState({huono: this.state.huono + 1});
                }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                </div>
                <div>
                    <Button
                        handleClick={this.asetaArvoon(0)}
                        text="hyvä"
                    />
                    <Button
                        handleClick={this.asetaArvoon(1)}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.asetaArvoon(3)}
                        text="huono"
                    />
                </div>
                <div>
                    <h2>statistiikkaa</h2>
                </div>
                <div>
                    <Display counter={this.state.hyva} text ={"Hyvä: "}/>
                    <Display counter={this.state.neutraali} text ={"Neutraali: "}/>
                    <Display counter={this.state.huono} text ={"Huono: "}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
