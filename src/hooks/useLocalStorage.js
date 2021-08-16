import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom'
export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};