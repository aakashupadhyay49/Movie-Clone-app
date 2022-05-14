import React from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import {useState} from "react"
import {useDispatch} from "react-redux"
import "./Header.scss"
import { fetchAsyncShows ,fetchAsyncMovies} from '../../features/movies/movieSlice'
const Header = () => {
  const [term,setTerm] =useState("")
  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }
  return (
    <div className='header'>
        <div className="logo"><Link to="/">
           Movie App
        </Link></div>
        <div className="search-bar">
          <form onSubmit={submitHandler}> 
            <input type="text" value={term} placeholder="Search..." onChange={(e)=>setTerm(e.target.value)}/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className='user-image'>
            <img src={user} alt="user"></img>
        </div>
    </div >
  )
}

export default Header