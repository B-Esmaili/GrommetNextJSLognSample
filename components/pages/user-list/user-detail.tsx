import { Avatar, Box, Text } from "grommet";
import { UserInfoModel } from "../../../types";

export interface UserDetailProps {
    model : UserInfoModel
}

const KeyValue = (props :any)=>{

    let {keyElem,value} = props;

   return <Box direction="row" pad="medium">
         <Text style={{width:"8em" , fontWeight:"bold"}}>{keyElem}</Text> 
         <Text>{value}</Text>
    </Box>
}

const UserDetail : React.FC<UserDetailProps> = (props)=>{
    let {model} = props;
    return <Box pad="medium">
        <Avatar src={model.avatar} />
        <KeyValue keyElem="First Name" value={model.first_name}/>
        <KeyValue keyElem="Last Name" value={model.last_name}/>
        <KeyValue keyElem="Email" value={model.email}/>        
    </Box>
}

export default UserDetail;