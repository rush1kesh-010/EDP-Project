function NurseDetailBar() {
    return (
        <div className="nurse-detail-bar">
            <div className="nurse-detail-bar-content">
                <div className="nurse-detail-bar-content-left">
                    <div className="nurse-detail-bar-content-left-image">
                        <img alt="nurse" />
                    </div>
                    <div className="nurse-detail-bar-content-left-text">
                        <h2>Dr. John Doe</h2>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className="nurse-detail-bar-content-right">
                    <div className="nurse-detail-bar-content-right-text">
                        <p>Today's Appointments</p>
                        <h2>12</h2>
                    </div>
                    <div className="nurse-detail-bar-content-right-text">
                        <p>Patients</p>
                        <h2>25</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NurseDetailBar;