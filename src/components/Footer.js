import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Icon,
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment
      vertical
      style={{
        padding: '4rem 0',
        marginTop: '4rem',
        backgroundColor: '#f1f1f1',
        borderTop: '1px solid #ccc',
      }}
    >
      <Container>
        <Grid stackable divided="vertically">
          <Grid.Row columns={3}>
            {/* Explore */}
            <Grid.Column>
              <Header as="h4" content="Explore" />
              <List link>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Articles</List.Item>
                <List.Item as="a">Tutorials</List.Item>
                <List.Item as="a">Community</List.Item>
              </List>
            </Grid.Column>

            {/* Support */}
            <Grid.Column>
              <Header as="h4" content="Support" />
              <List link>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms of Service</List.Item>
              </List>
            </Grid.Column>

            {/* Stay Connected */}
            <Grid.Column>
              <Header as="h4" content="Stay Connected" />
              <List horizontal>
                <List.Item>
                  <Icon name="facebook f" size="large" link />
                </List.Item>
                <List.Item>
                  <Icon name="twitter" size="large" link />
                </List.Item>
                <List.Item>
                  <Icon name="instagram" size="large" link />
                </List.Item>
                <List.Item>
                  <Icon name="linkedin" size="large" link />
                </List.Item>
              </List>
              <p style={{ marginTop: '1rem' }}>
                &copy; {new Date().getFullYear()} DEV@Deakin
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
