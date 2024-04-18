import { useEffect, useState } from "react";



const Fetch = () => {
    const [data, setData] = useState ([])
    const fetchRequest =async ()=> {
        try{
            const req = await
            fetch ('https://jazzy-mern.onrender.com/api/products');
            const res = await req.json ();
            console.log(res.products);
            setData (res.products)
        }catch (error){
            console.log(error.message);
        }
    }
    console.log(data);
    useEffect (()=> {
        fetchRequest()
    }, [])

    return (
  <>
  <main className="d-flex flex-wrap justify-content-center gap-4 align-items-end">
        <hr />
        {data.map((datum)=>{
            const {_id,title,description,image, category,price, 
                __v, createdAt, updatedAt} = datum

                return( 
                    <div key = {_id} className="card d-flex flex-wrap">
                      <div>
                      <h1> <img src={image} alt="" /> </h1> 
                        <p> {title}</p>
                        <p> {description}</p>
                        <p> {category}</p>
                        <p> #{price}</p> 
                      </div>
                        
                        
                        <button className="btn btn-danger w-100">Add to cart</button>
                    </div>
                )
        })}


  </main>
  
  
  </>
  )
}

export default Fetch