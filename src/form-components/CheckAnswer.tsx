import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateInput} />
            </Form.Group>
            <div>
                {<div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>}{" "}
            </div>
        </div>
    );
}
