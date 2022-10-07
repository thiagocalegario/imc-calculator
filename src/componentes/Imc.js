import React, {useState} from 'react';
import "./Imc.css"
const ImcComponent = ({endGame}) => {
    const [nome, setNome] = useState("")
    const [peso, setPeso] = useState("")
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
        endGame(peso, altura)
            }
    return (
        <div className="main">
            <h1>IMC CALCULATOR</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={"lab"} htmlFor="nome">Nome: </label>
                    <input type="text" name={"name"} placeholder={"Digite o seu nome"}
                           onChange={handleName}
                           value={nome}
                           required={true}
                    />
                    <label className={"lab"} htmlFor="peso">Peso: </label>
                    <input type="number" name={"peso"} placeholder={"Digite o seu peso"}
                           step="0.1"
                           onChange={handlePeso}
                           value={peso}
                           required={true}
                    />
                    <select name="role" onChange={(e) => setUnidade(e.target.value)} required>
                        <option value="" disabled selected hidden>Selecione a medida</option>
                        <option value="kg">Kg</option>
                        <option value="Libras">Libras</option>
                    </select>
                    <label className={"lab"} htmlFor="altura">Altura: </label>
                    <input type="number" name={"altura"} placeholder={"Digite a sua altura"}
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

export default ImcComponent;
