import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button} from '../Button';

storiesOf('Button', module)
  .add('With Title', () => (
    <Button onClickHandler={action('clicked')} title="Hi" />
  ))
  .add('with some emoji', () => (
    <Button onClickHandler={action('clicked')}>😀 😎 👍 💯</Button>
  ));
