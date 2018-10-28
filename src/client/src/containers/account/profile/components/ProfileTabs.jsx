import React, { PureComponent } from 'react';
import { Card, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import ProfileTimeLine from './ProfileTimeLine';
import ActivityTimeline from '../../../../shared/components/activity-timeline/ActivityTimeline';
import ProfileActivities from './ProfileActivities';
import showResults from './Show';
import ProfileSettings from './ProfileSettings';
import TextEditorTwo  from '../../../../shared/components/text-editor/TextEditor';

export default class ProfileTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Col md={12} lg={12} xl={8}>
        <Card>
          <div className="profile__card tabs tabs--bordered-bottom">
            <div className="tabs__wrap">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    Activity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    Editor
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <ActivityTimeline />
                </TabPane>
                <TabPane tabId="2">
                  <TextEditorTwo />
                </TabPane>
                <TabPane tabId="3">
                  <ProfileSettings onSubmit={showResults} />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}