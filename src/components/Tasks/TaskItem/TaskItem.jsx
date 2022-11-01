import { useDispatch } from 'react-redux';
import { deleteHomemade } from '../../../store/itemsSlice';
import style from './TaskItem.module.css';

export const TaskItem = ({task, item}) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(deleteHomemade([task, item]))
    }

    return (
        <div className={style.TaskItem}>
            <p className={style.TaskItemDelete} onClick={handleOnClick}></p>
            <h6 className={style.TaskItemName}>{task.name}</h6>
            <p className={style.TaskItemDate}>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}