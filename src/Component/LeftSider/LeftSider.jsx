import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LeftSider = () => {
      return (
            <div className="fixed left-0 bottom-0 lg:px-4 px-2 z-50">
                  <div className="flex flex-col items-center">
                        <div className="flex flex-col gap-3 text-sky-600 text-xl">
                              <Link
                                    to="https://www.facebook.com/coderSamrat"
                                    target="_blank"
                                    aria-label="Facebook"
                                    className=" w-8 h-8 rounded-full flex items-center justify-center hover:shadow-5xl transition-shadow duration-300"
                              >
                                    <FontAwesomeIcon icon={faFacebook} />
                              </Link>
                              <Link
                                    to="https://www.instagram.com/codersamrat/"
                                    target="_blank"
                                    aria-label="Instagram"
                                    className=" w-8 h-8 rounded-full flex items-center justify-center hover:shadow-5xl transition-shadow duration-300"
                              >
                                    <FontAwesomeIcon icon={faInstagram} />
                              </Link>
                              <Link
                                    to="https://www.linkedin.com/in/samrat-mallick-coder832/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    className=" w-8 h-8 rounded-full flex items-center justify-center hover:shadow-5xl transition-shadow duration-300"
                              >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                              </Link>
                              <Link
                                    to="https://github.com/coderSamrat"
                                    target="_blank"
                                    aria-label="GitHub"
                                    className=" w-8 h-8 rounded-full flex items-center justify-center hover:shadow-5xl transition-shadow duration-300"
                              >
                                    <FontAwesomeIcon icon={faGithubAlt} />
                              </Link>
                        </div>
                        <div className="w-[1px] h-32 bg-secondary"></div>
                  </div>
            </div>
      );
};

export default LeftSider;
