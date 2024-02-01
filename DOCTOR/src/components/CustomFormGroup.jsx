/* eslint-disable react/prop-types */
import { Col, Form } from "react-bootstrap"


const CustomInput = ({ type, name, label, onChng, onBlr, val, md=6}) => {
    return (
        <Form.Group as={Col} md={md} controlId="validationFormik01">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={label}
                value={val}
                onChange={onChng}
                onBlur={onBlr}
            />
        </Form.Group>
    )
}

export default CustomInput