import { useTasks } from "../../hooks/useTasks"
import { TaskItem } from "./TaskItem/TaskItem";

import { useDispatch } from 'react-redux';
import { setHomemade } from "../../store/itemsSlice";

import style from './Task.module.css';
import { useItemsName } from "../../hooks/useItemsName";

export const Tasks = () => {

    const dispatch = useDispatch()

    const tasks = useTasks();

    const name = useItemsName();
    
    const newTasks = tasks[0] || [];
    
    const item = tasks[1] || [];
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        const name = event.target.querySelector('input[type=text]').value;
        const date = event.target.querySelector('input[type=date]').value;
        
        const action = {
            item,
            homemade: {
                name,
                date
            }
        }

        dispatch(setHomemade(action))

        event.target.reset();
    }

    return (
        <>
            <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',gap: '40px', flexWrap: 'wrap' }}>
                {
                    newTasks.length === 0 ?
                    '' :
                    newTasks.map((task, key) => <TaskItem task={task} key={key} />)
                }
                {
                    name.length === 0 ?
                    '' :
                    <div className={style.Tasks}>
                        <form className={style.TaskForm} onSubmit={handleOnSubmit}>
                            <input className={style.TaskText} type="text" placeholder="Название работы" />
                            <input className={style.TaskDate} type="date" placeholder="Дата" />
                            <button className={style.TaskBtn}>
                                <svg width="56.25" height="56.25" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37.5" cy="37.5" r="37.5" fill="#009999"/>
                                    <path d="M53.0938 33.8438V41.1875H21.9062V33.8438H53.0938ZM41.4688 21.3125V54.4375H33.5625V21.3125H41.4688Z" fill="#FFFFFF"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                }
            </div>
        </>
    )
}