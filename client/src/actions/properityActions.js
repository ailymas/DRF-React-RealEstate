import axios from 'axios'
import { PROPERTY_LIST_FAIL,PROPERTY_LIST_SUCCESS,PROPERTY_LIST_REQUEST } from './types'


export const listProperties = ()=> async (dispatch)=>{
    try{
        const {data} = await axios.get("http://127.0.0.1:8000/api/properties/all/")
        dispatch({
            type:PROPERTY_LIST_REQUEST
        })
        

        dispatch({
            type:PROPERTY_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:PROPERTY_LIST_FAIL,
            payload: error.response && error.response.data.message ?
             error.response.data.message :
             error.message
        })

    }

}
