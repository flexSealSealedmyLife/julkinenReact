import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicksgood: 0,
            clicksneutral: 0,
            clicksbad: 0,
            keskiarvo: 0,
            positiivisia: 0,
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
                <p>Positiivisia {this.state.clicksgood}</p>
                <p>Neutraaleja {this.state.clicksneutral}</p>
                <p>Huonoja {this.state.clicksbad}</p>
                {this.Keskiarvo()}
                {this.Positiivisia()}

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

    Keskiarvo = () => {
        if ((this.state.clicksgood + this.state.clicksbad * -1) / (this.state.clicksgood + this.state.clicksneutral + this.state.clicksbad) !== 0) {
            return (
                <div>
                    <p>Keskiarvo {(this.state.clicksgood + this.state.clicksbad * -1) / (this.state.clicksgood + this.state.clicksneutral + this.state.clicksbad)}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Keskiarvo 0</p>
                </div>
            )
        }
    }

    Positiivisia = () => {
        return (
            <div>
                <p>Posiitivia kommentteja {(this.state.clicksgood / (this.state.clicksgood + this.state.clicksbad + this.state.clicksneutral)) * 100} %</p>
            </div>

        )
    }


  }



ReactDOM.render(<App />, document.getElementById('root'));