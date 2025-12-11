import React from 'react'

export default function AddEmployee() {
  return (
    <div>
        <div class="container">
    <div class="card form-card shadow-sm">
      <div class="card-body">
        <h4 class="card-title mb-3">Employee Details</h4>

        {/* <!-- Change action to your server endpoint --> */}
        <form action="/employees/save" method="post" enctype="multipart/form-data" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="firstname" class="form-label required">First name</label>
              <input id="firstname" name="firstname" type="text" class="form-control" required minlength="2" />
            </div>

            <div class="col-md-6">
              <label for="lastname" class="form-label required">Last name</label>
              <input id="lastname" name="lastname" type="text" class="form-control" required minlength="2" />
            </div>

            <div class="col-md-6">
              <label for="email" class="form-label required">Email</label>
              <input id="email" name="email" type="email" class="form-control" required />
            </div>

            <div class="col-md-6">
              <label for="contactno" class="form-label required">Contact number</label>
              <input id="contactno" name="contactno" type="tel" class="form-control"
                     pattern="[6-9]{1}[0-9]{9}" required placeholder="10 digit mobile number" />
              <div class="form-text">Indian mobile (10 digits) — first digit 6-9.</div>
            </div>

            <div class="col-md-4">
              <label class="form-label required">Gender</label>
              <select name="gender" id="gender" class="form-select" required>
                <option value="" selected disabled>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="dob" class="form-label required">Date of birth</label>
              <input id="dob" name="dob" type="date" class="form-control" required />
            </div>

            <div class="col-md-4">
              <label for="joiningdate" class="form-label required">Joining date</label>
              <input id="joiningdate" name="joiningdate" type="date" class="form-control" required />
            </div>

            <div class="col-md-6">
              <label for="adharno" class="form-label required">Aadhaar number</label>
              <input id="adharno" name="adharno" type="text" class="form-control"
                     pattern="\d{12}" minlength="12" maxlength="12" required placeholder="12 digits" />
              <div class="form-text">12 digits (Aadhaar).</div>
            </div>

            <div class="col-md-6">
              <label for="panno" class="form-label required">PAN</label>
              <input id="panno" name="panno" type="text" class="form-control"
                     pattern="[A-Z]{5}[0-9]{4}[A-Z]" maxlength="10" required placeholder="ABCDE1234F" />
              <div class="form-text">Format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F).</div>
            </div>

            <div class="col-md-6">
              <label for="department" class="form-label required">Department</label>
              <input id="department" name="department" type="text" class="form-control" required />
            </div>

            <div class="col-md-6">
              <label for="designation" class="form-label required">Designation</label>
              <input id="designation" name="designation" type="text" class="form-control" required />
            </div>

            <div class="col-md-6">
              <label for="reportingmanager" class="form-label">Reporting manager</label>
              <input id="reportingmanager" name="reportingmanager" type="text" class="form-control" />
            </div>

            <div class="col-md-3">
              <label for="salary" class="form-label required">Salary</label>
              <input id="salary" name="salary" type="number" class="form-control" step="0.01" min="0" required />
            </div>

            <div class="col-md-3">
              <label for="exp" class="form-label">Experience (years)</label>
              <input id="exp" name="exp" type="number" class="form-control" step="0.1" min="0" placeholder="e.g. 2.5" />
            </div>

            <div class="col-12">
              <label for="address" class="form-label required">Address</label>
              <textarea id="address" name="address" class="form-control" rows="3" required></textarea>
            </div>

            <div class="col-md-4">
              <label for="status" class="form-label required">Status</label>
              <select id="status" name="status" class="form-select" required>
                <option value="" selected disabled>Choose...</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Probation</option>
                <option>Resigned</option>
              </select>
            </div>

            <div class="col-md-8">
              <label for="profile" class="form-label">Profile (photo)</label>
              <input id="profile" name="profile" type="file" accept="image/*" class="form-control" />
              <div class="form-text">Optional — upload a profile picture (JPEG/PNG).</div>
            </div>

            <div class="col-12 text-end">
              <button type="reset" class="btn btn-secondary me-2">Reset</button>
              <button type="submit" class="btn btn-primary">Save employee</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
    </div>
  )
}
