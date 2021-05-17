import { Avatar, Box, Button, Nav, Sidebar as GrommetSidebar } from "grommet";
import { SideBarProps } from "./types";
import {List , User , Logout} from 'grommet-icons'
import { image } from 'faker';
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { userState } from "../../../context";
import { useRouter } from "next/router";

const SideBar: React.FC<SideBarProps> = () => {

  let [,setUserInfo] = useRecoilState(userState);
  let {push : navigate} = useRouter();

  const logOut =  ()=>{
    setUserInfo(null);
    localStorage.setItem("userInfo" , null);
    navigate("/login");
  }

  return (
    <GrommetSidebar
      fill
      background="brand"
      round="none"      
      header={
        <Box justify="center" direction="row" >
          <Avatar src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" />
        </Box>
      }
      footer={<Button icon={<Logout />} hoverIndicator={false} onClick={logOut} />}
    >
      <Nav gap="small">
        <Link href="/user-list"><Button icon={<List />} plain gap="small" label="User List" hoverIndicator /></Link>
      </Nav>
    </GrommetSidebar>
  );
};

export default SideBar;