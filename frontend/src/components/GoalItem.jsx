<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
=======
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { FaWindowClose } from 'react-icons/fa';;
>>>>>>> fa966a7cb52f6cacad75f5e7bcd79854535b8b83

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
<<<<<<< HEAD
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
=======
      <div>{new Date(goal.createdAt).toLocaleString('en-GB')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaWindowClose />
>>>>>>> fa966a7cb52f6cacad75f5e7bcd79854535b8b83
      </button>
    </div>
  )
}

export default GoalItem