const Digit = (props) => {
    return (
        <div className="card fs-1  col m-2">
              {props.number}
            </div>
    )
}

const SecondsCounter = (props) => { 
    return (
        <div data-bs-theme="dark" className="d-flex row text-center">
            <div className="card fs-1  col m-2">
              <i className="fa-solid fa-clock text-white mx-auto my-auto"></i>
            </div>
            <Digit  number = {Math.floor((props.seconds) / 100000 % 10)}/>
            <Digit  number = {Math.floor((props.seconds) / 10000 % 10)}/>
            <Digit  number = {Math.floor((props.seconds) / 1000 % 10)}/> 
            <Digit  number = {Math.floor((props.seconds) / 100 % 10)}/>
            <Digit  number = {Math.floor((props.seconds) / 10 % 10)}/>
            <Digit  number = {Math.floor((props.seconds) / 1 % 10)}/> 
        </div>
    )
}

export default SecondsCounter;