import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";

export default function Widget() {
  return (
    <>
      {" "}
      <Header />
      <div className="p-6 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Online Survey</h2>
        <form action="https://formspree.io/f/mkgwagqb" method="post">
          <fieldset className="mb-6">
            <legend className="text-lg font-semibold">Personal Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                className="p-2 border border-border rounded"
                required
              />
              <input
                type="text"
                placeholder="Father/Husband Name"
                name="Father/Husband Name"
                className="p-2 border border-border rounded"
                required
              />
              <input
                type="date"
                className="p-2 border border-border rounded"
                name="DOB"
                required
              />
              <select
                className="p-2 border border-border rounded"
                name="Gender" required
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select
                className="p-2 border border-border rounded"
                name="Education" required
              >
                <option>Select Education</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
              </select>
              <select
                className="p-2 border border-border rounded"
                name="Occupation" required
              >
                <option>Select Occupation</option>
                <option>Employed</option>
                <option>Self-Employed</option>
                <option>Unemployed</option>
              </select>
              <select
                className="p-2 border border-border rounded"
                name="Marital status"
              >
                <option>Select Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
              <input
                type="email"
                placeholder="Email ID"
                name="Email"
                className="p-2 border border-border rounded"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="phone No."
                className="p-2 border border-border rounded"
                required
              />
            </div>
          </fieldset>
          <fieldset className="mb-6">
            <legend className="text-lg font-semibold">Address Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address"
                className="p-2 border border-border rounded"
                required
                name="Address"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="p-2 border border-border rounded"
                required
                name="pincode"
              />
              <input
                type="text"
                placeholder="City"
                className="p-2 border border-border rounded"
                required
                name="City"
              />
              <select className="p-2 border border-border rounded" name="State" required>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
              <input
                type="text"
                value="India"
                className="p-2 border border-border rounded"
                disabled 
                name="Country"
              />
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <legend className="text-lg font-semibold">Family Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-border rounded"
                required
                name="FamilyName"
              />
              <select className="p-2 border border-border rounded" name="Relation" required>
                <option>Select Relation</option>
                <option>Father</option>
                <option>Mother</option>
                <option>other</option>
              </select>
              <input
                type="date"
                className="p-2 border border-border rounded"
                required
                name="DOB of family member" 
                
              />
              <select className="p-2 border border-border rounded" name="Gender of family member" required>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="p-2 border border-border rounded" name="Marital status of family member" required>
                <option>Select Marital Status</option>
                <option>Single</option>
                <option>Married</option>
              </select>
              <select className="p-2 border border-border rounded" name="Education of family member" required>
                <option>Select Education</option>
                <option>High School</option>
                <option>Bachelor's</option>
              </select>
              <select className="p-2 border border-border rounded" name="Occupation of family member" required>
                <option>Select Occupation</option>
                <option>Employed</option>
                <option>Self-Employed</option>
              </select>
              <textarea
                placeholder="What is your thought about Vishwakarma Community?"
                className="p-2 border border-border rounded"
                rows="3"
                name="thoughts"
                required
              ></textarea>
              <textarea
                placeholder="Are you member of any trust, if yes, kindly brief?"
                className="p-2 border border-border rounded"
                rows="3"
                name="is he/she member of any trust"
                required
              ></textarea>
            </div>
          </fieldset>

          <div className="mb-6">
            <label className="block mb-2" >
              Would you like to be a part in the development of our Vishwakarma
              Community?
            </label>
            <select className="p-2 border border-border rounded" name="wanted to become the part of the community" required>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Kindly let us know your preferred way to be a part in the
              development of Community?
            </label>
            <select className="p-2 border border-border rounded" name="preferred way to be a part of the community">
              <option>Select</option>
              <option>Volunteer</option>
              <option>Membership</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-orange-400  text-primary-foreground hover:bg-primary/80 p-2 w-20  rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
