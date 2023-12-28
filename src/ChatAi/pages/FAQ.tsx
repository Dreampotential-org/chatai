    import { Card, Stack, useMediaQuery } from "@chakra-ui/react";
    import { Sidebar } from "../components/Sidebar";
    import { Chat } from "../components/Chat";
    import { useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    import { useState } from "react";
    import './FAQ.css';

  const FAQ = () => {
    const [isBlockShowVisible1, setBlockShowVisibility1] = useState(true);
    const [isBlockShowVisible2, setBlockShowVisibility2] = useState(true);
    const [isBlockShowVisible3, setBlockShowVisibility3] = useState(true);
    const [isBlockShowVisible4, setBlockShowVisibility4] = useState(true);
    const [isBlockShowVisible5, setBlockShowVisibility5] = useState(true);
    const [isBlockShowVisible6, setBlockShowVisibility6] = useState(true);
    const [isBlockShowVisible7, setBlockShowVisibility7] = useState(true);
    
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);
    const [clicked6, setClicked6] = useState(false);
    const [clicked7, setClicked7] = useState(false);
    



    const toggleBlockShow = (section) => {
        if (section === 1) {
            setBlockShowVisibility1(!isBlockShowVisible1);
            setClicked1(!clicked1);
        } else if (section === 2) {
            setBlockShowVisibility2(!isBlockShowVisible2);
            setClicked2(!clicked2);
        }else if(section === 3){
            setBlockShowVisibility3(!isBlockShowVisible3);
            setClicked3(!clicked3);
        }else if( section === 4) {
             setBlockShowVisibility4(!isBlockShowVisible4);
            setClicked4(!clicked4);
        }else if( section === 5) {
             setBlockShowVisibility5(!isBlockShowVisible5);
            setClicked5(!clicked5);
        }else if( section === 6) {
             setBlockShowVisibility6(!isBlockShowVisible6);
            setClicked6(!clicked6);
        }else if( section === 7) {
             setBlockShowVisibility7(!isBlockShowVisible7);
            setClicked7(!clicked7);
        }
    };

    return (
        <div className="container ">
            <h1 className="faq-header">Frequently Asked Question</h1>
            <div className="faq">
                {/* first */}
                <div className={`pdrop ${clicked1 ? "clicked" : ""}`} onClick={() => toggleBlockShow(1)}>
                    <p>What is Agentstat?</p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible1 ? "block-show" : ""}`}>
                    <p>AgentStat is a database of every real estate transaction that you can use to pick a real estate agent based on their stats. m made for real estate agents</p>
                </div>
                <hr className="hori" />

                {/* second */}
                <div className={`pdrop ${clicked2 ? "clicked" : ""}`} onClick={() => toggleBlockShow(2)}>
                    <p>How is AgentStat Plus different from other AI tools like ChatGPT?</p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible2 ? "block-show" : ""}`}>
                    <p>AgentStat Plus offers a multifaceted advantage. While many AI tools produce generic content, AgentStat stands out by incorporating live listing data and real-time neighborhood market insights where needed. It's trained on materials</p>
                </div>
                <hr className="hori" />

                {/* third */}

            <div className={`pdrop ${clicked3 ? "clicked" : ""}`} onClick={() => toggleBlockShow(3)}>
                    <p>
            How does AgentStat make content that's right for me?
          </p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible3 ? "block-show" : ""}`}>
                    <p>AgentStat uses the agent's professional profile, client notes, and a deep understanding of top-producing agent materials to ensure each content piece is tailored to the specific needs and style of the agent.</p>
                </div>
                <hr className="hori" />

                {/* fourth */}

              <div className={`pdrop ${clicked4 ? "clicked" : ""}`} onClick={() => toggleBlockShow(4)}>
                    <p>
            
            How much does AgentStat Plus cost, and can I try it first?
          
          </p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible4 ? "block-show" : ""}`}>
                    <p>AgentStat plus is priced at $9.99 per month.</p>
                </div>
                <hr className="hori" />

                {/* fivth */}
         <div className={`pdrop ${clicked5 ? "clicked" : ""}`} onClick={() => toggleBlockShow(5)}>
                    <p>
           
            Am I locked into a long-term contract with AgentStat or can I cancel anytime?
          
          </p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible5 ? "block-show" : ""}`}>
                    <p>You're not locked into any long-term commitment with AgentStat. You can cancel anytime directly from your dashboard.</p>
                </div>
                <hr className="hori" />


                {/* six */}

                 <div className={`pdrop ${clicked6 ? "clicked" : ""}`} onClick={() => toggleBlockShow(6)}>
                    <p>
            
            Can I save the content generated by AgentStat for future use?
          
          </p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible6 ? "block-show" : ""}`}>
                    <p>Absolutely! AgentStat Plus allows you to save any output generated by the AI, so you can use it at your convenience without the need for regeneration.
