import React, { useEffect } from "react";
import { getPowerBallResults } from "../Services/powerball";
function ViewPowerBall ()  {
    const [powerball, setPowerBall] = React.useState({});
    useEffect(async () => {
        setPowerBall(await getPowerBallResults());
    }, [])
    return (
        <div>
            <p>View PowerBall</p>
        </div>
    )
}

export default ViewPowerBall;