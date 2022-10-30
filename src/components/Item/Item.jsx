import { useItemsName } from "../../hooks/useItemsName"
import { ItemButton } from "./ItemButton/ItemButton";


export const Item = () => {

    const names = useItemsName();
    console.log(names)

    return (
        <div style={{padding: '0 20px', display: 'flex', flexDirection: 'column'}}>
            {
                names.length === 0 ? 
                '' :
                names.map((name, index) => <ItemButton name={name} key={index} />)
            }
        </div>
    )
} 