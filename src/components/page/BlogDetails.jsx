import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import banner from '../../assets/banner1.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';
const BlogDetails = () => {
    const location = useLocation()
   
    const data = useLoaderData()
    console.log(data);
    

    return (
      <div>

      </div>
    );
};

export default BlogDetails;