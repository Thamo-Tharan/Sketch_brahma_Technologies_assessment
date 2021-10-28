import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Listcomponent=({data,titledata})=>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
    return(
        <div>
<h1>{titledata} Categories</h1>
<div id='meallist'>
    {data.loading && <p>Loading</p>}
    {data.error && <p>{data.error}</p>}
    {
            data.meals &&   data.meals.map((currentValue,index)=>{
                    return(
                        <div>
                           <img id={currentValue.strMeal} src={currentValue.strMealThumb} alt={currentValue.strMeal}></img>
                           <p>{currentValue.strMeal}</p>
                        </div>
                    )
                })
        }
</div>
</div>
    )
}
export default Listcomponent;