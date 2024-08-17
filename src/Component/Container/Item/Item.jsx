import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = (props) => {
      return (
            <Link to={`/projectview/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <div className='shadow-0 hover:shadow-5xl rounded hover:rounded-none transition duration-500 group cursor-pointer'>
                        <div className='flex flex-col justify-between'>
                              <div className="w-full md:h-[400px] h-full rounded">
                                    <img className='w-full h-full rounded group-hover:rounded-none select-none transition duration-500' src={props.image} alt={props.name} />
                              </div>
                              <div className='flex justify-center items-center py-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear'>
                                    <h1 className='text-xl font-bold'>{props.name}</h1>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

Item.propTypes = {
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
};

export default Item;
