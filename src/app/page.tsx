import Hero from "./ui/Hero"
import { Link }  from "./ui/NavBar"
import NavBar from "./ui/NavBar"

export default function Home() {
  const links: Link[]= [{name: "Pricing", link: "/pricing"}, {name: "About Us", link: "/about-us"}, {name: "Login", link: "/login"}, {name: "Sign Up", link: "/signup"}]
  return (
    <>
      <NavBar links={links}/>
      <Hero/>
    </>
  )
}
