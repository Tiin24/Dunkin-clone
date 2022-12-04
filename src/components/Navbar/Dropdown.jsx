import React,{useState} from 'react'
import {serviceDropdown} from './NavItems'
import {Link} from 'react-router-dom'
import './Dropdown.css'

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
        <ul
          className={dropdown ? "services-submenu clicked" : "services-submenu"}
          onClick={() => setDropdown(!dropdown)}
        >
          {serviceDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link to='/store'>
                  <img className="image-menu" src={item.image} alt="..." />
                </Link>
                <h2 className="name_cat">
                  <Link
                    to='/store'
                    className={item.cName}
                    onClick={() => setDropdown(true)}
                  >
                    {item.title}
                  </Link>
                </h2>
              </li>
            );
          })}
        </ul>
      </>
  )
}

export default Dropdown