import { Link } from "react-router-dom";
/**
 * 
 */
function VendingMachine() {
    return (
        <div className="VendingMachine">
            <b>WHAT WE HAVE</b>
            <ul>
                <li><Link to="/tears">Rich Man Tears</Link></li>
                <li><Link to="/cake">Cake</Link></li>
                <li><Link to="/pocari">PocariSweat</Link></li>
            </ul>
        </div>
    )

}

export default VendingMachine;