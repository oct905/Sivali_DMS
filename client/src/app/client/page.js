"use client";

import React, { useState } from 'react';

export default function ClientHomepage() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsProfileMenuOpen(false); // Close profile menu when opening notification
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
        setIsNotificationOpen(false); // Close notification when opening profile menu
    };

    return (
        <div className="client-homepage">
            {/* Main Content */}
            <div className="main-content">
                {/* Dashboard Welcome Message */}
                <div className="dashboard-message">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <p>Halo, PT Avisha Citra Mandiri welcome to Avisha Human Resource Solutions</p>
                    <p className="verified-status">Verified</p>
                </div>

                {/* Dashboard Buttons */}
                <div className="dashboard-buttons">
                    <div className="dashboard-button bg-blue-600">Buy Credit</div>
                    <div className="dashboard-button bg-green-600">History Transaction</div>
                    <div className="dashboard-button bg-yellow-600">List Candidate</div>
                </div>

                {/* Lower Dashboard Sections */}
                <div className="dashboard-sections">
                    {/* Upcoming Interview Schedules */}
                    <div className="interview-schedules">
                        <h2 className="section-title">Upcoming Interview Schedules</h2>
                        <div className="interview-content">
                            <img src="/no-schedule-icon.svg" alt="No Schedule" className="no-schedule-icon" />
                            <p className="no-schedule-text">Not yet schedules interview</p>
                            <button className="find-candidates-button">Find Candidates</button>
                        </div>
                    </div>

                    {/* Balance Credit */}
                    <div className="balance-credit">
                        <h2 className="section-title">Balance Credit</h2>
                        <div className="balance-details">
                            <div className="balance-item">
                                <span>Full Time</span>
                                <span>-</span>
                            </div>
                            <div className="balance-item">
                                <span>Job Posting</span>
                                <span>-</span>
                            </div>
                            <div className="balance-item">
                                <span>Find Talent</span>
                                <span>-</span>
                            </div>
                            <div className="balance-item">
                                <span>Expired Quota</span>
                                <span>-</span>
                            </div>
                        </div>
                        <div className="balance-item">
                            <span>Part Time</span>
                            <span>Credit : Rp. 250.920.000</span>
                        </div>
                        <button className="buy-packaged-button">Buy Packaged</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
