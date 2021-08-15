import { useState } from "react";
const StatisticsLine = ({type, value}) => <tr><td>{type}</td><td>{value}</td></tr>

const Statistics = ({values}) => {
  const arvot = values.map(a => a.value)

  if( Math.max(...arvot) === 0){
    return(
      <>
        <h1>statistics</h1>
        No feedback given
      </>
    )
  } 
 
  const sum = arvot.reduce((a,b) => a+ b),
        positive = String(arvot[0] / sum * 100) + ' %'

  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          {values.map(a => <StatisticsLine type={a.type} value={a.value} key={a.type} />)}
          <StatisticsLine type='all' value={sum} />
          <StatisticsLine type='average' value={(arvot[0] - arvot[2]) / sum } />
          <StatisticsLine type='positive' value={positive} />
        </tbody>
      </table>
    </>
  )
}

const Button = ({review}) => {
  return <button onClick={() => review.todo(review.value +1)}>{review.type}</button>
}

function App() {
  const [good, setGood] = useState(0),
        [bad, setBad] = useState(0),
        [neutral, setNeutral] = useState(0)

  const reviews = [{ type: 'good', todo: setGood, value: good}, { type: 'neutral', todo: setNeutral, value: neutral}, { type: 'bad', todo: setBad, value: bad}]

  return (
    <div>
      <h1>give feedback</h1>
      {reviews.map(a => <Button review={a} key={a.type} />)}
      <Statistics values={reviews} />
    </div>
  );
}

export default App;
