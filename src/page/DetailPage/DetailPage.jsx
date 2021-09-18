import React from 'react';

import Time from '../../components/Time';
import GoBack from '../../components/GoBack/GoBack';
import Location from '../../components/Location';
import DarkModeSwitch from '../../components/DarkMode';
import Detail from '../../components/Detail';
import HourList from '../../components/HourList';

import './DetailPage.styles.scss';

function DetailPage({
  onDetailClick,
  props,
}) {
  console.log(999, props);
  const { location, timeOfLocation } = props;

  return (
    <div className="detail-page">
      <div className="detail-page-header">
        <GoBack onDetailClick={onDetailClick} />
        <Location location={location} />
        <DarkModeSwitch />
      </div>
      <div className="detail-page-body">
        <Time props={timeOfLocation} />
        <Detail input={props.detail.current.detail} />
        <HourList input={props.detail.hourly} />
      </div>
    </div>
  );
}

export default DetailPage;
