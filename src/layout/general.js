import React from "react"
import "../styles/header.scss"
import "../styles/footer.scss"

export default function Layout({ children }) {
    return (
      <div id="general-container">
        <header>
            <div className="content">
                <div className="site-name"><a href="/">Let's Explain</a></div>
                <a className="buymeacoffee" href="https://www.buymeacoffee.com/SavvasStephnds" target="_blank" rel="noreferrer">
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-red.png" 
                    alt="Buy Me A Coffee"/>
                </a>
            </div>
        </header>
        <div id="main-page">
            {children}
        </div>
        <footer>
          <div className="content container-width">
            <div className="dev-intro">
              A project by Savvas Stephanides. <a href="https://twitter.com/SavvasStephnds">Follow him on Twitter</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }