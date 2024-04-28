import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from "./NewsCard";
const MyHome = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
                <div className="md:col-span-2 ">
                    {
                        news.map( item => <NewsCard
                        key={item._id}
                        item={item}
                        >
                        </NewsCard> )
                    }
                </div>
        </div>
    );
};

export default MyHome;