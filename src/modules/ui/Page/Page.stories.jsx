import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';

import Page from './Page';

storiesOf('Page', module).add('Simple Page', () => (
    <Page>
        <Typography
            variant="body1"
            align="justify"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum
            ullamcorper libero. Pellentesque maximus feugiat ipsum, vel malesuada lectus
            pulvinar sit amet. Sed sit amet ultrices quam. Nam ac ante vel mi molestie
            pretium. Ut id enim nec ipsum faucibus sagittis. In feugiat est ipsum,
            vulputate elementum diam varius in. Aliquam erat volutpat. Nunc eu pharetra
            magna. Sed sed purus et neque vulputate hendrerit. Duis vitae nisl eget diam
            facilisis tristique at ac magna. Suspendisse vel lorem eget quam dignissim aliquam.
            Nam semper nulla auctor lacus faucibus, et aliquet eros consequat. Aenean mollis
            massa non elit viverra gravida sed vel lectus. Cras laoreet vel sem eget posuere.
            Proin ullamcorper rutrum lectus, sit amet finibus diam hendrerit eget. Duis eu leo
            aliquet, iaculis nisl imperdiet, eleifend lorem. Pellentesque vehicula congue nulla,
            sit amet vestibulum ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean auctor purus ac quam placerat, et dapibus nisi posuere. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam rhoncus lectus libero, ac pharetra
            tortor aliquam et. Cras in urna hendrerit, consequat turpis feugiat, congue arcu.
            Suspendisse porttitor elit condimentum est fermentum, venenatis tempor nibh euismod.
            Curabitur ac mattis velit, sit amet fringilla sem. Morbi molestie gravida elit, ac
            faucibus nisl suscipit quis. Ut quis neque mi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Quisque justo nisi, fringilla
            quis rutrum et, posuere volutpat turpis. Vestibulum at faucibus velit, at mattis elit.
            Nullam lectus sapien, malesuada pulvinar pharetra at, pulvinar at nunc. Donec
            venenatis id lacus eget fermentum. Phasellus non diam ultricies mauris laoreet feugiat.
            In eget congue urna. Curabitur tincidunt tellus sed est vestibulum, eget vulputate justo
            auctor. Nunc quis dictum justo, vitae pellentesque velit. Mauris ornare ante dolor.
            Nulla non maximus diam. Fusce in fermentum nisl, a sollicitudin justo. Cras et dapibus
            leo. Nullam non mauris lorem. Suspendisse quis laoreet nibh, suscipit fringilla purus.
            Suspendisse finibus tortor sed vestibulum tincidunt. Aenean id sodales turpis. Donec
            sodales at nunc eu feugiat. Aliquam erat volutpat. Praesent fermentum augue eu ex
            lobortis, vel venenatis leo vestibulum. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Etiam venenatis suscipit bibendum. Praesent
            quam dui, congue a hendrerit vitae, fermentum vel nibh. Integer convallis metus neque,
            a fermentum lorem maximus nec. Vivamus sed leo sit amet tortor maximus vehicula alique
            sit amet odio. Vestibulum ut fringilla purus, vitae sodales ex. Vivamus pretium sodales
            quam ac venenatis. Suspendisse potenti. Nam molestie felis eget lacinia ultrices. Aenean
            sed rutrum augue. Sed massa dui, luctus quis tempor vitae, aliquam et felis. Etiam
            condimentum sollicitudin felis, id aliquet lacus aliquam eget. Ut vel nisl vel ligula
            laoreet fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Quisque ullamcorper at dui vitae dapibus. Nullam nisl nisl,
            suscipit sed ipsum sed, tincidunt volutpat risus. Aliquam viverra, mi sed consectetur
            faucibus, orci elit egestas nunc, quis gravida lorem sem quis urna. Donec eget ultrices
            ex, sed tempus urna. Sed vel eros sit amet felis luctus aliquet id et ligula. Curabitur
            condimentum sem sit amet ipsum malesuada, eu malesuada massa pulvinar. Donec sem elit
            haretra sed ipsum posuere, placerat elementum arcu. Suspendisse ac molestie urna. Donec
            tristique dolor tincidunt enim eleifend, id tempus eros congue. Pellentesque non turpis
            tincidunt dui venenatis bibendum sit amet sit amet ipsum.
        </Typography>
    </Page>
))
