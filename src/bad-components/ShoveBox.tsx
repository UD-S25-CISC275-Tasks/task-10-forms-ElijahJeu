import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

<<<<<<< HEAD
function MoveableBox({ postion }: { postion: number }): React.JSX.Element {
=======
function MoveableBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
<<<<<<< HEAD
                marginLeft: postion + "px",
=======
                marginLeft: position + "px",
>>>>>>> origin/task-forms
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
<<<<<<< HEAD
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>/<span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox postion={position} />
            </div>
=======
    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
>>>>>>> origin/task-forms
        </div>
    );
}
