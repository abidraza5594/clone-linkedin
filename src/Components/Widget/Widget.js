import React from 'react'
import "./widget.css"
import InfoIcon from '@mui/icons-material/Info';
function Widget() {
    return (
        <div className="widget">
            <div className="widget__top">
                <div className="widget__header">
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Slaing job search fees</h4>
                            <p>6d ago * 4,55 renders</p>
                        </li>

                        <li>
                            <h4>tow pizza rule of eating</h4>
                            <p>2d ago * 4,515 renders</p>
                        </li>

                        <li>
                            <h4>How To Handel Work Place Handler</h4>
                            <p>4d ago * 4,15 renders</p>
                        </li>

                        <li>
                            <h4>Slaing job search fees</h4>
                            <p>6d ago * 4,55 renders</p>
                        </li>

                        <li>
                            <h4>Slaing job search fees</h4>
                            <p>6d ago * 4,55 renders</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="widget__bottom">
                <div className="widget__header">
                    <h4>Todays Top Course</h4>
                    <InfoIcon/>
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Leading With a Heavy Heat</h4>
                            <p>Key Coly</p>
                        </li>

                        <li>
                            <h4>tow pizza rule of eating</h4>
                            <p>2d ago * 4,515 renders</p>
                        </li>

                        <li>
                            <h4>How To Handel Work Place Handler</h4>
                            <p>4d ago * 4,15 renders</p>
                        </li>

                        <li>
                            <h4>Slaing job search fees</h4>
                            <p>6d ago * 4,55 renders</p>
                        </li>

                        <li>
                            <h4>Slaing job search fees</h4>
                            <p>6d ago * 4,55 renders</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Widget