import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'

function useFetch() {
    const [Data,setData] = useState([]);
    const [Loading,setLoading] =  useState(true);
    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.get('https://sum-server.100xdevs.com/todos')
            setData(res.data.todos)
            setLoading(false)
        }
        fetch()
    },[])
  return {Data,Loading}
}

export default useFetch