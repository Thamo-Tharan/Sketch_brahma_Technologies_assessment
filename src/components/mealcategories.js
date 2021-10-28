import React, { useEffect, useState, Component} from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Listviewcom from './listview'
const Mealcat=(props)=>{
    const [melcat, setmealcat]=useState({categories:[],loading:true,error:''})
    const [mellist, setmeallist]=useState({meals:[],loading:true,error:''})
    let titledata=''
    useEffect(() => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res =>{
            let catall=[]
            catall=res.data;
            setmealcat({
                loading:false,
                categories:catall.categories,
                error:''
            })
            console.log(melcat)
        })
        .catch(err =>{
            setmealcat({
                loading:false,
                categories:[],
                error:err.message
            })
        })
    },[])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1
        }
    };
    const onclickapi=(e)=> {
        titledata=e.currentTarget.id;
        axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+e.currentTarget.id)
        .then(res =>{
            let catall=[]
            catall=res.data;
            setmeallist({
                loading:false,
                meals:catall.meals,
                error:''
            })
            console.log(mellist)
        })
        .catch(err =>{
            setmealcat({
                loading:false,
                meals:[],
                error:err.message
            })
        })
    }
    return(
        <div>
        <h1>Meal Categories</h1>
        <div id='meal_cat'>
            {melcat.loading && <p>Loading</p>}
            {melcat.error && <p>{melcat.error}</p>}
        {
            melcat.categories && <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style">
            {
                melcat.categories.map((currentValue,index)=>{
                    return(
                        <div>
                           <img id={currentValue.strCategory} src={currentValue.strCategoryThumb} alt={currentValue.strCategory} onClick={onclickapi}></img>
                           <p>{currentValue.strCategory}</p>
                        </div>
                    )
                })
            }
            </Carousel>
        }
        </div>{(mellist.meals!=''|| mellist.error!='') && <Listviewcom data={mellist} titledatavalue={titledata}/>}
        </div>
    )
}
export default Mealcat;