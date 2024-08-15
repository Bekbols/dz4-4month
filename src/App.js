import React, {useEffect, useState} from 'react';
import MainPage  from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
    const [name , setName] = useState("");
    const [lastName , setLastName] = useState("");

    useEffect(() => {
        if (!name && !lastName) {
            const getName = prompt("Введите ваше имя:");
            const getLastName = prompt("Введите вашу фамилию");
            setName(getName);
            setLastName(getLastName);
        }
    }, [name, lastName]);

    const user = { name, lastName };

    return (
        user.name === "John" && user.lastName === "Johns"
            ? <MainPage user={user} />
            : <ErrorPage user={user} />
    );
};



export default App;
