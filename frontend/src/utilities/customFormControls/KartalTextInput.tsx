import {useField} from "formik";
import {FormField} from "semantic-ui-react";
import './KartalTextInput.css'

function KartalTextInput({...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <div className="ui labeled input">
                    <div className="ui label label">{props.placeholder}</div>
                    <input type={props.type} {...field} {...props} placeholder={props.placeholder}/>
                </div>
                {meta.touched && meta.error ? (
                    <div className='ui pointing red basic label'>{meta.error}</div>
                ) : null}
            </FormField>
        </div>
    );
}

export default KartalTextInput;