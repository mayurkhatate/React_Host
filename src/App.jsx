import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Post from './Post'
import PostDetail from './PostDetail'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='About/' element={<About />}></Route>
                    <Route path='Contact/' element={<Contact />}></Route>
                    <Route path='Post/' element={<Post />}></Route>
                    <Route path='/Post/show/:id' element={<PostDetail/>}></Route>
                    
                    
                    </Routes>
            </BrowserRouter>
            

        </>
    )
}

export default App

