import { Avatar, Button, Nav, Sidebar as GrommetSidebar } from "grommet";
import { SideBarProps } from "./types";
import {List , User , Logout} from 'grommet-icons'

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <GrommetSidebar
      fill
      background="brand"
      round="small"
      header={
        <Avatar src="" />
      }
      footer={<Button icon={<Logout />} hoverIndicator />}
    >
      <Nav gap="small">
        <Button icon={<List />} plain gap="small" label="List Users" hoverIndicator />
      </Nav>
    </GrommetSidebar>
  );
};

export default SideBar;