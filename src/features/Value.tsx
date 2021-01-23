import React from 'react'
import { useParams } from 'react-router-dom';

interface ValueParams {
    value: string;
}

const Value = () => {

    const params = useParams<ValueParams>();

    return (
        <div>
            Value {params.value}
        </div>
    )
}

export default Value
