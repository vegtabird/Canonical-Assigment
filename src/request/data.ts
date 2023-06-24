import axios from 'axios';
import { useCallback, useReducer } from 'react';
type IAction = {
    //The request is success
    type: 'FETCH_SUCCESS',
    payload: unknown[]
} | {
    //Start to send request
    type: 'FETCH_START',
    payload?: {}
}
interface IState {
    //True: sending request,False: request is finish
    isLoading: boolean
    //Response data
    data?: unknown[] | null
}
/**
 * Return the state of a request
 * @param state 
 * @param action action to update state
 * @returns {IState}
 */
function dataReducer(state: IState, action: IAction): IState {
    const { type, payload } = action
    switch (type) {
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                data: payload
            }
        case 'FETCH_START':
            return {
                isLoading: true,
                data: null
            }
        default:
            return state
    }
}
/**
 * Return the data about the request and a function to send request
 */
export function useGetData() {
    const [state, dispatch] = useReducer(dataReducer, {
        isLoading: true
    })
    const sendRequest = useCallback(() => {
        dispatch({
            type: 'FETCH_START'
        })
        axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json').then(res => {
            dispatch({
                type: 'FETCH_SUCCESS',
                //ensure the data is array
                payload: Array.isArray(res?.data) ? res.data : []
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return {
        isLoading: state.isLoading,
        data: state.data,
        sendRequest
    }
}