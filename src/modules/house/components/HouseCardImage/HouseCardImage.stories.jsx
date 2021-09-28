import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper } from '@material-ui/core';

import HouseCardImage from './HouseCardImage';

storiesOf('House.HouseCardImage', module).add('Simple', () => (
    <Container>
      <Paper>
        <HouseCardImage
          src="https://picsum.photos/1351/675"
          status="AVAILABLE"
        />
        <HouseCardImage
          src="https://picsum.photos/1260/630"
          status="UNAVAILABLE"
        />
        <HouseCardImage
          src="https://picsum.photos/1249/624"
          status="BOOKED"
        />
        <HouseCardImage
          src=""
          status="BOOKED"
        />
        <HouseCardImage
          status="BOOKED"
        />
      </Paper>
    </Container>
));