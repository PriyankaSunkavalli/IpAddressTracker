import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Root=styled.div`
    height: 100px;
    width: 1000px;
    background-color: white;
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    z-index: 1;
`

const LocationContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
`
const LocationText=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
    width: 100%;
    border-right: solid 1px lightgrey;
p{
    color: grey;
    margin-bottom: 5px;
}
h2{
    color: black;
    margin-top: 5px;
}
    
`

const LocationDetails = (props) => {
    useEffect(()=>{
        axios.get("https://geolocation-db.com/json/")
        .then(response=>{console.log(response)
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=64145720f1734a5ca3753cb81761008d& ip_address = ${response.data.IPv4}`)
          .then(res=>{props.setData(res.data)}) 
          .catch(err=>{console.log(err)}) 
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
console.log(props.data)
  return (
    <Root>
        <LocationContainer>
        <LocationText>
            <p>IP ADDRESS</p>
            <h2>{props.data?.ip_address}</h2>
        </LocationText>
        <LocationText>
            <p>LOCATION</p>
            <h2>{props.data?.city},{props.data?.country}</h2>
        </LocationText><LocationText>
            <p>TIMEZONE</p>
            <h2>{props.data?.timezone.abbreviation}-{props.data?.timezone.current_time}</h2>
        </LocationText><LocationText>
            <p>ISP</p>
            <h2>{props.data?.connection.isp_name}</h2>
        </LocationText>
        </LocationContainer>
      
    </Root>
  );
}

export default LocationDetails;
