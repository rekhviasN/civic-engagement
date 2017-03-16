import React from 'react';
import Map from '../containers/GoogleMapContainer';
import Search from './meetupSearchBar';
import EventList from './MeetupEventsList';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Header from '../containers/headerContainer';

const Dashboard = () =>
  (
    <div>
        <Header/>
        <div style = {{paddingLeft: '15px'}}>
          <Split>
            <div style = {{paddingRight: '15px'}}>
              <Box>
                <Sidebar 
                  className="dashboard-side"
                  size="large"
                  full={true}>
                  <div style={{paddingLeft: '15px'}}>
                    <Title className="dashboard-side-title">
                      Civics Events
                    </Title>
                  </div>
                  <br />
                  <Search className="meetup-search" />
                  <EventList className="meetup-list" />
                </Sidebar>
              </Box>
            </div>
            <div style={{paddingRight:'15px'}}>
              <Box>
                <Map />
              </Box>
            </div>
          </Split>
        </div>
     </div>
  );

export default Dashboard;