</p>
                </div>
                <hr className="hori" />

                {/* seven */}

                 <div className={`pdrop ${clicked7 ? "clicked" : ""}`} onClick={() => toggleBlockShow(7)}>
                    <p>
            
            Is my data safe with AgentStat?
          
          </p>
                    <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" alt="Description of the image" />
                </div>
                <hr className="hori" />
                <div className={`pdrop ${isBlockShowVisible7 ? "block-show" : ""}`}>
                    <p>Yes, keeping your data safe is very important to us. All user inputs are securely transmitted and we do not share or sell your data to third parties.</p>
                </div>
                <hr className="hori" />

            </div>
        </div>
    );
};

export default FAQ;

    // const FAQ = () => {

    //   const [isBlockShowVisible, setBlockShowVisibility] = useState(true);
    //    const [clicked, setClicked] = useState(false);


    // const toggleBlockShow = () => {
    //     setBlockShowVisibility(!isBlockShowVisible);
    //     setClicked(!clicked);
    // };


    //     return  (
    //         <div className="container">
    //         <h1>Frequently Asked Question</h1>
    //         <div className="faq">
    //         {/* fisrt */}

    //         <div className={`pdrop ${clicked ? "clicked" : ""}`} onClick={toggleBlockShow}>
    //         <p>What is Agentstat?</p>
    //         <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" />
    //         </div>
    //         <hr className="hori" />

    //         <div className={`pdrop ${isBlockShowVisible ? "block-show" : ""}`}>
    //         <p>AgentStat is a database of every realestate transaction that you can use to pick a real estate agent based on their stats. m made for real estate agents
    //         </p>
            
    //         </div>
    //         <hr className="hori" />

    //  {/* second */}

    //         <div className={`pdrop ${clicked ? "clicked" : ""}`} onClick={toggleBlockShow}>
    //         <p> How is AgentStat Plus different from other AI tools like ChatGPT?</p>
    //         <img className="drop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAALVBMVEX///8AAADGxsYNDQ36+vpRUVFUVFTV1dUWFhZxcXGgoKB8fHze3t7Dw8NeXl6QN9pEAAAB/UlEQVR4nO3VSVYCURBEUQqwwW7/yxVEFK32128yos5705jkHeVuR0RERERERERERERERERERERERES7l2P0BUntn0aGU/foJNkfnoclp65zkuwPXTcouTiMJBfHoOTqsJFcHQOSm8NEcnP0JK9d5yT5dZwlb2OLvuTPtQ/H8U1cMuVwkkw7fCRzDhfJvMNDssThIFnm0JcsdahLlju0JSkOZUmaQ1eS6lCVpDs0JWscipJ1Dj3JWoeaZL1DS5LjUJLkOXQkuQ4VSb5DQ1LCoSAp44iXlHJES8o5YiUlHZGSso44SWlHlKS8I0ZSwxEhqeNoL6nlaC2p52grqeloKanraCep7Wglqe9oI2nhaCFp46gvaeWoLWnnqCtp6agpaeuoJ2ntqCVp76gjiXDUkMQ4ykuiHKUlcY6ykkhHSUmso5wk2lFKEu8oI1FwlJBoOPIlKo5ciY4jT6LkyJFoOdZL1BxrJXqOdRJFxxqJpiNdoupIleg60iTKjhSJtmO5RN2xVKLvWCZxcCyReDjmJS6OOYmPY1ri5JiSeDnGJW6OMYmfY1ji6BiSeDr6ElfHf8m7reOfpPN1jErsHCMSQ8egxNIxIDF19CS2Dt8/2O9OYu24k5g7fiT2jm/JBhxfkk04zpKPbTiIiIiIiIiIiIiIiIiIiIiIiIhoO30CATMSwSf3CIcAAAAASUVORK5CYII=" />
    //         </div>
    //         <hr className="hori" />

    //         <div className={`pdrop ${isBlockShowVisible ? "block-show" : ""}`}>
    //         <p>AgentStat Plus offers a multifaceted advantage. While many AI tools produce generic content, AgentStat stands out by incorporating live listing data and real-time neighborhood market insights where needed. It's trained on materials 
    //         </p>
            
    //         </div>
    //         <hr className="hori" />
    //     </div>
    //    </div>
    //     )
    // }

    // export default FAQ;