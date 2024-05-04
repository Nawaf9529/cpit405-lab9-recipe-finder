import {Link} from "react-router-dom";
import "./SearchResult.css";
const SearchResult=({results})=>{
    return(
        results.map((recipe)=>{
            return(
                <div className="recipe-card" key={recipe.id}>
                    <Link to={"/recipe/" +recipe.id}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <h2>{recipe.title}</h2>
                    </Link>
                </div>
            );
        })
    );
    }
       
    


export default SearchResult;