import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { getReports } from "../reports/actions";
import ResponseReport from "./ResponseReport";

function Notifications() {
  const reports = useAppSelector((state) =>
    state.reducer.reportsSlice.reports.filter(
      (report) => report.notified === false
    )
  );
  const dispach = useAppDispatch();
  const lat = useAppSelector((state) => state.reducer.reportsSlice.current_latitude);
  const lng = useAppSelector(
    (state) => state.reducer.reportsSlice.current_altitude
  );

  useEffect(() => {
    setInterval(() => dispach(getReports(lat, lng)), 7000);
  }, []);

  return (
    <div>
      {reports.map((report) => (
        <ResponseReport report={report} />
      ))}
    </div>
  );
}

export default Notifications;
