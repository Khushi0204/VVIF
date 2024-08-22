// Certainly! Below is the React component that corresponds to the provided HTML. I've factored the code into smaller components and used hooks where necessary. Additionally, I've put repeated Tailwind class strings into a shared constant.

import React from 'react';

// Shared Tailwind class constants
const inputClass = "mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm";
const labelClass = "block text-sm font-medium text-muted-foreground";
const containerClass = "min-h-screen flex items-center justify-center bg-background text-foreground";
const cardClass = "max-w-md w-full bg-card p-8 rounded-lg shadow-md";
const buttonClass = "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-orange-400 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

const Register = () => {
  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-6">
          <InputField id="name" label="Full Name" type="text" placeholder="John Doe" />
          <InputField id="email" label="Email Address" type="email" placeholder="john@example.com" />
          <InputField id="password" label="Password" type="password" placeholder="••••••••" />
          <InputField id="confirm-password" label="Confirm Password" type="password" placeholder="••••••••" />
          <TermsCheckbox />
          <div>
            <button type="submit" className={buttonClass}>Register</button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type, placeholder }) => (
  <div>
    <label htmlFor={id} className={labelClass}>{label}</label>
    <input id={id} name={id} type={type} required className={inputClass} placeholder={placeholder} />
  </div>
);

const TermsCheckbox = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-primary focus:ring-primary border-border rounded" />
      <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
        I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
      </label>
    </div>
  </div>
);

export default Register;

// ### Explanation:
// 1. **Shared Constants**: Repeated Tailwind class strings are stored in constants to avoid redundancy.
// 2. **InputField Component**: A reusable component for input fields to avoid repetition.
// 3. **TermsCheckbox Component**: A separate component for the terms and conditions checkbox.
// 4. **Register Component**: The main component that uses the smaller components to