import React, { useState } from "react";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <FormGroup controlId="editModeSwitch">
                <FormLabel>Edit Mode</FormLabel>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
            </FormGroup>

            {isEditMode ?
                <Form>
                    <FormGroup controlId="nameInput">
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="studentCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </FormGroup>
                </Form>
            :   <div>
                    {name} is {isStudent ? "a" : "not a"} student.
                </div>
            }
        </div>
    );
}
