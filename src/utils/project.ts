import { useAsync } from "./use-async";
import { Project } from "screens/project-list/list";
import {useEffect} from "react"
import { useHttp } from "utils/http";
import { cleanObject, useMount, useDebounce } from "utils";
export const useProjects = (param?:Partial<Project>)=>{
    const client = useHttp();
    const {run,...result} = useAsync<Project[]>()
    useEffect(() => {
        run(client("projects", { data: cleanObject(param||{}) }))
        // client("projects", { data: cleanObject(debouncedParam) }).then(setList);
      }, [param]);
      return result;
}