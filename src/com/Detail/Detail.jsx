

import { useLoaderData, useNavigate } from 'react-router-dom'

const Detail = () => {
    const uk = useLoaderData()
    const back = useNavigate()
    function bak(){
      back(-1)
    }
    console.log("usssssssssskkkkkk",uk.id)
    console.log("usssssssssskkkkkk",uk)
  return (
    <div>

        <h1>User Detaile page :  {uk.title} </h1>

        <button onClick={bak}>Go Back</button>
      
    </div>
  )
}

Detail.propTypes = {

}

export default Detail
