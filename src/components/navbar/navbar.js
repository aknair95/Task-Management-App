import { Nav, Container, Navbar } from "react-bootstrap";

const NavigationBar=() =>{
    const activePath=document.location.pathname;
    let taskListPage=false;
    let addTaskPage=false;
 
    if(activePath==="/"){
       taskListPage=true; 
    }else{
        addTaskPage=true;
    }
   
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={taskListPage}>TASK LIST</Nav.Link>
                        <Nav.Link href="/addTask" active={addTaskPage}>ADD TASK</Nav.Link>
                    </Nav>
                </Container>  
            </Navbar>
        </>
    )
}

export default NavigationBar;