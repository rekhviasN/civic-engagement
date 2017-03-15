import React from 'react';
import Map from '../containers/GoogleMapContainer';
import Search from './meetupSearchBar';
import EventList from './MeetupEventsList';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import HeaderContainer from '../containers/headerContainer';

const Dashboard = () =>
  (
    <div>
        <HeaderContainer />
        <div style = {{paddingTop: '70px'}}>
          <Split>
            <Box>
              <Sidebar 
                className="dashboard-side"
                size="large"
                full={true}>
                <Title>
                  Civics Events
                </Title>
                <Search className="meetup-search" />
                <EventList className="meetup-list" />
              </Sidebar>
            </Box>
            <Box>
              <Map />
            </Box>
          </Split>
        </div>
     </div>
  );

export default Dashboard;
