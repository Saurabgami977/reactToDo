import Alert from '@material-ui/lab/Alert';
import React from 'react';

export default function AlertComp(props) {
    return (
        <div>
            <Alert severity="error" onClose={props.click}>{props.message}</Alert>
        </div>
    )
}
