const ABOUT = require("../../model/content/About");
const CONTACT = require("../../model/content/Contact");
const FAQ = require("../../model/content/Faq");
const HOME = require("../../model/content/Home");
const PRIVACYPOLICY = require("../../model/content/PrivacyPolicy");
const TANDC = require("../../model/content/T&C");

// add contact page details
exports.addContactPage = async (req, res) => {
  try {
    if (!req.body.address || !req.body.email || !req.body.phone) {
      throw new Error("Please Enter Valid Feild");
    }

    const data = await CONTACT.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// edit contact page details
exports.editContactPage = async (req, res) => {
  try {
    const data = await CONTACT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get contact page details
exports.getContactPage = async (req, res) => {
  try {
    const data = await CONTACT.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

// ===============================faq============================

/// Add Faq
exports.addFAQ = async (req, res) => {
  try {
    if (!req.body.question || !req.body.answer || !req.body.date) {
      throw new Error("Please Enter Valid Feild");
    }

    const data = await FAQ.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// Edit the Faq
exports.EditFAQ = async (req, res) => {
  try {
    if (!req.body.question || !req.body.answer || !req.body.date) {
      throw new Error("Please Enter Valid Feild");
    }

    const data = await FAQ.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// remove faq
exports.removeFAQ = async (req, res) => {
  try {
    const data = await FAQ.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully deleted",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// Get Faq
exports.GetFAQ = async (req, res) => {
  try {
    const data = await FAQ.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Get",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// Get   all Faq
exports.GetAllFAQ = async (req, res) => {
  try {
    const data = await FAQ.find();
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Get",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

// =======================================ABOUT================================

// add contact page details
exports.addAboutPage = async (req, res) => {
  try {
    if (
      !req.body.description ||
      !req.body.title ||
      !req.body.whychoseus ||
      !req.body.bennertitle ||
      !req.body.bennerdescription
    ) {
      throw new Error("Please Enter Valid Feild");
    }

    console.log(req.body);

    const data = await ABOUT.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// edit contact page details
exports.editAboutPage = async (req, res) => {


  console.log(req.body);
  console.log(req.file);
  console.log(req.files);
  try {


    


    const data = await ABOUT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get contact page details
exports.getAboutPage = async (req, res) => {
  try {
    const data = await ABOUT.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.getAllAboutPage = async (req, res) => {
  try {
    const data = await ABOUT.find();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.deleteAllAboutPage = async (req, res) => {
  try {
    const data = await ABOUT.deleteMany();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};


// =======================================HOME================================

// add contact page details
exports.addHomePage = async (req, res) => {
  
  try {
    if (
      
      !req.body.howitworks ||
      !req.body.bennertitle ||
      !req.body.bennerdescription
    ) {
      throw new Error("Please Enter Valid Feild");
    }

    req.body.howitworks = JSON.parse(req.body.howitworks)
    console.log(req.body);


    const data = await HOME.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// edit contact page details
exports.editHomePage = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.files);
  try {
    const data = await HOME.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get contact page details
exports.getHomePage = async (req, res) => {
  try {
    const data = await HOME.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.getAllHomePage = async (req, res) => {
  try {
    const data = await HOME.find();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.deleteAllHomePage = async (req, res) => {
  try {
    const data = await HOME.deleteMany();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};





// =======================================PRIVACYPOLICY================================

// add contact page details
exports.addPRIVACYPOLICY = async (req, res) => {
  try {
    if (
      !req.body.description
    ) {
      throw new Error("Please Enter Valid Feild");
    }

    
    const data = await PRIVACYPOLICY.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// edit contact page details
exports.editPRIVACYPOLICY = async (req, res) => {

  try {
    const data = await PRIVACYPOLICY.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get contact page details
exports.getPRIVACYPOLICY = async (req, res) => {
  try {
    const data = await PRIVACYPOLICY.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.getAllPRIVACYPOLICY = async (req, res) => {
  try {
    const data = await PRIVACYPOLICY.find();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.deleteAllPRIVACYPOLICY = async (req, res) => {
  try {
    const data = await PRIVACYPOLICY.deleteMany();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

// =======================================termsandconditions================================

// add contact page details
exports.addTANDC = async (req, res) => {
  try {
    if (!req.body.description) {
      throw new Error("Please Enter Valid Feild");
    }

    const data = await TANDC.create(req.body);
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Added",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// edit contact page details
exports.editTANDC = async (req, res) => {
  try {
    const data = await TANDC.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Successful",
      message: "Data Sucessfully Updated",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get contact page details
exports.getTANDC = async (req, res) => {
  try {
    const data = await TANDC.findById(req.params.id);
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.getAllTANDC = async (req, res) => {
  try {
    const data = await TANDC.find();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
// get about page details
exports.deleteAllTANDC = async (req, res) => {
  try {
    const data = await TANDC.deleteMany();
    res.status(201).json({
      status: "Successful",
      message: "Data getting Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
