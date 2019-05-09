import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osat.osat[0].nimi} tehtavia={props.osat.osat[0].tehtavia}/>
            <Osa osa={props.osat.osat[1].nimi} tehtavia={props.osat.osat[1].tehtavia}/>
            <Osa osa={props.osat.osat[2].nimi} tehtavia={props.osat.osat[2].tehtavia}/>
        </div>
    )

}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.osat.osat[0].tehtavia + props.osat.osat[1].tehtavia + props.osat.osat[2].tehtavia} tehtävää</p>
        </div>
           )

}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} tehtäviä: {props.tehtavia}</p>
        </div>
    )
}

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }


    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={kurssi} />
            <Yhteensa osat={kurssi} />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
