// /* eslint-disable react/prop-types */
// import { Col } from "antd"
// import { Form } from "react-router-dom"

// const PersonalDetails = ({ errors, touched, getFieldProps }) => {
//   return (
//     <>
//       {/* Designation */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Designation</Form.Label>
//         <Form.Control
//           type="text"
//           name="designation"
//           placeholder="Designation"
//           {...getFieldProps('designation')}
//           className={`${(touched.designation && errors.designation) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* experties */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* experienceInfo */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* location */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>
//       {/* zipcode */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* description */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* shortDescription */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* specialities */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* awardAndAchivementsInfo */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* talkPublicationInfo */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* languageInfo */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* fellowShipInfo */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* price */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* image */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* availabileforappointment */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//       {/* yearofexperience */}
//       <Form.Group as={Col} md="6" controlId="validationFormik01">
//         <Form.Label>Experties</Form.Label>
//         <Form.Control
//           type="text"
//           name="experties"
//           placeholder="Experties"
//           {...getFieldProps('experties')}
//           className={`${(touched.experties && errors.experties) && 'error_input'}`}
//         />
//       </Form.Group>

//     </>
//   )
// }

// export default PersonalDetails
