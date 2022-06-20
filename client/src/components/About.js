import React from 'react'

const About = () => {
    const callAboutPage = async() => {
        try{
            const res = await fetch("/about",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data = await res.json();

    
    }catch(err){
    console.log(err);
    }

  return (
    <div>About</div>
  )
}}


export default About