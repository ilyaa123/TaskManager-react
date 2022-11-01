import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';

export const useSort = (tasks) => {
    
    const [ sortArray, setSortArray ] = useState([...tasks]);

    const { sort }  = useSelector( store => store.sort );

    useEffect(() => {
        if (tasks.length !== 0){
            switch(sort){
                case 'abc':
                    setSortArray([...tasks].sort((a, b) => a.name.localeCompare(b.name)))
                    break
                case 'cba':
                    setSortArray([...tasks].sort((a, b) => a.name.localeCompare(b.name)).reverse())
                    break
                case 'date':
                    setSortArray([...tasks].sort((a, b) => {
                        console.log(Date.parse(a.date), Date.parse(b.date))
                        if (Date.parse(a.date) > Date.parse(b.date)) return 1;
                        if (Date.parse(a.date) === Date.parse(b.date)) return 0;
                        if (Date.parse(a.date) < Date.parse(b.date)) return -1;
                        return 0
                    }))
                    break
                default:
                    setSortArray([...tasks].sort())
            }
        } else {
            setSortArray([])
        }
    }, [sort, tasks])
    
    return sortArray;
}