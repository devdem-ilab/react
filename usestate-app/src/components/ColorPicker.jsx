import { useState } from "react";

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
      };

    return(
        <div className="container">
            <h1 className="title">Color Picker</h1>
            <select
                value={selectedColor}
                onChange={handleColorChange}
                style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
            >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
            </select>
            <div
                onChange={handleColorChange}
                style={{
                width: "150px",
                height: "150px",
                backgroundColor: selectedColor,
                border: "2px solid black"
                }}
            ></div>
        </div>
    )
}

export default ColorPicker;