const LightSwitch = ({ switchOn, toggleLight}) => {
    const bulbOnImg = "https://cdn-icons-png.flaticon.com/512/5728/5728506.png";
    const bulbOffImg = "https://cdn-icons-png.flaticon.com/512/5723/5723141.png";

    return (
        <div className='container'>
            <h1 className="title">Light Switch</h1>
            <img 
                src={switchOn ? bulbOnImg : bulbOffImg} 
                alt="Light Bulb" 
                style={{height: "150px"}}
             />
            <button onClick={toggleLight}>
                {switchOn ? 'Turn On' : 'Turn Off'}
            </button>
        </div>
    );
}

export default LightSwitch;