import "./Telainicial.css"

const Telainicial = ({startGame, startGameEN}) => {
    return (
        <div className="main">
           <h1>IMC CALCULATOR</h1>
            <form >
                <button onClick={startGame}>Iniciar em Português</button>
                <button onClick={startGameEN}>Start in English</button>
            </form>
        </div>
    );
};

export default Telainicial;
