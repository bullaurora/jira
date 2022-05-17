import {User} from '../screens/project-list/search-panel'
import { useAsync } from "./use-async";
import {useEffect} from "react"
import { useHttp } from "utils/http";
import { cleanObject, useMount, useDebounce } from "utils";
export const useUsers = (param? :Partial<User>)=>{
    const client = useHttp();
    const {run,...result} = useAsync<User[]>()
    useEffect(() => {
        run(client("users", { data: cleanObject(param||{}) }))
        // client("projects", { data: cleanObject(debouncedParam) }).then(setList);
      }, [param]);
    return result;
} 