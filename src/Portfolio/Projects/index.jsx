import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import {
  ContentBox,
  Description,
  IconBox,
  PostRowContainer,
  PostRowTitle,
  Title
} from '../../Application/scenes/Site/Body/scenes/Portfolio/Posts/PostRow/elements';
import IconType from '../../Application/scenes/Site/Body/scenes/Portfolio/Posts/Post/IconType';

const Container = styled.div`
  background: rgba(217, 215, 212, 1);
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  background: #eeeeee;
  border: 1px solid grey;
  padding: 15px;
  margin: 15px;
  transition: 0.3s ease;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0);

  &:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    background: #ffffff;
  }
`;

export const Projects = () => {
  return (
    <Container>
      {data.projects.map((project, key) => (
        <Card key={key}>
          <PostRowTitle>
            <IconBox post={project}>
              <IconType type={project.key} />
            </IconBox>
            <ContentBox>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
            </ContentBox>
          </PostRowTitle>
        </Card>
      ))}
    </Container>
  );
};
