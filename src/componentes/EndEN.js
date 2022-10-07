import "./End.css"

const EndEN = ({imc, retry, msg}) => {
    return (
        <div className="main">
            <h1>IMC CALCULATOR</h1>
            <h2>Your BMI is {imc}</h2>
            <h2>{msg}</h2>
            <form >
                <button onClick={retry}>Recalculate</button>
            </form>
        </div>
    );
};

export default EndEN;
