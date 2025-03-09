import '../styles/components/header.scss';

const Header = () => {
    return (
      <>
        <header className='header'>
          <div className='header-wrap'>
            <div className='header-wrap-left'>
              <h1>
                로고
              </h1>
              <input type='search' placeholder='내용을 입력해주세요'/>
            </div>
            <div className='header-wrap-right'>
              마이페이지
            </div>
          </div>
        </header>
      </>
    )
  };
  
  export default Header;