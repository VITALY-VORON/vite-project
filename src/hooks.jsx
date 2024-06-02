import { useEffect, useState } from "react";

const Hooks = () => {


    //Срабатывает при каждом изменении переменной val
    const [val, setVal] = useState(0);

    const vakue = 


    //Срабатывает при первом открытии страницы   
    useEffect(() => {
        setVal(prev => prev += 1);
    }, [])

    return ( 
        <div style={{
            display: 'flex',
            gap: 20,
            padding: 10,
        }}>
            {val}
            <button onClick={() => setVal(prev => prev += 1)}>Click</button>
        </div>
     );
}
 
export default Hooks;