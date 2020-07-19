import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, Button } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Flex } from './styles';
import { useGithubRepos } from '../../../hooks/useGithubRepos';
import { Link } from "gatsby"

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
        viewer: {
            repositories: { edges },
        },
    },
} = useGithubRepos();
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
      <Flex as={Container}>
      <Button as={Link} to="https://github.com/anupbista">
            View All
          </Button>
      </Flex>
    </Wrapper>
  );
};
