<div id="top">

<!-- HEADER STYLE: MODERN -->
<div align="center" style="width: 100%;">

<img src="./src/Assets/pre.svg" width="30%" style="display: block; margin: 0 auto;" alt="Project Logo"/>

# PORTFOLIO

<em>Showcase Your Skills with Dynamic, Multilingual Flair<em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/tarekchaalan/Portfolio?style=flat&logo=opensourceinitiative&logoColor=white&color=111111" alt="license">
<img src="https://img.shields.io/github/last-commit/tarekchaalan/Portfolio?style=flat&logo=git&logoColor=white&color=111111" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/tarekchaalan/Portfolio?style=flat&color=111111" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/tarekchaalan/Portfolio?style=flat&color=111111" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/i18next-26A69A.svg?style=flat&logo=i18next&logoColor=white" alt="i18next">
<img src="https://img.shields.io/badge/React%20Bootstrap-41E0FD.svg?style=flat&logo=React-Bootstrap&logoColor=black" alt="React%20Bootstrap">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<br>
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
</div>
<br clear="right">

---

## Table of Contents

<details>
<summary>Table of Contents</summary>

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

</details>

---

## Overview

Portfolio is a robust developer tool designed to streamline the creation and deployment of personal portfolio websites using React and Vite.

**Why Portfolio?**

This project enhances the development and deployment process for personal websites. The core features include:

- **🚀 Vite Configuration:** Optimizes the React development environment, boosting build efficiency and server configuration.
- **🌐 Internationalization:** Supports multiple languages, broadening accessibility and user engagement.
- **🎨 Theming and Styling:** Provides dynamic theme management and consistent styling across the application.
- **📱 Responsive UI Components:** Utilizes React and Bootstrap for a responsive and interactive user interface.
- **📊 GitHub Integration:** Displays GitHub activity, promoting developer engagement and showcasing contributions.
- **🔍 SEO and PWA Support:** Integrates SEO meta tags and PWA capabilities for enhanced visibility and offline access.

---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>React-based SPA</li><li>Component-driven</li><li>Client-side rendering</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint for linting</li><li>React best practices</li><li>Consistent code style</li></ul> |
| 📄 | **Documentation** | <ul><li>Minimal inline comments</li><li>Lacks comprehensive README</li></ul> |
| 🔌 | **Integrations**  | <ul><li>**EmailJS** for email services</li><li>**Axios** for HTTP requests</li><li>**React Router** for navigation</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Reusable React components</li><li>Separation of concerns</li></ul> |
| 🧪 | **Testing**       | <ul><li>No testing framework detected</li><li>Lacks unit tests</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Vite for fast builds</li><li>Optimized for development</li></ul> |
| 🛡️ | **Security**      | <ul><li>Basic security practices</li><li>No explicit security tools</li></ul> |
| 📦 | **Dependencies**  | <ul><li>React & React-DOM</li><li>React-Bootstrap</li><li>i18next for localization</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Component-based scalability</li><li>Potential for microservices</li></ul> |


---

## Project Structure

```sh
└── Portfolio/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── 404.html
    │   ├── AvatarIcon.svg
    │   ├── CNAME
    │   ├── index.html
    │   ├── locales
    │   │   ├── ar
    │   │   ├── en
    │   │   ├── es
    │   │   └── fr
    │   ├── manifest.json
    │   └── preload
    │       ├── projects
    │       └── resumes
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Assets
    │   │   ├── about.png
    │   │   ├── flags
    │   │   ├── home-bg.jpg
    │   │   ├── home-main.svg
    │   │   ├── myAvatar.svg
    │   │   ├── myAvatar1.svg
    │   │   └── pre.svg
    │   ├── LocaleContext.jsx
    │   ├── ThemeContext.jsx
    │   ├── colors.css
    │   ├── components
    │   │   ├── About
    │   │   ├── Contact
    │   │   ├── Footer.jsx
    │   │   ├── Home
    │   │   ├── Navbar.jsx
    │   │   ├── NotFound.jsx
    │   │   ├── Pre.jsx
    │   │   ├── Projects
    │   │   ├── Resume
    │   │   └── ScrollToTop.jsx
    │   ├── i18n.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── style.css
    └── vite.config.jsx
```

### Project Index

