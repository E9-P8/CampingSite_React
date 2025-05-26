// per scrivere la struttura in automatico usare rafce

import React from "react";
import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../app/components/SubHeader";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <DisplayList />
    </Container>
  );
};

export default HomePage;
