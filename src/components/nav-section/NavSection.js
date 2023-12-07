import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText, IconButton } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from "./styles";

import { usePermissionContext } from "src/context/PermissionContext";
import data from "./../../pages/ProfileManagement/Faq/Component/DummyData/index";
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const { permissions } = usePermissionContext();



  const userPermissions = permissions?.map((item) => item.name);

  const filterByPermissions = (items, permissions) => {
    return items?.filter((item) => {
      if (item.permission) {
        if (
          item.permission.some((permission) => permissions?.includes(permission))
        ) {
          if (item.children) {
            item.children = filterByPermissions(item.children, permissions);
          }
          return true;
        } else {
          return false;
        }
      } else {
        if (item.children) {
          item.children = filterByPermissions(item.children, permissions);
        }
        return true;
      }
    });
  };

  const filteredData = filterByPermissions(data, userPermissions);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {filteredData.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info, children } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <StyledNavItem
        component={RouterLink}
        to={path}
        onClick={toggleExpanded}
        sx={{
          "&.active": {
            color: "#FFF",
            bgcolor: "action.selected",
            fontWeight: "fontWeightBold",
          },
          mb: 1,
        }}
      >
        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
        <ListItemText disableTypography primary={title} />
        {info && info}
        {children && (
          <IconButton
            onClick={toggleExpanded}
            color="inherit"
            sx={{
              ml: "auto",
            }}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
          </IconButton>
        )}
      </StyledNavItem>

      {isExpanded && children && (
        <List disablePadding sx={{ pl: 2 }}>
          {children.map((childItem) => (
            <NavItem key={childItem.title} item={childItem} />
          ))}
        </List>
      )}
    </>
  );
}
