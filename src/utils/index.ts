import { useEffect,useState} from "react"
export const isFalsy = (value:unknown):boolean =>value===0?false:!value
//在一个函数中
export const cleanObject = (object:object) =>{
    const result = {...object}
    Object.keys(result).forEach(key=>{
        //@ts-ignore
        const value = result[key]
        if(isFalsy(value)){
            //@ts-ignore
            delete result[key]
        }
    })
    return result 
}
//自定义hooks componentDidount
export const useMount =(callback:()=>void)=>{
    useEffect(()=>{
        callback&&callback()
    },[])
}
//自定义事件节流hook
// const debounce = (func,delay)=>{
//     let timeout;
//     return (...param)=>{
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(function(){
//             func(...param)
//         },delay)
//     }
// }

//自定义hook
export const useDebounce = <V>(value:V,delay?:number)=>{
    const [debouncedvalue,setDouncedValue] = useState(value)
    useEffect(()=>{
        const timeout =setTimeout(()=>setDouncedValue(value),delay)
        return ()=>{clearTimeout(timeout);}
    },[value,delay])
    return debouncedvalue
}
