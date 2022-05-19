import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { OverviewCard } from './style';
import { Cards } from '../cards/frame/cards-frame';
import Heading from '../heading/heading';
import { Button } from '../buttons/buttons';
import { Dropdown } from '../dropdown/dropdown';
const DailyOverview = () => {
  const { rtl } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  return (
    <OverviewCard>
      <div className="d-flex align-items-center justify-content-between overview-head">
        <Heading as="h4">출/퇴근 관리</Heading>
        <Dropdown>
          <Button>
            날짜 <FeatherIcon icon="chevron-down" size={14} />
          </Button>
        </Dropdown>
      </div>
      <div className="overview-box">
        <Cards headless>
          <div className="d-flex align-items-center justify-content-between">
            <div className="overview-box-single">
              <Heading as="h2" className="color-primary">
                출근
              </Heading>
              <p>Attendance</p>
            </div>
          </div>

          <p>
            <span className="growth-upward">
              시 간 : <span>2022년 05월 04일 10:00</span>
            </span>
            <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
            <Button size="default" transparented type="success">
              완 료
            </Button>
            </span>
          </p>
        </Cards>
      </div>

      <div className="overview-box">
        <Cards headless>
          <div className="d-flex align-items-center justify-content-between">
            <div className="overview-box-single">
              <Heading as="h2" className="color-info">
                퇴근
              </Heading>
              <p>Leave Work</p>
            </div>
          </div>
          <p>
            <span className="growth-downward">
              시 간 : <span>2022년 05월 04일 19:00</span>
            </span>
            <span className="overview-box-percentage" style={{ float: !rtl ? 'right' : 'left' }}>
              <Button size="default" transparented type="danger">
                완 료
              </Button>
            </span>
          </p>
        </Cards>
      </div>
    </OverviewCard>
  );
};

export default DailyOverview;
