import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

import add from './icons/add.svg';
import arrowDown from './icons/arrow-down.svg';
import arrow from './icons/arrow.svg';
import book from './icons/book.svg';
import calendar from './icons/calendar.svg';
import company from './icons/company.svg';
import creditCard from './icons/credit-card.svg';
import cross from './icons/cross.svg';
import bin from './icons/delete.svg';
import download from './icons/download.svg';
import dragDots from './icons/drag-dots.svg';
import drill from './icons/drill.svg';
import duplicate from './icons/duplicate.svg';
import edit from './icons/edit.svg';
import eye from './icons/eye.svg';
import emptystar from './icons/emptystar.svg';
import facebook from './icons/facebook.svg';
import halfstar from './icons/halfstar.svg';
import home from './icons/home.svg';
import linkedin from './icons/linkedin.svg';
import notificationsUnread from './icons/notifications-unread.svg';
import notifications from './icons/notifications.svg';
import recommendations from './icons/recommendations.svg';
import remove from './icons/remove.svg';
import searchProfiles from './icons/search-profiles.svg';
import search from './icons/search.svg';
import teams from './icons/teams.svg';
import unarchive from './icons/unarchive.svg';
import urgent from './icons/urgent.svg';
import users from './icons/users.svg';
import accepted from './icons/accepted.svg';
import attach from './icons/attach.svg';
import candidate from './icons/candidate.svg';
import consultant from './icons/consultant.svg';
import contacted from './icons/contacted.svg';
import declined from './icons/declined.svg';
import eyeNotViewed from './icons/eye-not-viewed.svg';
import eyeViewed from './icons/eye-viewed.svg';
import error from './icons/error.svg';
import leave from './icons/leave.svg';
import location from './icons/location.svg';
import mail from './icons/mail.svg';
import matched from './icons/matched.svg';
import onDiscussion from './icons/on-discussion.svg';
import phone from './icons/phone.svg';
import questionmark from './icons/questionmark.svg';
import star from './icons/star.svg';
import team from './icons/team.svg';
import uploading from './icons/uploading.svg';
import wait from './icons/wait.svg';
import web from './icons/web.svg';
import dashboard from './icons/dashboard.svg';
import localActivity from './icons/local-activity.svg';
import work from './icons/work.svg';
import courses from './icons/courses.svg';
import dns from './icons/dns.svg';
import assignment from './icons/assignment.svg';
import contract from './icons/contract.svg';
import interview from './icons/interview.svg';
import management from './icons/management.svg';
import pc from './icons/pc.svg';
import resume from './icons/resume.svg';
import reunion from './icons/reunion.svg';
import smartphone from './icons/smartphone.svg';
import compass from './icons/compass.svg';
import award from './icons/award.svg';
import instagram from './icons/instagram.svg';
import boundaryConditions from './icons/boundary-conditions.svg';
import companyCulture from './icons/company-culture.svg';
import careerDrivers from './icons/career-drivers.svg';
import genericCompetences from './icons/generic-competences.svg';
import jobSpecificCompetences from './icons/job-specific-competences.svg';
import interests from './icons/interests.svg';
import dreaming from './icons/dreaming.svg';
import currentCulture from './icons/current-culture.svg';

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
  book,
  calendar,
  company,
  creditCard,
  cross,
  bin,
  download,
  dragDots,
  drill,
  duplicate,
  edit,
  eye,
  emptystar,
  facebook,
  halfstar,
  home,
  linkedin,
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
  accepted,
  attach,
  candidate,
  consultant,
  contacted,
  declined,
  eyeNotViewed,
  eyeViewed,
  error,
  leave,
  location,
  mail,
  matched,
  onDiscussion,
  phone,
  questionmark,
  star,
  team,
  uploading,
  wait,
  web,
  dashboard,
  localActivity,
  work,
  courses,
  dns,
  assignment,
  contract,
  interview,
  management,
  pc,
  resume,
  reunion,
  smartphone,
  compass,
  award,
  instagram,
  boundaryConditions,
  genericCompetences,
  jobSpecificCompetences,
  interests,
  companyCulture,
  careerDrivers,
  dreaming,
  currentCulture,
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
