import { Container, Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useRef } from "react";
import classes from 

const AddTask=() =>{
    const taskNameRef=useRef();
    const descriptionRef=useRef();
    const priorityRef=useRef();
    return(
        <>
            <Container className={classes.formContainer} style={{width: "70vw",height: "max-content"}}>
                <h3 className="p-2">ADD TASK</h3>
                <Form onSubmit={formSubmitHandler}>
                    <Row className="p-3">
                        <Form.Group as={Col}>
                            <Form.Control
                            type="text" 
                            placeholder="Enter Task Name" 
                            required 
                            size="md"
                            width="auto" 
                            ref={taskNameRef}
                            />
                        </Form.Group>                 
                        <Form.Group as={Col}>                 
                            <Form.Control
                            type="text" 
                            placeholder="Enter task description" 
                            required 
                            size="md"
                            width="auto" 
                            ref={descriptionRef}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>      
                            <Dropdown ref={priorityRef}>
                                <Dropdown.Toggle data-bs-theme="dark">
                                    Select Priority
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="low">Low</Dropdown.Item>
                                    <Dropdown.Item href="medium">Medium</Dropdown.Item>
                                    <Dropdown.Item href="high">High</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group> 
                    </Row>
                    <div className={classes.Btn}>
                        <Button type="submit" size="md">SUBMIT</Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default AddTask;