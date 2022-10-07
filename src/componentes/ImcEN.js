import React, {useState} from 'react';
import "./Imc.css"
import EndPT from "./EndPT";
const ImcEN = ({endGameEN}) => {
    const [nome, setNome] = useState("")
    let [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [unidade, setUnidade] = useState("")


    const handleName = (e) => {
        setNome(e.target.value)
    }
    const handlePeso = (e) => {
        setPeso(e.target.value)
    }
    const handleAltura = (e) => {
        setAltura(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        endGameEN(peso, altura)
    }
    return (
        <div className="main">
            <h1>IMC CALCULATOR</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={"lab"} htmlFor="nome">Name: </label>
                    <input type="text" name={"name"} placeholder={"Enter your name"}
                           onChange={handleName}
                           value={nome}
                           required={true}
                    />
                    <label className={"lab"} htmlFor="peso">Weight: </label>
                    <input type="number" name={"peso"} placeholder={"Enter your weight"}
                           onChange={handlePeso}
                           value={peso}
                           required={true}
                    />
                    <select name="role" onChange={(e) => setUnidade(e.target.value)} required>
                        <option value="" disabled selected hidden>Select the measure</option>
                        <option value="kg">Kg</option>
                        <option value="Libras">Libras</option>
                    </select>
                    <label className={"lab"} htmlFor="altura">Height: </label>
                    <input type="number" name={"altura"} placeholder={"Enter your height"}
                           onChange={handleAltura}
                           value={altura}
                           required={true}
                    />

                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default ImcEN;
