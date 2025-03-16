import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [Answer, Reveal] = useState<boolean>(false);

    function flipVisibility(): void {
        Reveal(!Answer);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {Answer && <div> 42! </div>};
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-forms
}
