import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/JonatasSan"><GoMarkGithub /></a>
                <a href="https://www.instagram.com/jhonbary_/"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/jonatas-dos-santos-b94b54212/"><FaLinkedin /></a>
            </div>
        </footer>
    )
}