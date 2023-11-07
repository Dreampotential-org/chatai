//Components
import { Stack, useMediaQuery } from "@chakra-ui/react";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/components/Chat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    credential: boolean;
    updateState: ()=> void;
};
const Home:React.FC<Props> = ({credential,updateState})=> {
    const [isResponsive] = useMediaQuery('(max-width: 800px)')
    const navigate = useNavigate()
    useEffect(() => {
        if (credential===false) {
            navigate('/login')
        } else {
            return;
        }
    },[credential])

    return (
        <Stack
            direction={!isResponsive ? "row" : "column"}
            width="full"
            height="full"
            spacing={0}
        > 
            <Sidebar
                isResponsive={isResponsive}
                credential={credential}
                updateState={updateState}
            />
            <Chat />
        </Stack>
    );
};
export default Home;