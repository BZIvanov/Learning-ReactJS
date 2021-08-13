import Link from './Link';

const Nav = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link href='/' className='item'>
        Accordion
      </Link>
      <Link href='/search' className='item'>
        Search
      </Link>
      <Link href='/colors' className='item'>
        Colors
      </Link>
      <Link href='/translate' className='item'>
        Translate
      </Link>
    </div>
  );
};

export default Nav;
