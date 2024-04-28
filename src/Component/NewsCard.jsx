import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({item}) => {
    // console.log(item);
    const _id = item._id ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {item.title} </h2>
          <small> {item.author.name} </small>
          <Link to={`/news/${_id}`}><button className='text-blue-700 font-bold'> See Details... </button></Link>
        </div>
      </div>
    );
};

export default NewsCard;