import * as Yup from "yup";
import {Form, Formik} from "formik";
import KartalTextInput from "../utilities/customFormControls/KartalTextInput.tsx";
import {Button, Grid, GridColumn, GridRow} from "semantic-ui-react";
import TodoService from "../services/TodoService.ts";
import {useNavigate} from "react-router-dom";

function TodoAdd() {
    const initialValues = {
        description: '',
        status: 'OPEN',
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

                    <Grid>
                        <GridRow>
                            <GridColumn width={14} verticalAlign='middle'>
                                <KartalTextInput name={'description'} placeholder={'Description'} label={'New Todo'}></KartalTextInput>
                                <br/>
                            </GridColumn>
                            <GridColumn width={2} verticalAlign='middle' textAlign='left'>
                                    <Button type={'submit'} positive>Save</Button>
                            </GridColumn>
                        </GridRow>
                    </Grid>

                </Form>
            </Formik>
        </div>
    );
}

export default TodoAdd;