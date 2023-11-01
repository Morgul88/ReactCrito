import React from 'react'
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Newsbox = () => {
    const [value, setValue] = useState([]);
    
    useEffect(() => {
        console.log('value after fetching:', value);
        ChangePost()
    },[])

    const specificIds = ["0dccab16-917a-437c-8216-5365b8b89ac3","1712fde0-7afc-44e7-ab41-7cffb65dc58b","f8994aa3-1a7d-4df4-abda-0f170377ce5f","c7bbc3d6-d88e-4d25-a3bf-faeb9fcefd15","bfb418f3-be63-4ded-a9c3-880409a465b7","b33aa046-3229-4990-b70d-1d44a6e0e3dd","9efedf73-c922-428b-89cd-911e23f7183e","78ca8156-5826-44ba-a8ba-b2a428e95afb","a0344661-267f-4f3d-ae16-c13a5045f00c",];
    // const specificIds = [];
    // const specificIds = [];
    
    const ChangePost = async () => {
        
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json()
        setValue(data)
        console.log('Data fetched from API:', data); // Lägg till denna rad för att logga datan
        
    }
    
    
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
                    
                    {value.map((items,index) => {
                        {
                            return (
                                
                                    <NavLink to="/NewsDetail" className="no-underline" key={index}>
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
                                    </NavLink>
                                
                            );
                        }
                        // return null; // Om id inte finns i listan, returnera inget
                    })}
                    {/* {value.map((items) => {
                        if (specificIdsSec.includes(items.id)) {
                            return (
                                
                                    <a href="/NewsDetail" className="no-underline">
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
                    })} */}
                    {/* {value.map((items) => {
                        if (specificIdsThird.includes(items.id)) {
                            return (
                                
                                    <a href="/NewsDetail" className="no-underline">
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
                    })} */}

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

export default Newsbox