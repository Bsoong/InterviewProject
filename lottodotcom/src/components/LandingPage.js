import React from "react";
import { getPowerBallResults } from '../Services/powerball'
import ResultTable from "./ResultTable";
function LandingPage ()  {
    const [powerball, setPowerBall] = React.useState({});
    const [searchTerm, setSearchTerm] = React.useState('powerball')

    React.useEffect(async () => {
        setPowerBall(await getPowerBallResults(searchTerm));
    }, [searchTerm])


    return (
        <div style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
            <h1>Welcome!</h1>
            <div style={{margin: 10}}>
            <h2>Choose a button to change the results to the desired lottery type!</h2>
                <a style={{margin: 10}} className="btn" onClick={() => setSearchTerm('lotto')}>Standard Lottery</a>
                <a style={{margin: 10}} href="/powerball" className="btn">PowerBall</a>
            </div>
            <ResultTable powerball={powerball} searchTerm={searchTerm}/>
        </div>
    )
}

export default LandingPage;