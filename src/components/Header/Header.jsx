import { setItem } from "../../store/itemsSlice";
import { Container } from "../Container/Container"

import { useDispatch } from 'react-redux';

import style from './Header.module.css';

export const Header = () => {

    const dispatch = useDispatch();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const value = event.target.querySelector('input').value;;
        dispatch(setItem(value))

        event.target.reset();
    }

    return (
        <header className={style.Header}>
            <Container>
                <div className={style.HeaderContainer}>
                    <h1 className={style.HeaderLogo}>Политех21</h1>
                    <form className={style.HeaderForm} onSubmit={handleOnSubmit}>
                        <input className={style.HeaderInput} type='text' />
                        <button className={style.HeaderButton} type='submit'>Добавить предмет</button>
                    </form>
                </div>
            </Container>
        </header>
    )
}