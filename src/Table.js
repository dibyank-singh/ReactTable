import React ,{useState , useEffect} from 'react'
import MaterialTable from 'material-table'
import Postdata from "./Cdata.json"





export const Table =()=>{
 
    const [state, setstate] = useState([])

    useEffect(() => {
      {
          Postdata.map((val)=>{
             
                setstate(val)
              
              console.log(val)
            })
        }
        
        
    }, [])


    const data= [
        {country:state.country , currency:state.currency , capital:state.capital},
        
    ]
    
    const column=[
         {title:"Country" , field:"country"},
       {title:"Capital" , field:"capital"},
       {title:"Currency" , field:"currency"},
    
    ]
                     


  
// console.log(state)
    return(
        <>
        
        <MaterialTable
        title="Countries with Capitals"
        data={data} 
        columns={column}
        options={{
            filtering:true
        }}
        
        />
        </>
    )
}