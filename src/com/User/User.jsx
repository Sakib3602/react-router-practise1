import { useLoaderData } from "react-router-dom";
import Us from "../Us/Us";


const User = () => {
    const use = useLoaderData()
    // console.log(use)
    return (
        <div>

            

            {
                use.map((e)=> <Us key={e.id} use={e}></Us>)
            }
            
        </div>
    );
};

export default User;