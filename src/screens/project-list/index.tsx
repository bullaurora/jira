import React from "react";
import {  useState } from "react";
import {  useDebounce } from "utils";
import { SearchPanel } from "./search-panel";
import { List} from "./list";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const { isLoading, error ,data:list} = useProjects(debouncedParam);
  const {data:users} = useUsers()
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users||[]} />
      <List dataSource={list||[]} users={users||[]} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
