import React from 'react';
import SearchForm from './SearchForm';
import ReportForm from './ReportForm';
import MapFilter from './MapFilter';
export default function TabbedContent(props) {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="tab3-home" role="tabpanel">
        <ReportForm geoJson={props.geoJson} />
      </div>
      <div className="tab-pane fade" id="tab3-profile" role="tabpanel">
        < SearchForm geoJson={props.geoJson} />
      </div>
      <div className="tab-pane fade container-fluid" id="tab3-contact" role="tabpanel">
        <MapFilter geoJson={props.geoJson} rawData={props.rawData} />
      </div>
    </div>

  );
}