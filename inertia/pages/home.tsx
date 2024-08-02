import { Head } from '@inertiajs/react'
import { NavLink } from '~/components/ui/nav/nav_link'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />
      <header>
        <nav>
          <ul>
            <NavLink label={'Testing'} size="sm" />
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}
