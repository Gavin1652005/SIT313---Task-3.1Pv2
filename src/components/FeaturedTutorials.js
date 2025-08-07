import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const tutorials = [
  {
    id: 1,
    title: 'Intro to JavaScript',
    description: 'Learn JS fundamentals in 30 minutes.',
    author: 'Grant Dawson',
    rating: 5,
    image: 'https://picsum.photos/200?random=4',
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    description: 'Make your websites mobile-friendly.',
    author: 'Charles Oliveira',
    rating: 4,
    image: 'https://picsum.photos/200?random=5',
  },
  {
    id: 3,
    title: 'Intro to APIs',
    description: 'Understand RESTful services.',
    author: 'Rafael Fiziev',
    rating: 5,
    image: 'https://picsum.photos/200?random=6',
  },
];

const FeaturedTutorials = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Featured Tutorials
      </h2>
      <Card.Group itemsPerRow={3} stackable>
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id}>
            <div
              style={{
                height: '150px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={tutorial.image}
                alt={tutorial.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              <Icon name="star" color="yellow" />
              {tutorial.rating} &nbsp; <strong>{tutorial.author}</strong>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeaturedTutorials;
