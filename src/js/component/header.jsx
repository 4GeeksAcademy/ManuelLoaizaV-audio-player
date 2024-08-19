import React from 'react';

export default function Header() {
    return (
        <li className="list-group-item bg-black text-secondary border border-top-0 border-start-0 border-end-0 border-secondary fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 d-flex justify-content-end">
                        #
                    </div>
                    <div className="col-1" />
                    <div className="col-4">
                        Title
                    </div>
                    <div className="col-3">
                        Album
                    </div>
                    <div className="col-3">
                        Category
                    </div>
                </div>
            </div>
        </li>
    );
}