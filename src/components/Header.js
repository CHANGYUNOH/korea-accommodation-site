import '../styles/components/header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <header className='header'>
          <div className='header-wrap'>
            <div className='header-wrap-list'>
              <Link to="/">
                로고
              </Link>
              <input type='search' placeholder='내용을 입력해주세요'/>
            </div>
            <div className='header-wrap-list'>
              <Link to="/mypage">마이페이지</Link>
            </div>
          </div>
        </header>
      </>
    )
  };
  
  export default Header;