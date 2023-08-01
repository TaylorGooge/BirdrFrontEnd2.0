import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
const EditProfileForm = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
   const [firstName, setFirstName] = useState(user.given_name);
  const [lastName, setLastName] = useState(user.family_name);
  const saveChanges = async () => {
    console.log(user.sub)
    const url = `https://birdr.us.auth0.com/api/v2/${user.sub}`;
    const headers = {
      authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imdzd0NzcWlnYkxTem1iN0hYVlVqOCJ9.eyJpc3MiOiJodHRwczovL2JpcmRyLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJvRm55ZHVGM2V0TUJ0U1E1T1JPZnhDREJVSFdKcDhYckBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9iaXJkci51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY5MDc2ODc4NSwiZXhwIjoxNjkwODU1MTg1LCJhenAiOiJvRm55ZHVGM2V0TUJ0U1E1T1JPZnhDREJVSFdKcDhYciIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    };
     const data = {
      given_name: firstName,
      family_name: lastName,
    };
    await axios.put(url, data, { headers: headers }).then((response) => {
      console.log(response);
      // handle response here
    });
  }
  const handleChangeLastName = (event) => {
    if (event.target.value.length === 0) {
      setLastName(user.family_name);
      
    } else{
      setLastName(event.target.value);
    }
  }
    const handleChangeFirstName = (event) => {
      if (event.target.value.length === 0) {
        setFirstName(user.given_name);
        
      } else{
        setFirstName(event.target.value);
      };
    
  }
  return (
    <form autoComplete="false">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profile_name">
                First Name
              </label>
              <input
                className="form-control"
                id="profile_name"
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profile_email">
                Last Name
              </label>
              <input
                className="form-control"
                id="profile_name_last"
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"
          id="profileSaveBtn"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </div>
    </form>
  );
};
export default EditProfileForm;