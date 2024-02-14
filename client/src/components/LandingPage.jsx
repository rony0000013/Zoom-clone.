import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { MeetingPage } from "./MeetingPage";

export function LandingPage() {
    const navigate = useNavigate();

    const joined = () => {
        navigate("/meeting/123");
    };

    return (
        <div>
            Hi, welcome to the landing page
            <button onClick={joined}>Join Meeting</button>
            <Routes>
                <Route path="/meeting/:meetingId" element={<MeetingPage />} />
            </Routes>
        </div>
    );
}
