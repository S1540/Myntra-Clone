import React from "react";
import "./MyntraLoader.css";

function MyntraLoader() {
  return (
    <div className="loader-wrapper">
      {/* Animated Background */}
      <div className="bg-gradient"></div>

      {/* Decorative Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Main Loader Container */}
      <div className="loader-container">
        {/* Myntra Logo with Glassmorphism */}
        <div className="logo-wrapper">
          <h1 className="myntra-logo">Myntra</h1>
          <div className="logo-glow"></div>
        </div>

        {/* Modern Spinner */}
        <div className="spinner-wrapper">
          {/* Outer Orbit */}
          <div className="orbit orbit-1">
            <div className="planet planet-1"></div>
          </div>

          {/* Middle Orbit */}
          <div className="orbit orbit-2">
            <div className="planet planet-2"></div>
          </div>

          {/* Inner Orbit */}
          <div className="orbit orbit-3">
            <div className="planet planet-3"></div>
          </div>

          {/* Center Core */}
          <div className="core">
            <div className="core-inner"></div>
          </div>
        </div>

        {/* Loading Text with Modern Effect */}
        <div className="loading-text-wrapper">
          <p className="loading-text">
            <span className="text-shimmer">Loading Your Fashion Universe…</span>
          </p>
          <div className="dot-container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
            <div className="progress-glow"></div>
          </div>
          <div className="progress-particles">
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyntraLoader;
