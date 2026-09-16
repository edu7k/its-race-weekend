"use client";
import { useState } from "react";

import type { DriverStanding } from "../../types/standing/driverStanding";
import type { ConstructorStanding } from "../../types/standing/constructorStanding";

import StandingCardHeader from "./StandingCardHeader";
import StandingTable from "./StandingTable";

type StandingCardProps = {
    driverStanding: DriverStanding;
    constructorStanding: ConstructorStanding;
};

type StandingView = "driver" | "constructor";

export default function StandingCard( {driverStanding, constructorStanding} : StandingCardProps) {
    const [standingView, setStandingView] = useState<StandingView>("driver");

    return (

        <section>
            
            <StandingCardHeader 
            activeStanding={standingView}
            round={driverStanding.round}
            onStandingChange={setStandingView}
            />
            
            <StandingTable 
            activeStanding={standingView}
            driverStanding={driverStanding}
            constructorStanding={constructorStanding}
            />

        </section>
    )
}