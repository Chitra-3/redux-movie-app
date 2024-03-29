import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
 import user from "../../images/user.png";
 import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
const Header = () => {
  const [term,setTerm]=useState('');
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    if(term=="") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncMovies(term));
    setTerm('');
  }
  return (
    <div className='header'>
      <div className='logo'> <a href='/'>Movie App</a>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='user-image'>
          <img src={user} alt='user'/>
      </div>
      </div>
  );
};

export default Header;