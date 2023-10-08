import React from "react";
import BlogSection from "../../components/sections/blog/blog";
import HomeBanner from "../../components/sections/banner/banner";

function Blog(props){
    return(
        <>
            <HomeBanner backgroundProps={'https://images.pexels.com/photos/17434774/pexels-photo-17434774/free-photo-of-petales-luxe-dore-bijoux.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
            <BlogSection btnVisible={false} />
        </>
    )
}
export default Blog