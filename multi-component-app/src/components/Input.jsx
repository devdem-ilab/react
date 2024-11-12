const Input = props => {
    return (
        <>
            <div className='input-component'>
                <label>{props.label}</label>
                <br />
                <input type={props.type} placeholder={props.placeholder}></input>
            </div>
        </>
    )
}
export default Input;
