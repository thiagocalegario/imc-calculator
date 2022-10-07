import "./End.css"

const EndPT = ({imc, retry, msg}) => {
    return (
        <div className="main">
            <h1>IMC CALCULATOR</h1>
            <h2>O seu IMC é de {imc}</h2>
            <h2>{msg}</h2>
            <form >
                <button onClick={retry}>Calcular novamente</button>
            </form>
        </div>
    );
};

export default EndPT;
