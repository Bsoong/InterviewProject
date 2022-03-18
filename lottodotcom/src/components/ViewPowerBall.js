import React, { useEffect } from "react";
import { getPowerBallResults } from "../Services/powerball";
import ResultTable from "./ResultTable";
function ViewPowerBall ()  {
    const [powerball, setPowerBall] = React.useState({});
    const [searchTerm, setSearchTerm] = React.useState('powerball')

    React.useEffect(async () => {
        setPowerBall(await getPowerBallResults(searchTerm));
    }, [searchTerm])
    return (
        <div style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
           <ResultTable powerball={powerball} searchTerm={searchTerm}/>
        </div>
    )
}

export default ViewPowerBall;