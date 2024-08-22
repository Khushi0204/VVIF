import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";

export default function Widget() {
  return (
  <> <Header/>
      <div className="p-6 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Online Survey</h2>
        <form>
          <fieldset className="mb-6">
            <legend className="text-lg font-semibold">Personal Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="p-2 border border-border rounded" required />
              <input type="text" placeholder="Father/Husband Name" className="p-2 border border-border rounded" required />
              <input type="date" className="p-2 border border-border rounded" required />
              <select className="p-2 border border-border rounded">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="p-2 border border-border rounded">
                <option>Select Education</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
              </select>
              <select className="p-2 border border-border rounded">
                <option>Select Occupation</option>
                <option>Employed</option>
                <option>Self-Employed</option>
                <option>Unemployed</option>
              </select>
              <select className="p-2 border border-border rounded">
                <option>Select Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
              <input type="email" placeholder="Email ID" className="p-2 border border-border rounded" required />
              <input type="tel" placeholder="Mobile Number" className="p-2 border border-border rounded" required />
              <input type="tel" placeholder="Telephone Number" className="p-2 border border-border rounded" />
            </div>
          </fieldset>
      <fieldset className="mb-6">
        <legend className="text-lg font-semibold">Address Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Address Line 1" className="p-2 border border-border rounded" required />
          <input type="text" placeholder="Address Line 2" className="p-2 border border-border rounded" />
          <input type="text" placeholder="Pincode" className="p-2 border border-border rounded" required />
          <input type="text" placeholder="City" className="p-2 border border-border rounded" required />
          <select className="p-2 border border-border rounded">
            <option>Select State</option>
            <option>State 1</option>
            <option>State 2</option>
          </select>
          <input type="text" value="India" className="p-2 border border-border rounded" disabled />
        </div>
      </fieldset>
      
      <fieldset className="mb-6">
        <legend className="text-lg font-semibold">Family Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border border-border rounded" required />
          <select className="p-2 border border-border rounded">
            <option>Select Relation</option>
            <option>Father</option>
            <option>Mother</option>
          </select>
          <input type="date" className="p-2 border border-border rounded" required />
          <select className="p-2 border border-border rounded">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select className="p-2 border border-border rounded">
            <option>Select Marital Status</option>
            <option>Single</option>
            <option>Married</option>
          </select>
          <select className="p-2 border border-border rounded">
            <option>Select Education</option>
            <option>High School</option>
            <option>Bachelor's</option>
          </select>
          <select className="p-2 border border-border rounded">
            <option>Select Occupation</option>
            <option>Employed</option>
            <option>Self-Employed</option>
          </select>
          <textarea placeholder="What is your thought about Vishwakarma Community?" className="p-2 border border-border rounded" rows="3"></textarea>
          <textarea placeholder="Are you member of any trust, if yes, kindly brief?" className="p-2 border border-border rounded" rows="3"></textarea>
        </div>
      </fieldset>
      
      <div className="mb-6">
        <label className="block mb-2">Would you like to be a part in the development of our Vishwakarma Community?</label>
        <select className="p-2 border border-border rounded">
          <option>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block mb-2">Kindly let us know your preferred way to be a part in the development of Community?</label>
        <select className="p-2 border border-border rounded">
          <option>Select</option>
          <option>Volunteer</option>
          <option>Membership</option>
        </select>
      </div>
      
      <button type="submit" className="bg-orange-400  text-primary-foreground hover:bg-primary/80 p-2 w-20  rounded-xl">Submit</button>
        </form>
        </div>
        <Footer/>
        </>
  )
}