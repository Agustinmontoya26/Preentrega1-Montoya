import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img src="./logo.png" alt="logo" width={'200px'}/>
        <h1>Build-UR-Life</h1>
      </div>
      <div >
        <ul className='list-container'>
          <li>
            <button className='category-button'>Proteinas</button>
            </li>
          <li>
            <button className='category-button'>Preentrenos</button>
            </li>
          <li>
            <button className='category-button'>Comidas</button>
            </li>
        </ul>
      </div>
      <CartWidget></CartWidget>
    </div>
  )
}

export default NavBar