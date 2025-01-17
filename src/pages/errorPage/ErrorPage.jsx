import React, { useState, useEffect } from 'react';

const ErrorPage = ({ user }) => {

    const [state, setState] = useState({ name: '', lastName: '' });

    useEffect(() => {
        setState(user);
    }, [user]);

    return (
        <div>
            <h1>Тебе сюда нельзя - {state.name} {state.lastName}</h1>
        </div>
    );
};

export default ErrorPage;