import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/gifGridHelper'

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
        }, 1000);
    }, [category]);

    return state;

}