<details open>
	<summary><b><code>PORTFOLIO/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/vite.config.jsx'>vite.config.jsx</a></b></td>
					<td style='padding: 8px;'>- Configure the Vite development environment to optimize a React application<br>- Establishes plugins for React integration, sets the base URL for custom domains, and specifies the output directory for builds<br>- Implements an alias for simplified imports and configures server settings to handle client-side routing with a fallback for non-existent routes<br>- Enhances development efficiency and production readiness within the projects architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serve as the entry point for a personal portfolio website, establishing the foundational HTML structure and linking to the main JavaScript module<br>- It sets up the documents metadata, including language, character set, and viewport settings, and incorporates a favicon<br>- The file ensures that the React application, which is responsible for rendering the dynamic content, is mounted onto the root div.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- The <code>package-lock.json</code> file is a crucial component of the portfolio project, serving as a detailed manifest that ensures consistent dependency management across different environments<br>- It records the exact versions of each package and their dependencies used in the project, providing a reliable snapshot that helps maintain stability and predictability during development and deployment<br>- This file is automatically generated and updated by npm, and it plays a vital role in locking the dependency tree, preventing discrepancies that might arise from version updates<br>- By doing so, it supports the project's architecture by ensuring that all contributors and environments use the same package versions, which is essential for debugging, testing, and production consistency.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- The package.json file defines the configuration and dependencies for a personal portfolio project built with React and Vite<br>- It manages scripts for development, building, and deploying the application, leveraging tools like gh-pages for deployment<br>- Key dependencies include libraries for UI components, internationalization, and data fetching, ensuring a responsive and multilingual user experience<br>- Dev dependencies support development and code quality through tools like ESLint.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Configure ESLint to enforce coding standards and best practices for a JavaScript and React project<br>- It integrates plugins for React, React Hooks, and React Refresh, ensuring compatibility with ECMAScript 2020 and JSX<br>- By ignoring the dist directory and customizing specific rules, it maintains code quality and consistency, while supporting the latest React version and module source type for optimal development workflow.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- public Submodule -->
	<details>
		<summary><b>public</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ public</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serve as the foundational HTML structure for a personal portfolio website built with React.js<br>- It integrates Google Analytics for tracking, sets up essential meta tags for SEO and social media sharing, and includes a script for handling session-based redirects<br>- The document ensures compatibility across devices with viewport settings and provides a container for React components to render dynamically.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/CNAME'>CNAME</a></b></td>
					<td style='padding: 8px;'>- Defines the custom domain for the project by specifying tarekchaalan.com as the URL for the hosted site<br>- This configuration is crucial for directing web traffic to the correct domain when deploying the site using platforms like GitHub Pages<br>- It ensures that users can access the project through a memorable and branded web address, enhancing the project's accessibility and professional presentation.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/404.html'>404.html</a></b></td>
					<td style='padding: 8px;'>- Facilitates seamless navigation for a Single Page Application hosted on GitHub Pages by handling 404 errors<br>- When a user encounters a non-existent route, it captures the current path and redirects to the root URL<br>- The main application retrieves the stored path from session storage to manage routing, ensuring users land on the intended page without disruption.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/manifest.json'>manifest.json</a></b></td>
					<td style='padding: 8px;'>- The manifest.json file defines essential metadata for a Progressive Web App (PWA) built with Create React App<br>- It specifies the apps name, icons, start URL, display mode, theme color, and background color, ensuring a consistent and standalone user experience across devices<br>- This configuration enhances the apps integration with the user's device, enabling features like home screen installation and offline capabilities.</td>
				</tr>
			</table>
			<!-- locales Submodule -->
			<details>
				<summary><b>locales</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ public.locales</b></code>
					<!-- ar Submodule -->
					<details>
						<summary><b>ar</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ public.locales.ar</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/locales/ar/translation.json'>translation.json</a></b></td>
									<td style='padding: 8px;'>- Translation resource file provides Arabic language support for the user interface of a personal portfolio website<br>- It contains key-value pairs for various sections such as home, about, projects, resume, and contact<br>- This enables the website to display content in Arabic, enhancing accessibility and user experience for Arabic-speaking users, and supporting the multilingual capabilities of the web application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- fr Submodule -->
					<details>
						<summary><b>fr</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ public.locales.fr</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/locales/fr/translation.json'>translation.json</a></b></td>
									<td style='padding: 8px;'>- Translation resource file provides French language support for the application, enhancing its accessibility for French-speaking users<br>- It contains localized strings for various sections such as home, about, projects, resume, and contact, ensuring a seamless user experience<br>- By integrating these translations, the project broadens its reach and usability, catering to a diverse audience and promoting inclusivity.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- es Submodule -->
					<details>
						<summary><b>es</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ public.locales.es</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/locales/es/translation.json'>translation.json</a></b></td>
									<td style='padding: 8px;'>- Translation resource file for Spanish localization enhances the user interface by providing Spanish language support across various sections of the application<br>- It includes translations for home, about, projects, resume, contact, and navigation components, ensuring a seamless experience for Spanish-speaking users<br>- This localization effort is crucial for reaching a broader audience and improving accessibility within the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- en Submodule -->
					<details>
						<summary><b>en</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ public.locales.en</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/public/locales/en/translation.json'>translation.json</a></b></td>
									<td style='padding: 8px;'>- Translation resource file for the English locale provides text content for various sections of a personal portfolio website<br>- It supports internationalization by defining strings for components like home, about, projects, resume, and contact<br>- This structure allows easy updates and maintenance of text elements, enhancing user experience by ensuring consistent and localized content presentation across the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/ThemeContext.jsx'>ThemeContext.jsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates theme management across the application by providing a context for theme state and a toggle function<br>- It initializes the theme based on user preferences stored in local storage and updates the documents theme attribute accordingly<br>- This component enhances user experience by allowing seamless switching between light and dark modes, ensuring consistent theme application throughout the user interface.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/i18n.jsx'>i18n.jsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates internationalization by configuring the i18next library to manage language translations within the application<br>- Integrates backend support for loading translations, detects user language preferences, and initializes React integration<br>- Utilizes local storage to remember user language settings and defaults to English if none is set<br>- Enhances user experience by dynamically adapting the interface to different languages based on user preferences and settings.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/colors.css'>colors.css</a></b></td>
					<td style='padding: 8px;'>- Defines the color scheme for a projects user interface, ensuring visual consistency across light and dark themes<br>- It categorizes colors into main, background, text, accent, and UI element colors, each serving specific design purposes<br>- This organization supports readability, accessibility, and aesthetic appeal, while maintaining relationships between colors to preserve the overall design system and enhance user interaction.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/App.css'>App.css</a></b></td>
					<td style='padding: 8px;'>- Define the visual styling for the main application components, ensuring a cohesive and engaging user interface<br>- Establishes the layout, color scheme, and animations for elements such as the app header and logo, contributing to a consistent and dynamic user experience<br>- Enhances accessibility by considering user preferences for reduced motion, thereby improving the overall usability and aesthetic appeal of the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/index.css'>index.css</a></b></td>
					<td style='padding: 8px;'>- Defines the foundational styling for the application by setting a global font and smoothing properties for text, ensuring a consistent and polished appearance across the user interface<br>- Establishes a visually appealing background gradient, contributing to the overall aesthetic and user experience<br>- This CSS file plays a crucial role in maintaining design consistency and enhancing the visual appeal of the entire codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/main.jsx'>main.jsx</a></b></td>
					<td style='padding: 8px;'>- Initialize the React application by setting up the root rendering process and integrating essential components such as the main App component, internationalization, and theme context<br>- Enhance the console logging mechanism to filter out specific messages<br>- This setup ensures a structured environment for the application, providing foundational support for theming and localization, while maintaining a clean console output during development.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/style.css'>style.css</a></b></td>
					<td style='padding: 8px;'>- The <code>src/style.css</code> file serves as a foundational stylesheet for the project, establishing the primary visual and layout characteristics of the application<br>- It ensures a consistent look and feel across the entire user interface by defining essential styles for the HTML structure, such as full-height layouts and hidden overflow to prevent horizontal scrolling<br>- The file also incorporates a color scheme by importing <code>colors.css</code>, which centralizes color management for easy theme adjustments<br>- Additionally, it includes styles for specific elements like buttons and a preloader, enhancing the user experience by maintaining visual coherence and providing necessary UI feedback<br>- Overall, this stylesheet plays a crucial role in maintaining the aesthetic integrity and usability of the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/App.jsx'>App.jsx</a></b></td>
					<td style='padding: 8px;'>- Serve as the main entry point for the application, orchestrating the overall structure and navigation<br>- It integrates key components such as the Navbar, Footer, and various pages like Home, About, and Projects<br>- Utilizes React Router for seamless navigation and manages preloading of assets and language-specific resources<br>- Provides a context for locale management and handles redirects from 404 errors to enhance user experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/LocaleContext.jsx'>LocaleContext.jsx</a></b></td>
					<td style='padding: 8px;'>- Establishes a context for managing locale settings within the application, providing a default language and a placeholder for updating the locale<br>- This context facilitates consistent language preferences across the app, ensuring that components can access and modify locale information seamlessly<br>- It plays a crucial role in supporting internationalization efforts, enhancing user experience by allowing dynamic language changes without requiring extensive modifications to individual components.</td>
				</tr>
			</table>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Footer.jsx'>Footer.jsx</a></b></td>
							<td style='padding: 8px;'>- The Footer component enhances the user interface by providing a consistent footer section across the application<br>- It displays the developers name, current copyright year, and social media links, facilitating easy access to the developers GitHub, LinkedIn, and email<br>- This component contributes to the overall architecture by ensuring a cohesive and professional appearance, while promoting connectivity and engagement with users.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/NotFound.jsx'>NotFound.jsx</a></b></td>
							<td style='padding: 8px;'>- The NotFound component enhances user experience by providing a clear and friendly message when a user navigates to a non-existent page within the application<br>- It maintains visual consistency with the rest of the site through shared styles and offers a direct link back to the homepage, ensuring users can easily recover from navigation errors and continue exploring the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/ScrollToTop.jsx'>ScrollToTop.jsx</a></b></td>
							<td style='padding: 8px;'>- Enhances user experience by automatically scrolling the window to the top whenever the route changes within the application<br>- This functionality ensures that users start at the top of a new page, maintaining consistency and improving navigation flow<br>- Integrated within the React component architecture, it leverages React Routers location tracking to trigger the scroll action, seamlessly aligning with the applications routing behavior.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
							<td style='padding: 8px;'>- The Navbar component enhances user navigation by providing a responsive, multilingual interface with theme toggling capabilities<br>- It integrates with React Router for seamless page transitions and supports language selection through react-select, leveraging i18n for localization<br>- The component also includes interactive elements like a GitHub link and dynamically adjusts its appearance based on user interactions and scrolling behavior, contributing to an intuitive user experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Pre.jsx'>Pre.jsx</a></b></td>
							<td style='padding: 8px;'>- Pre.jsx manages the display of a preloader component within the application, enhancing user experience by indicating loading states<br>- It dynamically assigns an ID based on the loading status, allowing for conditional rendering and styling<br>- This component plays a crucial role in the user interface by providing visual feedback during asynchronous operations, ensuring users are informed about the applications current state.</td>
						</tr>
					</table>
					<!-- Home Submodule -->
					<details>
						<summary><b>Home</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Home</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Home/Type.jsx'>Type.jsx</a></b></td>
									<td style='padding: 8px;'>- Enhancing the user interface, the Type component in the project dynamically displays a series of translated strings using a typewriter effect<br>- By integrating internationalization through the <code>useTranslation</code> hook, it ensures that the displayed text is localized, catering to diverse audiences<br>- This component contributes to an engaging and interactive home page experience, reinforcing the projects commitment to accessibility and user engagement.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Home/Home.jsx'>Home.jsx</a></b></td>
									<td style='padding: 8px;'>- The Home component serves as the introductory section of the application, providing a welcoming interface with a personalized greeting and developer introduction<br>- It incorporates multilingual support and interactive elements such as social media links and dynamic typing effects<br>- This component is essential for engaging users and establishing a connection through visual elements and personal information, enhancing the overall user experience of the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Contact Submodule -->
					<details>
						<summary><b>Contact</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Contact</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Contact/Contact.jsx'>Contact.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user interaction by providing a contact form within the application, allowing users to submit their contact details and messages<br>- Utilizes emailjs to send form data via email and integrates internationalization for multilingual support<br>- Enhances user experience with real-time input validation and feedback, ensuring accurate data entry and successful message delivery<br>- Contributes to the broader architecture by enabling user communication and engagement.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Projects Submodule -->
					<details>
						<summary><b>Projects</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Projects</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Projects/ProjectCards.jsx'>ProjectCards.jsx</a></b></td>
									<td style='padding: 8px;'>- ProjectCards component enhances the user interface by displaying project information in a visually appealing card format<br>- It integrates with React Bootstrap for styling and provides interactive elements such as buttons for accessing GitHub repositories, demos, and app store links<br>- This component plays a crucial role in showcasing projects effectively within the application, offering users easy navigation to additional resources and project details.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Projects/Projects.jsx'>Projects.jsx</a></b></td>
									<td style='padding: 8px;'>- The Projects component serves as a showcase for various projects within the application, providing an interactive interface for users to explore project details<br>- It utilizes React and Bootstrap to display project cards with images, descriptions, and links to GitHub repositories or live demos<br>- The component also features a modal for viewing project images in detail, enhancing user engagement and experience.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Projects/Github.jsx'>Github.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a users GitHub activity visually within the application by integrating a GitHub contribution calendar<br>- Utilizes responsive design to adjust font size based on screen width, ensuring optimal readability across devices<br>- Enhances user experience by supporting multiple languages through translation capabilities<br>- Positioned within the components structure, it contributes to the broader goal of displaying user-related project information dynamically and interactively.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Resume Submodule -->
					<details>
						<summary><b>Resume</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.Resume</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/Resume/Resume.jsx'>Resume.jsx</a></b></td>
									<td style='padding: 8px;'>- The <code>Resume.jsx</code> component facilitates the display and download of a resume in various languages and themes<br>- It dynamically adjusts the resumes appearance based on the users language preference and theme settings, while also offering a default mode for simplified viewing<br>- The component ensures an interactive user experience by allowing theme toggling and responsive design adjustments for optimal viewing across different screen sizes.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- About Submodule -->
					<details>
						<summary><b>About</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.About</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/About/AboutCard.jsx'>AboutCard.jsx</a></b></td>
									<td style='padding: 8px;'>- The AboutCard component enhances the user interface by presenting a personalized introduction and activities section<br>- It utilizes internationalization for multilingual support and incorporates visual elements like flags to represent different countries<br>- This component is part of the broader architecture, contributing to the projects goal of delivering a culturally inclusive and engaging user experience through dynamic and visually appealing content.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/About/About.jsx'>About.jsx</a></b></td>
									<td style='padding: 8px;'>- The About component serves as an informative section within the application, providing users with an introduction to the individual or organization behind the project<br>- It utilizes React and react-bootstrap for layout and styling, and integrates internationalization support via react-i18next for multilingual content<br>- The component highlights key skills and tools, enhancing user engagement through visual elements like images and styled text.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/About/Toolstack.jsx'>Toolstack.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a collection of essential development tools and platforms using visually engaging icons and labels<br>- Positioned within the About section of the project, it highlights the diverse environments and applications utilized by the development team, enhancing user understanding of the projects technical ecosystem<br>- The component contributes to a more interactive and informative user experience by providing hover effects for additional context.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/tarekchaalan/Portfolio/blob/master/src/components/About/Techstack.jsx'>Techstack.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcases the projects technical stack by visually representing various technologies and tools used in the development process<br>- It enhances the user interface by displaying icons for each technology, such as programming languages, frameworks, and services, providing a quick overview of the skills and technologies leveraged within the project<br>- This component contributes to the projects About section, offering insight into the technical expertise behind the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build Portfolio from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/tarekchaalan/Portfolio
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Portfolio
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Portfolio uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---

## Contributing

- **🐛 [Report Issues](https://github.com/tarekchaalan/Portfolio/issues)**: Submit bugs found or log feature requests for the `Portfolio` project.
- **💡 [Submit Pull Requests](https://github.com/tarekchaalan/Portfolio/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/tarekchaalan/Portfolio
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/tarekchaalan/Portfolio/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=tarekchaalan/Portfolio">
   </a>
</p>
</details>

---

## License

Group 7 EST is protected under the MIT [LICENSE](./LICENSE) file.

<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---