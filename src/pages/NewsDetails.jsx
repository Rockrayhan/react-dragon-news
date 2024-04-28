import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar/Navbar';



const NewsDetails = () => {
    const news = useLoaderData();
    const {id} = useParams();
    console.log( news);



    // const idInt = parseInt(id);
    // const idString = id.toString();
    const item = news.find((job) => job._id === id );
    console.log(item);
    
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            see details of  {id} 
            <h1> {item.title} </h1>
            <img src={item.thumbnail_url} alt="" />

        </div>
    );
};

export default NewsDetails;