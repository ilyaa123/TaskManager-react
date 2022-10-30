import { useDispatch } from 'react-redux';
import { deleteItem, setActive } from '../../../store/itemsSlice';
import style from './ItemButton.module.css';

export const ItemButton = ({name}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setActive(name[0]))
    }
    
    const handleOnDelete = () => {
        dispatch(deleteItem(name[0]))
    }

    const btnClass = name[1] === 'true' ? style.ItemButtonActive : style.ItemBtn;

    return (
        <div className={style.ItemButtonWrapper}>
        <button className={btnClass} onClick={handleOnClick}>
            {name[0]}
        </button>
        <p className={style.ItemBtnDelete} onClick={handleOnDelete}>
                <svg width="20" height="20" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37.5" cy="37.5" r="37.5" fill="#FFFFFF"/>
                    <path d="M53.0938 33.8438V41.1875H21.9062V33.8438H53.0938ZM41.4688 21.3125V54.4375H33.5625V21.3125H41.4688Z" fill="#009999"/>
                </svg>
        </p>
        </div>
    )
}