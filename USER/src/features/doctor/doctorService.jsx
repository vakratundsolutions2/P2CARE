import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getDoctors = async () => {
  const res = await axios.get(`${baseUrl}doctor/alldoctor`, config);

  return res.data;
};
const getADoctor = async (id) => {
  const res = await axios.get(
    `${baseUrl}doctor/searchdoctorbyid/${id}`,
    config
  );

  return res.data;
};
const filterDoctor = async (DATA) => {
  console.log(DATA);
  const {
    category,
    name,
    Sort,
    valuePrice,
    page,
    limit,
    gender,
    star,
    avail,
    location,
    city,
    pincode,
    locality,
  } = DATA;
  const res = await axios.get(
    `${baseUrl}doctor/searchDoctorByFilters/?${
      category ? `specialities=${category}` : ""
    }${name ? `&name=${name}` : ""}${Sort ? `&sort=${Sort}` : ""}${
      page ? `&page=${page}` : ""
    }${limit ? `&limit=${limit}` : ""}${star ? `&rating=${star}` : ""}${
      gender ? `&gender=${gender}` : ""
    }${avail ? `&mydate=${avail[0]}&diff=${avail[1]}` : ""}${
      location ? `&location=${location}` : ""
    }${
      valuePrice
        ? `&minAmount=${valuePrice[0]}&maxAmount=${valuePrice[1]}  `
        : ""
    }
    
    
    
    ${city ? `&city=${city}` : ""}${pincode ? `&pincode=${pincode}` : ""}${
      locality ? `&locality=${locality}` : ""
    }`,
    config
  );

  return res.data;
};
const filterDoctor2 = async (DATA) => {
   console.log(DATA);
   const {
     category,
     name,
     Sort,
     valuePrice,
     page,
     limit,
     gender,
     star,
     avail,
     location,
     city,
     pincode,
     locality,
   } = DATA;
   const res = await axios.get(
     `${baseUrl}doctor/searchDoctorByFiltersathome/?${
       category ? `specialities=${category}` : ""
     }${name ? `&name=${name}` : ""}${Sort ? `&sort=${Sort}` : ""}${
       page ? `&page=${page}` : ""
     }${limit ? `&limit=${limit}` : ""}${star ? `&rating=${star}` : ""}${
       gender ? `&gender=${gender}` : ""
     }${avail ? `&mydate=${avail[0]}&diff=${avail[1]}` : ""}${
       location ? `&location=${location}` : ""
     }${
       valuePrice
         ? `&minAmount=${valuePrice[0]}&maxAmount=${valuePrice[1]}  `
         : ""
     }
    
    
    
    ${city ? `&city=${city}` : ""}${pincode ? `&pincode=${pincode}` : ""}${
       locality ? `&locality=${locality}` : ""
     }`,
     config
   );


  return res.data;
};

const ratingDoctor = async (DATA) => {
  const res = await axios.put(`${baseUrl}doctor/rating/`, DATA, config);

  return res.data;
};
const BookingDetails = async (paymentId) => {
  const bookingData = localStorage.getItem("bookingDetails");
  var data = JSON.parse(bookingData);
  data["transactionid"] = paymentId;
  const res = await axios.post(`${baseUrl}book/bookappointment`, data, config);
  return res.data;
};

const doctorService = {
  getDoctors,
  getADoctor,
  ratingDoctor,
  filterDoctor,
  BookingDetails,
  filterDoctor2,
};

export default doctorService;
