import {Form, Formik} from "formik";

import {Button, ButtonGroup, ButtonOr, FormSelect} from "semantic-ui-react";
import TodoService from "../services/TodoService.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import KartalTextInput from "../utilities/customFormControls/KartalTextInput.tsx";


function TodoUpdate() {
    const { id = '' } = useParams<string>();
    const initialValues = {
        id: id,
        description: '',
        status: '',
    }

    const todoService = new TodoService();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({
        id: '',
        description: '',
        status: ''
    });

    useEffect(() => {
        if (id) {
            const todoService = new TodoService();
            todoService.getByIdTodo(id).then((response) => {
                setTodo(response.data);
            });
        }
    }, [id]);


    const onSubmit = () => {
        todoService.updateTodo({
            id: id,
            description: todo.description,
            status: todo.status
        })
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const options = [
        { key: 'm', text: 'OPEN', value: 'OPEN' },
        { key: 'f', text: 'IN_PROGRESS', value: 'IN_PROGRESS' },
        { key: 'o', text: 'DONE', value: 'DONE' },
    ]

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                <Form className={'ui form'}>
                    <KartalTextInput name={'description'} placeholder={'Description'} value={todo.description} label={'Description'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo({...todo, description: e.target.value})}></KartalTextInput>
                    <FormSelect
                        fluid
                        options={options}
                        placeholder='Status'
                        name={'status'}
                        value={todo.status}
                        onChange={(_, data) => setTodo({...todo, status: data.value as string})}
                    />

                    <br/>
                    <ButtonGroup>
                        <Button as={Link} to="/">Cancel</Button>
                        <ButtonOr />
                        <Button type={'submit'} positive>Save</Button>
                    </ButtonGroup>
                </Form>
            </Formik>
        </div>
    );
}

export default TodoUpdate;