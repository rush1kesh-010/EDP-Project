import React, { useState } from "react";
import "./NurseHomePage.css";
import Comp2 from "../../components/Comp2/Comp2";
import Date from "../../components/Date/Date";
import FunctionalityCard from "../../components/FunctionalityCard/FunctionalityCard";
import Heading from "../../components/Heading/Heading";
import Months from "../../components/Months/Months";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import NurseDetailBar from "../../components/NurseDetailBar/NurseDetailBar";
import PatientDetailSidebar from "../../components/PatientDetailSidebar/PatientDetailSidebar";
import Recent from "../../components/Recent/Recent";
import SectionTab from "../../components/SectionTab/SectionTab";
import TableStructure from "../../components/TableStructure/TableStructure";

export default function NurseHomePage() {
    return (
        <>
            <Navbar />
            <div className="nursehomepage">
                <div className="nursehomepage__left">
                    <NurseDetailBar />
                    <PatientDetailSidebar />
                </div>
                <div className="nursehomepage__right">
                    <Heading />
                    <Months />
                    <Date />
                    <TableStructure />
                    <FunctionalityCard />
                    <NoteCard />
                    <Recent />
                    <SectionTab />
                </div>
            </div>
        </>
    );
    }