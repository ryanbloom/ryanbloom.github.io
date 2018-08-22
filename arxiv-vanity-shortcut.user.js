// ==UserScript==
// @name        Arxiv Vanity link
// @description Adds an "Arxiv Vanity" link to abstracts on arxiv.org
// @version     1.0
// @grant       none
// @match       https://arxiv.org/abs/*
// ==/UserScript==

const components = window.location.pathname.split('/')
const doi = components[components.length - 1]
const url = `https://arxiv-vanity.com/papers/${doi}/`
const links = document.querySelector('.full-text ul')
const node = document.createElement('li')
node.innerHTML = `<a href='${url}'>Arxiv Vanity</a>`
links.appendChild(node)