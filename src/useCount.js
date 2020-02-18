import {useState} from 'react';
import delay from 'delay';

export const useCount = (initial = 0) => {
    const [state, setState] = useState(initial); 

    return [state, (x = 1) => setState(state => state + x)];
};

export const useAsyncCount = (initial = 0) => {
    const [state, setState] = useState(initial); 

    const remoteAdd = async (x = 1) => {
        await delay(500);

        setState(state => state + x);
    }

    return [state, remoteAdd];
};
