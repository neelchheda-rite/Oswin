import React from 'react';
import {Link} from 'react-router-dom';


export default function Summary() {
        return (<>
            <div className='container mt-3  '>
                <div className='row'>
                <div className="col col-lg-1 label" >
                    Customer :
                </div>
                <div class="dropdown col-md-auto">
                    <Link class="btn btn-outline-secondary dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       { " "}
                    </Link>

                    <ul class="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">Action</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

        
    </>
    )
}
