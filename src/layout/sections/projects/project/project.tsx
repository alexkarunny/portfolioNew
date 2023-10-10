import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  description: string;
  techStack: string[];
  src: string;
};

export const Project: React.FC<Props> = ({ title, description, techStack, src }) => {
  return (
    <StyledProject>
      <Image src={src} alt={""} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechStack>Tech stack: {techStack.join(", ")}</TechStack>
      <Link href={"#"}>Live Preview</Link>
      <Link href={"#"}>View Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #dbfd01;
  max-width: 375px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Description = styled.p``;

const TechStack = styled.p``;

const Link = styled.a``;
