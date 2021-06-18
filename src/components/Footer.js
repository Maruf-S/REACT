import { Link } from "react-router-dom"
function Footer () {

    return (
        <footer class="footer py-3 mx-auto">
        <div class="container-fluid text-center">
          <span class="text-muted h6">Dream Cinema © 2021</span>
          <div class="text-white d-inline"> 
            <a href="https://twitter.com/rickastley" rel="noopener" target="_blank" class="social text-white">TWITTER</a>
            <a href="https://www.instagram.com/officialrickastley/" rel="noopener" target="_blank" class="social text-white">INSTAGRAM</a>
          </div>
        </div>
    </footer>
    );
}
export default Footer;