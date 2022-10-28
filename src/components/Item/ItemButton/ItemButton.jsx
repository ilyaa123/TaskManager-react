import { useDispatch } from 'react-redux';
import { setActive } from '../../../store/itemsSlice';
import style from './ItemButton.module.css';

export const ItemButton = ({name}) => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setActive(name[0]))
    }
    
    const btnClass = name[1] === 'true' ? style.ItemButtonActive : style.ItemBtn;

    return (
        <button className={btnClass} onClick={handleOnClick}>{name[0]}</button>
    )
}