import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';

export const useItemsName = () => {
    const [ name, setName ] = useState([]);

    const { items }  = useSelector( store => store.items );
    console.log(items)

    useEffect(() => {
        if (items.length > 0){
            const newName = items.map(element => {
                return [element.item, element.active]
            });
            setName(newName)
        } else {
            setName([])
        }
    }, [items])

    return name;
}