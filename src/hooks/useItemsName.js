import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';

export const useItemsName = () => {
    const [ name, setName ] = useState([]);

    const { items }  = useSelector( store => store.items );

    useEffect(() => {
        if (items.length > 0){
            const newName = items.map(element => {
                return [element.item, element.active]
            });
            setName(newName)
        }
    }, [items])

    return name;
}