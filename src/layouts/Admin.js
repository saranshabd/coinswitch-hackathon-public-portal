import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import DashboardForEntity from "views/admin/DashboardForEntity";
import DashboardForIndividual from "views/admin/DashboardForIndividual";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import TablesForEntity from "views/admin/TablesForEntity";
import TablesForIndividual from "views/admin/TablesForIndividual";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard/individual" exact component={DashboardForIndividual} />
            <Route path="/admin/dashboard/entity" exact component={DashboardForEntity} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables/entity" exact component={TablesForEntity} />
            <Route path="/admin/tables/individual" exact component={TablesForIndividual} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
