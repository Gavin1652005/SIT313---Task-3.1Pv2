import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const articles = [
  {
    id: 1,
    title: 'React or Vue?',
    description: 'Choosing the right framework',
    author: 'Michael Johnson',
    rating: 5,
    image: 'https://picsum.photos/200?random=1',
  },
  {
    id: 2,
    title: 'NodeJS Basics',
    description: 'Event-driven servers',
    author: 'Justin Gaethje',
    rating: 5,
    image: 'https://picsum.photos/200?random=2',
  },
  {
    id: 3,
    title: 'React Hooks Deep Dive',
    description: 'useEffect & useState explained',
    author: 'Dustin Poirer',
    rating: 5,
    image: 'https://picsum.photos/200?random=3',
  },
];

const FeaturedArticles = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Featured Articles
      </h2>
      <Card.Group itemsPerRow={3} stackable>
        {articles.map((article) => (
          <Card key={article.id}>
            <div
              style={{
                height: '150px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              <Icon name="star" color="yellow" />
              {article.rating} &nbsp; <strong>{article.author}</strong>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeaturedArticles;
