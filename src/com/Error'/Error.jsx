import { useRouteError } from "react-router-dom";


const Error = () => {
    const er = useRouteError()
    console.log(er)
    return (
        <div>

            <h1>OOOPPPPPPssssssssssssssssssss. {er.status || er.statusText}</h1>
            
        </div>
    );
};

export default Error;