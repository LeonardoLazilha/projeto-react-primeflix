import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link to="/" className='logo'>Prime<span className='flix'>Flix</span></Link>
            <Link to='/favoritos' className='favoritos'>Meus Filmes</Link>
        </header>
    )
}

export default Header;

//api.themoviedb.org/3/movie/550?api_key=
//c55491832e0befcc7f369b4358242974