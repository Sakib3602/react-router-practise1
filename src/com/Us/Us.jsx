
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Us = ({use}) => {
    const {name,email,id} = use
  return (
    <div className='w-[100px] h-[100px] border-solid border-2px border-red'>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <Link to={`/user/${id}`}>User</Link>
    </div>
  )
}

Us.propTypes = {

}

export default Us
