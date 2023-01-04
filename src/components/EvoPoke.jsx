import { FaArrowAltCircleRight } from "react-icons/fa";
import Utils from "../utils/functions";

export default function EvoPoke({ poke }) {
    
    return (
        <>
            <div className="col-3">
                <img src={poke.sprite} alt={poke.name} />
                <h6>{Utils.capitlizeFirstLetter(poke.name)}</h6>
            </div>
            {(poke.details.trigger && <FaArrowAltCircleRight className="col-1" />)}
        </>
    )
}
