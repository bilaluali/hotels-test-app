import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Paper, Grid } from '@material-ui/core';

import FormCheckboxGroup from './FormCheckboxGroup';

const items = [
    { key: "1", label: "available", color: "error", size: "small" },
    { key: "2", label: "unavailable", color: "error", size: "small" },
    { key: "3", label: "booked", color: "success", size: "small" },
]

storiesOf('MaterialUi.FormCheckboxGroup', module).add('Simple', () => (
    <Container>
      <Paper>
          <FormCheckboxGroup
            items={items}
            onChange={(e) => {
                console.log(e)
            }}
            label="status"
            initial
            multiple
          />
      </Paper>
    </Container>
));