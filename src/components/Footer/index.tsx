import React from 'react';
import { Facebook, Globe, Instagram, Send, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        {/* Logo and Links */}
        <h4>LOGO</h4>
        <div className={styles.links}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/discovery">Discovery</NavLink>
            </li>
            <li>
              <NavLink to="/photos">Photos</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms</NavLink>
            </li>
            <li>
              <NavLink to="/guidelines">Guidelines</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/advertise">Advertise</NavLink>
            </li>
            <li>
              <NavLink to="/integrations">Integrations</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.middle}>
        {/* Email input */}
        <div className={styles.emailWrapper}>
          <input
            type="email"
            placeholder="Email"
            className={styles.emailInput}
          />
          <Send className={styles.sendIcon} />
        </div>
        <span>Stay in touch with us for the freshest products!</span>
      </div>

      <div className={styles.last}>
        {/* Social Media Icons */}
        <div className={styles.socialIcon}>
          <Instagram />
        </div>
        <div className={styles.socialIcon}>
          <Twitter />
        </div>
        <div className={styles.socialIcon}>
          <Facebook />
        </div>
        <div className={styles.socialIcon}>
          <Globe />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
