import React, { useState, useEffect } from 'react';


const ArticleAndNews = () => {
    const [value, setValue] = useState([]);
    
    useEffect(() => {
        ChangePost();
    },[])

    const specificIds = ["c7bbc3d6-d88e-4d25-a3bf-faeb9fcefd15","bfb418f3-be63-4ded-a9c3-880409a465b7","b33aa046-3229-4990-b70d-1d44a6e0e3dd"];
    
    const ChangePost = async () => {
        console.log('Hämtar api')
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        console.log('running')
        setValue(data)
    }
    console.log(value)
    
    return (
        <section className="article-and-news">
            
            <div className="container">

                <div className="content-group">
                    <div className="head">
                        <p>Article & News</p>
                    </div>
                    <div className="content-buttom">
                        <h2>Get Every Single Article & News</h2>
                        <a className="btn-yellow" target="_blank" href="Browse-team.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>

                <div className="flex-content">
                    
                {value.map((items) => {
                    if (specificIds.includes(items.id)) {
                        return (
                            
                                <a href="#" className="no-underline">
                                    <div className="box1">
                                        <div className="image">
                                            <img className="pictures" src={items.imageUrl} alt="Women sitting on a chair next to a table" />
                                            <p>{items.category}</p>
                                            <h2>{items.title}</h2>
                                            <p>{items.content}</p>
                                            <div className="date">
                                                <h4>25</h4>
                                                <p className="month">mars</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            
                        );
                    }
                    return null; // Om id inte finns i listan, returnera inget
                })}

                </div>
                <div className="dots more">
                    <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
                    <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
                    <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
                    <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
                    <a href="#"><i className="fa-solid fa-circle fa-xs"></i></a>
                </div>

            </div>

        </section>
    );
}

export default ArticleAndNews;