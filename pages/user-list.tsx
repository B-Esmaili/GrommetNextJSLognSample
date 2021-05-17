import { Avatar, Box, ColumnConfig, DataTable, Layer, Text } from "grommet";
import Layout from "../components/layout";
import { UserInfoModel } from "../types";
import { useGet } from "restful-react";
import TableLoader from "../components/shared/loaders/table-loader";
import { useState } from "react";
import UserDetail from "../components/pages/user-list/user-detail";
export interface UserListProps {}

const columns: ColumnConfig<UserInfoModel>[] = [
  {
    property: "avatar",
    render: ({ avatar }) => <Avatar src={avatar}></Avatar>,
    header: "",
  },
  {
    header: "First Name",
    property: "first_name",
  },
  {
    header: "Last Name",
    property: "last_name",
  },
  {
    header: "Email",
    property: "email",
  },
];

const UserList: React.FC<UserInfoModel> = (props) => {
  let { data: userInfo, loading } = useGet({
    path: "https://reqres.in/api/users",
  });

  const [selectedUser, setSelectedUser] = useState<UserInfoModel | null>(null);

  const handleSelect = (e: any) => { 
     setSelectedUser(e.datum);
  };

  const closeDetail = ()=>{
    setSelectedUser(null);
  }

  return (
    <Layout>
      <Text size="xlarge"> List Of Users </Text>
      <Box align="center" justify="center">
        {loading && <TableLoader />}
        {!loading && (
          <DataTable
            columns={columns}
            data={userInfo.data}
            fill
            onClickRow={handleSelect}
          ></DataTable>
        )}
      </Box>
      {selectedUser && (
        <Layer position="center" onEsc={closeDetail} onClickOutside={closeDetail}>
          <UserDetail model={selectedUser} />
        </Layer>
      )}
    </Layout>
  );
};

export default UserList;
