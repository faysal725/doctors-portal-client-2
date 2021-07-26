import React from 'react';
import './Blog.css';
import ellipse1 from '../../../images/Ellipse 1.png';
import ellipse2 from '../../../images/Ellipse 2.png';
import ellipse3 from '../../../images/Ellipse 3.png'; 
import BlogDetails from './BlogDetails/BlogDetails';




const blogInfo =[
    {
        name: "Rashed Kabir",
        date: "22 August 2018",
        heading: "check at least a doctor in a week",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto aperiam obcaecati perferendis excepturi? Ipsum.",
        image: ellipse1,
    },
    {
        name: "Dr. Caudi",
        date: "23 April 2019",
        heading: "2 times of brush in a day can keep you healthy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto aperiam obcaecati perferendis excepturi? Ipsum.",
        image: ellipse2,
    },
    {
        name: "Dr. John Mitchel",
        date: "23 April 2019",
        heading: "Tooth cancer is taking a challenge",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto aperiam obcaecati perferendis excepturi? Ipsum.",
        image: ellipse3
    }
]


const Blog = () => {
    return (
        <div>
            <br /><br /><br />
            <div className="blog__heading">
                <h5><b>OUR BLOG</b></h5>
                <h2>From Our Blog News</h2>
            </div>
            
            <br /><br /><br />
            
            <div style={{alignItems:"center"}}>
                <div style={{justifyContent:"center"}} className="row">
                {
                    blogInfo.map(info=> <BlogDetails info={info}></BlogDetails>)
                }
                </div>
            </div>
        </div>
    );
};

export default Blog;