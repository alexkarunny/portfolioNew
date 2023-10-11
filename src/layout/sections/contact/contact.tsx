import React from "react";
import styled from "styled-components";
import { SectionTitle } from "components/common/section-title";
import { Button } from "components/common/button";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"}></Field>
        <Field placeholder={"email"}></Field>
        <Field as={"textarea"} placeholder={"text"}></Field>
        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding: 50px;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Field = styled.input``;
