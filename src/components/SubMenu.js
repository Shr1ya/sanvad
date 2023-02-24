import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: var(--neutral7);
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  list-style: none;
  padding: 4px;
  height: 24px;
  text-decoration: none;
  font-size: 14px;
  margin: 8px;

  &:hover {
    border-radius: 4px;
    background: var(--neutral3);
    color: var(--primary1);
    font-weight: 700;
    cursor: pointer;
    animation-duration: 3s;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: var(--neutral1);
  height: 24px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--neutral7);
  font-size: 12px;
  font-weight: 600;
  margin: 8px;

  &:hover {
    background: var(--neutral3);
    color: var(--primary1);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
