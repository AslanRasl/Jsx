import { useEffect, useState } from "react"

const ApiComponent = () => {
    
    const [api ,setApi] = useState([])
    
    useEffect(() => {
        const apiCall = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json()).then(data => setApi(data))
            .catch(err => console.log(err))
        }
        apiCall()
    } , [])
    return (
        <div>
           <ul>
            {api.map(item =>
            <li>{item.id} {item.title}</li>
               )}
           </ul>
        </div>
    )
}
export default ApiComponent