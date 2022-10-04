import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Alert,Row,Col, Spin} from 'antd'
import { listProperties } from '../actions/properityActions'

export default function Propertylistpage() {
    const dispatch =useDispatch()
    const propertiesList= useSelector((state)=>state.propertiesList)
    const {loading,properties,error} = propertiesList
    useEffect(()=>{
        dispatch(listProperties())
    },[dispatch]) 
  return (
    <>
    {loading ?(
        <div className="spinner">
            <Spin size="large" />
        </div>
    ):error ?(
        <Alert 
        type="error"
        message={error.meaage}
        showIcon
        className="alert-margin-top"
        />
    ):(
        <>
        <Row>
            <Col span ={24}>
                <h2 className="margin--top">
                    our catalog of properties 
                </h2>
            </Col>
            {properties.map((property)=>(
                <Col key={property.id} sm={12} md={6} lg={4} xs={3}>
                    <p>{property.title}</p>
                </Col>
            ))}
        </Row>
        </>
    )}
    </>
  )
}
