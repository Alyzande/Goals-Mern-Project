import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { FaWindowClose } from 'react-icons/fa';;

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-GBa')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaWindowClose />
      </button>
    </div>
  )
}

export default GoalItem