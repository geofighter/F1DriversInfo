import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    // const getFetch = async () => {
    //
    //     setState({
    //         ...state,
    //         isLoading: true,
    //     });
    //
    //     debugger
    //
    //
    //
    //     // const resp = await fetch(url);
    //
    //     // const data = await resp.json();
    //     // if (data == null){
    //     //     setState({
    //     //         data,
    //     //         isLoading: false,
    //     //         hasError: true,
    //     //     });
    //     // }
    //     // else{
    //     //     setState({
    //     //         data,
    //     //         isLoading: false,
    //     //         hasError: false,
    //     //     });
    //     // }
    // }
    //
    // useEffect(() => {
    //     getFetch();
    // }, [url])
    //

    useEffect(() => {
        setState({ data: null, isLoading: true, hasError: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    isLoading: false,
                    hasError: null,
                    data
                });
            });

    },[url]);

    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
