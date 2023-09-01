import { HandySvg } from "handy-svg";
import arrow from './arrow.svg';
import './arrow.scss';

const Prev = ({color, rotate=0, onClick, refNode}) => {
    return (
        <button ref={refNode} className="carousel-btn">
            <HandySvg 
                onClick = {onClick}
                src={arrow}
                width="20"
                height="20"
                style={{transform: `rotate(${rotate})`, stroke: color, cursor: 'pointer'}}
                />
        </button>
        
    )
}

export default Prev;