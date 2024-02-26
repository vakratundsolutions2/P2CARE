import { useState } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { PiGearBold, PiTimerBold } from "react-icons/pi";
import { FaBloggerB, FaClipboardList, FaHouseUser } from "react-icons/fa";
import { Layout, Menu, theme, Flex, Button, Dropdown } from "antd";
import p2c_logo from "../assets/images/logo/p2c_logo.jpg";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const USER = useSelector((state) => state?.auth?.admin);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ADMIN");
    navigate("/");
    window.location.reload();
  };
  const items = [
    {
      key: "1",
      label: (
        <Link to={"profile-settings"} className="nav-link px-3">
          Edit Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <button onClick={handleLogout} className="nav-link px-3">
          Logout
        </button>
      ),
    },
  ];
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo  ">
            {/* <h2 className="py-3 fs-5 text-white text-center"> */}{" "}
            <span className="sm-logo">
              {" "}
              <img className=" sm-logoImg " src={p2c_logo} alt="Logo" />
            </span>
            <span className="lg-logo">
              <img className=" logoImg " src={p2c_logo} alt="Logo" />
            </span>
            {/* </h2> */}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key !== "signout") {
                navigate(key);
              }
            }}
            items={[
              {
                key: "",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard",
              },

              {
                key: "user",
                icon: <AiOutlineUser className="fs-4" />,
                label: "User Manage",
                children: [
                  {
                    key: "users-list",
                    label: "All Users",
                  },
                  // {
                  //   key: "users",
                  //   label: "Add New User",
                  // },
                ],
              },

              {
                key: "doctors",
                icon: <PiTimerBold className="fs-4" />,
                label: "Doctors",
                children: [
                  {
                    key: "all-doctors",
                    label: "All Doctors",
                  },
                  {
                    key: "doctor",
                    label: "New Doctor",
                  },
                  // {
                  //   key: "search-doctor",
                  //   label: "Search Doctor",
                  // },
                  {
                    key: "doctor-category-list",
                    label: "Doctor Category",
                  },
                  
                  {
                    key: "doctor-request",
                    label: "New Doctor Request",
                  },
                ],
              },

              {
                key: "hospitals",
                icon: <PiTimerBold className="fs-4" />,
                label: "Hospitals",
                children: [
                  {
                    key: "all-hospital",
                    label: "All Hospitals",
                  },
                  // {
                  //   key: "assign-doctor",
                  //   label: "Assign Doctor",
                  // },
                  
                  // {
                  //   key: "hospital/all-review",
                  //   label: "All Reviews",
                  // },
                ],
              },
              {
                key: "services",
                icon: <PiGearBold className="fs-4" />,
                label: "Services",
                children: [
                  {
                    key: "service",
                    label: "Add Service",
                  },
                  {
                    key: "service-list",
                    label: "All Services",
                  },
                  {
                    key: "service-categiry-list",
                    label: "Service Categories",
                  },
                ],
              },

              {
                key: "blogs",
                icon: <FaBloggerB className="fs-4" />,
                label: "Blog",
                children: [
                  {
                    key: "all-blog",
                    label: "All Blogs",
                  },
                  {
                    key: "blog-category-list",
                    label: "Category",
                  },
                  {
                    key: "blog",
                    label: "Add New Post",
                  },
                ],
              },

              {
                key: "report-list",
                icon: <FaClipboardList className="fs-4" />,
                label: "Reports",
                children: [
                  {
                    key: "appointment",
                    label: "All Appointments ",
                  },

                  {
                    key: "inquary-list",
                    label: "Inquiry ",
                  },
                ],
              },
              {
                key: "pages",
                icon: <FaClipboardList className="fs-4" />,
                label: "Pages",
                children: [
                  {
                    key: "home",
                    label: "Home ",
                  },

                  {
                    key: "about",
                    label: "About",
                  },
                  {
                    key: "contact",
                    label: "Contact",
                  },
                  {
                    key: "faq-list",
                    label: "Faq ",
                  },
                  {
                    key: "privacypolicy",
                    label: "Privacy Policy",
                  },
                  {
                    key: "termsandconditions",
                    label: "Terms and Conditions",
                  },
                ],
              },
              {
                key: "testimonial-list",
                icon: <FaClipboardList className="fs-4" />,
                label: "Testimonials",
              },
            ]}
          />
        </Sider>

        <Layout>
          <Header
            className="ps-5 "
            style={{
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 25px",
            }}
          >
            {" "}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <Button className="px-4 mx-5 btn-primary ">
                {USER?.Username}{" "}
              </Button>
            </Dropdown>
            {/* <nav className="navbar navbar-expand-lg d-flex align-items-center ">
              <h4 className="d-flex    mb-4" style={{ width: "105rem" }}>
                {currentPath.replace("/admin", "Home")}
              </h4>
              <div className="container-fluid offset-md-7">
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav  ">
                    <li className="nav-item dropdown">
                      <button
                        className="btn btn-success dropdown-toggle mb-4"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Admin
                      </button>
                      <ul className="dropdown-menu dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> */}
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
            <Flex>
              <footer className=" d-flex    flex-grow-1 bg-white p-3 roudned-3">
                &copy; Copyright {dayjs().year()} All Right Reserved By P2CARE
              </footer>
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
