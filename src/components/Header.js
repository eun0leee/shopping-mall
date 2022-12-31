import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../css/reset-css.css';
import { auth } from '../utils/useAPI';
import Search from './search/Search';

const Header = React.memo(() => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLogin(true);
    }
  }, []);

  const logout = async () => {
    try {
      await auth('logout');
      localStorage.removeItem('accessToken');
      setIsLogin(false);
    } catch (err) {
      alert('로그아웃 실패.');
      console.log('실패');
    }
  };

  return (
    <StyledHeader>
      <header>
        <div className="search">
          <Search />
        </div>
        <nav>
          <ul className="nav__links">
            <li>
              <Link to={'/login'}>
                Login/out
              </Link>
            </li>
            <li>
              <Link to={'/Cart'}>
                Chart
              </Link>{' '}
            </li>
          </ul>
        </nav>
        <div className="logo">
          <Link to={'/'}>N4</Link>
        </div>
      </header>

      <StyledCategory>
        <ul className="category">
          <li>
            <Link to={'/category/all'}>Category</Link>
          </li>
          <li>
            <Link to={'/category/clothes'}>Clothes </Link>
          </li>
          <li>
            <Link to={'/category/bags'}>Bag</Link>
          </li>
        </ul>
      </StyledCategory>
    </StyledHeader>
  );
});

const StyledHeader = styled.div`
  font-family: 'Marcellus', serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  li,
  .logo {
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 0px 15px;
  }

  .search {
    color: dimgray;
  }

  .nav__links {
    list-style: none;
  }

  .nav__links li {
    display: inline-block;
    padding: 0px 20px;
    transition: all 0.3s ease 0s;
    color: dimgray;
  }

  .logo {
    padding: 9px 5px 9px 200px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }

    .search {
      display: none;
    }

    .logo {
      padding: 0px 5px 9px 10px;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      font-size: 2.3rem;
    }

    .nav__links {
      display: none;
    }
  }
`;

const StyledCategory = styled.div`
  font-family: 'Marcellus', serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .category {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
  }

  .category li {
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    padding: 0px 20px;
    transition: all 0.3s ease 0s;
    color: black;
  }

  @media screen and (max-width: 768px) {
    .category {
      display: none;
    }
  }
`;

export default Header;
