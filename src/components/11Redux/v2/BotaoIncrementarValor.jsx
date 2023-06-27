import { useDispatch } from "react-redux"
import { incrementarValor } from "./slices/idSlice"

const BotaoIncrementarValor = () => {
    const dispatch = useDispatch()
    let valor = 10

    return (
        <>
            <button onClick={()=>dispatch(incrementarValor(valor))}>
                ID + 10
            </button>    
        </>
    )
}

export default BotaoIncrementarValor