import Link from "next/link"
import Image from "next/image"
export interface Link {
  name: string,
  link: string
}

interface NavBarLinks {
  links : Link[]
}

export default function NavBar ({links} : NavBarLinks) {
  return (
    <header>
      <nav className="border-b flex flex-row justify-center py-3">
        <div className="flex flex-row justify-between items-center w-3/4 md:w-1/2 gap-5">
          <div className="flex flex-row no-wrap items-center gap-3">
            <Image src="logo.svg" alt="logo" width={100} height={100} className="md:block hidden"/>
            <h1 className="text-4xl">HealthVet</h1>
          </div>
          <div className="flex flex-row gap-6">
            {links.map(link => 
              <Link key={link.name} href={`${link.name}`} className="grow-0">
                <h1>{link.name}</h1>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}