var HTMLTitle = document.getElementsByTagName("TITLE")[0].text;
class SpecialHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="header-set">
            <div class="logo-header">
                <div class="logo-container">
                    <center><img src="../../src/logonew.png" alt="Purrfect Paws Logo" class="logo" width="200px" height="200px"><img src="../../src/purf-logo (2).png" alt="Purrfect Paws Logo" class="logo" width="200px" height="200px"></center>
                </div>
            </div>
                <nav class = "navbar">
                    <ul class = "navlist">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="#">For Cats</a>
                            <ul class="dropdown-box">
                                <li><a href="../cat-breeds.html">Breeds</a></li>
                                <li><a href="../cat-foods.html">Foods</a></li>
                            </ul>
                        </li>
                        <li><a href="#">For Dogs</a>
                            <ul class="dropdown-box">
                                <li><a href="../dog-breeds.html">Breeds</a></li>
                                <li><a href="../dog-foods.html">Foods</a></li>
                            </ul>
                        </li>
                        <li><a href="../about-us.html">About Us</a></li>
                        <li><a class = cta href="../contact-us.html">Contact Us</a></li>
                    </ul>
                </nav>
        </div>
        `     
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="footer-container">
            <ul class="footer-navlink">
                <li><a href="index.html">Home</a></li>
                <li><a href="../cat-breeds.html">Cat Breeds</a></li>
                <li><a href="../cat-foods.html">Cat Foods</a></li>
                <li><a href="../dog-breeds.html">Dog Breeds</a></li>
                <li><a href="../dog-foods.html">Dog Foods</a></li>
                <li><a href="../about-us.html">About Us</a></li>
                <li><a href="../contact-us.html">Contact Us</a></li>
            </ul>
            <h4 class="copyright-text"> Copyright © 2025 Purrfect Paws. All rights reserved.</h4>
        </div> 
        `     
    }
}
class CSSCaller extends HTMLElement {
    connectedCallback () {
       this.innerHTML = `
           <link rel="stylesheet" href="../../css/footer.css">
            <link rel="stylesheet" href="../../CSS/style.css">
            <link rel="stylesheet" href="../../css/navigationbar.css">
            <link rel="stylesheet" href="../../css/slogan.css">
            <link rel="stylesheet" href="../../css/main-content.css">
            <link rel="stylesheet" href="../../css/pet-table.css">
            <link rel="icon" href="../../src/purrfect-pawslogo.png" type="image/png">
       `
    }
}
class wrapperCat extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
                <div class="wrapper">
                    <div class="back-button">
                        <h2><a href="../index.html">Home</a> > <a href="../cat-breeds.html">Cat Breeds</a> > <a href="">` + HTMLTitle + `</a>
                    </div>
                </div>
            
                    `
    }
}
class wrapperDog extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="wrapper">
                <div class="back-button">
                    <h2><a href="../index.html">Home</a> > <a href="../dog-breeds.html">Dog Breeds</a> > <a href="">` + HTMLTitle + `</a>
                </div>
            </div>
                    `
    }
}
function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('../../src/purrfect-pawslogo.png');


customElements.define('special-footer', SpecialFooter)
customElements.define('special-header', SpecialHeader)
customElements.define('css-caller', CSSCaller)
customElements.define('wrapper-cat', wrapperCat)
customElements.define('wrapper-dog', wrapperDog)