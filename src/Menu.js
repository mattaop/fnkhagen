import React, { Component } from "react";
import { Router, Route, useParams } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top navbar-expand-sm bg-light navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
