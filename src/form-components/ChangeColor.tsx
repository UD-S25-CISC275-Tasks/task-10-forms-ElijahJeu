import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "purple",
        "yellow",
        "orange",
        "black",
        "white",
    ];
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            {colors.map((col) => (
                <Form.Check
                    inline
                    type="radio"
                    name="emotions"
                    onChange={updateColor}
                    label={col}
                    key={col}
                    value={col}
                    checked={color === "c"}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You choose the Color {color}.
            </div>
        </div>
    );
}
