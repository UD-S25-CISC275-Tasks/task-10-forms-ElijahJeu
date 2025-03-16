import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoiceSelect">
                <Form.Label>Select an Answer:</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <div>{selectedOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
