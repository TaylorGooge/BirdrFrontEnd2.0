import React from "react";
import ProfileBreadcrumb from "../ProfileBreadcrumb";

const ProfileSettings1 = () => {
  return (
    <section className="position-relative bg-white border-bottom">
        <div className="container position-relative py-9">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ProfileBreadcrumb active={'settings'}/>
                </div>
            </div>

        </div>
      </section>
   
  );
};
export default ProfileSettings1;