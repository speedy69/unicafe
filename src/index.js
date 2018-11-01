import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistiikka = (props) => {
    return <div>{props.text} {props.arvo}</div>
}

const Statistiikat = (props) => {
    const yht = props.arvot.hyva + props.arvot.huono + props.arvot.neutraali,
        hyvat = props.arvot.hyva * 1 / yht,
        huonot = props.arvot.huono * -1 / yht,
        pros = props.arvot.hyva * 100 / yht,
        ka = hyvat + huonot

    if (yht === 0) {
        return <div>ei yhtään palautetta annettu</div>
    }
    return (
        <div>
            <h1>Statistiikka</h1>
            <Statistiikka arvo={props.arvot.hyva} text='hyvä' />
            <Statistiikka arvo={props.arvot.neutraali} text='neutraali' />
            <Statistiikka arvo={props.arvot.huono} text='huono' />
            <Statistiikka arvo={ka.toFixed(1)} text='keskiarvo' />
            <Statistiikka arvo={pros.toFixed(1)} text='positiivisia' />
        </div>
    )
}

const Button = (props) => {
    return(
        <div>          
            <input type='submit' value='hyvä' onClick={props.handler('hyva')} />
            <input type='submit' value='neutraali' onClick={props.handler('neutraali')} />
            <input type='submit' value='huono' onClick={props.handler('huono')} />
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    handler = (arvo) => () => {
        if(arvo === 'hyva') this.setState({ hyva: this.state.hyva +1})
        if(arvo === 'neutraali') this.setState({ neutraali: this.state.neutraali +1})
        if(arvo === 'huono') this.setState({ huono: this.state.huono +1})
     }    

    render() {
        return (
            <div>  
                <h1>Anna palautetta</h1>             
                <Button  handler={this.handler} />
                <br/>
                <Statistiikat arvot={this.state} />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


