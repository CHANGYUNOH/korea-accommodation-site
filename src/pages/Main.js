import '../styles/pages/main.scss';

const itemList = [
  {},{},{},{}
]

const Main = () => {
    return (
      <>
        <div className='main'>
          <div className='main-wrap'>
            <section className='section-list'>
              <div className='section-list-cont'>
                <ul className='category'>
                  <li className='category-list'>
                    <span>호텔</span>
                  </li>
                  <li className='category-list'>
                    <span>리조트</span>
                  </li>
                  <li className='category-list'>
                    <span>펜션</span>
                  </li>
                  <li className='category-list'>
                    <span>풀빌라</span>
                  </li>
                  <li className='category-list'>
                    <span>모텔</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className='section-list'>
              <div className='section-list-title'>
                <p className='title'>숙소 리스트</p>
              </div>
              <div className='section-list-cont'>
                <ul className='item'>
                  {itemList.map((item, index) => (
                    <li className='item-list'>
                      리스트
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className='section-list'>
              <div className='section-list-title'>
                <p className='title'>숙소 리스트</p>
              </div>
              <div className='section-list-cont'>
                <ul className='item'>
                  {itemList.map((item, index) => (
                    <li className='item-list'>
                      리스트
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className='section-list'>
              <div className='section-list-title'>
                <p className='title'>숙소 리스트</p>
              </div>
              <div className='section-list-cont'>
                <ul className='item'>
                  {itemList.map((item, index) => (
                    <li className='item-list'>
                      리스트
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>
        </div>
      </>
    )
  };
  
  export default Main;