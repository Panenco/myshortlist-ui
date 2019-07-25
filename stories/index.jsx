import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.scss';

import AvatarStory from './avatar';
import * as ButtonsStory from './buttons';
import ButtonIconStory from './button-icon';
import IconStory from './icon';
import GridStory from './grid';
import CommentStory from './comment';
import * as CardStory from './card';
import * as InputStory from './input';
import PaginationStory from './pagination';
import DatePickerStory from './datepicker';
import CultureMatchStory from './culture-match';
import PreloaderStory from './loader';
import MatchStory from './match';
import NavigationStory from './navigation';
import ModalStory from './modal';
import TooltipStory from './tooltip';
import TestsProgressStory from './tests-progress';

storiesOf('Avatar', <AvatarStory />);
//
storiesOf('Button', <ButtonsStory />);
//
storiesOf('ButtonIcon', <ButtonIconStory />);
//
storiesOf('Icon', <IconStory />);
//
storiesOf('Grid', <GridStory />);
//
storiesOf('Comment', <CommentStory />);
//
storiesOf('Card', <CardStory />);
//
storiesOf('Input', <InputStory />);

storiesOf('Pagination', <PaginationStory />);
//
storiesOf('DatePicker', <DatePickerStory />);
//
storiesOf('CultureMatch', <CultureMatchStory />);
//
storiesOf('Preloader', <PreloaderStory />);
//
storiesOf('Match', <MatchStory />);
//
storiesOf('Navigation', <NavigationStory />);
//
storiesOf('Modal', <ModalStory />);
//
storiesOf('Tooltip', <TooltipStory />);

storiesOf('TestProgress', <TestsProgressStory />);
