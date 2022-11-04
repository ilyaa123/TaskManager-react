import { Item } from "../Item/Item"
import { Tasks } from "../Tasks/Tasks"

import style from './Home.module.css';

export const Home = () => {

    return (
        <div className={style.Home}>
            <Item />
            <Tasks />
        </div>
    )
}