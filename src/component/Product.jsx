import React, { useEffect, useState } from "react";
import jazzyPic from "../assets/jazzyPic.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/product.css";
import heartImg from "../assets/heart.jpg";
import Placeholder from "react-bootstrap/Placeholder";
import bread from "../assets/bread.jpg"
import cheese from "../assets/cheese.jpg"
import egg from "../assets/egg.jpg"
import lectuse from "../assets/lectuse.jpg"
import onion from "../assets/onion.jpg"

const Product = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const getData = async () => {
    try {
        setIsLoading(true)
      const req = await fetch("https://jazzy-mern.onrender.com/api/products");
      const res = await req.json();
      console.log(res.products);
      console.log(res);
      setData(res.products);
    } catch (error) {
      console.log(error);
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="my-5 row">
    {isLoading &&  (<div> <h2 className="text-center">loading...</h2> </div>)}
        {/* div-1 */}
        <div className="d-none d-lg-block col-lg-3">
          <img src={jazzyPic} alt="jazzys pic" className="w-100 h-100" />
        </div>
        {/* div-2 */}
        <div className="col-lg-9">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            {data.map((datum) => {
              const { _id, title, price, image } = datum;
              return (
                <Card
                  key={_id}
                  className="card-inner rounded-4 position-relative"
                >
                  <Card.Img variant="top" src={image} />
                  <Card.Img
                    className="w-25 position-absolute top-0 end-0 rounded-pill p-3 "
                    variant="top"
                    src={heartImg}
                  />
                  <Card.Body>
                    {/* <Placeholder as={title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder> */}
                    <Card.Title className="fs-6"> {title} </Card.Title>
                    <Card.Text>
                      <span className="fw-lighter"> Total Price </span>
                      <br />
                      <span className="fw-bold">#{price} </span>
                      <div>
                          <img src={cheese} alt="" />
                          <img src={onion} alt="" />
                          <img src={lectuse} alt="" />
                          <img src={bread} alt="" />
                          <img src={egg} alt="" />
                        </div>
                        
                    </Card.Text>
                    <Button variant="primary" className="bg-danger w-100 rounded">Add To Cart</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;