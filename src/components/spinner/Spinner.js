import spinner from './spinner.gif';
import './spinner.scss';

const Spinner = ({customStyle}) => {
    return (
        <div style={customStyle} className="spinner">
            <img src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner;