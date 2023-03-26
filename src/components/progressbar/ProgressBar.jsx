
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from "react-redux";
import useCounter from "../../hooks/useCounter";

const ProgressBar = ({ counter, width, textSize = "26px", strokeWidth = 8, pathColor = "#325fd2", trailColor = "#bab7b7" }) => {

    const { theme } = useSelector((state) => state.layout)

    const textColor = theme === "light" ? "#000" : "#fff"

    return (
        <div className="progressBar-wrapper" style={{ width }}>
            <CircularProgressbar value={useCounter(counter)} text={`${useCounter(counter)}%`} strokeWidth={strokeWidth} styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                transformOrigin: 'center center',
                // Text size
                textSize,
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0,
                // Colors
                pathColor,
                textColor,
                trailColor,
            })} />
        </div>
    )
}

export default ProgressBar