import React, { Component } from "react";
import { Router, Route, useParams } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
