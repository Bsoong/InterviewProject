import React from "react";
import { getPowerBallResults } from '../Services/powerball'
function LandingPage ()  {
    const [powerball, setPowerBall] = React.useState({});
    React.useEffect(async () => {
        setPowerBall(await getPowerBallResults());
        console.log(powerball)
    }, [])
    return (
        <div style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
            <h1>Welcome</h1>
            <p>tits</p>
        </div>
    )
}

export default LandingPage;