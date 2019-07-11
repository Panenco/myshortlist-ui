import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

// 24px
import add from './icons/24px/add.svg';
import arrowDown from './icons/24px/arrow_down.svg';
import arrow from './icons/24px/arrow.svg';
import calendar from './icons/24px/calendar.svg';
import company from './icons/24px/company.svg';
import cross from './icons/24px/cross.svg';
import bin from './icons/24px/delete.svg';
import download from './icons/24px/download.svg';
import drill from './icons/24px/drill.svg';
import duplicate from './icons/24px/duplicate.svg';
import edit from './icons/24px/edit.svg';
import eye from './icons/24px/eye.svg';
import home from './icons/24px/home.svg';
import notificationsUnread from './icons/24px/notifications_unread.svg';
import notifications from './icons/24px/notifications.svg';
import recommendations from './icons/24px/recommendations.svg';
import remove from './icons/24px/remove.svg';
import searchProfiles from './icons/24px/search_profiles.svg';
import search from './icons/24px/search.svg';
import teams from './icons/24px/teams.svg';
import unarchive from './icons/24px/unarchive.svg';
import urgent from './icons/24px/urgent.svg';
import users from './icons/24px/users.svg';

// 18px
import acceptedSmall from './icons/18px/accepted.svg';
import arrowDownSmall from './icons/18px/arrow_down.svg';
import attachSmall from './icons/18px/attach.svg';
import candidateSmall from './icons/18px/candidate.svg';
import consultantSmall from './icons/18px/consultant.svg';
import contactedSmall from './icons/18px/contacted.svg';
import crossSmall from './icons/18px/cross.svg';
import declinedSmall from './icons/18px/declined.svg';
import eyeNotViewedSmall from './icons/18px/eye_not_viewed.svg';
import eyeViewedSmall from './icons/18px/eye_viewed.svg';
import errorSmall from './icons/18px/error.svg';
import leaveSmall from './icons/18px/leave.svg';
import locationSmall from './icons/18px/location.svg';
import mailSmall from './icons/18px/mail.svg';
import matchedSmall from './icons/18px/matched.svg';
import notViewedSmall from './icons/18px/not_viewed.svg';
import onDiscussionSmall from './icons/18px/on_discussion.svg';
import phoneSmall from './icons/18px/phone.svg';
import questionmarkSmall from './icons/18px/questionmark.svg';
import recommendationsSmall from './icons/18px/recommendations.svg';
import searchProfilesSmall from './icons/18px/search_profiles.svg';
import teamSmall from './icons/18px/team.svg';
import teamsSmall from './icons/18px/teams.svg';
import uploadingSmall from './icons/18px/uploading.svg';
import usersSmall from './icons/18px/users.svg';
import waitSmall from './icons/18px/wait.svg';
import webSmall from './icons/18px/web.svg';

const Icon = ({ icon, className, ...props }) => (
  <svg {...props} className={cx(s.icon, className)} viewBox={icon.viewBox}>
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Icon.Large = ({ icon, className, ...props }) => <Icon {...props} icon={icon} className={cx(s.iconLarge, className)} />;

Icon.icons = {
  add,
  arrowDown,
  arrow,
  calendar,
  company,
  cross,
  bin,
  download,
  drill,
  duplicate,
  edit,
  eye,
  home,
  notificationsUnread,
  notifications,
  recommendations,
  remove,
  searchProfiles,
  search,
  teams,
  unarchive,
  urgent,
  users,

  // small
  acceptedSmall,
  arrowDownSmall,
  attachSmall,
  candidateSmall,
  consultantSmall,
  contactedSmall,
  crossSmall,
  declinedSmall,
  eyeNotViewedSmall,
  eyeViewedSmall,
  errorSmall,
  leaveSmall,
  locationSmall,
  mailSmall,
  matchedSmall,
  notViewedSmall,
  onDiscussionSmall,
  phoneSmall,
  questionmarkSmall,
  recommendationsSmall,
  searchProfilesSmall,
  teamSmall,
  teamsSmall,
  usersSmall,
  uploadingSmall,
  waitSmall,
  webSmall,
};

Icon.defaultProps = {
  className: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

Icon.Large.defaultProps = {
  className: null,
};

Icon.Large.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

export { Icon };
