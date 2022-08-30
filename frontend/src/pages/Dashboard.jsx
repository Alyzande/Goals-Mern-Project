import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import GoalForm from '../components/GoalForm';
import { getGoals, reset } from '../features/goals/goalSlice';
//import GoalItem from '../components/GoalItem';



function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals);

  useEffect(() => {
    //error
    if (isError) {
      console.log(message)
    }

    //not logged in, redirect to /login page
    if(!user) {
      navigate('/login')
    }
    dispatch(getGoals())

    //return from the use effect
    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

if (isLoading) {
  return <Spinner />
}

  return ( <>
  <section className='heading'>
    <h1>Welcome {user && user.name}</h1>
    <p>Dashboard</p>
  </section>
  <GoalForm />
  <section className='content'>
    <div className="goals">
      goals here
    </div>
  </section>

  </>
  )
}

export default Dashboard