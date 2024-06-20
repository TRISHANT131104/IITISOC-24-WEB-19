import jobModel from "../models/jobModel";
const createJobListing = async (req,res) => {
    const job = new JobListing({
      title: "Software Engineer",
      company: "Tech Corp",
      category: "Engineering",
      contact: "hr@techcorp.com",
      salary: 80000,
      description: "Develop and maintain web applications."
    });
  
    try {
      const savedJob = await job.save();
      console.log("Job Listing Saved", savedJob);
    } catch (err) {
      console.error("Error saving job listing", err);
    }
  };
  
  createJobListing();