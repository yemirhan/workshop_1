
export const Button = (props) => {
    return <button onClick={() => props.s(prevState => prevState - 1)}>-</button>
}
export const ButtonDestructured = ({ setstate, ...rest }) => {
    return <button onClick={() => setstate(prevState => prevState + 1)}>+</button>
}