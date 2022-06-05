import React, { useEffect, useState } from 'react';

import axios from 'axios'

const Api = () => {

    const [data, setData] = useState ([])


    const client = 'https://swapi.dev/api/'
    
    useEffect (() => {
        
        const getdata = async() =>{
    
            const response = await axios (`${client}`)
            setData (response.data)
    
        }
        
        getdata()

    }, [])

    console.log(data)
    
}

export default Api