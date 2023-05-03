import React,{useEffect,useState} from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


const Home=()=>{
    const [data,setdata]=useState([])

useEffect(()=>{
    fetch('https://northwind.vercel.app/api/products')
    .then(res=>res.json())
    .then(mydata=>setdata(mydata))

},[data])
return(
<div className='card'>
    {
        data.map((item)=>{
            console.log(item);
            return(
                <>
                <table>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.unitPrice}</li>
                        <li></li>
                        <li></li>
                    </ul>
                    </table>               
                </>
            )
        })
    }
</div>
)
}

export default Home
