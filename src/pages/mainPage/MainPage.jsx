import React, { useState, useEffect } from 'react';

const MainPage = ({ user }) => {

    const [state, setState] = useState({ name: '', lastName: '' });

    useEffect(() => {
        setState(user);
    }, [user]);

    return (
        <div>
            <h1>Добро пожаловать {state.name} {state.lastName}, мы тебя ждали</h1>
        </div>
    );
};

export default MainPage;