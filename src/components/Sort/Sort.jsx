import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortValue } from '../../store/sortSlice.js';

import { Container } from "../Container/Container";

import style from './Sort.module.css';

export const Sort = () => {

    const dispatch = useDispatch()

    const [ sortOpen, setSortOpen ] = useState(false);

    const { sort } = useSelector(store => store.sort);

    const btnName = sort === 'abc' ? 'По алфавиту' : sort === 'cba' ? 'Против алфавита' : sort === 'date' ? 'По дате' : ''

    const sortOpenStyle = sortOpen ? style.SortOptionActive : style.SortOption;

    const setSort = (event) => {
        switch (event.target.textContent){
            case 'По алфавиту':
                dispatch(setSortValue('abc'))
                setSortOpen(false)
                break
            case 'Против алфавита':
                dispatch(setSortValue('cba'))
                setSortOpen(false)
                break
            case 'По дате':
                dispatch(setSortValue('date'))
                setSortOpen(false)
                break
            default:
                dispatch(setSortValue('abc'))
                setSortOpen(false)
        }

    }

    return (
        <Container>
            <div className={style.Sort}>
                <p className={style.SortTitle}>Фильтр</p>
                <div className={style.SortWrapper}>
                    <button onClick={() => {setSortOpen(!sortOpen)}} className={style.SortBtn}>{btnName}</button>
                    <ul className={sortOpenStyle}>
                        <li onClick={setSort} className={style.SortItem}>По алфавиту</li>
                        <li onClick={setSort} className={style.SortItem}>Против алфавита</li>
                        <li onClick={setSort} className={style.SortItem}>По дате</li>
                    </ul>
                </div>
                
            </div>
        </Container>
        
    )
}