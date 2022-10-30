import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';

export const useTasks = () => {
    const [ tasks, setTasks ] = useState([]);

    const { items }  = useSelector( store => store.items );

    useEffect(() => {
        
        if (items.length !== 0){

            items.forEach(element => {

                if (element.active === 'true'){
                    
                    setTasks([element.homemade, element.item]);
                }

            });

        } else {
            setTasks([])
        }

    }, [items])
    return tasks;
}