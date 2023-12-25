import '../styles.css';


export default function Square({value ,onSquareClick,testid}) {

    return (
      <button
        className="square"
        onClick={onSquareClick}
        data-testid={testid}
      >
        {value}
      </button>
    );
  }