//Components
import { Card, Stack, useMediaQuery } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Chat } from "../components/Chat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home:React.FC = ()=> {
    const [isResponsive] = useMediaQuery('(max-width: 800px)')
    const navigate = useNavigate()
    // useEffect(() => {
    //     const token = localStorage.getItem('Token');
    //     if (token !== null) {
    //         return;
    //     } else {
    //         navigate('/login')
    //     }
    // }, [])
    
    return (
        <Stack
            direction={!isResponsive ? "row" : "column"}
            width="full"
            height="full"
            spacing={0}
        > 
            <Sidebar
                isResponsive={isResponsive}
            />
            <Chat />
        </Stack>
    );
};
export default Home;