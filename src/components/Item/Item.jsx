import { memo } from "react";
import { useItemsName } from "../../hooks/useItemsName"
import { ItemButton } from "./ItemButton/ItemButton";

import style from './ItemButton/ItemButton.module.css';

export const Item = memo(() => {

    const names = useItemsName();

    return (
        <div className={style.ItemContainer}>
            {
                names.length === 0 ? 
                '' :
                names.map((name, index) => <ItemButton name={name} key={index} />)
            }
        </div>
    )
})