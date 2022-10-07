import './App.css';
import ImcComponent from "./componentes/Imc";
import Telainicial from "./componentes/Telainicial";
import {useCallback, useState} from "react";
import Imc from "./componentes/Imc";
import ImcEN from "./componentes/ImcEN";
import EndPT from "./componentes/EndPT";
import EndEN from "./componentes/EndEN";


const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "middlePT"},
    {id: 3, name: "middleEN"},
    {id: 4, name: "end"},
    {id: 5, name: "endEN"}

]

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name)
    const [imc, setImc] = useState(0)
    const [msg, setMsg] = useState("")


    const startGame = useCallback(() => {
        setGameStage(stages[1].name)
    })
    const startGameEN = useCallback(() => {
        setGameStage(stages[2].name)
    })
    const endGame = (peso, altura) => {
        altura = altura / 100
        let calcImc = peso / (altura * altura)
        setImc(Math.round(calcImc))
        if(imc < 18.5){
            setMsg("Peso abaixo do normal")
        }else if(imc > 18  && imc < 24.9){
            setMsg("Tudo certo!")
        }else if(imc > 25  && imc < 29.9){
            setMsg("Acima do peso!")
        }else if(imc > 30){
            setMsg("Obesidade!")
        }
        setGameStage(stages[3].name)

    }
    const endGameEN = (peso, altura) => {
        altura = altura / 100
        let calcImc = peso / (altura * altura)
        setImc(Math.round(calcImc))
        if(imc < 18.5){
            setMsg("Weight below normal")
        }else if(imc > 18  && imc < 24.9){
            setMsg("All good!")
        }else if(imc > 25  && imc < 29.9){
            setMsg("Overweight!")
        }else if(imc > 30){
            setMsg("Obesity!")
        }
        setGameStage(stages[4].name)

    }
    const retry = () => {
        setGameStage(stages[0].name)
    }

    return (
    <div className="App">
        {gameStage === "start" && <Telainicial startGame = {startGame} startGameEN = {startGameEN}/>}
        {gameStage === "middlePT" && (
            <Imc endGame = {endGame}/>
        )}
        {gameStage === "middleEN" && <ImcEN endGameEN = {endGameEN} />}
        {gameStage === "end" && <EndPT imc = {imc} retry = {retry} msg = {msg}/>}
        {gameStage === "endEN" && <EndEN imc = {imc} retry = {retry} msg = {msg}/>}
    </div>
  );
}

export default App;
