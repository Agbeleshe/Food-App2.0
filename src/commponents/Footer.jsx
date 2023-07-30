

const Footer = () => {
  return (
    <footer className="flex justify-between md:justify-center md:gap-56  footer p-10 bg-neutral text-neutral-content">
    <div>
      <span className="footer-title">Kitchens</span> 
      <a href="/" className="link link-hover">Epicurean kitchen</a>
      <a href="/" className="link link-hover">Kings Bite</a>
      <a href="/" className="link link-hover">Breakfast Parlor</a>
      <a href="/" className="link link-hover">Dominos Pizza</a>
      <a href="/" className="link link-hover">Crocks Kitchen</a>
      <a href="/" className="link link-hover">Maxi</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a href="/" className="link link-hover">About us</a>
      <a href="/" className="link link-hover">Contact</a>
      <a href="/" className="link link-hover">Jobs</a>
      <a href="/" className="link link-hover">Press kit</a>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a href="/" className="link link-hover">Terms of use</a>
      <a href="/" className="link link-hover">Privacy policy</a>
      <a href="/" className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}
export default Footer