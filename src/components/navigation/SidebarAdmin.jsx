import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './stylesScreens/Sidebar.css';
import logo from '../../assets/img/logo_jorges.png';
import { IoHomeOutline, IoCarSportOutline, IoBuildOutline, IoPersonCircleOutline } from 'react-icons/io5';

const Sidebar = () => {
  const [homeCollapseOpen, setHomeCollapseOpen] = useState(true);
  const [dashboardCollapseOpen, setDashboardCollapseOpen] = useState(false);
  const [ordersCollapseOpen, setOrdersCollapseOpen] = useState(false);
  const [accountCollapseOpen, setAccountCollapseOpen] = useState(false);

  const handleHomeCollapse = () => {
    setHomeCollapseOpen(!homeCollapseOpen);
  };

  const handleDashboardCollapse = () => {
    setDashboardCollapseOpen(!dashboardCollapseOpen);
  };

  const handleOrdersCollapse = () => {
    setOrdersCollapseOpen(!ordersCollapseOpen);
  };

  const handleAccountCollapse = () => {
    setAccountCollapseOpen(!accountCollapseOpen);
  };

  return (
    <div className="sidebar" style={{ height: '100%', width: '100%', maxWidth: '220px', backgroundColor: 'fff' }}>
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <img src={logo} height={'80%'} width={'80%'} alt="Logo" />
      </a>
      <div className="sidebar-options" style={{ maxHeight: 'calc(100% - 180px)', overflowY: 'auto' }}>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Button
              className="btn-toggle align-items-center rounded"
              onClick={handleHomeCollapse}
              aria-expanded={homeCollapseOpen}
              variant="none"
            >
              <IoHomeOutline size={'23'} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} />
              Home
            </Button>
          </li>
          <li className="mb-1">
            <Button
              className="btn-toggle align-items-center rounded"
              onClick={handleDashboardCollapse}
              aria-expanded={dashboardCollapseOpen}
              variant="none"
            >
              <IoBuildOutline size={'23'} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} />
              Refacciones
            </Button>
            <Collapse in={dashboardCollapseOpen}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="">
                    Refaccion
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Familia
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Provedor
                  </a>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="mb-1">
            <Button
              className="btn-toggle align-items-center rounded"
              onClick={handleOrdersCollapse}
              aria-expanded={ordersCollapseOpen}
              variant="none"
            >
              <IoCarSportOutline size={'23'} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} />
              Vehículos
            </Button>
                            <Collapse in={ordersCollapseOpen}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="">
                    Armadora
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Modelo
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Vehículo
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Motor
                  </a>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-10">
            <Button
              className="btn-toggle align-items-center rounded"
              onClick={handleAccountCollapse}
              aria-expanded={accountCollapseOpen}
              variant="none"
            >
              <IoPersonCircleOutline size={'23'} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} />
              Ivan M.
            </Button>
            <Collapse in={accountCollapseOpen}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="">
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
