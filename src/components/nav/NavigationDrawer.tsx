import { User, Settings, LogOut, ChevronRight } from 'lucide-react'
import './index.scss'
import { useState } from 'react'

const menu = [
  {
    id: 1,
    name: 'Profile',
    icon: User,
  },
  {
    id: 2,
    name: 'Setting',
    icon: Settings,
  },
  {
    id: 3,
    name: 'Logout',
    icon: LogOut,
  },
  // {
  //   id: 4,
  //   name: 'Logout',
  //   icon: LogOut,
  // },
  // {
  //   id: 5,
  //   name: 'Logout',
  //   icon: LogOut,
  // },
  // {
  //   id: 6,
  //   name: 'Logout',
  //   icon: LogOut,
  // },
  // {
  //   id: 7,
  //   name: 'Logout',
  //   icon: LogOut,
  // },
]

const NavigationDrawer = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='drawer '>
      <div className='menu_toggle ' onClick={handleActive}>
        <span>
          <ChevronRight />
        </span>
      </div>
      <div className={`navigation ${isActive ? 'active' : ''}`}>
        <ul className='menu'>
          {menu.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id} className=''>
                <a href='#' className=' '>
                  <span className='icon'>
                    <Icon />
                  </span>
                  <span className='text '>{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavigationDrawer
