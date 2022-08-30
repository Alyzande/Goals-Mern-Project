import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';



function Dashboard() {
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    //not logged in, redirect to /login page
    if(!user) {
      navigate('/login')
    }

  }, [user, navigate])



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard