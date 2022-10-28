import { Item } from "../Item/Item"
import { Tasks } from "../Tasks/Tasks"


export const Home = () => {

    return (
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginRight: 'calc((100vw - 1165px) / 2)'}}>
            <Item />
            <Tasks />
        </div>
    )
}