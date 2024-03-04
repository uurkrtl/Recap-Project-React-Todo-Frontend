import * as Yup from "yup";
import {Form, Formik} from "formik";
import KartalTextInput from "../utilities/customFormControls/KartalTextInput.tsx";
import {Button, ButtonGroup, ButtonOr} from "semantic-ui-react";
import TodoService from "../services/TodoService.ts";
import {useNavigate} from "react-router-dom";

function TodoAdd() {
    const initialValues = {
        description: '',
        status: '',
    }

    const schema = Yup.object({
        description: Yup.string().required('Description is required'),
    });

    const todoService = new TodoService();
    const navigate = useNavigate();
    const onSubmit = (values: { description: string; status: string }) => {
        todoService.addTodo({
            description: values.description,
            status: 'OPEN'
        })
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}>
                <Form className={'ui form'}>
                    <KartalTextInput name={'description'} placeholder={'Description'}></KartalTextInput>
                    <br/>
                    <ButtonGroup>
                        <Button as="a" href="/">Cancel</Button>
                        <ButtonOr />
                        <Button type={'submit'} positive>Save</Button>
                    </ButtonGroup>
                </Form>
            </Formik>
        </div>
    );
}

export default TodoAdd;