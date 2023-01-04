import EvoPoke from "./EvoPoke";

export default function EvoChain({ evolution }) {
    return (
        <>
            {(evolution.length > 1 && (
                <div className="d-flex justify-content-center align-items-center text-center row">
                    <EvoPoke poke={evolution[0]}/>
                    <EvoPoke poke={evolution[1]}/>
                    {(evolution.length > 2 && (
                        <EvoPoke poke={evolution[2]}/>
                    ))}
                </div>
            ))}
        </>
    )
}
