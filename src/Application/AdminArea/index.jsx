import React from 'react';
import styled from 'styled-components';
import ContentManagement from './ContentManagement'

export const AdminAreaWrapper = styled.div`
  background: #f9fafb;
  color: #1f92ff;
  min-height: 100%;
  width: 100%;
  position: absolute;
  //display: flex;
  //align-items: stretch;
  //justify-content: space-around;
  font-family: 'Source Sans Pro', sans-serif;
`;

class AdminArea extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <AdminAreaWrapper>
        <ContentManagement/>
      </AdminAreaWrapper>
    );
  }
}

export default AdminArea;
