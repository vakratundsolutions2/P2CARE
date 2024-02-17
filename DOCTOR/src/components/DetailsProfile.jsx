// /* eslint-disable no-unused-vars */
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { useFormik } from "formik";
// import * as yup from 'yup';

// const DetailsProfile = () => {


//     //const dispatch = useDispatch();

//     const schema = yup.object().shape({
//         doctorName: yup.string().required(),
//         doctorCode: yup.string(),
//         gender: yup.string(),
//         departmentName: yup.string().email(),
//         departmentCode: yup.string(),
//         designation: yup.string(),
//         experties: yup.string(),

//         experienceInfo: yup.string(),
//         location: yup.string(),
//         zipcode: yup.string(),

//         description: yup.string(),
//         shortDescription: yup.string(),
//         specialities: yup.string(),
//         awardAndAchivementsInfo: yup.string(),
//         talkPublicationInfo: yup.string(),
//         languageInfo: yup.string(),
//         fellowShipInfo: yup.string(),
//         price: yup.string(),
//         image: yup.string(),

//         availabileforappointment: yup.string(),
//         yearofexperience: yup.string(),
//     });

//     const formik = useFormik({
//         initialValues: {
//             doctorName: "",
//             doctorCode: "",
//             gender: "",
//             departmentName: "",
//             departmentCode: "",
//             designation: "",
//             experties: [],

//             experienceInfo: [],
//             location: "",
//             zipcode: "",

//             description: "",
//             shortDescription: "",
//             specialities: "",
//             awardAndAchivementsInfo: [],
//             talkPublicationInfo: [],
//             languageInfo: [],
//             fellowShipInfo: [],
//             price: 0,
//             image: "",
//             yearofexperience: 0,
//         },
//         validationSchema: schema,
//         onSubmit: (values) => {
            
//           },
//     });


    
//     return (
       
//                 <Form noValidate onSubmit={formik.handleSubmit}>
//                     <Row className="mb-3">
//                         {/* doctor Name */}
//                         <Form.Group as={Col} md="6" controlId="validationFormik01">
//                             <Form.Label>Doctor Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="doctorName"
//                                 placeholder="Doctor Name"
//                                 value={formik.values.doctorName}
//                                 onChange={formik.handleChange("doctorName")}
//                                 isValid={formik.touched.doctorName && !formik.errors.doctorName}
//                                 isInvalid={!!formik.errors.doctorName}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {formik.errors.doctorName}
//                             </Form.Control.Feedback>
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>

//                         {/* Doctor Code  */}
//                         <Form.Group as={Col} md="6" controlId="validationFormik02">
//                             <Form.Label>Doctor Code</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="doctorCode"
//                                 placeholder="Doctor Code"
//                                 value={formik.values.doctorCode}
//                                 onChange={formik.handleChange("doctorCode")}
//                                 isValid={formik.touched.doctorCode && !formik.errors.doctorCode}
//                                 isInvalid={!!formik.errors.doctorCode}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {formik.errors.doctorCode}
//                             </Form.Control.Feedback>
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                     </Row>


//                     <Row className="mb-3">
//                         <Form.Group as={Col} md="6" controlId="validationFormik03">
//                             <Form.Label>Email ID.</Form.Label>
//                             <div key={`inline-radio`} className="mb-3"></div>
//                             <Form.Check
//                                 inline
//                                 label="Male"
//                                 name="gender"
//                                 type="radio"
//                                 id={`inline-radio-1`}
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Female"
//                                 name="gender"
//                                 type="radio"
//                                 id={`inline-radio-2`}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {formik.errors.gender}
//                             </Form.Control.Feedback>
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group as={Col} md="6" controlId="validationFormik04">
//                             <Form.Label>Department Name</Form.Label>
//                             <Form.Control
//                                 type="departmentName"
//                                 placeholder="Department Name"
//                                 name="departmentName"
//                                 value={formik.values.Password}
//                                 onChange={formik.handleChange("departmentName")}
//                                 isInvalid={!!formik.errors.departmentName}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {formik.errors.Password}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                     </Row>

//                     <Row className="mb-3">
                        
//                     </Row>
//                     <Button type="submit">Submit form</Button>
//                 </Form>
//     )
// }

// export default DetailsProfile