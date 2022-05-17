import { useEffect,useState} from "react"
export const isFalsy = (value:unknown):boolean =>value===0?false:!value
export const isVoid = (value:unknown)=>value===undefined ||value===null|| value ===''
//在一个函数中
export const cleanObject = (object:{[key:string]:unknown}) =>{
    const result = {...object}
    Object.keys(result).forEach(key=>{
        const value = result[key]
        if(isVoid(value)){
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

//自定义hook
export const useDebounce = <V>(value:V,delay?:number)=>{
    const [debouncedvalue,setDouncedValue] = useState(value)
    useEffect(()=>{
        const timeout =setTimeout(()=>setDouncedValue(value),delay)
        return ()=>{clearTimeout(timeout);}
    },[value,delay])
    return debouncedvalue
}
