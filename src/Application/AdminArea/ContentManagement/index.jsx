import React from 'react';
import styled from 'styled-components';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { MyContext } from '../../index'
import { FaFile  } from 'react-icons/fa';
import Site from '../../scenes/Site'
import PageDetails from './PageDetails'

export const PageContainer = styled.div`
  max-width: 1040px;
  margin: auto;
  padding: 0 15px;
  //border: 1px solid orange;
`;

export const PageHeader = styled.div`
  background: #24292e;
  color: #f0fdfe;
  padding: 5px 15px;
`;

export const Title = styled.h4`
  margin: 15px 0;
  
  svg {
    font-size: .8em;
  }
`;

export const TabContent = styled.div`
  background: white;
  padding: 15px;
  border: 1px solid #ddd;
  border-top: none;
  position: relative;
  clear: both;
  display: table;
  width: 100%;
`;

class ContentManagement extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ pages }) => (
          <div>
            <PageHeader>
              <PageContainer>
                <h4>Welcome Eduardo</h4>
              </PageContainer>
            </PageHeader>
            <PageContainer>

            <Title><FaFile/> Pages ({pages.length})</Title>
            <Tabs defaultActiveKey={pages[0].id} transition={false} id="uncontrolled-tab-example">
              {pages.map((page) => {
                return (
                  <Tab key={page.id} eventKey={page.id} title={page.name}>
                    <TabContent>
                      <h4>Page Details</h4>
                      <PageDetails/>
                    </TabContent>
                  </Tab>
                )
              })}
            </Tabs>
            </PageContainer>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ContentManagement;
