import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");

    function gain(): void {
        const parsedAttempts = parseInt(requestAttempts, 10);
        if (!isNaN(parsedAttempts)) {
            setNumAttempts(numAttempts + parsedAttempts);
        }
    }

    function use(): void {
        if (numAttempts > 0) {
            setNumAttempts(numAttempts - 1);
        }
    }

    return (
        <div>
            <Button onClick={gain}>Gain</Button>
            <Button onClick={use} disabled={numAttempts <= 0}>
                Use
            </Button>
            <Form.Group controlId="Attempts:">
                <Form.Label>QuizL</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <div>Attempts Left: {numAttempts}</div>;
        </div>
    );
}
