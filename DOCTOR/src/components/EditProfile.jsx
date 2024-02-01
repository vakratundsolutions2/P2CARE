import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { editData } from '../features/auth/authSlice';

function EditProfile(userData) {
    const { Formik } = formik;

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        Username: yup.string().required(),
        Name: yup.string().required(),
        Email_Id: yup.string().required().email(),
        Password: yup.string(),
    });

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                Username: userData?.profileData?.Username,
                Name: userData?.profileData?.Name,
                Email_Id: userData?.profileData?.Email,
                Password: '',
            }}
            onSubmit={(values) => {
                dispatch(editData(values));
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik01">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="Username"
                                placeholder="Username"
                                value={values.Username}
                                onChange={handleChange}
                                isValid={touched.Username && !errors.Username}
                                isInvalid={!!errors.Username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Username}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik02">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={values.Name}
                                onChange={handleChange}
                                isValid={touched.Name && !errors.Name}
                                isInvalid={!!errors.Name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Name}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>Email ID.</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email ID."
                                name="Email_Id"
                                value={values.Email_Id}
                                onChange={handleChange}
                                isInvalid={!!errors.Email_Id}
                                isValid={touched.Email_Id && !errors.Email_Id}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Email_Id}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik04">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="Password"
                                value={values.Password}
                                onChange={handleChange}
                                isInvalid={!!errors.Password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.Password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default EditProfile;