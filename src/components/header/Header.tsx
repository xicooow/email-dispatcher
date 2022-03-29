import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

import { TNavigatorItem } from "../../types";
import { ROUTES_MAP } from "../../utils/constants";

const navigatorItems: TNavigatorItem[] = [
  {
    icon: "home",
    text: "Home",
    dest: ROUTES_MAP.HOME
  },
  {
    icon: "variable",
    text: "Variables",
    dest: ROUTES_MAP.VARS
  },
  {
    icon: "search-template",
    text: "Template",
    dest: ROUTES_MAP.TEMPLATE
  },
  {
    icon: "document",
    text: "Output",
    dest: ROUTES_MAP.OUTPUT
  }
];

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>E-Mail Dispatcher</Navbar.Heading>
        <Navbar.Divider />
        {
          navigatorItems.map(({ icon, text, dest }, index) => {
            const handleClick = () => {
              navigate(dest);
            };

            return (
              <Button
                key={index}
                icon={icon}
                text={text}
                onClick={handleClick}
                minimal
              />
            );
          })
        }
      </Navbar.Group>
    </Navbar>
  );
};

export default Header;
