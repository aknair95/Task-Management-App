import { Container, Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useContext, useRef } from "react";
import classes from "./addTask.module.css";
import TaskContext from "../../store/taskContext";

const AddTask=() =>{
    const taskNameRef=useRef();
    const descriptionRef=useRef();
    const priorityRef=useRef();

    const taskListCtx=useContext(TaskContext);

    const formSubmitHandler=async(e) =>{
        e.preventDefault();

        const newTask={
            id: Math.random(),
            taskName: taskNameRef.current.value,
            description: descriptionRef.current.value,
            priority: priorityRef.current.value,
            status: false
        }

        taskListCtx.addTask(newTask);

        taskNameRef.current.value="";
        descriptionRef.current.value="";
        priorityRef.current.value="";
    }

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
                                    <Dropdown.Item eventKey="low">Low</Dropdown.Item>
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