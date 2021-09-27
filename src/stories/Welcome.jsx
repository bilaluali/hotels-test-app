import * as React from 'react';
import Typography from '@material-ui/core/Typography';

const Welcome = () => (
  <div>
    <Typography variant="h4">Welcome to Lodgify Test App Storybook</Typography>
    <Typography variant="body1">
      You can add stories about components by creating a
      `ComponentName.stories.jsx` within the `./app/src/` folder.
    </Typography>
    <Typography variant="body1">
      You can also add general stories by creating a `StoryName.stories.jsx`
      within the `./stories` folder.
    </Typography>
  </div>
);

export default Welcome;
