<div className="container">
      <h1 className="form-title">Post A Job</h1>
      <form action="#">
        <div className="main-work-info">
          <div className="work-input-box">
            <label for="jobName">Job Title</label>
            <input type="text"
                    id="jobName"
                    name="jobName"
                    placeholder="Enter Job Title"/>
          </div>
          <div className="work-input-box">
            <label for="companyname">Company</label>
            <input type="text"
                    id="companyname"
                    name="companyname"
                    placeholder="Enter Company Name"/>
          </div>
          <div className="work-input-box">
            <label for="jobcategory">Job Category</label>
            <input type="text"
                    id="jobcategory"
                    name="jobcategory"
                    placeholder="Enter job category"/>
          </div>
          <div className="work-input-box">
            <label for="phoneNumber">Contact Number</label>
            <input type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Contact Number"/>
          </div>
          <div className="work-input-box">
            <label for="salary">Salary</label>
            <input type="number"
                    id="salary"
                    name="salary"
                    placeholder="Enter salary in Rupees"/>
          </div>
          <div className="work-input-box">
            <label for="Description">Job Description</label>
            <input type="text"
                    id="Description"
                    name="Description"
                    placeholder="Description..."/>
          </div>
        </div>
        <div className="work-details-box">
          <span className="working-title">Working hours </span>
          <div className="working-category">
            <input type="radio" name="worktime" id="parttime">
            <label for="parttime">Part Time</label>
            <input type="radio" name="worktime" id="fulltime">
            <label for="fulltime">Full Time</label>
            <input type="radio" name="worktime" id="other">
            <label for="other">Other</label>
          </div>
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Post Job">
        </div>
      </form>
    </div>