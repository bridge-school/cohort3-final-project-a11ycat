import React from "react";
import styled from "styled-components";
import GithubCat from "./github-logo.png";

const PageHeader = styled.div`
  display: flex;
  margin: 20px;
  padding: 30px 0px;
`;

export const Header = ({ headerText }) => (
  <PageHeader>
    <img alt="github cat logo" src={GithubCat} />
    <h1>{headerText}</h1>
  </PageHeader>
);
